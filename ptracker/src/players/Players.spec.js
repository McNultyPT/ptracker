import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Players from './Players.js';

describe('<Players />', () => {
    it('should render "No players available" when no players provided', () => {
        const { getByText } = render(<Players />);

        expect(getByText(/no players/i)).toBeInTheDocument();
    });

    it('should render the provided list of players', () => {
        const players = [
            {id: 1, name: 'Nate'}, 
            {id: 2, name:'Kayanna'},
            {id: 3, name: 'Rudy'}
        ];
        const { getAllByTestId } = render(<Players players={players} />);

        const playerNames = getAllByTestId('player-name').map(node => node.textContent);
        const names = players.map(player => player.name);

        expect(playerNames).toHaveLength(players.length);
        expect(playerNames).toEqual(names);
    });
});

// should display "No players available" when no players provided
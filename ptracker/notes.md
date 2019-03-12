- create folder
- `create-react-app`
- add `--verbose` to test script in package.json
- run `yarn test`
- `yarn add react-testing-library --dev`
- go to App.test.js file `'import { render } from 'react-testing-library'`
- `yarn add jest-dom --dev`
- `import 'jest-dom/extend-expect'`
- start writing tests


## Library

- Test components the way a user would test them manually.

- How we test functions
    - setup the data/environment
    - invoke the function
    - make assertions(assess)

- How we test React components
    - setup the data/environment
    - render the component
    - make assertions(assess)

component = (optionalData) => someUI

Users don't know or care about implementation.


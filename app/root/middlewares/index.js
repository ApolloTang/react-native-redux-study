import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const ENV = 'DEV';  //@TODO move this to configuration file

const middlewares = [
    thunk
];

if (
  (ENV === 'DEV')
) {
    middlewares.push(
        createLogger({})
    );
}

export default middlewares;


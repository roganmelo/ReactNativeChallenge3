import createSagaMiddleware from 'redux-saga';
import { saga as homeSaga } from 'pages/Home';

function* root() {
  yield [...homeSaga];
}

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

export const sagaRoot = root;
export default createSagaMiddleware({ sagaMonitor });

import { createStore, applyMiddleware, compose } from 'redux';
import immutableTransform from 'redux-persist-transform-immutable';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import saga, { sagaRoot } from './saga';
import reducers from './reducers';

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

export const store = createAppropriateStore(
  reducers,
  compose(applyMiddleware(saga), autoRehydrate())
);

saga.run(sagaRoot);

persistStore(store, {
  storage: AsyncStorage,
  transforms: [immutableTransform()]
});

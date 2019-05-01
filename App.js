import React ,{Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import  createSagaMiddleware from 'redux-saga';
import rootReducer from './src/reducer';
import rootSaga from './src/sagas';
import PeopleList from './src/components/PeopleList';

const sagaMiddleware=createSagaMiddleware();

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga)

class App extends Component{
  render()
  {
    return(
      <Provider store={store}>
      <PeopleList />      
    </Provider>
    );
  }
    
}

export default App;
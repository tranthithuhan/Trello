import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import reducers from './redux/ducks';
import BoardList from './containers/BoardList';
import Board from './containers/Board';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={configureStore(reducers)}>
              <Router>
                  <Switch>
                    <Route exact path="/:boardId" component={Board}/>
                    <Route exact component={BoardList}/>
                  </Switch>
              </Router>
          </Provider>
      </div>
    );
  }
}

export default App;

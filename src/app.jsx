import React from 'react';
import {render} from 'react-dom';
import TodoList from './components/todo-list';

// Simplest way to embed you stylesheets in your app
//  requiring in main JS file is enough for whole application
require ('./styles/index.scss');

export default class App extends React.Component {
  render() {
    return (
        <div>
          <h1> To do app in React.js</h1>
          <TodoList />
        </div>

    );
  }
}

render(<App />, document.getElementById('app'));

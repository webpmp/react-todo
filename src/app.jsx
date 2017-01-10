import React from 'react';
import {render} from 'react-dom';
import TodoList from './components/todo-list';

// Simplest way to embed you stylesheets in your app
//  requiring in main JS file is enough for whole application
require ('./styles/spacer.scss');
require ('./styles/index.scss');

export default class App extends React.Component {
  render() {
    return (
        <div>
          <h2>ToDo Manager</h2>
          <h4>Manage your small reminders</h4>
          <TodoList />
        </div>

    );
  }
}

render(<App />, document.getElementById('app'));

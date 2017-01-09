import React from 'react';
import TodoItem from './todo-item';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);

    // Note: With out this code, your event handler would not recognize the `this` object,
    //   because it would point to the DOM object you just clicked; but you will need
    //   to point to an instance of this class instead.
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {
      items: [
        {id: 0, isDone: false, text: 'Play football'},
        {id: 1, isDone: false, text: 'Play Volleyball'},
        {id: 2, isDone: false, text: 'Play Tennis'},
        {id: 3, isDone: true, text: 'Dance in Enrique Song'},
      ]
    };
  }

  submitHandler(e) {
    e.preventDefault();
    // todo: need to find a better solution for this; maybe using jQuery
    var textField = e.target.querySelectorAll('[name="new-item"]')[0];

    // `setState` updates the state directory/database and notifies the dynamic binding
    // feature of React.js
    // Note: normal assignment of new-state data will not update the view/DOM
    //   like this.state.items.push({id: 4, text: 'Something'});
    this.setState({
      items: this.state.items.concat({
        id: (this.state.items.length + 1),
        text: textField.value,
        isDone: false
      })
    });

    textField.value = '';
    textField.focus();
  }

  list() {
    return (
        this.state.items.map((item) => (
            <TodoItem key={item.id} item={item}/>
        ))
    );
  }

  render() {
    return (
        <div>
          <form onSubmit={this.submitHandler}>
            <input type="text" name="new-item"/>
            <input type="submit"/>
          </form>

          <ul>
            { this.list()}
          </ul>
        </div>
    );
  }
}
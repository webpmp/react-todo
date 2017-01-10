import React from 'react';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: props.id, text: props.text, isDone: props.isDone};
    this.clickHandler = this.clickHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  clickHandler(e) {
    if (this.state.isDone == true)
      this.setState({isDone: false});
    else
      this.setState({isDone: true});
  }

  // Note: Delegate the delete operation to the parent as its none of my business
  //   Following Single Responsibility Priciple.
  //   Child should be allowed to touch parent's state data.
  deleteHandler(e) {
    this.props.deleteHandler(this.state.id)
  }

  stateSelector() {
    if (this.state.isDone == true)
      return ('striken');
    else
      return ('');
  }

  render() {
    console.log('I am executed');
    return (
        <li>
          <span onClick={this.clickHandler} className={this.stateSelector()}>
            {this.state.text}
          </span>
          <button onClick={this.deleteHandler}>Delete</button>
        </li>
    );
  }
}


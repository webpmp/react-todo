import React from 'react';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: props.id, text: props.text, isDone: props.isDone};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    if (this.state.isDone == true)
      this.setState({isDone: false});
    else
      this.setState({isDone: true});
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
        <li onClick={this.clickHandler} className={this.stateSelector()}>
          {this.props.item.text}
        </li>
    );
  }
}


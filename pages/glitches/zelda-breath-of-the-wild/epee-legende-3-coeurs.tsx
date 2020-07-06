import {Component} from 'react';

class Glitch extends Component {
  public state: {
    name: string
  }

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {name: 'sdssd'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <p>ezaez</p>
        <p>ezaez</p>
        <p>ezaez</p>
        <p>ezaez</p>
        <p>ezaez</p>
        <p>ezaez</p>
        <p>ezaez</p>
        <p>ezaez</p>
        <input type="text" value={this.state.name} onChange={this.handleChange}/>fghfgh
        {this.state.name}
      </div>
    );
  }
}

export default Glitch;

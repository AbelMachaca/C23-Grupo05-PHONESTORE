import { Component } from "react";

export default class Contador extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
  }

  incrementar() {
    this.setState({
        count: this.state.count + 1
    });
  }

  decrementar() {
    this.setState({
        count: this.state.count - 1
    })
  }

componentDidMount(){

}

componentDidUpdate(){

}

componentWillUnmount(){
    
}
  render() {
    return <>
        <h1>El contador se encuentra en: {this.state.count}</h1>
        <button onClick={() => this.incrementar()}>Aumentar</button>
        <button onClick={() => this.decrementar()}>Disminuir</button>
    </>;
  }
}

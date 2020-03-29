import React, {Component} from 'react';

class Clase extends Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      hello: 'Pero debo conectarme en class Room'
    }
  }
  render()
  {
    return(
      <h1>{this.state.hello}</h1>
    )
  }
};
export default Clase;


import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component{
  render(){
    return(
      <div className='AppName'>
        <h2>Name: Oaes Kuruni</h2>
        <p>Occupation: Software Engineer</p>
      </div>
    )
  }
}

export default hot(App);

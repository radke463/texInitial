import React from 'react';
import {render} from 'react-dom';
import TextInput from './resources/TextInput.jsx';
import PasswordInput from './resources/PasswordInput.jsx';
import Button from './resources/Button.jsx';

class App extends React.Component {
  btnClick () {
  	console.log("Btn clicked");
  }

  render () {
  	var me = this;

    return (
    	<div>
			<p>Login: </p>
			<TextInput />
			<p>Senha: </p>
			<PasswordInput />
			<Button onClick={me.btnClick} text="LOGIN"/>
    	</div>
    );
  }
}

render(<App/>, document.getElementById('app'));
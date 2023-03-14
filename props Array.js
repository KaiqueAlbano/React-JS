
/*------------------------------------------------------------------------------------
Podemos passar uma array tbm como parametro
--------------------------------------------------------------------------------------*/

import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {

  const arr = ['Item 1','Item 2'] // < --- 

  return (
    <form>
      <Input id="email" label="Email" required/> 
      <Input id="Password" type="password" label="Password"/>
      <Button items={arr}></Button> {/* // < ---  */}
    </form>
  );
};

export default Form;

/*------------------------------------------------------------------------------------
Na aba button 
--------------------------------------------------------------------------------------*/

import React from 'react';

const Button = (props) => {

  console.log(props); {/* // < ---  */}

  return <button>Clique</button>;

};

export default Button;


// Resultado no console.

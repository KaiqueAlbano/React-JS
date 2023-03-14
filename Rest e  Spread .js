
/*------------------------------------------------------------------------------------
USAMOS O REST E SPREAD QUANDO NÃO SABEMOS EXATAMENTO QUANTAS PROPRIEDADES VÃO SER PASSADAS.
--------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------
NA ABA FORM
--------------------------------------------------------------------------------------*/

import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {

  const arr = ['Item 1','Item 2']

  return (
    <form>
      <Input id="email" label="Email" required/> 
      <Input id="Password" type="password" label="Password"/>
      <Button items={arr}></Button>
    </form>
  );
};

export default Form;


/*------------------------------------------------------------------------------------
NA ABA INPUT 
Passamos a label, id e o restante no props, que no caso seria o tipo e required
--------------------------------------------------------------------------------------*/

import React from 'react';

const Input = ({label,id,...props}) => {
  return (
  <div style={{margin: '1rem 0'}}>
     <label htmlFor={id}>{label}</label>
     <input id={id} type="text" {...props}/>
  </div>
  );
};
export default Input;


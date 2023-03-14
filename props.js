
/*------------------------------------------------------------------------------------
TRABALHANDO COM PROPS NO REACT.
--------------------------------------------------------------------------------------*/

import React from 'react';
 const Titulo = (props) => {
      return <h1>{props.texto}</h1>;
  };

  const App = () => {
      return (
      <div>
            <Titulo texto = "Meu Titulo 1"/>
            <Titulo texto = "Meu Titulo 2"/>
            <Titulo texto = "Meu Titulo 3"/>
      </div>
      );      
  };
export default App;


/*------------------------------------------------------------------------------------
Passando uma cor para mudar o texto
--------------------------------------------------------------------------------------*/


import React from 'react';
 const Titulo = (props) => {
      return <h1 style={{color:props.color}}>{props.texto}</h1>;
  };

  const App = () => {
      return (
      <div>
            <Titulo color="red" texto = "Meu Titulo 1"/>
            <Titulo color="red" texto = "Meu Titulo 2"/>
            <Titulo texto = "Meu Titulo 3"/>
      </div>
      );      
  };
export default App;


/*------------------------------------------------------------------------------------
PROPS CHILDREN
--------------------------------------------------------------------------------------*/

import React from 'react';

const Titulo = ({cor, texto, children}) => {
      return (
         <h1 style={{color:cor}}>
            {texto},{children}
         </h1>
      )
  };

  const App = () => {
      return (
      <div>
            <Titulo cor="red" texto = "Meu Titulo 1">
                isso é children 
                <p>Teste</p>
            </Titulo>
            <Titulo color="blue" texto = "Meu Titulo 2"/>

      </div>
      );      
  };
export default App;
import React from 'react';

import AppBar from './components/appBarComponents/AppBar.jsx';
import Body from './components/body-components/Body.jsx';
import Inicio from './components/VistaInfoCurso/Inicio.jsx';
import NotFound from './components/NotFound.jsx';

import { useParams } from 'react-router';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function VistaGeneral(){
  return(
    <Router>
        <AppBar 

        />
        <Body
          
        />
      </Router>
  );

}

function VistaCurso(){
  const params = useParams();

 return(
   
  <Router>
      <AppBar/>
      <Inicio id_curso = {params.entrada} />
  </Router>
  );

}

function App() {
  return(
    <Router>
        <Switch>
            <Route exact path='/' >
              <VistaGeneral>
                
              </VistaGeneral>
            </Route>
  
            {/* path="/blog/:slug" */}
            <Route exact path="/Inicio/:entrada">  
              <VistaCurso>
                  
              </VistaCurso>
              
            </Route>

            <Route component={NotFound} /> 

        </Switch>
      </Router>
  );
  
}

 /* const Inicio = ()=>{
    const {entrada} = useParams();
    
      return <span>ID: {entrada}</span>;
} */


export default App;




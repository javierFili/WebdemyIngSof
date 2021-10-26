import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppBar from './components/appBarComponents/AppBar.jsx';
import Body from './components/body-components/Body.jsx';
import Inicio from './components/VistaInfoCurso/Inicio.jsx'
import NotFound from './components/NotFound.jsx';

function VistaGeneral(){
    return(
      <Router>
        <div>
          <AppBar 
  
          />
        </div>
        <div class="fondo">
          <Body
            
          />
        </div>
        </Router>
    );
  
  }
  
  function VistaCurso(){
   return(
    <Router>
      <div>
        <AppBar 
  
        />
      </div>

      <div class="fondo">
        <Inicio>
        </Inicio>
      </div>
      </Router>
    );
  }  

class App extends Component{
    render() {
        return( 
            <Router>
                <Switch>
                    <Route exact path='/' >
                        <VistaGeneral>
                        </VistaGeneral>
                    </Route>

                    {/* path="/blog/:slug" */}
                    <Route path="/Inicio/:entrada">  
                        <VistaCurso>
                        </VistaCurso>
                    </Route> 
                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;
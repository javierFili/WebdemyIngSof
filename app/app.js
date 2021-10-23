import React, {Component} from 'react';

class App extends Component{
    render() {
        return (
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/"> Prueba MERN </a>
                    </div>
                </nav>

                <div className="container">
                    <form action = "/add" method="post">
                        <input type="text" name="name" placeholder="Name" className="form-control"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default App;
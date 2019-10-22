import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
class App extends React.Component{
    render(){


        return(
            <div >
                <Header/>
                <div className="container-fluid"><h1>Chafik Portfolio</h1></div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);
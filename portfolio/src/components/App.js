import React from 'react';



import Header from './Header';
import About from './About';

class App extends React.Component{
    render(){
        return(
                <div>
                    <Header />
                    <main>
                    <About />
                    </main>
                </div>

           
          );
    };
}

export default App;


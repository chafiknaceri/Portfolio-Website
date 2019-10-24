import React from 'react';



import Header from './Header';
import About from './About';
import Skills from './Skills';

class App extends React.Component{
    render(){
        return(
                <div>
                    <Header />
                    <main>
                    <About />
                    <Skills />
                    </main>
                </div>

           
          );
    };
}

export default App;


import React from 'react';



import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

class App extends React.Component{
    render(){
        return(
                <div>
                    <Header />
                    <main>
                    <About />
                    <Skills />
                    <Projects />
                    </main>
                </div>

           
          );
    };
}

export default App;


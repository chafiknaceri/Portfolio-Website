import React from 'react';



import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Popup from './Popup';
import Footer from './Footer';

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
                    <Popup />
                    <Footer/>
                    
                </div>

           
          );
    };
}

export default App;


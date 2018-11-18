import React, { Component } from 'react';
import './App.css';
import EpicMenu from "./Epicmenu";




class App extends Component {
  render() {

    let links = [

        { label: 'Home', link: '#home', active: true},
        { label: 'Service', link: '#service', submenu:[
                { label:'entrepreneur', link:'#entrepreneur'},
                { label:'students', link:'#students' },
                { label:'hobbies', link:'#hobbies'},
            ]},
        { label: 'Contact', link: '#contact'},

    ];

    return (

          <div className="container center">

            <EpicMenu links={links}/>


          </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Feed } from './Feed';
import { Widget } from './Widget';


function App() {
  return (
    <div className="App">
     {/* Header */}
      <Header/>

     {/* Body */}
     <div className='app__body'>      
     {/* sidebar */}
     <Sidebar/>
     <Feed/>
     {/* Widget */}
     <Widget/>
     </div>
    </div>
  );
}

export default App;

// Since radium must be applied to an export property,  it cannot be used inside the index.js. 
// Radium must be applied inside an external .js file.  External,  meaning,  a .js file that is imported. 

// EXTRA  INFORMATION: 
// When multiple DOM elements with style={...}  are used,  radium requires a key attribute to be used. 
// See my code below, <button key={'yyz'} 


// MyRadium.js 

import React from 'react';
import Radium from 'radium';
const MyRadiumComponent = () => {
        const myContainer={position:'relative',maxWidth:'320px',margin:'10px auto',
                padding:'10px 0',backgroundColor:'#ddd',textAlign:'center',
                border:'1px solid #000',fontSize:'16px',fontFamily:'Helvetica',fontWeight:'lighter'};
//--------------------------------------------------------------------------------------------------
        const myButtonOneStyle={padding:'8px',outline:'none',borderRadius:'10px',
                backgroundColor:'#900',color:'#fff',fontSize:'1.0rem',
                ':hover':{backgroundColor:'#0c9',color:'#000'}};
//--------------------------------------------------------------------------------------------------
        const myButtonTwoStyle={padding:'8px',outline:'none',borderRadius:'10px',
                backgroundColor:'#900',color:'#fff',fontSize:'1.0rem'};
        myButtonTwoStyle[':hover'] = {backgroundColor:'#0c9',color:'#000'};
//--------------------------------------------------------------------------------------------------
        return (
            <div style={myContainer}>
                <button key={'yyz'} style={myButtonOneStyle}>Hover over me</button>  
                <button key={'rush'} style={myButtonTwoStyle}>Hover over me</button>
        </div>);
}
export default Radium(MyRadiumComponent);
// ===================================================================== 

// index.js 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import MyRadiumComp from './MyRadium';
// ReactDOM.render(<MyRadiumComp />, document.get
//Index.js     
//This file does not require any other files inside the src folder. 

import React from 'react';
import ReactDOM from 'react-dom';

const Myname = props => <b onCopy={props.myOnCopy}>{props.myText}</b>;

class App extends React.Component {
    state={myText:"Select then copy me"};

    switchTextHandler = props => this.setState({myText:"Hey, you copied me!!"});

    render() {
        const myContainer={maxWidth:'380px', margin:'10px auto', padding:'10px 0',
            backgroundColor:'#ddd', textAlign:'center', border:'1px solid #000',
            fontSize:'16px', fontFamily:'Helvetica', fontWeight:'lighter'};
            
        return (
            <div style={myContainer}>
                <Myname myText={this.state.myText} myOnCopy={this.switchTextHandler} />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

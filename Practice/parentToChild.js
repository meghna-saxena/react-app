// Index.js     
//This file does not require any other files inside the src folder. 

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const MyChildProcessor = props => {
    const myButtonStyle = { marginBottom: '4px' };
    let mySum = (
        parseInt(props.myNumbersObjectProps.myNum1, 10)
        + parseInt(props.myNumbersObjectProps.myNum2, 10)
    );// above: add the numbers.

    return (
        <div>
            <button onClick={props.myGetNumbersMethodProps} style={myButtonStyle}>
                Click to add
            </button>
            <div>
                {props.myNumbersObjectProps.myNum1} +{" "}
                {props.myNumbersObjectProps.myNum2} ={" "}
                {mySum}
            </div>
        </div>
    );
};

class MyParent extends Component {
    myContainer = {
        maxWidth: '280px', margin: '10px auto', padding: '6px 0',
        backgroundColor: '#ddd', textAlign: 'center', border: '1px solid #000'
    };

    myInputStyle = { width: '80%', marginBottom: '5px', textAlign: 'center' };

    myTemporaryNumObject = { myNumbersObject: { myNum1: 0, myNum2: 0 } };

    myHorizontalRuleStyle = { margin: '6px 0 8px' };
    
    // above: state isn't used because this would cause non-desired renders.
    //-----------------------------------------------------------------------------------
    state = { myNumbersObject: { myNum1: 0, myNum2: 0 } };
    //-----------------------------------------------------------------------------------
    myInputText = event => {// temporary place the new numbers inside an object literal.
        if (event.target.id === "input-one") {
            this.myTemporaryNumObject.myNum1 = event.target.value;
        }
        if (event.target.id === "input-two") {
            this.myTemporaryNumObject.myNum2 = event.target.value;
        }
    };
    //-----------------------------------------------------------------------------------
    myGetNumbersMethod = (myNum1Param, myNum2Param) => {
        const myNumbersObjectNew = { myNum1: myNum1Param, myNum2: myNum2Param };
        this.setState({ myNumbersObject: myNumbersObjectNew });
    };// upon the button click, place the new numbers inside the state, which causes a render.
    //-----------------------------------------------------------------------------------
    render() {
        return (
            <div style={this.myContainer}>
                <MyChildProcessor
                    myNumbersObjectProps={this.state.myNumbersObject}
                    myGetNumbersMethodProps={
                        () => this.myGetNumbersMethod(
                            this.myTemporaryNumObject.myNum1,
                            this.myTemporaryNumObject.myNum2
                        )
                    }
                /><hr style={this.myHorizontalRuleStyle} />
                <input
                    type="text"
                    placeholder="Enter a number"
                    onChange={this.myInputText}
                    id="input-one"
                    style={this.myInputStyle}
                /><br />
                <input
                    type="text"
                    placeholder="Enter a number"
                    onChange={this.myInputText}
                    id="input-two"
                    style={this.myInputStyle}
                />
            </div>
        );
    }
}
ReactDOM.render(<MyParent />, document.getElementById('root'));

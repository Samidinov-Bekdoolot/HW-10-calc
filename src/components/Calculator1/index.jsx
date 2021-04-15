import React from 'react'

export class Calculator1 extends React.Component {

    constructor() {
        super()
        this.state = {
            inputValue1: 1,
            inputValue2: 1,
            result: 0,
        };
    }



    inputHandler = (e) => {
        if (e.target.name === 'inputValue1') {
            this.setState(() => ({ inputValue1: parseInt(e.target.value) }));
        } else {
            this.setState(() => ({ inputValue2: parseInt(e.target.value) }));
        }

    }
    onPlus = () => {
        this.setState(() => ({
            result: parseInt(this.state.inputValue1) + parseInt(this.state.inputValue2),
        }));
    }
    onMinus = () => {
        this.setState(() => ({
            result: parseInt(this.state.inputValue1) - parseInt(this.state.inputValue2),
        }));
    }
    onMult = () => {
        this.setState(() => ({
            result: parseInt(this.state.inputValue1) * parseInt(this.state.inputValue2),
        }));
    }
    onDivis = () => {
        this.setState(() => ({
            result: parseInt(this.state.inputValue1) / parseInt(this.state.inputValue2),
        }));
    }
    render() {
        return ( <
            div>
           <
            input type = "number"
            value = { this.state.inputValue1 }
            onChange = { this.inputHandler }
            name = "inputValue1" /
            >
            <
            button onClick = { this.onPlus } > + </button>{" "} <
            button onClick = { this.onMinus } > - </button>{" "} <
            button onClick = { this.onMult } > * </button>{" "} <
            button onClick = { this.onDivis } > /</button >
            <
            input type = "number"
            value = { this.state.inputValue2 }
            onChange = { this.inputHandler }
            name = "inputValue2" /
            >
            { " " } <
            span style = {
                { textAlign: "center", width: 420 }
            } > { " " }
            result: { this.state.result } { " " } </span>{" "}
             </div >
        );
    }
}
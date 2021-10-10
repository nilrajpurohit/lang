import React from 'react'

export default class Access extends React.Component{
    constructor(props){
        super(props);
        this.state ={isOpen : false};

        this.Click = this.Click.bind(this);
        this.Focus = this.Focus.bind(this);
        this.Blur = this.Blur.bind(this);
    }

    Click(){
        this.setState(currentState =>({
            isOpen : !currentState.isOpen
        }));
    }

    Blur(){
        this.timer = setTimeout(()=>{
            this.setState({isOpen : false});
        });
    }

    Focus(){
        clearTimeout(this.timer);
    }

    render(){
        return(
            <div onBlur = {this.Blur} onFocus={this.Focus}>
                <button onClick={this.Click}
                    aria-haspopup = 'true'
                    aria-expanded = {this.state.isOpen}>
                    select an Option:
                </button>

                {this.state.isOpen && (
                    <ul>
                        <li>Op1</li>
                        <li>Op2</li>
                        <li>Op3</li>
                    </ul>
                )}
            </div>
        );
    }

}
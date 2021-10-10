import React from 'react'
import ReactDOM from 'react-dom'

export default class Main extends React.Component {
    render() {
        return ReactDOM.createPortal (
            <div>
                <h1>createPortal render in other div tag not in the root...</h1>
            </div>,
            document.getElementById('portal-root')
        );
    }
}


//createPortal() use to create a component and render that in other div with id tag else in root id...
// class PortalAl extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return ReactDOM.createPortal(
//             <div>
//             {this.props.children}
//                 <hr/>
//                 <button onClick = {this.props.onClose}>Dismiss</button>
//             </div>,
//             document.getElementById('portal-root')
//         );
//     }
// }

// export default class Main extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {isOpen : false};
//         this.Open = this.Open.bind(this);
//         this.Close = this.Close.bind(this);
//     }

//     Open(){
//         this.setState({isOpen : true});
//     }
//     Close(){
//         this.setState({isOpen : false});
//     }
    
//     render(){
//         return(
//             <div>
//                <p>Click that button to toggle!</p>
//                <button onClick = {this.Open}>Click</button>
//                <br /> <br /> <br />
//                {this.state.isOpen ? (    
//                    <PortalAl onClose = {this.Close}>
//                        Click below button to dismiss this alert message!
//                    </PortalAl>
//                ) : null}
//             </div>
//         );
//     }
// }


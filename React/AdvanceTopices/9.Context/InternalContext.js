import React from 'react'


// Using context, we can avoid passing props through intermediate elements:(like below components)
// export default class ContextExample extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//             <ToolBar theme = 'dark' />
//         )
//     }
// }
// function ToolBar(props){
//     return(
//         <div>
//             <ThemeButton theme = {props.theme}/>
//         </div>
//     )
// }

// class ThemeButton extends React.Component {
//     render() {
//       return <button theme={this.props.theme}>Button</button>;
//     }
//   }

//we can pass props value deep into the component  with passing that value in intermideat components


class ContextExample extends React.Component{
    render(){
        return(
            <ThemeContext.provider value="dark">
                <Toolbar/>
            </ThemeContext.provider>
        )
    }
}

// in the middle doesn't need to pass the prop theme..
function ToolBar(){
    return(
        render(
            <ThemeButton/>
        )
    );
}
  
 // Assign a contextType to read the current theme context.  // React will find the closest theme Provider above and use its value.
class ThemeButton extends React.Component{
    render(){
        return(
            <button theme={this.context}>Button</button>
        )
    }
}
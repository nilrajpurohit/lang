import React from 'react'

//Map() with single para that para used as key..
// export default class KeysMap extends React.Component{
//     render(){
//         const numbers=[1,2,3,4,5,6,7,8];
//         const ItemList =numbers.map((number)=><li key={number.toString()}>{number}</li>);
//         return(
//         <ul>{ItemList}</ul>
//         );
//     }
// }


//Map() with single para that para is an Object with multiple values..
// export default class KeysMap extends React.Component{
//     render(){
//         const todos =[{id:'1',text:'One'},{id:'2',text:'Two'},{id:'3',text:'Three'},{id:'4',text:'Four'},{id:'5',text:'Five'}];
//     const Items = todos.map((todo)=><li key={todo.id}>{todo.text}</li>);
//         return(
//         <ul>{Items}</ul>
//         );
//     }
// }


//Map() with index,Index is an array index..
// export default class KeysMap extends React.Component{
//     render(){
//         const todos = [
//             {text:'One'},
//             {text:'Two'},
//             {text:'Three'},
//             {text:'Four'}
//         ];
//         const Items = todos.map((todo,index)=><li key={index}>{todo.text}</li>);
//         return(
//             <ul>{Items}</ul>
//         );
//     }
// }


//Extract Component using map()...
// function ListItem(props){
//     const value = props.value;
//     const index = props.id;
//     return(
//         <li id={index}> {value} </li>
//     );
// }
// function UnorderList(props){
//     const values = props.values;
//     const Items = values.map((value,index) => <ListItem value={value} id={index}/>);
//     return(
//     <ul> {Items} </ul>
//     );

// }
// export default function KeysMap(){
//     const values = [1,2,3,4,5,6,7];
//     return(
//         <UnorderList values ={values}/>
//     );
// }



//Posts with id,title,content, vales using mapping...
//Embedding map() in JSX..
function Blog(props){
    const sidebar =(
        <ul>
            {props.posts.map((post)=><li key={post.id}> {post.title} </li>)}
        </ul>
    );
   const content =props.posts.map((post) =><div key={post.is}>
        <h4>{post.title}</h4>
        <p>{post.content}</p>       
   </div>);

   return(
        <div>
            {sidebar} <hr/> 
            {content} <br/>
       </div>
    );
}
export default function KeysMap(){
    const posts =[{
            id:1,
            title:'Post-1',
            content:'This is an Post-1',
        },{
            id:2,
            title:'Post-2',
            content:'This is an Post-2',
        },{
            id:3,
            title:'Post-3',
            content:'This is an Post-3',
        }];

    return(
        <Blog posts = {posts}/>
    );
}
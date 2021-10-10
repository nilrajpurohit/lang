import React from 'react'

//using React.Fragment tag...
// export default class FragExample extends React.Component{
//     render(){
//         const items=['apple','orange'];
//         return(
//             <React.Fragment>
//                 {
//                     items.map(item =>(
//                         <React.Fragment key = {item.id}>
//                             {item}
//                         </React.Fragment>
//                     ))
                     
//                 }
//             </React.Fragment>
//         );
//     }
// }

//using empty tag <></> which is also an Fragment...(But Can't pass an key init).
export default class FragExample extends React.Component{
    render(){
        const items=['apple','orange'];
        return(
            <>
                { items.map(item => (
                    <>
                        {item}
                    </>
                ))}
            </>  
        );
    }
}
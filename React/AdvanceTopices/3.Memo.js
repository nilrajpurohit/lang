import React from 'react'

//Memo Component is same as Pure Component..
//Memo Component is work for function Component and PureComponent work for class Component..

function MemoComp({name}){
    console.log('Memo Component');
    return(
        <div>{name}</div>
    );
}
export default React.memo(MemoComp);






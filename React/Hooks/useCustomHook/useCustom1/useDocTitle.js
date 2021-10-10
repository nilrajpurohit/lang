// This is a Custom Hook Example..
//Custom Hook is use for Using same bussiness Logic to different Components..

import React, { useEffect } from 'react'

function useDocTitle(count) {
    useEffect(()=>{
        document.title = count
    })  
}

export default useDocTitle

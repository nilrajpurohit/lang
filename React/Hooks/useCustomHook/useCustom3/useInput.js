import { useState } from 'react'

function useInput(inValue) {
    const [value , setValue] = useState(inValue)

    const reset = () => {
        setValue(inValue)
    }

    const bind = {
        value , 
        onChange: (e)=>setValue(e.target.value)
    }

    return[value , bind , reset]
}

export default useInput

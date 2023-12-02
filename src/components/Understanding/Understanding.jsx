import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Understanding() {
    const dispatch = useDispatch()

    const history = useHistory()

    const [understandingInput, setUnderstandingInput] = useState('');

    const setUnderstanding = () => {

        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understandingInput
        })
        setUnderstandingInput('')
        // history.push("/support")

    }


    return(
        <>
            <h2>How are you understanding the content?</h2>
            <input
                onChange={(e) => setUnderstandingInput(e.target.value)}
                value={understandingInput}
                type='number'
                placeholder='Understanding?'
            />
            <button onClick={setUnderstanding}>Next</button>
        </>

    )
}

export default Understanding
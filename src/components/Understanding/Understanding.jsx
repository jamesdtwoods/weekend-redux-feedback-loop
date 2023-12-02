import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Understanding() {
    const dispatch = useDispatch()

    const history = useHistory()

    const [understandingInput, setUnderstandingInput] = useState('');

    const setUnderstanding = () => {
        if (understandingInput === '') {
            alert("Please enter a rating 🤠")
        } else {
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: understandingInput
            })
            setUnderstandingInput('')
            history.push("/support")
        }
    }


    return(
        <>
            <h2>How are you understanding the content?</h2>
            <input
                data-testid="input"
                onChange={(e) => setUnderstandingInput(e.target.value)}
                value={understandingInput}
                type='number'
                placeholder='Understanding?'
            />
            <button data-testid="next" onClick={setUnderstanding}>Next</button>
        </>

    )
}

export default Understanding
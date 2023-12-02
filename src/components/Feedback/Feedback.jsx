import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Feedback() {
    const dispatch = useDispatch()

    const history = useHistory()

    const [feelingInput, setFeelingInput] = useState('');

    const setFeeling = (e) => {
        feelingInput = e.target.value

        dispatch({
            type: 'SET_FEELING',
            payload: { feelingInput }
        })

        history.push("/understanding")

    }


    return(
        <>
            <h2>How are you feeling today?</h2>
            <input
                onChange={(e) => setFeelingInput(e.target.value)}
                value={feelingInput}
                type='number'
                placeholder='Feeling?'
            />
            <button onClick={setFeeling}>Next</button>
        </>

    )
}

export default Feedback
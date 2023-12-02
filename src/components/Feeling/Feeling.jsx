import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Feeling() {
    const dispatch = useDispatch()

    const history = useHistory()

    const [feelingInput, setFeelingInput] = useState('');

    const setFeeling = () => {
        if (feelingInput === '') {
            alert("Please enter a rating 🤠")
        } else {
            dispatch({
                type: 'SET_FEELING',
                payload: feelingInput
            })
            setFeelingInput('')
            history.push("/understanding")
        }
    }


    return(
        <>
            <h2>How are you feeling today?</h2>
            <input
                data-testid="input"
                onChange={(e) => setFeelingInput(e.target.value)}
                value={feelingInput}
                type='number'
                placeholder='Feeling?'
            />
            <button data-testid="next" onClick={setFeeling}>Next</button>
        </>

    )
}

export default Feeling
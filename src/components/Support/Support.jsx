import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory, Link  } from 'react-router-dom';

function Support() {
    const dispatch = useDispatch()

    const history = useHistory()

    const [supportInput, setSupportInput] = useState('');

    const setSupport = () => {
        if (supportInput === '') {
            alert("Please enter a rating 🤠")
        } else {
            dispatch({
                type: 'SET_SUPPORT',
                payload: supportInput
            })
            history.push("/comment")
        }
    }


    return(
        <>
            <h2>How well are you being supported?</h2>
            <input
                data-testid="input"
                onChange={(e) => setSupportInput(e.target.value)}
                value={supportInput}
                type='number'
                placeholder='Support?'
            />
            <button data-testid="next" onClick={setSupport}>Next</button>
            <Link to="/understanding"><button>Back</button></Link>
        </>

    )
}

export default Support
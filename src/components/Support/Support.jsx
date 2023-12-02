import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Support() {
    const dispatch = useDispatch()

    const history = useHistory()

    const [supportInput, setSupportInput] = useState('');

    const setSupport = () => {

        dispatch({
            type: 'SET_SUPPORT',
            payload: supportInput
        })
        setSupportInput('')
        history.push("/comment")

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
        </>

    )
}

export default Support
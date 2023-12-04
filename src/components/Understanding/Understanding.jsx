import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';
import {Button, TextField} from '@mui/material';

function Understanding() {
    const dispatch = useDispatch()

    const history = useHistory()

    const [understandingInput, setUnderstandingInput] = useState('');

    const setUnderstanding = () => {
        if (understandingInput === '' || understandingInput > 5 || understandingInput < 0) {
            alert("Please enter a rating between 0 and 5")
        } else {
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: understandingInput
            })
            history.push("/support")
        }
    }


    return(
        <>
            <h2>How are you understanding the content?</h2>
            {/* <input
                data-testid="input"
                onChange={(e) => setUnderstandingInput(e.target.value)}
                value={understandingInput}
                type='number'
                placeholder='Understanding?'
            />
            <br />
            <br /> */}
            <TextField
                id="outlined-number"
                label="Understanding?"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => setUnderstandingInput(e.target.value)}
                value={understandingInput}
                error={understandingInput > 5 || understandingInput < 0}
                helperText="Must enter a value between 0 and 5"
            />
            <br />
            <br />
            <Link to="/"><Button variant="outlined">Back</Button></Link>
            <Button variant="contained" data-testid="next" onClick={setUnderstanding}>Next</Button>
        </>

    )
}

export default Understanding
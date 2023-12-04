import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory, Link  } from 'react-router-dom';
import {Button, TextField} from '@mui/material';

function Support() {
    const dispatch = useDispatch()

    const history = useHistory()

    const [supportInput, setSupportInput] = useState('');

    const setSupport = () => {
        if (supportInput === '' || supportInput > 5 || supportInput < 0) {
            alert("Please enter a rating between 0 and 5")
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
            {/* <input
                data-testid="input"
                onChange={(e) => setSupportInput(e.target.value)}
                value={supportInput}
                type='number'
                placeholder='Support?'
            />
            <br />
            <br /> */}
            <TextField
                id="outlined-number"
                label="Supported?"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => setSupportInput(e.target.value)}
                value={supportInput}
                error={supportInput > 5 || supportInput < 0}
                helperText="Must enter a value between 0 and 5"
            />
            <br />
            <br />
            <Link to="/understanding"><Button variant="outlined">Back</Button></Link>
            <Button variant="contained" data-testid="next" onClick={setSupport}>Next</Button>
        </>

    )
}

export default Support
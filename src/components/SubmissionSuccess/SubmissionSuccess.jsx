import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';


function SubmissionSuccess() {
    const history = useHistory()
    const dispatch = useDispatch()

    const newFeedback = () => {
        dispatch({
            type: 'CLEAR_FEEDBACK'
        })
        history.push("/")
    }
    return (
        <div>
            <h4>Thank You!</h4>
            <Button variant="contained" data-testid="next" onClick={newFeedback}>Leave New Feedback</Button>
        </div>
    )
}

export default SubmissionSuccess;
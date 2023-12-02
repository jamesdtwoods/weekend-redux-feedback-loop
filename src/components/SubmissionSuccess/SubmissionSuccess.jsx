import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';


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
            <button data-testid="next" onClick={newFeedback}>Leave New Feedback</button>
        </div>
    )
}

export default SubmissionSuccess;
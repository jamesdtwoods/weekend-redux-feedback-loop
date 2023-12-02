import React from 'react';
import axios from 'axios';

function FeedbackItem ( { review, getFeedback } ) {
    // found confirm method here:
    // https://www.codexworld.com/how-to/show-delete-confirmation-message-dialog-javascript/
    const confirmation = () => {
        const result = confirm("Are you sure to delete?");
        if(result){
            axios({
                method: 'DELETE',
                url: `/feedback/${review.id}`
            })
            .then(response => {
              getFeedback();
            })
            .catch(err => {
              alert('Error Deleting Review');
              console.log(err);
            })
        }
    }
    const flagForReview = () => {
        axios({
            method: 'PUT',
            url: `/feedback/flagged/${review.id}`
        })
        .then(response => {
          getFeedback();
        })
        .catch(err => {
          alert('Error Deleting Review');
          console.log(err);
        })
    }
    return (
        <tr key={review.id} className={review.flagged != true ? "not-flagged" : "flagged"} >
        <td>{review.feeling}</td>
        <td>{review.understanding}</td>
        <td>{review.support}</td>
        <td>"{review.comments}"</td>
        <td><button onClick={confirmation}>🗑️</button></td>
        <td><button onClick={flagForReview}>🚨</button></td>
        </tr>
    )
}

export default FeedbackItem
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')



// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    const feedback = req.body;
    const sqlText = 
      `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, 
        [
            feedback.feeling,
            feedback.understanding,
            feedback.support,
            feedback.comments
        ])
        .then((result) => {
            console.log(`Added feedback to the database`, feedback);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

router.delete('/:id', (req, res) => {
    const sqlQueryText = `
    DELETE FROM "feedback"
      WHERE "id" = ($1);
    `
    const sqlValues = [req.params.id];
    pool.query(sqlQueryText, sqlValues)
    .then((result) => {
        res.sendStatus(200);
      }).catch((dbError) => {
        console.log('DELETE /feedback SQL query failed:', dbError);
        res.sendStatus(500);
      });
  });

  router.put('/flagged/:id', (req, res) => {
    const sqlQueryText = 
    `
    UPDATE "feedback"
    SET "flagged" = NOT "flagged"
      WHERE "id" = ($1);
    `
    const sqlValues = [req.params.id];
    pool.query(sqlQueryText, sqlValues)
      .then((dbResult) => {
        res.sendStatus(200);
      }).catch((dbError) => {
        console.log('PUT /flagged SQL query failed:', dbError);
        res.sendStatus(500);
      })
  });


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
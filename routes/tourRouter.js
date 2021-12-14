
const express = require('express')
const tourController = require('../controllers/tourController')


// app.get('/api/tours', getAllTours)
// app.post('/api/tours', createTour)


//shortert way to write routes

const tourRouter = express.Router()

tourRouter
    .param('id', tourController.checkID)

tourRouter
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.checkBody, tourController.createTour)

// app.get('/api/tours/:id', getTour)
// app.patch('/api/tours/:id', updateTour)
// app.delete('/api/tours/:id', deleteTour)

tourRouter
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)


module.exports = tourRouter

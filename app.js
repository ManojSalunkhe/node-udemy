const express = require('express');
const morgan = require('morgan')
const tourRouter = require('./routes/tourRouter')
const userRouter = require('./routes/userRouter')

const app = express()

// 1) MIDDLEWARES

// console.log("here",process.env.NODE_ENV)


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())

// MIDDLEWARE EXAMPLES
app.use((req, res, next) => {
    console.log("hello from the middleware ")
    next()
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next()
})


// 3) ROUTES
app.use('/api/tours', tourRouter)
app.use('/api/users', userRouter)


module.exports = app

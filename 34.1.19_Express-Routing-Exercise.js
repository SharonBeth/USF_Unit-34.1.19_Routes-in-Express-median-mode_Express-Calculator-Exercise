const express = require('express');

const app = express();

const ExpressError = require('./expressError');

// const ExpressError = require('./expressError');
const { mean, median, mode, convertStringToIntegers, sortMedian } = require('./math_functions');
const { createFrequencyCounter } = require('./express-routing-solution/express-routing-solution/helpers');
// const ExpressError = require('./express-routing-solution/express-routing-solution/expressError');
// 


app.get('/mean', function (req, res, next) {
    if (!req.query.nums) {
        throw ('You must pass a query key using nums with a series of numbers seperated by a comma.')
    }

    let num_string = req.query.nums.split(',');
    let nums = convertStringToIntegers(num_string);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    let result = {
        operation: "mean",
        result: mean(nums)
    }
    return res.send(result)
})

app.get('/median', function (req, res, next) {
    if (!req.query.nums) {
        throw ('You must pass a query key using nums with a series of numbers seperated by a comma.')
    }

    console.log(req.query.nums);
    let num_string = req.query.nums.split(',');
    let nums = sortMedian(num_string);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        result: median(nums)
    }
    return res.send(result)
})

app.get('/mode', function (req, res, next) {
    if (!req.query.nums) {
        throw ('You must pass a query key using "nums=" witha  series of numbers seperated by a comma.')
    }
    console.log(req.query.nums);
    let num_string = req.query.nums.split(',');
    let nums = convertStringToIntegers(num_string);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: mode(nums)
    }
    return res.send(result)
})

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);

    // pass the error to the next piece of middleware
    return next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});

app.listen(3000, function () {
    console.log('App on port 3000');
})


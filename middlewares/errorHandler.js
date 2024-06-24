const notFound = (req, res, next) => {
    res.status(404).json({
        status: 404,
        error: 'Not Found',
    });
};

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        status: statusCode,
        error: errorMessage,
    });
};

module.exports = {
    notFound,
    errorHandler,
};

const errorHandler = (error, req, res, next) => {
    console.error(error);
    res.status(500).json({message: 'an error occurred'});
};

module.exports = errorHandler;
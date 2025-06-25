class ExpressError extends Error {
    constructor(statusCode, message) {
        super(message); // ✅ Properly sets this.message AND stack trace
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;

//module.exports=ExpressError;
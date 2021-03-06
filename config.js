//configure values for the Mongo database URL and the port the application will run on
exports.ENV = 'development'


exports.PORT = process.env.PORT || 8080;

exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://localhost/PatternsCopingJournal'; //edit for the name of the db


exports.JWT_SECRET = 'I love Muffins!'

//for testing
exports.TEST_DATABASE_URL = process.env.DATABASE_URL ||
                      'mongodb://localhost/test-PatternsCopingJournal';

exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '60d';
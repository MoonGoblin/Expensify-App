const moment = require.requireActual('moment');

// note that this gives a snapshot at a particular point in time
// if no point in time is provided. This is important for making
// our test in ExpenseForm.test.js work so that it always has the
// same date to compare to the snapshot.
export default (timestamp = 0) => {
    return moment(timestamp);
};
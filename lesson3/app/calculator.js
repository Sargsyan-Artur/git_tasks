const operations = {
    '+' : (a,b) => a + b,
    '-' : (a,b) => a - b,
    '*' : (a,b) => a * b,
    '/' : (a,b) => a / b
};


// The isEmptyOrSpaces function checks the validity of elements
function isEmptyOrSpaces(a,op,b) {
    if (!a || a.trim() === '' || !b || b.trim() === '' || !isFinite(a) || !isFinite(b)) return true; 
        
    if (op === '+' || op === '-' || op === '/' || op === '*') {
        return false;
    } else {
        return true;
    }
}

exports.calculate = function (a, operation, b) {
    if (isEmptyOrSpaces(a, operation, b)) {
        throw new Error('one of the parameters is not correct');
    }

    if (operation === '+') return(operations['+'](+a,+b));
    if (operation === '-') return(operations['-'](+a,+b));
    if (operation === '*') return(operations['*'](+a,+b));
    if (operation === '/') return(operations['/'](+a,+b));
};



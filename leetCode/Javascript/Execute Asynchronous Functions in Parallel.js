/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return Promise.all(functions.map(prom=>prom()));
    
};


// const promise = promiseAll([() => new Promise(resolve => setTimeout(() => resolve(5), 200))]);
// promise.then(console.log);
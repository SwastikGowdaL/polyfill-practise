const arr = [1, 2, 3, 4, 5];

// deleting the forEach() from the prototype chain
Array.prototype.forEach = null;

if (!Array.prototype.forEach) {

    //* polyfill for forEach
    Array.prototype.forEach = function (callbackFunction) {
        for (let val of this) {
            callbackFunction(val);
        }
    }

}

arr.forEach((val) => {
    console.log(val * 2);
});
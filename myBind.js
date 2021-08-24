let name1 = {
    firstName: "swastik",
    lastName: "gowda"
}

// prints the values of the obj that has been binded
let printName = function (hometown, state, country) {
    console.log(this.firstName + " " + this.lastName + " , " + hometown + " , " + state + " , " + country);
}

//using the native bind method
let printMyName = printName.bind(name1, "Bengaluru", "Karnataka");
printMyName("India");

if (!Function.prototype.myBind) {

    //* polyfill for myBind (which does same operation as native bind)
    Function.prototype.myBind = function (...args) {
        let obj = this;
        let params = args.slice(1);
        return function (...args2) {
            // obj.call(args[0]);
            // obj.apply(args[0],params);
            obj.apply(args[0], [...params, ...args2]);

        }
    }
    
}

//using the myBind method
let printMyName2 = printName.myBind(name1, "Bengaluru", "Karnataka");
printMyName2("India");
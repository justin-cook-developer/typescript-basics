var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (name.length > 0) {
                this._name = name[0].toUpperCase() + name.slice(1);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var justin = new Person("Justin Cook", 22);
justin.name = "justin cook";
console.log(justin.name);

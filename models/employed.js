class Employed {

    constructor(id, name, salary) {
        this._id = id;
        this._name = name;
        this._salary = salary;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }
}

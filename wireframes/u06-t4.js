class Vorrang {
    constructor(values) {
        this.values = values;
        this.logger = this.values.length;
    }


    getNext = () => {
        for (let i = 0; i<this.values.length; ++i) {
            const current = this.values[i][0];
            let hasNoPrev = true;
            this.values.map(item => {
                if (current === item[1]) {
                    hasNoPrev = false;
                }
            })
            if (hasNoPrev) {
                this.values.map(item => {
                    const indexOfCurrent = item.indexOf(current);
                    if (indexOfCurrent > -1) {
                        item.splice(indexOfCurrent, 1);
                    }
                })
                this.values = this.values.filter(item => item.length > 0);
                this.logger = this.values.length;
                return current;
            }
        }
        return undefined
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                const value = this.getNext();
                return {
                    value: value,
                    done: !value,
                }
            }
        };
    };
}

function isEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

const example1Input = [
    ["schlafen", "studieren"],
    ["essen", "studieren"],
    ["studieren", "prüfen"]
]
let result1Expected = [3, 3, 1, 0];
let result1Actual = []
const example1 = new Vorrang(example1Input);
const proxyHandler1 = {
    get: function(target, prop) {
        if (prop === "logger") {
            return target[prop];
        }
    }
}
const proxy1 = new Proxy(example1, proxyHandler1);
for (const next of example1) {
    result1Actual.push(proxy1.logger);
}

console.assert(isEqual(result1Actual, result1Expected));

const example2Input = [
    ["busfahren", "an zielhaltestelle ankommen"],
    ["busticket kaufen", "busfahren"],
    ["busfahrplan haben", "busfahren"],
    ["kleingeld haben", "busticket kaufen"],
]
let result2Expected = [4, 4, 3, 1, 0];
let result2Actual = []
const example2 = new Vorrang(example2Input);
const proxyHandler2 = {
    get: function(target, prop) {
        if (prop === "logger") {
            return target[prop];
        }
    }
}
const proxy2 = new Proxy(example2, proxyHandler2);
for (const next of example2) {
    result2Actual.push(proxy2.logger);
}

console.assert(isEqual(result1Actual, result1Expected));
console.assert(isEqual(result2Actual, result2Expected));
class Vorrang {
    constructor(values) {
        this.values = values;
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
const result1Expected = [
    "schlafen",
    "essen",
    "studieren",
    "prüfen"
]
let result1Actual = []
const example1 = new Vorrang(example1Input);
for (const next of example1) {
    result1Actual.push(next);
}

const example2Input = [
    ["busfahren", "an zielhaltestelle ankommen"],
    ["busticket kaufen", "busfahren"],
    ["busfahrplan haben", "busfahren"],
    ["kleingeld haben", "busticket kaufen"],
]
const result2Expected = [
    "busfahrplan haben",
    "kleingeld haben",
    "busticket kaufen",
    "busfahren",
    "an zielhaltestelle ankommen",
]
let result2Actual = []
const example2 = new Vorrang(example2Input);
for (const next of example2) {
    result2Actual.push(next);
}

console.assert(isEqual(result1Actual, result1Expected));
console.assert(isEqual(result2Actual, result2Expected));
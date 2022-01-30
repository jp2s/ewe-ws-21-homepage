function* topSortGenerator(values) {
    yield ":: start ::";
    const getNext = () => {
        for (let i = 0; i<values.length; ++i) {
            const current = values[i][0];
            let hasNoPrev = true;
            values.map(item => {
                if (current === item[1]) {
                    hasNoPrev = false;
                }
            })
            if (hasNoPrev) {
                values.map(item => {
                    const indexOfCurrent = item.indexOf(current);
                    if (indexOfCurrent > -1) {
                        item.splice(indexOfCurrent, 1);
                    }
                })
                values = values.filter(item => item.length > 0);
                return current;
            }
        }
        return undefined
    }

    let running = true;
    while (running) {
        const value = getNext();
        if (value) {
            yield value;
        } else {
            yield undefined;
            running = false;
        }
    }
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
    ":: start ::",
    "schlafen",
    "essen",
    "studieren",
    "prüfen"
]
let result1Actual = []
const example1 = topSortGenerator(example1Input);
let next1 = example1.next().value;
while (next1) {
    result1Actual.push(next1);
    next1 = example1.next().value;
}

console.assert(isEqual(result1Actual, result1Expected));

const example2Input = [
    ["busfahren", "an zielhaltestelle ankommen"],
    ["busticket kaufen", "busfahren"],
    ["busfahrplan haben", "busfahren"],
    ["kleingeld haben", "busticket kaufen"],
]
const result2Expected = [
    ":: start ::",
    "busfahrplan haben",
    "kleingeld haben",
    "busticket kaufen",
    "busfahren",
    "an zielhaltestelle ankommen",
]

let result2Actual = []
const example2 = topSortGenerator(example2Input);
let next2 = example2.next().value;
while (next2) {
    result2Actual.push(next2);
    next2 = example2.next().value;
}

console.assert(isEqual(result1Actual, result1Expected));
console.assert(isEqual(result2Actual, result2Expected));

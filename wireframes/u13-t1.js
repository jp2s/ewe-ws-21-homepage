function arrayWrapper() {
    let array = [...arguments];
    return {
        get: function(pos) {
            return array[pos];
        },
        set: function(pos, value) {
            if (typeof pos === 'number' && Number.isInteger(pos)) {
                array[pos] = value;
            }
        },
        append: function(value) {
            array.push(value);
        }
    }
}
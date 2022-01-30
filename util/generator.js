export function* modalIdGenerator() {
    let index = 0;
    while (true) {
        yield `modal${index++}_`
    }
}
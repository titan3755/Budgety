export function rangeCreator() {
    let arr = []
    for (let x = 0; x < 20; x++) {
        arr.push(x)
    }
    return arr
}

export function randomRangeCreator(range, min, max) {
    let arr = []
    for (let x = 0; x < range; x++) {
        arr.push(random.int(min, max))
    }
    return arr
}

export function transactionParser(transactionStr) {
    return JSON.parse(transactionStr)
}

export function transactionTranslator(transactionStr) {
    return JSON.stringify(transactionStr)
}
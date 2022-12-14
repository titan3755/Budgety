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

export function transactionAdd(type, title, desc, value, transactionStr) {
    let json = JSON.parse(transactionStr)
    json.push({
        type: type,
        title: title,
        desc: desc,
        value: value
    })
    return JSON.stringify(json)
}

export function clearTransactions() {
    return '[]'
}
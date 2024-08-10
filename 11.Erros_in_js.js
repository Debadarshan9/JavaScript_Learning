// RangeError
let x = 1
try {
    x.toPrecision(500)
} catch (error) {
    console.log(error.name)
}

// ReferenceError
let n1 = 5
try {
    n1 = n2 + 10
} catch (error) {
    console.log(error.name)
}

// typeError
let num = 12
try {
    x.toUpperCase(x)
} catch (error) {
    console.log(error.name)
}

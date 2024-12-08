const divide = (first, second) => {
    return first / second
}

const subtract = (first, second) => {
    return first - second
}

const multiply = (first, second) => {
    return first * second
}

export { divide, subtract, multiply }


// export { ... } is a named export, so you can export multiple items simultaneously.
// Items must be imported using the same names.

// Comparison with export default:->
// Named exports let you export multiple items from a file, while export default allows you to export only one default item.
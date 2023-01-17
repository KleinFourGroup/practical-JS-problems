//----- Problem 1

// Get the interactive elements
let p1elts = {
    output: document.getElementById("p1output"),
    input: document.getElementById("p1text"),
    button: document.getElementById("p1button")
}

function appendText(event) {
    // Get the contents of the text input
    let txt = p1elts.input.value
    // Substitute in error message
    if (txt === "") txt = "[NO INPUT]"

    // Create an HTML paragraph
    let par = document.createElement("p")
    // Set the paragraph's text
    par.innerText = txt
    // Add the paragraph to the output div
    p1elts.output.appendChild(par)
}

// Run the code when the button is clicked
p1elts.button.addEventListener("click", appendText)

//----- Problem 2

// Get the interactive elements
let p2elts = {
    output: document.getElementById("p2output"),
    input: document.getElementById("p2text"),
    button: document.getElementById("p2button")
}

// Return fib(0) to fib(n)
function fibonacci(n) {
    // Base cases
    if (n === 0) return [0]
    if (n === 1) return [0, 1]

    // Iterative step
    let fibs = [0, 1]
    for (let i = 2; i <= n; i++) {
        // Compute fib(i)
        let fibi = fibs[i - 1] + fibs[i - 2]
        // Add the result to the array
        fibs.push(fibi)
    }

    return fibs
}

function printText(event) {
    // Erase all contents of the output div
    // innerText Also works but is slower
    p2elts.output.textContent = ""

    // Get the contents of the text input
    let txt = p2elts.input.value
    // Try to convert the input to a number
    let num = +txt
    // Is the number a non-negative integer?
    if (Number.isInteger(num) && num >= 0) {
        // Yes! Compute the Fibonacci numbers
        let fibs = fibonacci(num)
        // for each number
        for (let fib of fibs) {
            // Create an HTML paragraph
            let par = document.createElement("p")
            // Set the paragraph's text
            par.innerText = fib
            // Add the paragraph to the output div
            p2elts.output.appendChild(par)
        }
    } else {
        // Create an HTML paragraph
        let par = document.createElement("p")
        // Set the paragraph's text
        par.innerText = "INVALID INPUT"
        // Add the paragraph to the output div
        p2elts.output.appendChild(par)
    }
}

// Run the code when the button is clicked
p2elts.button.addEventListener("click", printText)

//----- Problem 3

// Get the interactive elements
let p3elts = {
    output: document.getElementById("p3output"),
    input: document.getElementById("p3text"),
    button: document.getElementById("p3button")
}

// Add the first character of text to par
// Schedule the same to happen a half second later with the remainder of text
function typeChar(par, text) {
    // Add the first character to the paragraph
    // NOTE: innerText will trim spaces
    par.textContent += text.charAt(0)
    
    // Is there more text left?
    if (text.length > 1) {
        // Get the text without the character we just added
        let remainder = text.slice(1)
        // Schedule the next call
        setTimeout(typeChar, 500, par, remainder)
    }
}

function typeText(event) {
    // Get the contents of the text input
    let txt = p3elts.input.value
    // Substitute in error message
    if (txt === "") txt = "[NO INPUT]"

    // Create an HTML paragraph
    let par = document.createElement("p")
    // Add the paragraph to the output div
    p3elts.output.appendChild(par)
    
    // Begin "typing" the message
    typeChar(par, txt)
}

// Run the code when the button is clicked
p3elts.button.addEventListener("click", typeText)

//----- Problem 4

// Get the interactive elements
let p4elts = {
    output: document.getElementById("p4output"),
    button: document.getElementById("p4button")
}

// Placeholders for the canvas and context
let canvas = null
let ctx = null

// Make the canvas and context
function setup() {
    // Only do this once
    if (canvas === null) {
        // Create an HTML canvas
        canvas = document.createElement("canvas")
        // Set the canvas dimensions
        canvas.width = 300
        canvas.height = 300
        // Add the canvas to the output div
        p4elts.output.appendChild(canvas)
        // Get the context
        ctx = canvas.getContext("2d")
        // Move the origin to the center of the canvas
        // This makes the arithmetic a bit simpler
        ctx.translate(150, 150)
    }
}

function drawHexagon(event) {
    // Make the canvas and context, if we haven't already
    setup()

    // Erase anything on the canvas
    ctx.clearRect(-150, -150, 300, 300)

    // Let's make it red
    ctx.fillStyle = "red"
    // Start the hexagon
    ctx.beginPath()
    // place the first vertex
    ctx.moveTo(100, 0)
    // Place the other five
    for (let i = 1; i < 6; i++) {
        ctx.lineTo(100 * Math.cos(i * Math.PI / 3), 100 * Math.sin(i * Math.PI / 3))
    }
    // Finish the hexagon
    ctx.closePath()
    // Actually draw it!
    ctx.fill()
}

// Run the code when the button is clicked
p4elts.button.addEventListener("click", drawHexagon)

window // global namespace of browser window
console.dir(window.document);

/*
The children property of the window object lists every element
present in the doc in a tree structure like:
- window
    - document
        - children
            0: html
                - children
                    0: head
                    1: body

This is the DOM - Document Object Model
window.document can be referenced as simply as document
(just like all the other properties on window)

Even Infinity, NaN, and all the rest live inside window
Sometimes we reference them by their fully qualified, namespaced
name to differentiate from the local variables
*/

// Exercise 1
/* Two input fields and a drop-down inbetween with arithemtical
operators, should calculate with the operands on clicking a 
solve button
*/
/*
CSS selectors can be used like:
document.getQuerySelector("input:nth-of-type(1)");
*/
const x = document.getElementById("x");
const y = document.getElementById("y");
const select = document.querySelector("select");
const output = document.querySelector("output");
const button = document.querySelector("button");

button.onclick = () => {
    const op = select.value;
    const a = parseFloat(x.value);
    const b = parseFloat(y.value);

    let result;
    if (op === "+") {
        result = a + b;
    } else if (op === "-") {
        result = a - b;
    } else if (op === "*") {
        result = a * b;
    } else if (op === "/") {
        result = a / b;
    }
    output.innerHTML = `<strong>${result}</strong>`;
};

/* Alternatively: Event handler function
const handleButtonClick = (event) => {
    Same as body of the handler above
    output.innerText = ...
};
button.addEventListener("click", handleButtonClick);
*/

// Exercise 2
/* Reacting to changes in real time */
const rangeInput = document.getElementById("rangeInput");
const rangeValue = document.getElementById("rangeValue");
rangeInput.oninput = event => {
    // Note: onchange would fire only after input is selected
    rangeValue.innerText = event.target.value;
};

// Exercise 3
/* Implement a counter that can be changed with a +/- button, and
has a range of 0-10, deactivating the right buttons */
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const counter = document.getElementById("counter");
counter.value = 5;
let counterValue = 5;

minusButton.onclick = () => {
    counterValue--;
    counter.value = counterValue;
    plusButton.disabled = false;
    if (counterValue === 0) {
        minusButton.disabled = true;
    }
}

plusButton.onclick = () => {
    counterValue++;
    counter.value = counterValue;
    minusButton.disabled = false;
    if (counterValue === 10) {
        plusButton.disabled = true;
    }
}

// Exercise 4
/* Change page background based on color input */
const backgroundColorPicker = document.getElementById("backgroundColorPicker");
const textColorPicker = document.getElementById("textColorPicker");
backgroundColorPicker.onchange = (event) => {
    document.body.style.backgroundColor = event.target.value;
};
textColorPicker.onchange = (event) => {
    document.body.style.color = event.target.value;
};

// Exercise 5
/* There is a colorful box in the middle of the page between two buttons
The buttons can move the boxes to the left or to the right */
const box = document.getElementById("box");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

leftArrow.onclick = () => {
    box.style.marginLeft = `${getComputedStyle(box).marginLeft.slice(0, -2) - 10}px`;
    box.style.marginRight = `${getComputedStyle(box).marginRight.slice(0, -2) + 10}px`;
}

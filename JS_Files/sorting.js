//------------ Using Document Object Model(DOM) -------------


//swap function
function swap(a, b) {
    let temp = a.style.height;
    a.style.height = b.style.height
    b.style.height = temp;
}

//To disable buttons while performing Task.
function DisableButtons() {
    document.querySelector(".BubbleSort").disabled = true;
    document.querySelector(".InsertionSort").disabled = true;
    document.querySelector(".MergeSort").disabled = true;
    document.querySelector(".QuickSort").disabled = true;
    document.querySelector(".SelectionSort").disabled = true;
    document.querySelector(".newArray").disabled = true;
    document.querySelector("#arr_size").disabled = true;
}

//To enable buttons after the Task is performed.
function EnableButtons() {
    document.querySelector(".BubbleSort").disabled = false;
    document.querySelector(".InsertionSort").disabled = false;
    document.querySelector(".MergeSort").disabled = false;
    document.querySelector(".QuickSort").disabled = false;
    document.querySelector(".SelectionSort").disabled = false;
    document.querySelector(".newArray").disabled = false;
    document.querySelector("#arr_size").disabled = false;
}

function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

//Size slider 
let arraySize = document.querySelector('#arr_size');

//Update Array according to size input
arraySize.addEventListener('input', function () {
    createArray(parseInt(arraySize.value));
})

//Default value
let delay = 260;

//Update according to Speed Slider input
let delaySpeed = document.querySelector('#speed_input');

delaySpeed.addEventListener('input', function () {
    delay = 320 - parseInt(delaySpeed.value);
});

let array = [];

createArray();

function createArray(size = 60) {
    deleteChild();
    array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 250) + 2);
    }

    console.log(array);

    //select body div for bars
    const bars = document.querySelector("#bars");

    for (let i = 0; i < size; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

//Function to delete all the previous bars
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function () {
    createArray(arraySize.value);
});
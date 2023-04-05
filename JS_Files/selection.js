async function selection() {
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length; i++) {
        let index = i;
        ele[i].style.background = 'blue';
        for (let j = i + 1; j < ele.length; j++) {
            ele[j].style.background = 'red';
            await waitforme(delay);
            if (parseInt(ele[j].style.height) < parseInt(ele[index].style.height)) {
                if (index != i) {
                    ele[index].style.background = 'cyan';
                }
                index = j;
                ele[j].style.background = 'orange';
            }
            else {
                ele[j].style.background = 'cyan';
            }
        }
        await waitforme(delay);
        swap(ele[index], ele[i]);
        ele[index].style.background = 'cyan';
        ele[i].style.background = 'green';
    }
}

const SelectButton = document.querySelector(".SelectionSort");
SelectButton.addEventListener('click', async function () {
    DisableButtons();
    await selection();
    EnableButtons();
});
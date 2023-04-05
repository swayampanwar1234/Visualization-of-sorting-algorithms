async function Bubble() {
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length - 1; i++) {
        for (let j = 0; j < ele.length - i - 1; j++) {
            ele[j].style.background = 'blue';
            ele[j + 1].style.background = 'blue';
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                await waitforme(delay);
                swap(ele[j], ele[j + 1]);
            }
            await waitforme(delay / 2);
            ele[j].style.background = 'cyan';
            ele[j + 1].style.background = 'cyan';
        }
        ele[ele.length - i - 1].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

const BubbleButton = document.querySelector(".BubbleSort");
BubbleButton.addEventListener('click', async function () {
    DisableButtons();
    await Bubble();
    EnableButtons();
});
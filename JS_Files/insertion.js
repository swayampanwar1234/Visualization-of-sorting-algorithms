async function Insertion() {
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length; i++) {
        let j = i - 1;
        let key = ele[i].style.height;

        ele[i].style.background = 'blue';
        await waitforme(delay);
        while (j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))) {
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;
            await waitforme(delay);

            for (let k = i; k >= 0; k--) {
                ele[k].style.background = 'green';
            }

        }
        ele[j + 1].style.height = key;
        ele[i].style.background = 'green';
    }
}

const InsertButton = document.querySelector(".InsertionSort");
InsertButton.addEventListener('click', async function () {
    DisableButtons();
    await Insertion();
    EnableButtons();
});
async function Partition(ele, l, r) {//Lomuto
    let i = l - 1;
    ele[r].style.background = 'red';//pivot element
    for (let j = l; j <= r - 1; j++) {
        await waitforme(delay);

        ele[j].style.background = 'yellow';//current element

        if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
            i++;
            swap(ele[i], ele[j]);

            ele[i].style.background = 'orange';
            if (i != j) {
                ele[j].style.background = 'orange';
            }
            await waitforme(delay);
        }
        else {
            ele[j].style.background = 'pink';
        }
    }
    i++;
    await waitforme(delay);
    swap(ele[i], ele[r]);

    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';

    await waitforme(delay);

    for (let k = 0; k < ele.length; k++) {
        if (ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return i;
}

async function Quick(ele, l, r) {
    if (l < r) {
        let pivot = await Partition(ele, l, r);
        await Quick(ele, l, pivot - 1);
        await Quick(ele, pivot + 1, r);
    }
    else if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
        ele[r].style.background = 'green';
        ele[l].style.background = 'green';
    }
}

const QuickButton = document.querySelector(".QuickSort");
QuickButton.addEventListener('click', async function () {
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    DisableButtons();
    await Quick(ele, l, r);
    EnableButtons();
});
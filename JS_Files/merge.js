async function MergeSort(ele, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;

    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {
        await waitforme(delay);
        ele[low + i].style.background = 'orange';
        left[i] = ele[low + i].style.height;
    }

    for (let i = 0; i < n2; i++) {
        await waitforme(delay);
        ele[mid + 1 + i].style.background = 'yellow';
        right[i] = ele[mid + 1 + i].style.height;
    }

    await waitforme(delay);
    let i = 0, j = 0, k = low;

    while (i < n1 && j < n2) {
        await waitforme(delay);
        if (parseInt(left[i]) <= parseInt(right[j])) {

            if ((n1 + n2) === ele.length) {
                ele[k].style.background = 'green';
            }
            else {
                ele[k].style.background = 'lightgreen';
            }

            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else {

            if ((n1 + n2) === ele.length) {
                ele[k].style.background = 'green';
            }
            else {
                ele[k].style.background = 'lightgreen';
            }

            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }

    while (i < n1) {
        await waitforme(delay);

        if ((n1 + n2) === ele.length) {
            ele[k].style.background = 'green';
        }
        else {
            ele[k].style.background = 'lightgreen';
        }

        ele[k].style.height = left[i];
        i++;
        k++;
    }

    while (j < n2) {
        await waitforme(delay);

        if ((n1 + n2) === ele.length) {
            ele[k].style.background = 'green';
        }
        else {
            ele[k].style.background = 'lightgreen';
        }

        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function Merge(ele, l, r) {
    if (l >= r) {
        return;
    }
    const m = Math.floor((l + r) / 2);
    //console.log(`left=${l} mid=${m} right=${r}`);
    await Merge(ele, l, m);
    await Merge(ele, m + 1, r);
    await MergeSort(ele, l, m, r);
}

const MergeButton = document.querySelector(".MergeSort");
MergeButton.addEventListener('click', async function () {
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    DisableButtons();
    await Merge(ele, l, r);
    EnableButtons();
});
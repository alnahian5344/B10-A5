
// Donate for Flood at Noakhali, Bangladesh
document.getElementById('btn-donate-now').addEventListener('click', function () {
    const inputValueNoa = parseFloat(getInputID('input-donate-value-noa'));
    const statUpdateValueNoa = parseFloat(getStateInputId('sate-value-flood-noa'));
    const navStateUpdateValueAll = parseFloat(getStateInputId('nav-state-value'));
    if (isNaN(inputValueNoa) || inputValueNoa <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    const sateUpTotalValue = inputValueNoa + statUpdateValueNoa;
    const navStateTotalUpValue = navStateUpdateValueAll - inputValueNoa;
    document.getElementById('sate-value-flood-noa').innerText = sateUpTotalValue.toFixed(2);
    document.getElementById('nav-state-value').innerText = navStateTotalUpValue.toFixed(2);

    const date = new Date();
    const historyTextForShow = document.getElementById('hist-text-donate-noa').innerText;
    const historySection = document.getElementById('hist-section');
    const historyDiv = document.createElement('div');
    historyDiv.classList.add('mt-4', 'p-2', 'border', 'border-gray-300', 'rounded','font-bold','text-black');

    historyDiv.innerHTML = `
        <p>${inputValueNoa.toFixed(2)} Taka is, ${historyTextForShow}</p>
        <p>Date : ${date}</p> `;

    historySection.appendChild(historyDiv);
    document.getElementById('input-donate-value-noa').value = '';

    alert("Thank you for your generous donation!");
})

// Donate for Flood Relief in Feni,Bangladesh
document.getElementById('btn-donate-now-fenni').addEventListener('click', function () {
    const inputValueFenni = parseFloat(getInputID('input-donate-value-fenni'));
    const statUpdateValueFenni = parseFloat(getStateInputId('sate-value-flood-fenni'));
    const navStateUpdateValueAll = parseFloat(getStateInputId('nav-state-value'));
    if (isNaN(inputValueFenni) || inputValueFenni <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    const sateUpTotalValue = inputValueFenni + statUpdateValueFenni;
    const navStateTotalUpValue = navStateUpdateValueAll - inputValueFenni;
    document.getElementById('sate-value-flood-fenni').innerText = sateUpTotalValue.toFixed(2);
    document.getElementById('nav-state-value').innerText = navStateTotalUpValue.toFixed(2);

    const date = new Date();
    const historyTextForShow = document.getElementById('hist-text-donate-fenni').innerText;
    const historySection = document.getElementById('hist-section');
    const historyDiv = document.createElement('div');
    historyDiv.classList.add('mt-4', 'p-2', 'border', 'border-gray-300', 'rounded','font-bold','text-black');

    historyDiv.innerHTML = `
        <p>${inputValueFenni.toFixed(2)} Taka is, ${historyTextForShow}</p>
        <p>Date : ${date}</p> `;

    historySection.appendChild(historyDiv);
    document.getElementById('input-donate-value-fenni').value = '';

    alert("Thank you for your generous donation!");
})


// Aid for Injured in the Quota Movement
document.getElementById('btn-donate-now-aid').addEventListener('click', function () {
    const inputValueaid = parseFloat(getInputID('input-donate-value-aid'));
    const statUpdateValueaid = parseFloat(getStateInputId('sate-value-flood-aid'));
    const navStateUpdateValueAll = parseFloat(getStateInputId('nav-state-value'));
    if (isNaN(inputValueaid) || inputValueaid <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    const sateUpTotalValue = inputValueaid + statUpdateValueaid;
    const navStateTotalUpValue = navStateUpdateValueAll - inputValueaid;
    document.getElementById('sate-value-flood-aid').innerText = sateUpTotalValue.toFixed(2);
    document.getElementById('nav-state-value').innerText = navStateTotalUpValue.toFixed(2);

    const date = new Date();
    const historyTextForShow = document.getElementById('hist-text-donate-aid').innerText;
    const historySection = document.getElementById('hist-section');
    const historyDiv = document.createElement('div');
    historyDiv.classList.add('mt-4', 'p-2', 'border', 'border-gray-300', 'rounded','font-bold','text-black');

    historyDiv.innerHTML = `
        <p>${inputValueaid.toFixed(2)} Taka is, ${historyTextForShow}</p>
        <p>Date : ${date}</p> `;

    historySection.appendChild(historyDiv);
    document.getElementById('input-donate-value-noa').value = '';

    alert("Thank you for your generous donation!");
})
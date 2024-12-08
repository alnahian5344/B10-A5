
// Donate for Flood at Noakhali, Bangladesh
document.getElementById('btn-donate-now').addEventListener('click', function () {
    const inputValueNoa = parseFloat(getInputID('input-donate-value-noa'));
    const statUpdateValueNoa = parseFloat(getStateInputId('sate-value-flood-noa'));
    const navStateUpdateValueAll = parseFloat(getStateInputId('nav-state-value'));
    const sateUpTotalValue = inputValueNoa + statUpdateValueNoa;
    const navStateTotalUpValue = navStateUpdateValueAll - inputValueNoa;
    document.getElementById('sate-value-flood-noa').innerText = sateUpTotalValue.toFixed(2);
    document.getElementById('nav-state-value').innerText = navStateTotalUpValue.toFixed(2);

    const date = new Date();
    const historyTextForShow = document.getElementById('hist-text-donate-noa').innerText;
    const historySection = document.getElementById('hist-section');
    const historyDiv = document.createElement('div');
    historyDiv.classList.add('mt-4', 'p-2', 'border', 'border-gray-300', 'rounded');

    historyDiv.innerHTML = `
        <p>${inputValueNoa.toFixed(2)} Taka is, ${historyTextForShow}</p>
        <p>Date : ${date}</p> `;

    historySection.appendChild(historyDiv);
    document.getElementById('input-donate-value-noa').value = '';
})
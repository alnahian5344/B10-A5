
// Donate for Flood at Noakhali, Bangladesh
document.getElementById('btn-donate-now').addEventListener('click', function () {
    const inputValueNoa = parseFloat(getInputID('input-donate-value-noa'));
    const statUpdateValueNoa = parseFloat(getStateInputId('sate-value-flood-noa'));
    const navStateUpdateValueAll = parseFloat(getStateInputId('nav-state-value'));
    const sateUpTotalValue = inputValueNoa + statUpdateValueNoa;
    const navStateTotalUpValue = navStateUpdateValueAll - inputValueNoa;
    document.getElementById('sate-value-flood-noa').innerText = sateUpTotalValue.toFixed(2);
    document.getElementById('nav-state-value').innerText = navStateTotalUpValue.toFixed(2);
})
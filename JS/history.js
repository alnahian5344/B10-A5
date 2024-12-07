
// For History Button
document.getElementById('btn-history-rmv-class').addEventListener('click', function () {
    document.getElementById('btn-history-rmv-class').style.backgroundColor = ('rgb(180, 244, 97)');
    document.getElementById('btn-donation-rmv-class').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-donation-rmv-class').style.backgroundColor='';

})

// For Donation Button
document.getElementById('btn-donation-rmv-class').addEventListener('click',function(){
    document.getElementById('btn-donation-rmv-class').style.backgroundColor=('rgb(180, 244, 97)');
    document.getElementById('btn-history-rmv-class').style.backgroundColor='';
})


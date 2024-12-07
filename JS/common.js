
function getInputID(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue
}

function getStateInputId(id) {
    const sateInputValue = document.getElementById(id).innerText;
    return sateInputValue;
}


document.getElementById('btn-blog-home').addEventListener('click',function(){
    window.location.href = '/blog.html';
})



document.getElementById('btn-blog-blog').addEventListener('click', function() {
    window.location.href = '/index.html';
});



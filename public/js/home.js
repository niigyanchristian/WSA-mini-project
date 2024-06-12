document.addEventListener('DOMContentLoaded', function() {

    fetch('https://wsa-mini-project.onrender.com/products',{
        method:'get',
    }).then((data)=>{
        return JSON.stringify(data);
    }).then((data)=>{
    }).catch((e)=>{
        console.log(e);
    });
});
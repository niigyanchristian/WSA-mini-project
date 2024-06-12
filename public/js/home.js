document.addEventListener('DOMContentLoaded', function() {

    fetch('http://localhost:3000/products',{
        method:'get',
    }).then((data)=>{
        return JSON.stringify(data);
    }).then((data)=>{
    }).catch((e)=>{
        console.log(e);
    });
});
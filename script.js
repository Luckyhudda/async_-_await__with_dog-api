const box = document.querySelector('.box');
const buttun = document.querySelector('.btn');
const url = "https://dog.ceo/api/breeds/image/random";

function loadData(data){
    let update = data.message;
    let  img = document.createElement('img');
    img.src = update;
    box.append(img)
    
}



async function getData(){
    try{
        let data = await fetch(url);
        console.log(data);
        let finalResult = await data.json()
        console.log(finalResult)
        loadData(finalResult)
    }catch(err){
        console.log(err)
    }
}
getData()


// event on btn...
buttun.addEventListener('click', function(){
    location.reload();
})
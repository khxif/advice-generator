const URL = 'https://api.adviceslip.com/advice'
const title = document.querySelector(".title")
const qoute = document.querySelector('.qoute')
const refresh = document.querySelector('.circle')

 const advice = async(url)=>{
    const response = await fetch(url);
    var data = await response.json();
    qoute.innerHTML = data.slip.advice 
    title.innerHTML = 'ADVICE#'+data.slip.id
    console.log(data.slip.id);
 }
 advice(URL);

 refresh.addEventListener('click',()=>{
    advice(URL)
 })

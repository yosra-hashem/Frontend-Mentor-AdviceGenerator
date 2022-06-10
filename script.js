const adviceId = document.getElementById("adviceId");
const advicetext = document.getElementById("advicetext");
const btn = document.getElementById("btn");

function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then(
        response => {
            return response.json();
        }).then(adviceData => {
            const adviceNum = adviceData.slip.id;
            const advice = adviceData.slip.advice;

            adviceId.textContent = adviceNum;
            advicetext.textContent=advice;

        }).catch(error =>{
            console.log(error);
        });

}

btn.addEventListener('click', function(){
    getAdvice();
})

window.onload = () => {
    getAdvice();
}
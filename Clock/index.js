setInterval(setClock,1000);

const hourHand = document.querySelector('[hour-hand]');
const minuteHand = document.querySelector('[minute-hand]');
const secondHand = document.querySelector('[second-hand]');

function setClock(){
    const currentDate = new Date();
    const currentSecond = currentDate.getSeconds()/60;
    const currentMinute = (currentSecond + currentDate.getMinutes())/60;
    const currentHour = (currentMinute + currentDate.getHours())/12;

    setRotation(hourHand,currentHour);
    setRotation(minuteHand,currentMinute);
    setRotation(secondHand,currentSecond);

}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rot', rotationRatio*360)
}

setClock()
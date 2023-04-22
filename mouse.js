let pupils = document.getElementsByClassName('pupil');

let pupilsArr = Array.from(pupils);

let pupilStartPoint = -50;
let pupilRange = 100;

// MOUSE X POSITION

let mouseXStartPoint = 0;
let currentXPosition = 0;
let mouseXEndPoint = window.innerWidth;
let fracXValue = 0;

// MOUSE Y POSITION

let currentYPosition = 0;
let mouseYEndPoint = window.innerHeight;
let fracYValue = 0;

let mouseRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event)=>{
    currentXPosition = event.clientX - mouseXStartPoint;
    fracXValue = currentXPosition/mouseRange;

    currentYPosition = event.clientY;
    fracYValue = currentYPosition/mouseYEndPoint;

    let pupilXPosition = pupilStartPoint + (fracXValue*pupilRange);
    let pupilYPosition = pupilStartPoint + (fracYValue*pupilRange);

    pupilsArr.forEach((currPupil)=>{
        currPupil.style.transform = `translate(${pupilXPosition}px,${pupilYPosition}px)`;
    })

}
const windowResize = (event)=>{
mouseXEndPoint = window.innerWidth;
mouseRange = mouseXEndPoint - mouseXStartPoint;

mouseYEndPoint = window.innerHeight;
}

window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize',windowResize);
let counter = 0;
let getMin = 0;
let getSec = 0;


document.body.style.backgroundColor = 'green'


let container = document.createElement('div');
document.body.appendChild(container);
container.style.height = "100vh"
container.style.display = 'flex'
container.style.flexDirection = 'column'


let box = document.createElement('div');
container.appendChild(box);
box.style.borderRadius = '5px'


let div2 = document.createElement('div');
box.appendChild(div2);
div2.style.margin = '1rem'
div2.style.textAlign = 'center'

let div3 = document.createElement('div');
box.appendChild(div3);
div3.style.margin = '1rem'
div3.style.textAlign = 'center'


let minutes = document.createElement('input');
div2.appendChild(minutes);
minutes.setAttribute('placeholder', 'Input Minutes');
minutes.setAttribute('id', 'minutes');
minutes.style.margin = '5px'
minutes.style.borderRadius = '5px'
minutes.style.padding = '10px'


let seconds = document.createElement('input');
div3.appendChild(seconds);
seconds.setAttribute('placeholder', 'Input Seconds');
seconds.setAttribute('id', 'seconds');
seconds.style.margin = '5px'
seconds.style.borderRadius = '5px'
seconds.style.padding = '10px'


let div = document.createElement('div');
box.appendChild(div);
div.style.margin = '2rem'
div.style.textAlign = 'center'


let startBtn = document.createElement('button');
startBtn.textContent = "Start";
div.appendChild(startBtn);
startBtn.setAttribute('id', 'startbutton')
startBtn.style.border = "1px solid black"
startBtn.style.margin = '5px'
startBtn.style.borderRadius = '5px'
startBtn.style.padding = '10px'
startBtn.addEventListener('click', start)


let stopBtn = document.createElement('button');
stopBtn.textContent = "Stop";
div.appendChild(stopBtn);
stopBtn.style.border = "1px solid red"
stopBtn.style.margin = '5px'
stopBtn.style.borderRadius = '5px'
stopBtn.style.padding = '10px'
stopBtn.addEventListener('click', stop)

let h1 = document.createElement('h1');
box.appendChild(h1);
h1.setAttribute('id', 'h1');
h1.style.textAlign = 'center';
h1.style.color = 'white';


function start() {


    if (counter == 0 && document.getElementById('minutes') && document.getElementById('seconds')) {


        getMin = parseInt(document.getElementById('minutes').value);
        getSec = parseInt(document.getElementById('seconds').value);


        if (isNaN(getMin)) getMin = 0;
        if (isNaN(getSec)) getSec = 0;


        document.getElementById('minutes').value = getMin;
        document.getElementById('seconds').value = getSec;
        counter = 1;
        document.getElementById('startbutton').setAttribute('disabled', 'disabled');
    }


    if (getMin == 0 && getSec == 0) {
        counter = 0;
        document.getElementById('startbutton').removeAttribute('disabled');
        return false;
    }
    else {
        getSec--;
        if (getSec <= 0) {
            if (getMin > 0) {
                getSec = 59;
                getMin--;
            }
        }
    }
    document.getElementById('h1').innerHTML = getMin + "Min : " + getSec + " Sec";
    time = setTimeout('start()', 1000);
}

function stop() {
    clearTimeout(time)
    document.getElementById('resumebutton').removeAttribute('disabled');
}

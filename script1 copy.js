class Clock {
    constructor(element) {
        this.element = element;
    }
    render() {
        let time = new Date;
        let hours = time.getHours();
        this.element.innerHTML = `${hours}`
    };

};

class ClockFull extends Clock {
    render() {
        let time = new Date;
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds()
        this.element.innerHTML = `${hours}:${minutes}:${seconds}`
    };
};

class ClockForm extends Clock {
    render() {
        let time = new Date;
        let hours = time.getHours();
        let minutes = time.getMinutes();
        this.element.innerHTML = `${hours}:${minutes}`;
    };
};

let clockDisplayElement = document.querySelector(".clockpage")
let timeFull = new ClockFull (clockDisplayElement);
let timeForm = new ClockForm (clockDisplayElement);

clockDisplayElement.addEventListener('click', (event) =>{
event.target.classList.toggle('hidden')
  })

setInterval(() => {
    if (clockDisplayElement.classList.contains('hidden')) {
        timeForm.render();
    } else {
        timeFull.render();
    }
}, 100)


class Clock {
    constructor(element){
        this.element = element;
        }
        Run() {
            this.render();

        setInterval(() =>{
            this.render();
            }, 1000);
        }

        render() {
           let time = this.getTime();
           let minForm = time.minutes.toString().padStart(2,"0");
           let secForm = time.seconds.toString().padStart(2, "0")
           let timeForm = `${time.hour}:${minForm}`;
           let timeFull = `${time.hour}:${minForm}:${secForm}`;
           console.log(timeFull)
           
           if (clockDisplayElement.classList.contains('hidden')){
            this.element.innerHTML = timeForm;
            } else {
                this.element.innerHTML = timeFull;  
            }
        }

        getTime(){
            let now = new Date();
            return{
                hour: now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds()
            };
        }
        
    }
    class ClockForm extends Clock{
        constructor(element, timeForm){
            super(element, timeForm)
            this.element = element   
        }
        render(timeForm) {
            this.element.innerHTML = timeForm
            console.log(timeForm)         
        }      
    }
    
    class ClockFull extends Clock{
        constructor(element, timeFull){
            super(element, timeFull)
            this.element = element             
        }
      
        render(timeFull) {
            this.element.innerHTML = timeFull
            console.log(timeFull)   
        }
        Run() {
            this.render();

        setInterval(() =>{
            this.render();
            }, 1000);
        }
}
  
    let clockDisplayElement = document.querySelector(".clockpage");
    let clockObject = new ClockFull(clockDisplayElement);
  
    clockObject.Run();

    document.querySelector(".clockpage").addEventListener('click', (event) =>{
        event.target.classList.toggle('hidden');
    })
    let clockObject2 = new ClockForm(clockDisplayElement);
  
    clockObject2.Run();

    document.querySelector(".clockpage").addEventListener('click', (event) =>{
        event.target.classList.toggle('hidden');
    })



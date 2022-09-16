// class containing logic
class Game{
    //class properties
    foundCircles = 0;
    totalCircles = 0;
    searchColor = "#f7f714";
    normalColor = "#3199e8";
    gameZone = document.getElementById("gameZone");
    foundBar = new FoundBar();

constructor(){
//make circles
for(var i = 0;i < 25; i++){
    // defines element to be pulled for SVG
    let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    //create circle
    newCirc.classList.add("gameCirc");
    newCirc.setAttribute("cx", Math.random()*400);
    newCirc.setAttribute("cy", Math.random()*400);

    //randomly pick color for circle
    if(Math.random() < .3){
        //sets "looking for" color
        newCirc.dataset.hiddenColor = this.searchColor;
        this.totalCircles ++;
    }
    else {
        newCirc.dataset.hiddenColor = this.normalColor;
    }

    //mouse interaction events
    //creates mousover effect to display hiddenColor
    newCirc.addEventListener("mouseover", (event) => {
        event.target.style.fill = event.target.dataset.hiddenColor;
    })
    newCirc.addEventListener("mouseout", (event) => {
        event.target.style.fill = "#000";
    })
    //if user clicked looking for colored circle
    newCirc.addEventListener("click", (event) => {
       if(event.target.dataset.hiddenColor == this.searchColor){
        event.target.remove();

        //increment found circles
        this.foundCircles++;

        //update found UI
        this.foundBar.setPercent(this.foundCircles / this.totalCircles)
        }
    }) 


     
    //add circle to screen
    this.gameZone.appendChild(newCirc);
        }   

    }
}

class FoundBar{
    element = document.getElementById("foundBar")
    maxSize = 130;
    percent = 0;

    setPercent(percent){
        this.percent = percent;
        this.element.setAttribute("width", this.percent *this.maxSize);

    }
}


let g = new Game();

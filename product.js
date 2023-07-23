var images=document.querySelectorAll(".image");
var totalLength=images.length;
var preEvent=document.querySelector(".pre");
var nextEvent=document.querySelector(".next");
var sliderPosition=0;
function Event()
{
    images.forEach(image=>{
        image.classList.remove("active");
        image.classList.add("hidden");
    });
    images[sliderPosition].classList.add("active");
}
function previous()
{
    if(sliderPosition==0){
        sliderPosition=totalLength-1;
    }
    else{
        sliderPosition--;
    }
    Event();
}
function next()
{
    if(sliderPosition==totalLength-1){
        sliderPosition=0;
    }
    else{
        sliderPosition++;
    }
    Event();
}
preEvent.addEventListener("click",previous);
nextEvent.addEventListener("click",next);
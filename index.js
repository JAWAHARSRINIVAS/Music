var numberOfButtons = document.querySelectorAll(".drum").length;
console.log(numberOfButtons);

for(var i = 0;i<numberOfButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml = this.innerHTML;

        playSound(buttonInnerHtml);
        
    })
}

document.addEventListener("keypress",function(event){
    playSound(event.key);
})

function playSound(clickedbutton)
{
    buttonAnimation(clickedbutton);
    switch (clickedbutton)
        {
            case "w":
                var tom1= new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom1= new Audio("sounds/tom-2.mp3");
                tom1.play();
                break;
            case "s":
                var tom1= new Audio("sounds/tom-3.mp3");
                tom1.play();
                break;
            case "d":
                var tom1= new Audio("sounds/tom-4.mp3");
                tom1.play();
                break;
            case "j":
                    var tom1= new Audio("sounds/snare.mp3");
                    tom1.play();
                    break;
            case "k":
                    var tom1= new Audio("sounds/crash.mp3");
                    tom1.play();
                    break;
            case "l":
                    var tom1= new Audio("sounds/kick-bass.mp3");
                    tom1.play();
                    break;
            default:
                console.log(buttonInnerHtml);
        }
}

function buttonAnimation(clickedbutton)
{
    var activebutton = document.querySelector("."+clickedbutton);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },200)
}
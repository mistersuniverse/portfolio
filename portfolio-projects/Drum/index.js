// document.querySelector("button").addEventListener("click", listener)

// function listener() {
//     alert("clicked");
// }

drumButtons = document.querySelectorAll(".drum")

for (var count = 0; count < drumButtons.length ; count++) {
    drumButtons[count].addEventListener("click", function (){   // here, there is a anonymous function
        // var audio  = new Audio("./sounds/crash.mp3")
        // audio.play()

        // console.log(this);
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
       
    })
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case 'w':
            var audio  = new Audio("./sounds/crash.mp3")
            audio.play()
            break;
    
        case 'a':
            var audio  = new Audio("./sounds/kick-bass.mp3")
            audio.play()
            break;
    
        case 's':
            var audio  = new Audio("./sounds/snare.mp3")
            audio.play()
            break;
    
        case 'd':
            var audio  = new Audio("./sounds/tom-1.mp3")
            audio.play()
            break;
    
        case 'j':
            var audio  = new Audio("./sounds/tom-2.mp3")
            audio.play()
            break;
    
        case 'k':
            var audio  = new Audio("./sounds/tom-3.mp3")
            audio.play()
            break;
    
        case 'l':
            var audio  = new Audio("./sounds/tom-4.mp3")
            audio.play()
            break;
    
        default:
            console.log(this.innerHTML)
            break;
    }
} 

// function hello() {
//     alert("hello!");
// }

// document.addEventListener("keydown", hello())

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("."+currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed")
    }),
    100
}
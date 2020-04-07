// This line finds first button in our document and then it adds an eventlistener to that button so that it listens
// for clicks that happen on that button in turn running the function handleclick
//document.querySelector("button").addEventListener("click",handleClick);

// to add eventlistener click to all the buttons
var i;
for(i = 0 ; i < document.querySelectorAll(".drum").length ; i++)
{
  // Document query selector me html tag lena sahi nhi kyuki neeche bhi koi button ho sakta, isliye class li gyi hai
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick()
{
  //this.style.color = "white";
  //console.log(this.innerHTML);
  makesound(this.innerHTML);
  buttonanimation(this.innerHTML);
}
// to add eventlistener to keypress
document.addEventListener("keydown",function(event) {
    makesound(event.key);
    buttonanimation(event.key);
  })

// utility function to produce sound
function makesound(key)
{
  switch (key)
  {
    case 'w': audio = new Audio("sounds/tom-1.mp3");break;
    case 'a': audio = new Audio("sounds/tom-2.mp3");break;
    case 's': audio = new Audio("sounds/tom-3.mp3");break;
    case 'd': audio = new Audio("sounds/tom-4.mp3");break;
    case 'j': audio = new Audio("sounds/snare.mp3");break;
    case 'k': audio = new Audio("sounds/crash.mp3");break;
    case 'l': audio = new Audio("sounds/kick-bass.mp3");break;
    default: console.log(event.key);

  }
  audio.play();
}

// Animation to apply
function buttonanimation(currentKey)
{
  document.querySelector("." + currentKey).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);

}

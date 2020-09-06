var num = document.querySelectorAll(".drum");
for(var i=0; i<num.length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonContent = this.innerHTML;
    makeSound(buttonContent);
    btnAnimation(buttonContent);

})
}
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  btnAnimation(event.key);
});
function makeSound(key)
{
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "j":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "k":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    default:
      break;
  }
}
function btnAnimation(btnPressed)
{
  var btn = document.querySelector("." + btnPressed);
  btn.classList.add("pressed");
  setTimeout(function(){
    btn.classList.remove("pressed");
  },100);
}

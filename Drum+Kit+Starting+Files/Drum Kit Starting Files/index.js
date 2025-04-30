   var beats = document.querySelectorAll('.drum')
    // detect click
    for(i=0;i<beats.length;i++){
    document.querySelectorAll('button')[i].addEventListener('click', function(){
        // alert("i've got clicked" );

        // var audio = new Audio('./sounds/tom-1.mp3');
        // audio.play()
    
        // console.log(this)
        // this.style.color = 'white'
        var button = this.innerHTML;
        makeSound(button);
        animationButton(button);

        // switch(button){
        //   case 'j':
        //     var tom1 = new Audio('./sounds/tom-1.mp3');
        //     tom1.play();
        //   break

        //   case 'l':
        //     var tom2 = new Audio('./sounds/tom-2.mp3');
        //     tom2.play();
        //   break

        //   case 'k':
        //     var tom3 = new Audio('./sounds/tom-3.mp3');
        //     tom3.play();
        //   break

        //   case 'd':
        //     var tom4 = new Audio('./sounds/tom-4.mp3');
        //     tom4.play();
        //   break

        //   case 'w':
        //     var crash = new Audio('./sounds/crash.mp3');
        //     crash.play();
        //   break

        //   case 's':
        //     var snare = new Audio('./sounds/snare.mp3');
        //     snare.play();
        //   break

        //   case 'a':
        //     var kickBass = new Audio('./sounds/kick-bass.mp3');
        //     kickBass.play();
        //   break
        //   default:
        //     console.log(this.innerHTML)
        // }
      })
    ;}
// detect keypress
document.addEventListener('keydown', function(event){

  makeSound(event.key);
  animationButton(event.key);
  // console.log(event)
  // alert('hi')
  // switch(event.key){
  //   case 'j':
  //     var tom1 = new Audio('./sounds/tom-1.mp3');
  //     tom1.play();
  //   break

  //   case 'l':
  //     var tom2 = new Audio('./sounds/tom-2.mp3');
  //     tom2.play();
  //   break

  //   case 'k':
  //     var tom3 = new Audio('./sounds/tom-3.mp3');
  //     tom3.play();
  //   break

  //   case 'd':
  //     var tom4 = new Audio('./sounds/tom-4.mp3');
  //     tom4.play();
  //   break

  //   case 'w':
  //     var crash = new Audio('./sounds/crash.mp3');
  //     crash.play();
  //   break

  //   case 's':
  //     var snare = new Audio('./sounds/snare.mp3');
  //     snare.play();
  //   break

  //   case 'a':
  //     var kickBass = new Audio('./sounds/kick-bass.mp3');
  //     kickBass.play();
  //   break
  //   default:
  //     console.log(this.event)
  // };
})

function makeSound(key){
  switch(key){
    case 'j':
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
    break

    case 'l':
      var tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
    break

    case 'k':
      var tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
    break

    case 'd':
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
    break

    case 'w':
      var crash = new Audio('./sounds/crash.mp3');
      crash.play();
    break

    case 's':
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
    break

    case 'a':
      var kickBass = new Audio('./sounds/kick-bass.mp3');
      kickBass.play();
    break
    default:
      console.log(key)
  }
}

function animationButton(key){
  document.querySelector("." + key).classList.add('pressed');
 setTimeout(function(){document.querySelector("."+key).classList.remove('pressed')}, 100);
}
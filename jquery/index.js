// change style
$('H1').css('color')  //  getting the attribute value
$('H1').css('color', 'blue')  //  setting the attribute value   
$('H1').addClass('big-title big-margin')
// $('H1').hasCLass('big-margin')
// $('H1').removeCLass('big-margin')

// change text 
$('button').text("Hi");
$('button').html('<em>hi</em>') // incorporate html tags 

// change attributes
$("a").attr('href', 'https://discord.com/') // setting attribute
$("a").attr('href') // getting attribute

// change events 
// $("button").click(function(){
//     $('H1').css('color', 'purple');
// })

$("input").keypress(function(event){
    console.log(event.key);
})

$(document).keypress(function(event){
    console.log(event.key);
    $("h1").text(event.key);
})
$("H1").on('mouseover', function(){
    $('H1').css('color', 'yellow');
    setTimeout(function(){
        $('H1').css('color', 'blue');
    }, 500)
})

// add and remove elements
$('input').remove()
$('h1').before("<button>before outside element</button>")
$('h1').after("<button>after outside element</button><br>")
$('h1').prepend("<button>before inside element</button>")
$('h1').append("<button>afer inside element</button>")

// animate 
// $('h1').show() $('h1').hide() $('h1').toggle()
// $('h1').fadeOut() $('h1').fadeIn() $('h1').fadeToggle()
//$('h1').slideDown() $('h1').slideUp() $('h1').slideToggle()

$('button').on('click', function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5 }); //css numeric values only
})
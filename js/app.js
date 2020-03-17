/* Project 4 - OOP Game App
* app.js */
let game = new Game(0, ['word', 'yash face', 'big bird', 'quake', 'meatball sub sandwhich'])
//below code resets the game
$('#peter').hide()
$('#btn__reset').click(()=>{
    $('ul').remove()
    $('#phrase').append('<ul></ul>')

    $('.key').attr("disabled", false)
    $('.key').removeClass('chosen')
    $('.key').removeClass('wrong')

    $('ol').remove()
    $('#scoreboard').append('<ol></ol>')
    for(let _=0; _<5;_=_+1){
        $('ol').append("<li class='tries'><img src='images/liveHeart.png' alt='Heart Icon' height='35' width='30'></li>")
    }


    

    $('#overlay').fadeOut()
    game.startGame()
    
    
})
//triggers handleInteraction when a key is clicked or pressed
document.addEventListener('keyup', (event)=>{
    game.handleInteraction(event.key)
    console.log(game.missed)
    
})

document.addEventListener('click', (event)=>{
    game.handleInteraction(event.target.innerText)
    console.log(game.missed)
})


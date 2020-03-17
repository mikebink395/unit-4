/* Project 4 - OOP Game App
 * Game.js */

 /**
  * Handles all game actions and game logic
  *
  * @class Game
  */
 class Game{
     /**
      *Creates an instance of Game.
      * @param {*} missed
      * @param {*} phrases
      * @param {*} [activePhrase=null]
      * @memberof Game
      */
     constructor(missed, phrases, activePhrase=null){
         this.missed=missed
         this.phrases=phrases
         this.activePhrase=activePhrase
     }

    /**
     * starts game and creates a new active phrase
     * 
     * @memberof Game
     */
    startGame(){
        $('#peter').hide()
        this.activePhrase=new Phrase(this.getRandomPhrase)
        this.activePhrase.addPhraseToDisplay()
     }

     /**
      * gets a random phrase from the provided phrases
      *
      * @readonly
      * @memberof Game
      */
     get getRandomPhrase(){
        return this.phrases[Math.floor(Math.random()*5)]
     }

     /**
      * disables or chooses button based on what key is pressed or clicked
      * trigers gameOver() if the player wins or loses
      *
      * @param {*} letter
      * @memberof Game
      */
     handleInteraction(letter){
        console.log(this.activePhrase)
        $('.key').each((index, el)=>{
            if(el.innerText==letter){
                $(el).attr("disabled", true)
                if(this.activePhrase.checkLetter(letter)){
                    $(el).addClass('chosen')
                    this.activePhrase.showMatchedLetter(letter)
                    if(this.checkForWin()){
                        this.gameOver('You Win!')
                        $('#peter').fadeIn(8000)
                    }
                }else{
                    $(el).addClass('wrong')
                    this.removeLife()
                    
                }
            }
        })
        
            
        
     }

     /**
      * removes a life if user chooses a letter not in the pohrase
      *
      * @memberof Game
      */
     removeLife(){
        $('.tries').children()[this.missed].src='images/lostHeart.png'
        this.missed+=1
        if(this.missed>=5){
            this.gameOver('You Lose!')
        }
     }

     /**
      * checks to see if the user won
      *
      * @returns boolean
      * @memberof Game
      */
     checkForWin(){
        return $(`li.show`).length+$('li.space').length==this.activePhrase.phrase.length
     }

    /**
     *  brings up the winning or losing screen
     *
     * @param {*} message
     * @memberof Game
     */
    gameOver(message){
        document.getElementById("game-over-message").innerText=message
        $('#overlay').show()
        this.missed=0
    }
 }
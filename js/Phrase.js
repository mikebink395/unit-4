/* Project 4 - OOP Game App
 * Phrase.js */

/**
 * Holds the phrase
 * Can add the phrase to the Display and Letter 
 * @class Phrase
 */
class Phrase{
    /**
     *Creates an instance of Phrase.
     * @param {*} phrase
     * @memberof Phrase
     */
    constructor(phrase){
        this.phrase=phrase.toLowerCase()
    }

    /**
     * Creates the boxes for the phrase on the screen
     *
     * @memberof Phrase
     */
    addPhraseToDisplay(){
        for(let letter of this.phrase){
            if(letter!==' '){
                $(`#phrase`).children().first().append(`<li class="hide letter ${letter}">${letter}</li>`)
            }else{
                $(`#phrase`).children().first().append("<li class='space'> </li>")
            }
        }
        

        
    }

    /**
     *  Returns true or false if the phrase does or does not contain the letter
     *
     * @param {*} letter
     * @returns boolean
     * @memberof Phrase
     */
    checkLetter(letter){
        return this.phrase.indexOf(letter)>=0
    }

    /**
     * reveals the pressed letter on the proper html element
     *
     * @param {*} letter
     * @memberof Phrase
     */
    showMatchedLetter(letter){
        $(`li.hide.letter.${letter}`).each((ind, el)=>{
            $(el).removeClass(`hide letter ${letter}`)
            $(el).addClass('show')
            
        })
    }
}
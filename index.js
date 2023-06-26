import dogsData from './data.js'
import Dog from './Dog.js'

const dogProfile = document.getElementById('dog-profile')
const like = document.getElementById('like')
const reject = document.getElementById('reject')

const likeBtn = document.getElementById('heart-button')
const rejectBtn = document.getElementById('reject-button')

const Rex = new Dog(dogsData.rex)
const Bella = new Dog(dogsData.bella) 
const Teddy = new Dog(dogsData.teddy)


// Dogs Array 
let dogsArray = [Rex, Bella, Teddy]

                        
let liked = dogsData.hasBeenLiked
let swiped = dogsData.hasBeenSwiped

render()
 
 
// This function displays the Like Sticker on the dog image
function showLike(){
    liked = true
    if(liked){
        rejectBtn.disabled = true 
        like.style.display = 'inline'  
    } 
    
    setTimeout(()=>{
    dogsArray.shift()
    like.style.display = 'none'
    rejectBtn.disabled = false
    render()  
    }, 700)
    
}

// This function displays the Nope Sticker on the dog image
function showNope(){
    swiped = true
    if(swiped){
        likeBtn.disabled = true 
        reject.style.display = 'inline'  
    } 
    
    setTimeout(()=>{
            dogsArray.shift()
            reject.style.display = 'none'
            likeBtn.disabled = false
             render()
        }, 700)
        
}

           
// Like Button
likeBtn.addEventListener('click',function(){
    showLike()
})

// Reject/Cross Button
rejectBtn.addEventListener('click',function(){
    showNope()
})

// This function dsiplays the final div 
function getPremium(){
    document.getElementById('modal').style.display = 'inline'
}

//This function renders the blur image
function endGame(){
         likeBtn.disabled = true
         rejectBtn.disabled = true
         document.getElementById('dog-profile').innerHTML=
         `<img class="jordan-img" src="images/dog-jordan.jpg"
          alt="Get Premium Label">
                <div class="jordan-info">
                    <h1 id="title">Jordan, 9</h1>
                    <h2 id="how-you-doin">Exuberant and Funny</h2>  
                </div>`
                
         getPremium()
    }


// renders all the content to html 
function render(){
    return dogsArray.length > 0 ? dogProfile.innerHTML = dogsArray[0].getDogHtml() 
    
    : endGame()
    
   
        
}





   
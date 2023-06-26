// Dogs Class 

class Dog{
    constructor(data){
        Object.assign(this, data)
    } 
    
    getDogHtml(){
        const {name, avatar, age, bio} = this
        
        return `
                <img class="dog-img" src="${avatar}" alt="Doge Image">
                <div class="profile-info">
                    <h1 id="title">${name}, ${age}</h1>
                    <h2 id="how-you-doin">${bio}</h2>  
                </div>`
    }
}     

export default Dog
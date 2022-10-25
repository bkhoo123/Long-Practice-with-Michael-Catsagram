//! Might Need Async on this

const ul = document.createElement("ul")
ul.id = "comment-Body"
document.body.appendChild(ul)



const addCat = () => {
    const newCat = document.getElementById("newCat") 
    newCat.addEventListener("click", async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search")
    
    const data = await res.json()

    const url = data[0].url
    let split = url.split("/")
        let catImage = split[4]
    
        console.log("cat Image", catImage)
        
        const body = document.querySelector("body")
    
        const span = document.createElement("span")
        const img = document.createElement('img')
        
    
        img.setAttribute("src", url)
        img.id = catImage
    
        body.append(img)
    })
}


//? 1: find user input
//? 2: Store user input as data? 
//? 3: append it to paragraph?



const addComment = () => {
    
    // const userInput = document.getElementById("userInput")
    const commentBody = document.getElementById("comment-Body")
    
        const li = document.createElement("li")
        
        li.innerText = userInput.value
        commentBody.appendChild(li)
}
const comment = document.getElementById("comments")
comment.addEventListener("click", () => {
    addComment()
})




window.onload = async () => {
    addCat()
    
}


// window.onload purpose is store multiple single functions


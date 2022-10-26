import {createImage} from './catImage.js';
import {addCat} from './button.js'


const initializePage = () => {
    // create a container
    const container = document.createElement('section');
    container.className = 'container';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.gap = '25px';
    // container.style.flexWrap = "wrap"
  
    // container.innerText = 'Cat # 1';
    document.body.appendChild(container);
  };


//? Comments User Input Adds to the top of the page
const ul = document.createElement("ul")
ul.id = "comment-Body"
document.body.appendChild(ul)


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










window.onload = () => {
    initializePage()
    createImage()
    console.log("this is loading")
    addCat()
    
}


// window.onload purpose is store multiple single functions


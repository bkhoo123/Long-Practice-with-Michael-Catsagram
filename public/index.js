// import {createImage} from './catImage.js';
import {addCat} from './button.js'
import {votes} from './button.js'
import {erase} from './button.js'
import { buildStorage } from "./storage.js";
import { clearStorageValues } from "./storage.js";




const initializePage = async () => {
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
    const img = document.createElement('img');
    img.style.width = '500px'
    img.style.height = '500px'
    img.setAttribute("src", await addCat())
    img.id = 'catImage'
    container.appendChild(img)

    const placeHolderText = document.createElement("placeHolder");
    const clickContainer = document.getElementById("click-container");
    const commentBody = document.getElementById("comment-Body");
    const midContainer = document.getElementById("midContainer")
    const lastContainer = document.getElementById("lastContainer")



    placeHolderText.innerText = clickContainer;
    container.append(clickContainer);
    container.append(midContainer)
    container.append(lastContainer)
    container.append(commentBody);
}


//? Comments User Input Adds to the top of the page
const ul = document.createElement("ul")
ul.id = "comment-Body"
document.body.appendChild(ul)

const addComment = () => {

    const commentBody = document.getElementById("comment-Body")

    const li = document.createElement("li")

    li.innerText = userInput.value

    commentBody.appendChild(li)

    userInput.value = "";
}

const comment = document.getElementById("comments")
comment.addEventListener("click", () => {
    addComment()
})

window.onload = () => {
    initializePage()
    addCat()
    votes()
    erase()
    buildStorage()
    clearStorageValues()
}


// window.onload purpose is store multiple single functions

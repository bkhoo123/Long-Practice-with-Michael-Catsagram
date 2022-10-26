//? Adds a cat in the middle of the page
export const addCat = () => {
    const newCat = document.getElementById("newCat") 
    newCat.addEventListener("click", async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search")
    
    const data = await res.json()

    const url = data[0].url
    let split = url.split("/")
        let catImage = split[4]
    
        console.log("cat Image", catImage)
        
        const body = document.querySelector("body")
    
        const img = document.createElement('img')

        const container = document.querySelector(".container")
        
        img.style.width = '500px'
        img.style.height = '500px'
    
        img.setAttribute("src", url)
        img.id = catImage
        container.appendChild(img)
        
    })
}


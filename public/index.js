// Your code here

// async function () => {

// }


// fetch("https://thecatapi.com", {
//     method: "GET",
//     headers: {"Content-Type": "application/json"},
// })


const fetchingFunction = async () =>  {
    const res = await fetch ("https://api.thecatapi.com/v1/images/search")
    const data = await res.json()
    console.log(data[0])

    const url = data[0].url
    let split = url.split("/")
    let catImage = split[4]

    console.log("cat Image", catImage)
    
    const body = document.querySelector("body")

    const span = document.createElement("span")

    img.setAttribute("src", url)
    img.id = catImage

} 

window.onload = async () => {
    fetchingFunction()
}


// window.onload purpose is store multiple single functions


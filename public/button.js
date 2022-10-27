//? Adds a cat in the middle of the page
export const addCat = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search")

    const data = await res.json()

    const catImage = data[0].url
    // let split = url.split("/")
    // let catImage = split[4]
    localStorage.getItem("catImage");
    localStorage.setItem("catImage", catImage)


    console.log("cat Image", catImage)

    return catImage;
}

let clicks = 0;
let clicksTwo = 0;
const like = document.getElementById("up-vote");
const disLike = document.getElementById("down-vote");
const count = document.getElementById("clicked-count");
const unpopularityCount = document.getElementById("clicked");

export const votes = () => {

    like.addEventListener("click", event => {
        clicks += 1;
        localStorage.setItem("likes", clicks)
        count.innerHTML = clicks;
    });

    disLike.addEventListener("click", event => {
        clicksTwo += 1;
        localStorage.setItem("dislikes", clicksTwo)
        unpopularityCount.innerHTML = clicksTwo;
    });

}

newCat.addEventListener("click", async () => {
    let catImage = document.getElementById("catImage");
    catImage.src = await addCat();
    clicks = 0;
    count.innerHTML = clicks;
})

export const erase = () => {
    const eraser = document.getElementById("delete");
    eraser.addEventListener("click", event => {
        const deleteComment = document.querySelector("li")
        deleteComment.remove();
    });
}

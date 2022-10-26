//? Adds a cat in the middle of the page
export const addCat = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search")

    const data = await res.json()

    const url = data[0].url
    let split = url.split("/")
    let catImage = split[4]

    console.log("cat Image", catImage)

    return url;
}

let clicks = 0;
const like = document.getElementById("up-vote");
const disLike = document.getElementById("down-vote");
const count = document.getElementById("clicked-count");

export const votes = () => {

    like.addEventListener("click", event => {
        clicks += 1;
        count.innerHTML = clicks;
    });

    disLike.addEventListener("click", event => {
        clicks -= 1;
        count.innerHTML = clicks;
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

// variables
const btn = document.getElementById("btn");
const pic = document.getElementById("picture");
const paragraph = document.getElementById("default");
// api set
const url = "https://dog.ceo/api/breeds/image/random";
// fetch api
let getPic = ()=> {
    fetch(url)
    .then(data=> data.json())
    .then(send=> {
        paragraph.remove();
        var image = document.createElement("img");
        pic.append(image);
        image.src = send.message;
        image.classList.add("image")
    })
}
// event listener for button click
btn.addEventListener("click", clickbtn);
function clickbtn() {
    getPic()
    paragraph.remove();
    var image = document.createElement("img");
    pic.append(image);
    image.src = send.message;
}

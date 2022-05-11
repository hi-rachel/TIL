const h1 = document.querySelector(".hello h1");


function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor= "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

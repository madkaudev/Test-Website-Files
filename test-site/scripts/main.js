// Image switcher
const madKauLogo = document.querySelector("img");

madKauLogo.onclick = () => {
    const imgSrc = madKauLogo.getAttribute("src");
    if (imgSrc === "images/mad-kau-dev-logo.png") {
        madKauLogo.setAttribute("src", "images/mad-kau-dev-logo-alt.png");
    }
    else {
        madKauLogo.setAttribute("src", "images/mad-kau-dev-logo.png");
    }
};

// User name welcome message
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let userName = prompt("Set your name");
    if (!userName) {
        setUserName();
    }
    else {
        sessionStorage.setItem("name", userName);
        myHeading.textContent = `${userName} strongly believes:`;
    }
}

if (!sessionStorage.getItem("name")) {
    setUserName();
}
else {
    let storedName = sessionStorage.getItem("name");
    myHeading.textContent = `${storedName} strongly believes:`;
}

myButton.onclick = function() {
    setUserName();
}

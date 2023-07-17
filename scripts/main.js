const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images\\index_home_image.jpg") {
    myImage.setAttribute("src", "images\\index_home_image_change.jpg");
  } else {
    myImage.setAttribute("src", "images\\index_home_image.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("What's your name?");
  if(!myName){
    setUserName();
  }else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to hinoyo room! Mr. ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to hinoyo room! ${storedName}さんゆっくりしていってね`;
}

myButton.onclick = () => {
  setUserName();
};




  
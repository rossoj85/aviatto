// Your code here
console.log("hey  homei")

const header = document.getElementsByTagName("header")[0]
const targetPosition = document.getElementById("start-logo").getBoundingClientRect().y;

console.log(targetPosition)
window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    

    if(scrollPosition>=targetPosition) header.classList.add("active");
    if(scrollPosition<targetPosition) header.classList.remove("active");
  });

const imageArray = document.getElementsByClassName("carousel-image");

let currentImageIndex = 0;  
const carouselImages = document.querySelectorAll(".carousel-image");  

setInterval(() => {  
    imageArray[currentImageIndex].classList.add("hidden");
    currentImageIndex++
    if(currentImageIndex>carouselImages.length-1) currentImageIndex=0
    imageArray[currentImageIndex].classList.remove("hidden")
}, 2000);

console.log('IMAGE ARRAY - ',imageArray)

console.log(header)
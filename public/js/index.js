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

console.log('IMAGE ARRAY - ',imageArray)

console.log(header)
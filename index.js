const gradientCursor=document.getElementById("gradient-cursor")
const navLinks=document.querySelectorAll(".app__intro__navigation-link")
const navLines=document.querySelectorAll(".app__intro__navigation-item")
// console.log(gradientCursor);
var active=0;
navLinks[active].firstElementChild.classList.add("active-link")

const options=["HOME","EXPERIENCE","PROJECTS"]

const activateNavigation=(e)=>{

    active=options.indexOf(e.target.innerText)
}
console.log(navLinks)
for(var i=0;i<navLinks.length;i++){

    navLinks[i].addEventListener("click",activateNavigation)
    
}

window.addEventListener("mousemove",(e)=>{
    const x=e.clientX + document.body.scrollLeft
    const y=e.clientY + document.body.scrollTop



    gradientCursor.style.transform=`translate3d(${x}px,${y}px,0)`;
})


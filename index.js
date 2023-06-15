const gradientCursor=document.getElementById("gradient-cursor")
const navLinks=document.querySelectorAll(".app__intro__navigation-link")
// console.log(gradientCursor);
var active=0;
navLinks[active].firstElementChild.style.backgroundColor="white";
navLinks[active].firstElementChild.style.width="120px";
navLinks[active].lastElementChild.style.color="white"

const options=["HOME","EXPERIENCE","PROJECTS"]

const activateNavigation=(e)=>{
    navLinks[active].firstElementChild.style.backgroundColor="#64748b";
    navLinks[active].firstElementChild.style.width="80px";
    navLinks[active].lastElementChild.style.color=" #64748b"
    active=options.indexOf(e.target.innerText)
    navLinks[active].firstElementChild.style.backgroundColor="white";
    navLinks[active].firstElementChild.style.width="120px";
    navLinks[active].lastElementChild.style.color="white"
}
console.log(navLinks)
for(var i=0;i<navLinks.length;i++){

    navLinks[i].addEventListener("click",activateNavigation)
    
}

window.addEventListener("mousemove",(e)=>{
    const x=e.clientX + window.scrollX;
    const y=e.clientY + window.scrollY;



    gradientCursor.style.transform=`translate3d(${x}px,${y}px,0)`;
})


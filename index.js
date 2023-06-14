const gradientCursor=document.getElementById("gradient-cursor")
// const navLinks=document.querySelectorAll(".app__intro__navigation-link")

// // console.log(gradientCursor);
// var active=0;

// console.log(navLinks)
// for(var i=0;i<navLinks.length;i++){

//     navLinks[i].addEventListener("click",()=>{
    
            
//     })
    
// }

// console.log(document.getElementById("gradient-cursor"))

window.addEventListener("mousemove",(e)=>{
    const x=e.clientX + document.body.scrollLeft
    const y=e.clientY + document.body.scrollTop



    gradientCursor.style.transform=`translate3d(${x}px,${y}px,0)`;
})


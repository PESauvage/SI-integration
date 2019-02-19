const dot = document.querySelector(".dot")
const dot2 = document.querySelector(".dot2")
let frame1 = document.querySelectorAll(".frame1")
let frame2 = document.querySelectorAll(".frame2")

console.log(dot)
console.log(frame1)

dot.addEventListener('click', function(){
    frame1[0].style.display='block'
    frame1[1].style.display='block'
    frame2[0].style.display='none'
    frame2[1].style.display='none'
    dot.style.opacity='0.2'
    dot2.style.opacity='1'
} )
dot2.addEventListener('click', function(){
    frame1[0].style.display='none'
    frame1[1].style.display='none'
    frame2[0].style.display='block'
    frame2[1].style.display='block'
    dot2.style.opacity='0.2'
    dot.style.opacity='1'
} )
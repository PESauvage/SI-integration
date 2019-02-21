// DÉCLARATION DES VARIABLES---------------
const dot = document.querySelector(".dot")
const dot2 = document.querySelector(".dot2")
let frame1 = document.querySelectorAll(".frame1")
let frame2 = document.querySelectorAll(".frame2")
const lang = document.querySelectorAll(".lang")
// ______________________________________________

// à mettre en place pour init les dot

// if (frame1[0].style.opacity='1'){
//     dot.style.opacity='1'
//     dot2.style.opacity='0.1'
// }
// else{
//     dot.style.opacity='0.1'
//     dot2.style.opacity='1'
// }



dot.addEventListener('click', function () {
    frame2[0].style.transition = "all 0.1s linear 0s"
    frame2[1].style.transition = "all 0.1s linear 0s"
    frame1[0].style.transition = "all 0.3s linear 0.2s"
    frame1[1].style.transition = "all 0.3s linear 0.2s"

    frame1[0].style.left = '0%'

    frame2[0].style.left = '40px'


    frame2[0].style.opacity = '0'
    frame2[1].style.opacity = '0'
    frame1[0].style.opacity = '1'
    frame1[1].style.opacity = '1'
    dot.style.opacity = '1'
    dot2.style.opacity = '0.3'

})


dot2.addEventListener('click', function () {
    frame1[0].style.transition = "all 0.1s linear 0s"
    frame1[1].style.transition = "all 0.1s linear 0s"
    frame2[0].style.transition = "all 0.3s linear 0.2s"
    frame2[1].style.transition = "all 0.3s linear 0.2s"

    frame1[0].style.left = '40px'

    frame2[0].style.left = '14%'


    frame1[0].style.opacity = '0'
    frame1[1].style.opacity = '0'
    frame2[0].style.opacity = '1'
    frame2[1].style.opacity = '1'
    dot2.style.opacity = '1'
    dot.style.opacity = '0.3'
})



// setInterval(function(){
//     if(frame1.style.opacity=="1"){
//         frame1[0].style.display='none'
//         frame1[1].style.display='none'
//         frame2[0].style.display='block'
//         frame2[1].style.display='block'
//         dot2.style.opacity='0.2'
//         dot.style.opacity='1'
//     }
//     else if(frame1.style.opacity=="0"){
//         frame1[0].style.display='block'
//         frame1[1].style.display='block'
//         frame2[0].style.display='none'
//         frame2[1].style.display='none'
//         dot.style.opacity='0.2'
//          dot2.style.opacity='1'
//     }
// },5000)
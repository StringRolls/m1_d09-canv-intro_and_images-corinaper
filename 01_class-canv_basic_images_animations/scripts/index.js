const canvas = document.getElementById("canvas")

const context = canvas.getContext("2d")



 //top, left,down

canvas.addEventListener("mousemove", drawLine)

// function drawLine(event){

// context.clearRect(0,0, context.canvas.width, context.canvas.height)
// context.beginPath()
// context.lineWidth = 6
// context.strokeStyle = "orange"
// context.moveTo(50,50)
// context.lineTo(event.clientX,event.clientY)
// context.stroke()
// context.closePath()

// 
// }

let frameId = 0
function draw(){
    context.font = "24px monospace"
    context.fillText("Hello", 10,50)
    context.fillText("Hey again", 0,55)
    frameId = window.requestAnimationFrame(draw)

}

console.log(window.requestAnimationFrame(draw))

document
  .getElementById("stop-frames")
  .addEventListener("click", () => window.cancelAnimationFrame(frameId));
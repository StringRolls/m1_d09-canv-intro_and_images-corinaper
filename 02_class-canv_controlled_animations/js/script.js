// controlledApp.init('myCanvas')

const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d")

const basketBall = new Image()

basketBall.scr = "../img/ball.png"

basketBall.onload = () =>ctx.drawImage(basketBall, 0, 0, 50, 50)


let frameId = 0;

const objects = [
    {
      img: basketBall,
      speedX: 5,
      width: 50,
      height: 50,
    },
  ];

  function draw() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.width);
    objects.forEach((obj) =>
      ctx.drawImage(obj.img, frameId * obj.speedX, 100, obj.width, obj.height)
    );
    frameId = window.requestAnimationFrame(draw);
  }
  
  window.requestAnimationFrame(draw);
  
  window.addEventListener("keydown", () =>
    objects.push({
      img: basketBall,
      speedX: 5,
      width: 50,
      height: 50,
    })
  );
  
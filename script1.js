window.addEventListener("load", () => {
  const canvas1 = document.getElementById("canvas1");
  const ctx = canvas1.getContext("2d");
  canvas1.width = 800;
  canvas1.height = 400;

  const dino = document.getElementById("dinoImg");
  const bg = document.getElementById("bgImg");
  const red = document.getElementById("enemyImg");
  const green = document.getElementById("playerImg");

  let xPosDino = 200;
  let yPosDino = 100;
  let dinoHeight = 75;
  let dinoWidth = 75;

  jumpDino = 0.5;
  window.addEventListener("keydown", (e) => {
    if (e.key === "w") {
      yPosDino -= 20;
    }
    if (e.key === "d") {
      xPosDino += 20;
    }
    if (e.key === "a") {
      xPosDino -= 20;
    }
    if (e.key === "s") {
      yPosDino += 20;
    }
  });

  const dinoBox = document.querySelector(".dinoBox");
  const dinoTxt = document.querySelector(".dino");
  //const greenBox = document.querySelector(".greenBox");
  //const greenTxt = document.querySelector(".green");
  //const redBox = document.querySelector(".redBox");
  //const redTxt = document.querySelector(".red");

  let gapBetweenGreenAndRed = 150;
  let newDifferent;
  let score = 0;

  let pipe = [];
  // первая точка будет:
  pipe[0] = {
    x: canvas1.width, // начинаем справа 800
    y: 0, // и самого верха 0 по оси Y
  };

  function draw() {
    ctx.drawImage(bg, 0, 0, 799, 399);

    for (let i = 0; i < pipe.length; i++) {
      // красный будет по стандарту 800 и идти -1 и нахождениие вверху
      ctx.drawImage(red, pipe[i].x, pipe[i].y);
      // зеленый будет там же, НО + значит опустить по Y на разницу ГЭПа
      // ставии 50 ширину по Х и 500 высоту по Y, чтобы не было пробелов внизу
      ctx.drawImage(
        green,
        pipe[i].x,
        pipe[i].y + gapBetweenGreenAndRed + red.height,
        100,
        500
        // опустить на ГЭП + //высоту красного
      );

      // делаем шаг, которые отнимает от 800 -1 на каждый фрейм i
      pipe[i].x--;
      // console.log(gapBetweenGreenAndRed);
      /*
      dinoTxt.innerHTML = `dino.width ${dinoWidth} dinoHeight ${dinoHeight} pipe.length ${pipe.length} <br> canvas1.width ${canvas1.width} <br> canvas1.height ${canvas1.height} <br> newDifferent ${newDifferent} <br> xPosDino: ${xPosDino} <br> yPosDino: ${yPosDino}`;
      dinoBox.append(dinoTxt);
      greenTxt.innerHTML = `green.height ${green.height} <br> green.width ${green.width} <br>red.height ${red.height} <br> red.width ${red.width} <br> pipe.x ${pipe[i].x} <br> pipe.y ${pipe[i].y}`;
      greenBox.append(greenTxt);
*/
      if (
        yPosDino + dinoWidth >= canvas1.height ||
        yPosDino <= 0 ||
        // yPosDino + dinoHeight высота (сумма начальной точки и всей высоты)
        // xPosDino + dinoWidth ширина
        // pipe[i].y + red.height высота
        (yPosDino <= pipe[i].y + red.height &&
          xPosDino + dinoWidth == pipe[i].x) ||
        (yPosDino + dinoHeight >=
          pipe[i].y + red.height + gapBetweenGreenAndRed &&
          xPosDino + dinoWidth == pipe[i].x)
      ) {
        location.reload();
      }

      // когда шаг доходит до 600, тогда добавить нужно новые координаты в массив координат
      if (pipe[i].x == 250) {
        score++;
      }

      if (pipe[i].x == 650) {
        //console.log(gapBetweenGreenAndRed);
        //
        //console.log(Math.floor(Math.random() * 100)); //35
        newDifferent = Math.floor(Math.random() * red.height - red.height);

        // новые координаты в массив для следующего цикла
        pipe.push({
          x: canvas1.width,
          y: newDifferent,
        });
      }
    }

    dinoTxt.innerHTML = `${score}`;
    dinoBox.append(dinoTxt);
    // score++;
    ctx.drawImage(dino, xPosDino, yPosDino, dinoHeight, dinoWidth);
    yPosDino += jumpDino;
    requestAnimationFrame(draw);
  }

  draw();

  class InputHandler {
    constructor() {
      this.keys = [];
      window.addEventListener("keydown", (e) => {
        if (
          (e.key === "ArrowDown" ||
            e.key === "ArrowUp" ||
            e.key === "ArrowLeft" ||
            e.key === "ArrowRight") &&
          this.keys.indexOf(e.key) === -1
        ) {
          this.keys.push(e.key);
        }
        console.log(e.key, this.keys);
      });

      window.addEventListener("keyup", (e) => {
        if (
          e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight"
        ) {
          this.keys.splice(this.keys.indexOf(e.key), 1);
        }
      });
    }
  }

  /*
  class Player {
    constructor(gameWidth, gameHeight) {
      this.gameHeight = gameHeight;
      this.gameWidth = gameWidth;
      this.width = 165;
      this.height = 105;
      this.x = 0;
      this.y = this.gameHeight - this.height;
      this.image = document.getElementById("playerImg");
    }

    draw(context) {
      context.fillStyle = "white";
      context.fillRect(this.x, this.y, this.width, this.height);
      context.drawImage(this.image, this.x, this.y);
    }
    update() {
      this.x++;
    }
  }
  */

  const input = new InputHandler();

  //const player = new Player(canvas1.width, canvas1.height);

  /*
  function animate() {
    console.log("animate");

    ctx.clearRect(0, 0, canvas1.width, canvas1.height);
    player.draw(ctx);
    player.update();
  }
  animate();
*/
});

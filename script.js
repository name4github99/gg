let enemyBlock;

for (let z = 0; z < 1; z++) {
  const find = ".enemy";
  console.log(find);
  const newBox = document.querySelector(find);
  let enemyCount = Math.random() * 1000;
  //console.log(enemyCount);
  //const newBox = document.createElement("p");
  newBox.classList.add("pers2");
  $(newBox).animate({
    top: "1px",
    left: enemyCount + "px",
    right: "0px",

    // right: enemyCount + "px",
  });

  //console.log(newBox.attributes[0].value);

  // newBox.innerHTML = `${newBox.attributes[1].value}`;

  //enemy.append(newBox);
  //console.log(enemy);
}

class MovieEnemy2Me {
  constructor(bb) {
    this.a = bb[0];
    this.b = bb[1];
    this.c = bb[2];
  }

  showBB() {
    console.log(this.a + " AND " + this.b + " AND " + this.c);
    let newAa = String(this.a);
    let newBb = String(this.b);
    let newCc = String(this.c);

    newAa = parseInt(String(newAa).replace("top: ", ""));

    newBb = parseInt(String(newBb).replace(" left: ", ""));

    newCc = parseInt(String(newCc).replace(" right: ", ""));

    console.log("newAa" + newAa);
    console.log("newBb" + newBb);
    console.log("newCc" + newCc);
    const endGame = document.querySelector("body");
    const bb = document.querySelectorAll(".enemy");
    const catchA = document.querySelector(".catchA");
    console.log("bb length >> " + bb.length);

    bb.forEach((elementM) => {
      console.log("bb" + elementM);

      console.log("bb !!! " + elementM.attributes[1].value);

      let arrConfig = elementM.attributes[1].value.split("px;");
      console.log("new Arr !!! " + arrConfig);

      let newAa2 = String(arrConfig[0]);
      let newBb2 = String(arrConfig[1]);
      let newCc2 = String(arrConfig[2]);

      newAa2 = parseInt(String(newAa2).replace("top: ", ""));
      newBb2 = parseInt(String(newBb2).replace(" left: ", ""));
      newCc2 = parseInt(String(newCc2).replace(" right: ", ""));

      console.log("newAa" + newAa);
      console.log("newBb" + newBb);
      console.log("newCc" + newCc);
      console.log(newAa);
      console.log(newBb);
      console.log(newCc);

      console.log("new2 Arr !!! " + newAa2 + "/" + newBb2 + "/" + newCc2);
      console.log(newAa2);
      console.log(newBb2);
      console.log(newCc2);

      const newFuckingA = newAa - newAa2 / 4;
      const newFuckingB = newBb - newBb2 / 4;
      const newFuckingC = newCc - newCc2 / 4;
      console.log("newFuckingA");
      console.log(newFuckingA);
      console.log(newFuckingB);
      console.log(newFuckingC);

      $(elementM).animate({
        top: newFuckingA + "px",
        left: newFuckingB + "px",
        right: newFuckingC + "px",
      });

      console.log("res: " + (newAa - newFuckingA));
      catchA.innerHTML = ` .But now:${newAa - newFuckingA}`;

      if (newAa - newFuckingA <= 10 && newAa - newFuckingA > 2) {
        elementM.classList.add("hide");
        catchA.classList.add("finish");
        //endGame.classList.add("black");
      }

      elementM.innerHTML = `${elementM.attributes[1].value} <hr> <h3>${
        newAa - newFuckingA
      }</h3>`;

      console.log("end !!! " + elementM.attributes[1].value);
    });
  }
}

let steps = 0;
let movie = document.querySelectorAll("button");
//let gL = document.querySelector(".gL");
//let gR = document.querySelector(".gR");
movie.forEach((element) => {
  //console.log(element.className);

  element.addEventListener("click", () => {
    const bb = document.querySelector(".pers");
    if (element.className == "gL") {
      $(".pers").animate({
        top: "+=0px",
        left: "-=25px",
        right: "+=25px",
      });
    }
    if (element.className == "gR") {
      $(".pers").animate({
        top: "+=0px",
        left: "+=25px",
        right: "-=25px",
      });
    }
    if (element.className == "gU") {
      $(".pers").animate({
        top: "-=25px",
        left: "+=0",
        right: "+=0",
      });
    }
    if (element.className == "gD") {
      $(".pers").animate({
        top: "+=25px",
        left: "+=0",
        right: "+=0",
      });
    }
    steps++;

    bb.innerHTML = `
    ${bb.attributes[1].value}
    `;
    //bb.append();
    console.log("mainP1: " + bb.attributes[1].value);
    let info4Enemy = bb.attributes[1].value.split("px;");

    console.log("mainP2: " + info4Enemy);

    new MovieEnemy2Me(info4Enemy).showBB();
  });
});
/*
const enemyMovie = document.querySelectorAll(".p");

enemyMovie.forEach((elementM) => {
  console.log("enemyMovie" + elementM);

  $(elementM).animate({
    top: "+=205px",
  });
});
*/
/*
$("button").click(function () {
  $("div").animate({
    left: "+=250px",
  });
});
*/

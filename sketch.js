let Q17 = [],
  A17 = [],
  B17 = [],
  C17 = [],
  D17 = [];
let clzC = [],
  clzL = [],
  clzD = [],
  clzA = [];
let nC;
let abcd = ["A. ", "B. ", "C. ", "D. ", "E. ", "F. ", "G. "];
let A19, B19, C19, D19, E19, F19, G19;
let Am, Bm, Cm, Dm, Em, Fm, Gm;
let nM;
let lines20 = [];
let Aliner = [],
  Bliner = [],
  Cliner = [],
  Dliner = [];
let Alinez = [],
  Blinez = [],
  Clinez = [],
  Dlinez = [];
let p20 = [];
let psg = [];
let pc = [];

let t2021,
  t = 0,
  ts = 16,
  c = 0;
let arr2021 = [],
  x2021 = [],
  y2021 = [];
let spreadRumor = false;
let inst, caution, about, b2017, b2018, b2019, b2020, b2021, bXXXX, back;
let fxxxx;
let start = 0;
let reading, cloze, matching, correcting;
let readAbout = 0;
let Ac, Bc, Cc, Dc;
let d;
let index;
let input, button;
let img;
let glitch;
let tx = 100,
  ty = 100;
function preload() {
  fxxxx = loadFont("assets/LibreBarcode39Text-Regular.ttf");
  loadJSON("papers.json", dataLoaded);
  img = loadImage("IMG_3596.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230);
  textAlign(CENTER, BOTTOM);
  createCover();
  create2017();
  create2018();
  create2019();
  create2020();
  create2021();
  d = width + height;
  glitch = new Glitch();
  glitch.loadType("jpg");
//  glitch.loadImage("IMG_3596.jpg");
}

function dataLoaded(json) {
  reading = json.reading;
  cloze = json.cloze;
  matching = json.matching;
  correcting = json.correcting;
}

function draw() {
  background(230);
  image(img, 0, 0, width, height);
  if (start == 1) {
    randomSeed(9999);
    hideCover();
    hide2018();
    hide2019();
    hide2020();
    hide2021();
    re2017();
  } else if (start == 2) {
    randomSeed(9999);
    hideCover();
    hide2017();
    hide2019();
    hide2020();
    hide2021();
    re2018();
  } else if (start == 3) {
    randomSeed(9999);
    hideCover();
    hide2017();
    hide2018();
    hide2020();
    hide2021();
    re2019();
  } else if (start == 4) {
    randomSeed(9999);
    hideCover();
    hide2017();
    hide2018();
    hide2019();
    hide2021();
    re2020();
  } else if (start == 5) {
    hideCover();
    hide2017();
    hide2018();
    hide2019();
    hide2020();
    re2021();
  } else {
    hide2017();
    hide2018();
    hide2019();
    hide2020();
    hide2021();
    reCover();
  }
  YorN();
}
function createCover() {
  inst = createElement("h4", "").hide();
  back = createImg("button.png", "")
    .style("cursor:pointer;height:6%;width:auto;box-shadow:0 2px 3px 0 black")
    .hide();
  b2017 = createButton("2017")
    .style(
      "border: none;color:black;cursor:pointer;font-family:Petit Formal Script;height:10%;font-size:120%;background:none"
    )
    .mouseOver(() => b2017.style("text-shadow: 0 0 3px grey"))
    .mouseOut(() => b2017.style("text-shadow:none"))
    .mousePressed(() => (start = 1))
    .hide();
  b2018 = createButton("2018")
    .style(
      "border: none;color:black;cursor:pointer;font-family:Special Elite;height:10%;font-size:120%;background:none"
    )
    .mouseOver(() => b2018.style("text-shadow: 0 0 3px grey"))
    .mouseOut(() => b2018.style("text-shadow:none"))
    .mousePressed(() => (start = 2))
    .hide();
  b2019 = createButton("2019")
    .style(
      "border: none;color:black;cursor:pointer;font-family:Reenie Beanie;height:10%;font-size:160%;background:none"
    )
    .mouseOver(() => b2019.style("text-shadow: 0 0 3px grey"))
    .mouseOut(() => b2019.style("text-shadow:none"))
    .mousePressed(() => (start = 3))
    .hide();
  b2020 = createButton("2020")
    .style(
      "border: none;color:black;cursor:pointer;font-family:UnifrakturMaguntia;height:10%;font-size:120%;background:none"
    )
    .mouseOver(() => b2020.style("text-shadow: 0 0 3px grey"))
    .mouseOut(() => b2020.style("text-shadow:none"))
    .mousePressed(() => (start = 4))
    .hide();
  b2021 = createButton("2021")
    .style(
      "border: none;color:black;cursor:pointer;font-family:VT323;height:10%;font-size:150%;background:none"
    )
    .mouseOver(() => b2021.style("text-shadow: 0 0 3px grey"))
    .mouseOut(() => b2021.style("text-shadow:none"))
    .mousePressed(() => (start = 5))
    .hide();
  about = createButton("C A U T I O N !")
    .style(
      "cursor:pointer;color:white;background:black;border:none;animation: fadeIn 0.3s;box-shadow: 0 2px 2px  grey"
    )
    .position(width / 2 - width * 0.05, height * 0.8)
    .mouseOver(() => about.style("background:#C80000"))
    .mouseOut(() => about.style("background:black"))
    .mousePressed(showWindow)
    .hide();
}
function reCover() {
  noStroke();
  fill(0);
  textStyle(BOLD);
  textFont(fxxxx);
  textSize(d / 18);
  text("The Secret Paper", width / 2, height / 2);
  noFill();
  stroke(0);
  strokeWeight(d / 2000);
  textSize(d / 40);
  text("of", width * 0.58, height * 0.58);
  about.show();
  b2017.position(width * 0.48 - d / 5, height / 2 + 25).show();
  b2018.position(width * 0.48 - d / 10, height / 2 + 25).show();
  b2019.position(width * 0.48, height / 2 + 25).show();
  b2020.position(width * 0.48 + d / 10, height / 2 + 25).show();
  b2021.position(width * 0.48 + d / 5, height / 2 + 25).show();
}
function hideCover() {
  inst.position(20, height * 0.08);
  back.position(20, 20).mousePressed(() => (start = 0));
  b2017.position(width * 0.48 - d / 5, height * 0.92);
  b2018.position(width * 0.48 - d / 10, height * 0.92);
  b2019.position(width * 0.48, height * 0.92);
  b2020.position(width * 0.48 + d / 10, height * 0.92);
  b2021.position(width * 0.48 + d / 5, height * 0.92);
  about.hide();
}
function showWindow() {
  readAbout++;
  if (readAbout % 2 == 1) {
    caution = createElement(
      "h4",
      "This is the secret paper for the college entrance examination. You will find all options reasonable in this mock exam. Be sure of your answer and make path for them. Congratulations!</br></br>The Secret Paper（密卷）is an interactive digital literary artwork inspired by the English exam of the National College Entrance Examination in mainland China. While preparing for the National College Entrance Examination (Gao Kao高考), a secret paper（密卷）is usually an unpublished paper that we take in a mock examination. And the digital paper here is divided into five units, which are taken from the original questions of 2017, 2018, 2019, 2020, and 2021 college entrance exams, where each option in this work can be the correct answer. I have pieced together reasonable explanations for each answer by integrating the text of the past five years' college entrance exam papers, and users can access the explanation of each option by clicking on the interface. By comparing the official single explanation of the correct option with the diverse explanations of the other options that the text of the exam paper has pieced together, I wanted to express in this work the desecration of human nature and individual potential by exam-oriented education, and to give a little comfort to those who have inadvertently chosen the incorrect goal: we can look for creative solutions beyond the patterned trajectory of life and the boundaries of time."
    )
      .style(
        "background-color:grey;overflow: auto;padding:5%;width:85%;height:30%;line-height:200%;animation:fadeIn 0.2s;"
      )
      .position(width * 0.025, height / 4);
    about.html("I UNDERSTAND").position(width / 2 - width * 0.05, height * 0.8);
  } else if (readAbout % 2 == 0) {
    caution.remove();
    about
      .html("C A U T I O N !")
      .position(width / 2 - width * 0.05, height * 0.8);
  }
}

function collage(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `<span style="color:white; padding:3px;background-color:${randColor(
      arr
    )};font-family:${randomFont(arr)}">`;
    str += arr[i];
    str += `</span> `;
  }
  return str;
}
function randColor(arr) {
  if (arr.length <= 1) return `${"grey"}`;
  else
    return `rgb(${Math.random() * 150},${Math.random() * 20}, ${
      Math.random() * 20
    });`;
}
function randomFont(arr) {
  if (arr.length <= 1) index = 2022;
  else index = floor(random(2017, 2022));
  switch (index) {
    case 2017:
      return `${"Petit Formal Script"}`;
    case 2018:
      return `${"Special Elite"}`;
    case 2019:
      return `${"Reenie Beanie"}`;
    case 2020:
      return `${"UnifrakturMaguntia"}`;
    case 2021:
      return `${"VT323"}`;
    case 2022:
      return `${"Times New Roman"}`;
  }
}
function create2017() {
  reading.forEach((r) => {
    Aliner.push(
      createElement("span", collage(r.Aline))
        .style("padding:2%;visibility: hidden")
        .position(random(width * 0.6), random(height * 0.1, height * 0.75))
    );
    Bliner.push(
      createElement("span", collage(r.Bline))
        .style("visibility: hidden")
        .position(random(width * 0.6), random(height * 0.1, height * 0.75))
    );
    Cliner.push(
      createElement("span", collage(r.Cline))
        .style("padding:1%;visibility: hidden")
        .position(random(width * 0.6), random(height * 0.1, height * 0.75))
    );
    Dliner.push(
      createElement("span", collage(r.Dline))
        .style("visibility: hidden")
        .position(random(width * 0.6), random(height * 0.1, height * 0.6))
    );
    Q17.push(
      createElement("span", r.Q).style(
        "font-family:Petit Formal Script;font-size:90%;height:3%"
      )
    );
    A17.push(
      createElement("span", "A. " + r.A).style(
        "cursor:pointer;font-family:Petit Formal Script;font-size:85%;height:3%"
      )
    );
    B17.push(
      createElement("span", "B. " + r.B).style(
        "cursor:pointer;font-family:Petit Formal Script;font-size:85%;height:3%"
      )
    );
    C17.push(
      createElement("span", "C. " + r.C).style(
        "cursor:pointer;font-family:Petit Formal Script;font-size:85%;height:3%"
      )
    );
    D17.push(
      createElement("span", "D. " + r.D).style(
        "cursor:pointer;font-family:Petit Formal Script;font-size:85%;height:3%"
      )
    );
  });
}
function re2017() {
  inst
    .html(
      "Reading. Choose the best option from the choices A, B, C and D given in each question and then read the short texts."
    )
    .show();
  back.show();
  for (let i = 0; i < 4; i++) {
    Q17[i].position(20 + ((i % 2) * width) / 2, height / 2 - height * 0.21);
    A17[i].position(20 + ((i % 2) * width) / 2, height / 2 - height * 0.15);
    B17[i].position(20 + ((i % 2) * width) / 2, height / 2 - height * 0.12);
    C17[i].position(20 + ((i % 2) * width) / 2, height / 2 - height * 0.09);
    D17[i].position(20 + ((i % 2) * width) / 2, height / 2 - height * 0.06);
    if (i >= 2) {
      Q17[i].position(20 + ((i % 2) * width) / 2, height / 2 + height * 0.06);
      A17[i].position(20 + ((i % 2) * width) / 2, height / 2 + height * 0.12);
      B17[i].position(20 + ((i % 2) * width) / 2, height / 2 + height * 0.15);
      C17[i].position(20 + ((i % 2) * width) / 2, height / 2 + height * 0.18);
      D17[i].position(20 + ((i % 2) * width) / 2, height / 2 + height * 0.21);
    }
  }
  Q17.forEach((q) => {
    q.show();
  });
  A17.forEach((a, i) => {
    a.show()
      .mouseOver(() => a.style("text-shadow: 0 0 3px grey"))
      .mouseOut(() => a.style("text-shadow:none"))
      .mousePressed(() => (Ac = i))
      .mouseClicked(() => a.style("color:#C80000"));
  });
  B17.forEach((b, i) => {
    b.show()
      .mouseOver(() => b.style("text-shadow: 0 0 3px grey"))
      .mouseOut(() => b.style("text-shadow:none"))
      .mousePressed(() => (Bc = i))
      .mouseClicked(() => b.style("color:#C80000"));
  });
  C17.forEach((c, i) => {
    c.show()
      .mouseOver(() => c.style("text-shadow: 0 0 3px grey"))
      .mouseOut(() => c.style("text-shadow:none"))
      .mousePressed(() => (Cc = i))
      .mouseClicked(() => c.style("color:#C80000"));
  });
  D17.forEach((d, i) => {
    d.show()
      .mouseOver(() => d.style("text-shadow: 0 0 3px grey"))
      .mouseOut(() => d.style("text-shadow:none"))
      .mousePressed(() => (Dc = i))
      .mouseClicked(() => d.style("color:#C80000"));
  });
  if (Ac != undefined) {
    Aliner[Ac].style("visibility:visible")
      .show()
      .mouseOver(() =>
        Aliner[Ac].position(
          random(width * 0.3 * (Ac % 2)),
          random(height * 0.1, height * 0.75)
        )
      );
    stroke(200, 0, 0, random(50, 250));
    line(A17[Ac].x, A17[Ac].y, Aliner[Ac].x, Aliner[Ac].y);
  }
  if (Bc != undefined) {
    Bliner[Bc].style("visibility:visible")
      .show()
      .mouseOver(() =>
        Bliner[Bc].position(
          random(width * 0.3 * (Bc % 2)),
          random(height * 0.1, height * 0.75)
        )
      );
    stroke(200, 0, 0, random(50, 250));
    line(B17[Bc].x, B17[Bc].y, Bliner[Bc].x, Bliner[Bc].y);
  }
  if (Cc != undefined) {
    Cliner[Cc].style("visibility:visible")
      .show()
      .mouseOver(() =>
        Cliner[Cc].position(
          random(width * 0.3 * (Cc % 2)),
          random(height * 0.1, height * 0.75)
        )
      );
    stroke(200, 0, 0, random(50, 250));
    line(C17[Cc].x, C17[Cc].y, Cliner[Cc].x, Cliner[Cc].y);
  }
  if (Dc != undefined) {
    Dliner[Dc].style("visibility:visible")
      .show()
      .mouseOver(() =>
        Dliner[Dc].position(
          random(width * 0.3 * (Dc % 2)),
          random(height * 0.1, height * 0.75)
        )
      );
    stroke(200, 0, 0, random(50, 250));
    line(D17[Dc].x, D17[Dc].y, Dliner[Dc].x, Dliner[Dc].y);
  }
}

function hide2017() {
  inst.hide();
  back.hide();
  Q17.forEach((q) => {
    q.hide();
  });
  A17.forEach((a) => {
    a.hide();
  });
  B17.forEach((b) => {
    b.hide();
  });
  C17.forEach((c) => {
    c.hide();
  });
  D17.forEach((d) => {
    d.hide();
  });
  Aliner.forEach((a) => {
    a.hide();
  });
  Bliner.forEach((b) => {
    b.hide();
  });
  Cliner.forEach((c) => {
    c.hide();
  });
  Dliner.forEach((d) => {
    d.hide();
  });
}
function create2018() {
  cloze.forEach((c) => {
    clzC.push(c.choices);
    clzL.push(c.lines);
  });
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 4; i++) {
      clzD.push(
        createDiv(abcd[i] + clzC[j][i])
          .position(
            width / 60 + (i * width) / 10,
            height / 5 + (j * height) / 15
          )
          .style(
            "font-family:Special Elite;font-size:75%;cursor:pointer:max-width:auto"
          )
          .hide()
      );

      clzA.push(
        createDiv(collage(clzL[j][i]))
          .style("font-size:90%;visibility:hidden")
          .position(
            random(width * 0.3, width * 0.6),
            random(height / 8, height / 6) + (j * height) / 15
          )
      );
    }
  }
}
function re2018() {
  inst
    .html(
      "Cloze test. Choose the best option from the four options A, B, C and D given in each question and fill in blanks of the short article."
    )
    .show();
  back.show();
  clzD.forEach((c, i) => {
    c.mouseOver(() => c.style("text-shadow: 0 0 3px grey"))
      .mouseOut(() => c.style("text-shadow:none"))
      .mousePressed(() => (nC = i))
      .show();
  });
  if (nC != undefined) {
    stroke(200, 0, 0, random(50, 250));
    clzA[nC].style("visibility:visible").show();
    line(clzD[nC].x + 40, clzD[nC].y + 4, clzA[nC].x, clzA[nC].y);
  }
}
function hide2018() {
  inst.hide();
  back.hide();
  clzD.forEach((c) => {
    c.hide();
  });
  clzA.forEach((c) => {
    c.hide();
  });
}
function create2019() {
  A19 = createDiv("A. " + matching[0].A)
    .style("font-family:Reenie Beanie;font-size:120%;cursor:pointer")
    .mouseOver(() => A19.style("text-shadow: 0 0 3px grey"))
    .mouseOut(() => A19.style("text-shadow:none"))
    .position(width / 40, height / 4 + height / 16)
    .hide();
  B19 = createDiv("B. " + matching[0].B)
    .style("font-family:Reenie Beanie;font-size:120%;cursor:pointer")
    .mouseOver(() => B19.style("text-shadow: 0 0 3px grey"))
    .mouseOut(() => B19.style("text-shadow:none"))
    .position(width / 40, height / 4 + (2 * height) / 16)
    .hide();
  C19 = createDiv("C. " + matching[0].C)
    .style("font-family:Reenie Beanie;font-size:120%;cursor:pointer")
    .mouseOver(() => C19.style("text-shadow: 0 0 3px grey"))
    .mouseOut(() => C19.style("text-shadow:none"))
    .position(width / 40, height / 4 + (3 * height) / 16)
    .hide();
  D19 = createDiv("D. " + matching[0].D)
    .style("font-family:Reenie Beanie;font-size:120%;cursor:pointer")
    .mouseOver(() => D19.style("text-shadow: 0 0 3px grey"))
    .mouseOut(() => D19.style("text-shadow:none"))
    .position(width / 40, height / 4 + (4 * height) / 16)
    .hide();
  E19 = createDiv("E. " + matching[0].E)
    .style("font-family:Reenie Beanie;font-size:120%;cursor:pointer")
    .mouseOver(() => E19.style("text-shadow: 0 0 3px grey"))
    .mouseOut(() => E19.style("text-shadow:none"))
    .position(width / 40, height / 4 + (5 * height) / 16)
    .hide();
  F19 = createDiv("F. " + matching[0].F)
    .style("font-family:Reenie Beanie;font-size:120%;cursor:pointer")
    .mouseOver(() => F19.style("text-shadow: 0 0 3px grey"))
    .mouseOut(() => F19.style("text-shadow:none"))
    .position(width / 40, height / 4 + (6 * height) / 16)
    .hide();
  G19 = createDiv("G. " + matching[0].G)
    .style("font-family:Reenie Beanie;font-size:120%;cursor:pointer")
    .mouseOver(() => G19.style("text-shadow: 0 0 3px grey"))
    .mouseOut(() => G19.style("text-shadow:none"))
    .position(width / 40, height / 4 + (7 * height) / 16)
    .hide();

  Am = createDiv(collage(matching[0].Aline)).style(
    "font-size:80%;visibility:hidden"
  );
  Bm = createDiv(collage(matching[0].Bline)).style(
    "font-size:80%;visibility:hidden"
  );
  Cm = createDiv(collage(matching[0].Cline)).style(
    "font-size:80%;visibility:hidden"
  );
  Dm = createDiv(collage(matching[0].Dline)).style(
    "font-size:80%;visibility:hidden"
  );
  Em = createDiv(collage(matching[0].Eline)).style(
    "font-size:80%;visibility:hidden"
  );
  Fm = createDiv(collage(matching[0].Fline)).style(
    "font-size:80%;visibility:hidden"
  );
  Gm = createDiv(collage(matching[0].Gline)).style(
    "font-size:80%;visibility:hidden"
  );
}
function re2019() {
  inst
    .html(
      "Matching sentences. Choose the best sentences from the same article of the short text. Two of the options are redundant."
    )
    .show();
  back.show();
  A19.show().mousePressed(() => (nM = 1));
  B19.show().mousePressed(() => (nM = 2));
  C19.show().mousePressed(() => (nM = 3));
  D19.show().mousePressed(() => (nM = 4));
  E19.show().mousePressed(() => (nM = 5));
  F19.show().mousePressed(() => (nM = 6));
  G19.show().mousePressed(() => (nM = 7));
  if (nM != undefined) {
    stroke(200, 0, 0, random(200));
    if (nM == 1) {
      Am.style("visibility:visible")
        .position(random(width * 0.4, width * 0.7), height / 5)
        .show();
      line(A19.x + 40, A19.y + 4, Am.x, Am.y);
    }
    if (nM == 2) {
      Bm.style("visibility:visible")
        .position(random(width * 0.4, width * 0.8), (height * 3) / 10)
        .show();
      line(B19.x + 40, B19.y + 4, Bm.x, Bm.y);
    }
    if (nM == 3) {
      Cm.style("visibility:visible")
        .position(random(width * 0.4, width * 0.9), (height * 4) / 10)
        .show();
      line(C19.x + 40, C19.y + 4, Cm.x, Cm.y);
    }
    if (nM == 4) {
      Dm.style("visibility:visible")
        .position(random(width * 0.4, width * 0.8), (height * 5) / 10)
        .show();

      line(D19.x + 40, D19.y + 4, Dm.x, Dm.y);
    }
    if (nM == 5) {
      Em.style("visibility:visible")
        .position(random(width * 0.4, width * 0.9), (height * 6) / 10)
        .show();
      line(E19.x + 40, E19.y + 4, Em.x, Em.y);
    }
    if (nM == 6) {
      Fm.style("visibility:visible")
        .position(random(width * 0.4, width * 0.8), (height * 7) / 10)
        .show();
      line(F19.x + 40, F19.y + 4, Fm.x, Fm.y);
    }
    if (nM == 7) {
      Gm.style("visibility:visible")
        .position(random(width * 0.4, width * 0.7), (height * 7) / 9)
        .show();
      line(G19.x + 40, G19.y + 4, Gm.x, Gm.y);
    }
  }
}
function hide2019() {
  inst.hide();
  back.hide();
  A19.hide();
  B19.hide();
  C19.hide();
  D19.hide();
  E19.hide();
  F19.hide();
  G19.hide();
  Am.hide();
  Bm.hide();
  Cm.hide();
  Dm.hide();
  Em.hide();
  Fm.hide();
  Gm.hide();
}
function create2020() {
  correcting.forEach((c) => {
    p20.push(c.line);
    pc.push(c.correct);
  });
  let ps = [],
    pu = [];
  ps = collage(p20).split("</span>");
  ps.forEach((p) => {
    pu.push(p + "</span>");
  });
  pu.forEach((p, i) => {
    psg.push(createDiv(p));
    psg[i]
      .style("font-size:85%")
      .position(
        random(width / 60, width / 40) + (i % 7) * width * 0.14,
        height * 0.05 * floor(i / 7 + 1) + height * 0.3 * random(0.98, 1.02)
      );
  });
  console.log(psg.length);
}
function re2020() {
  inst
    .html(
      "Correcting mistakes. Click to correct any mistaken word in the passage."
    )
    .show();
  back.show();
  psg.forEach((p, i) => {
    p.mouseOver(() => p.style("text-shadow: 1px 1px 3px white"))
      .mouseOut(() => p.style("text-shadow: none"))
      .mouseClicked(() =>
        p.html(pc[i]).mouseOver(() => p.style("text-shadow: 1px 1px 3px black"))
      )
      .show();
  });
}
function hide2020() {
  inst.hide();
  back.hide();
  psg.forEach((p) => {
    p.hide();
  });
}
function create2021() {
  input = createInput()
    .size(width * 0.9, height / 3)
    .hide();
  button = createButton("Submit")
    .mousePressed(() => (spreadRumor = true))
    .mouseClicked(() => (ts = 16))
    .hide();
}
function re2021() {
  inst
    .html(
      "Writing. Write down 20-word sentence about your traning experience on the past-5-year exam papers, and the paper will make you a 100-word passage."
    )
    .show();
  back.show();
  input
    .position(width / 40, height * 0.3)
    .style("font-family:VT323", "height:200px")
    .show();
  button
    .position(width / 40, height * 0.7)
    .style("font-family:VT323;cursor:pointer")
    .show();

  if (spreadRumor) {
    noStroke();
    t2021 = input.value();
    fill(c, lerp(5, 200, 0.5 + 0.5 * cos(t + tx / ty)));
    textFont("VT323");
    textSize(ts);
    textAlign(CENTER, CENTER);
    t += 0.05;
    ts += 0.04;
    if (ts <= 16.4) {
      tx = random(width);
      ty = random(height * 0.2, height * 0.8);
      x2021.push(tx);
      y2021.push(ty);
      arr2021.push(t2021);
    }
    arr2021.forEach((a, i) => {
      text(a, x2021[i], y2021[i]);
    });
  }
}
function wow() {
  ts = 16;
  tx = random(width);
  ty = random(height * 0.2, height * 0.8);
}
function hide2021() {
  inst.hide();
  back.hide();
  input.hide();
  button.hide();
}

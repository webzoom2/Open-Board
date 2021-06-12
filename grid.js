let board = document.querySelector(".board");
let tool = board.getContext("2d");
let inputcolor = document.getElementById("color");
let inputStroke = document.getElementById("value");
let inputtext = document.getElementById("type");
let inputwrite = document.querySelector(".write");
let change = document.querySelector(".video-container");
let line = document.querySelector(".line");
line.addEventListener("click",function(){
  b = true;
  draw = false;
  l = false;
  i = false;
  t = false;
  c.classList.remove("animation");
  p.classList.remove("animation");
  r.classList.remove("animation");
  inputwrite.classList.remove("animation");
  line.classList.add("animation");
  board.addEventListener("mousedown", function (e) {
    tool.beginPath();
    console.log("mousedown");
    tool.moveTo(e.clientX, e.clientY);
    console.log(getY(e.clientX));
    isDown = true;
  });
  board.addEventListener("mouseup", function (e) {
    console.log("mouseup");
      console.log("mousemove");
if(b==true){
 tool.lineTo(e.clientX, e.clientY);
  tool.stroke();
}
  });

})
// let change = document.querySelector(".video-container");
inputwrite.addEventListener("click", function () {
  c.classList.remove("animation");
  p.classList.remove("animation");
  r.classList.remove("animation");
  line.classList.remove("animation");
  inputwrite.classList.add("animation");
  b = false;
  draw = false;
  l = false;
  i = false;
  t = false;
  t=true;
  tool.font = "bold 48px serif";
  board.addEventListener("click", function (e) {
    console.log("mouseup");
    if (t == true) {
      
      let newtext = inputtext.value;
    
      tool.strokeText(newtext, e.clientX ,e.clientY);
      inputtext.value="";
    }
  });
});
tool.strokeStyle = "black";
tool.lineWidth = 1;
let tri = document.querySelector(".triangle");
isDown = false;
board.height = window.innerHeight;
board.width = window.innerWidth;
// color
inputcolor.addEventListener("change", function () {
  let newColor = inputcolor.value;
  tool.strokeStyle = newColor;
  c.classList.remove("animation");
  p.classList.remove("animation");
  r.classList.remove("animation");
  line.classList.remove("animation");
  inputwrite.classList.remove("animation");
  b = false;
  draw = false;
  l = false;
  i = false;
  t = false;
  t=false;
});
// stroke
inputStroke.addEventListener("change", function () {
  let newStroke = inputStroke.value;
  tool.lineWidth = newStroke;
  c.classList.remove("animation");
  p.classList.remove("animation");
  r.classList.remove("animation");
  line.classList.remove("animation");
  inputwrite.classList.remove("animation");
  b = false;
  draw = false;
  l = false;
  i = false;
  t = false;
  t=false
});
// circle
let c = document.querySelector(".circle");
c.addEventListener("click", function () {
  draw = true;
  l = false;
  i = false;
  t = false;
  b = false;
  c.classList.add("animation");
  p.classList.remove("animation");
  r.classList.remove("animation");
  line.classList.remove("animation");
  inputwrite.classList.remove("animation");
  var radius = 0;
  var s = 0;
  board.addEventListener("mousedown", function (e) {
    tool.beginPath();
    isDown = true;
    s = e.clientX;
    console.log(s);
  });
  board.addEventListener("mouseup", function (e) {
    radius = e.clientX - s;
    if (draw == true) {
      tool.arc(e.clientX, getY(e.clientY), radius, 0, 2 * Math.PI, false);
      tool.stroke();
      console.log("mouseup");

      isDown = false;
    }
  });
});
// pensil
let p = document.querySelector(".pensil");
p.addEventListener("click", function () {
  draw = false;
  i = false;
  l = true;
  t = false;
  b = false;
  c.classList.remove("animation");
  p.classList.add("animation");
  r.classList.remove("animation");
  line.classList.remove("animation");
  inputwrite.classList.remove("animation");
  board.addEventListener("mousedown", function (e) {
    tool.beginPath();
    console.log("mousedown");
    tool.moveTo(getY(e.clientX),e.clientY);
    console.log(getY(e.clientX));
    isDown = true;
  });
  board.addEventListener("mousemove", function (e) {
    if (isDown == true && l == true) {
      console.log("mousemove");

      tool.lineTo(getY(e.clientX), e.clientY);
      tool.stroke();
    }
  });
  board.addEventListener("mouseup", function (e) {
    console.log("mouseup");

    isDown = false;
  });
});
// rectangle
let r = document.querySelector(".rectangle");
r.addEventListener("click", function () {
  i = true;
  l = false;
  draw = false;
  t = false;
  b = false;
  c.classList.remove("animation");
  p.classList.remove("animation");
  r.classList.add("animation");
  line.classList.remove("animation");
  inputwrite.classList.remove("animation");
  let intialX = 0;
  let initialY = 0;
  board.addEventListener("mousedown", function (e) {
    tool.beginPath();
    intialX = getY(e.clientX);
    intialY = e.clientY;
    isDown = true;
  });
  board.addEventListener("mouseup", function (e) {
    console.log("mouseup");
    if (i == true) {
      tool.rect(
        intialX,
        intialY,
        getY(e.clientX) - intialX,
        e.clientY - intialY
      );
      tool.stroke();
      isDown = false;
    }
  });
});
let download = document.querySelector(".download");
download.addEventListener("click", function () {
  console.log(board.toDataURL());
  var link = document.createElement("a");
  link.download = "download.png";
  link.href = board.toDataURL();
  link.click();
  link.delete;
});
// calculate
function getY(X) {
  //  let obj = change.getBoundingClientRect();
  //  let h = obj.height;
  //  console.log(h);
  // console.log(y-h);
  // console.log(y);
  return X ;
}

function update(){
  var div = document.getElementById("div1");
  div.innerHTML = "content2";
  wait(2000);
  canv();
  
}


function canv(){
  const canvas = document.getElementById("canvas");  
  const ctx = canvas.getContext("2d");
  
  ctx.fillText("TEST", 150, 150);
  
  let textArr = ["H", "A", "L", "L", "O", "!"];
  let x = 0;
  let text = "";
  
  for(let i = 0; i<6; i++){
    text = text + textArr[i];
    ctx.fillText(text, 0, 0);
    
    wait(1000);
    
  }
  
}

function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}

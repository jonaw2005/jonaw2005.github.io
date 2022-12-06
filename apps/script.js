function update(){
  var div = document.getElementById("div1");
  div.innerHTML = "content2";
}


function canv(){
  const canvas = document.getElementById("canvas");  
  const ctx = canvas.getContext("2d");
  
  ctx.fillText("TEST", 50, 50);
  
  let textArr = ["H", "A", "L", "L", "O", "!"];
  let x = 0;
  let text = "";
  
  for(let i = 0; i<6; i++){
    text = text + textArr[i];
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

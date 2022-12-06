function update(){
  var div = document.getElementById("div1");
  div.innerHTML = "content2";
}


function canv(){
  const canvas = document.getElementById("canvas");  
  const ctx = canvas.getContext("2d");
  
  ctx.fillText("TEST", 50, 50);
  
}

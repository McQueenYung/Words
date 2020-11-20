var str1 = "0,農曆,春節,賀年,打掃,除夕,拜年,禮貌,尊重";
var str2 = 
"0,快樂,害羞,害怕,擔心,哭笑,孝順,漂亮,高高興興,外祖父,外祖母,警察,消防員,司機,醫生,郵差,記者,"+
"爸爸,媽媽,哥哥弟弟,姐姐妹妹,我的家,祖父,祖母,老師,工作,玩具,我有,月亮,中秋節";

var temp1 = new Array();
var temp2 = new Array();
 
temp1 = str1.split(",");
temp2 = str2.split(",");

 function reset(){
  
   if (document.getElementById("myCheck").checked){
        var r1=Math.floor((Math.random() * 8) + 1);
        document.getElementById("show_word").innerHTML   =  temp1[r1];
        document.getElementById("show_word_r").innerHTML =  temp1[r1];
        clearCanvas();}
     
     else {
        var r2=Math.floor((Math.random() * 29) + 1);
        document.getElementById("show_word").innerHTML   =  temp2[r2];
        document.getElementById("show_word_r").innerHTML =  temp2[r2];
        clearCanvas();
     }
 } 
      var canvas;
      var ctx;
      var lastPt=null;
      var touchzone = document.getElementById("mycanvas");
      touchzone.addEventListener("touchmove", draw, false);
      touchzone.addEventListener("touchend", end, false);
      ctx = touchzone.getContext("2d");

      function draw(e) {
        e.preventDefault();
        if(lastPt!==null) {
          ctx.lineWidth = 1.8;
          ctx.strokeStyle = '#ff0000'
          ctx.beginPath();
          ctx.moveTo(lastPt.x, lastPt.y);
          ctx.lineTo(e.touches[0].pageX, e.touches[0].pageY);
          ctx.stroke();
        }
        lastPt = {x:e.touches[0].pageX, y:e.touches[0].pageY};
      }
 
      function end(e) {
        e.preventDefault();
        // Terminate touch path
        lastPt=null;
      }


function clearCanvas(){
  ctx.clearRect ( 0 , 0 , mycanvas.width, mycanvas.height );
}
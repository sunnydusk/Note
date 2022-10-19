var text="生命可以随心所欲，但不能随波逐流.";
var num=text.length;

var i=0;
function show(){
    var shower = text.substring(0,i);
    document.getElementById("h_text1").innerHTML = shower;
    i++;
    if(i+1>=num){
        clearInterval("done");
    }
}
var done =setInterval("show()",150);
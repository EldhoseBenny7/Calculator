function btnclick(val){
    document.getElementById("output-scrn").value+= val;
}
function displayclr(){
    document.getElementById("output-scrn").value=""
}
function resultbtn(){
    var text=document.getElementById("output-scrn").value;
    var result=eval(text)
    document.getElementById("output-scrn").value=result;
}

function process(num){
    document.getElementById("content").value+=num;
} 
function match(){
let first = document.getElementById("content").value;
let last = eval(first)
document.getElementById("content").value = last;    
}
function del(){
document.getElementById("content").value = "";
}
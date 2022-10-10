 
 function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value){
   
    document.getElementById("result").value += value;
}
//converting the poressed items into string and then performing operation using eval function , which determines the arethematic functions
// This function evaluates the expression and returns result
 function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function back(){
    document.getElementById("result").value =  document.getElementById("result").value.slice(0,-1);
}
function sqrt(){
   let sqrtVal= document.getElementById("result").value ;
   console.log(sqrtVal);
   let res = Math.sqrt(sqrtVal);
   console.log(res);
   document.getElementById("result").value="";
   display(res);
}
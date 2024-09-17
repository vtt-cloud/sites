function sum2Num(){  
  let n1 = parseInt(document.getElementById("num1").value);
  let n2 = parseInt(document.getElementById("num2").value);
  let n3 = parseInt(document.getElementById("num3").value);
  let n = n1 + n2;
  if (n == n3) { 
    alert('Good job!');
    //result = "Good job!";
  } 
  else {
    alert('Bad job! Result must be ' + n);
    //result = "Bad job! Result must be " + n;
  }
  //document.getElementById("result").innerHTML = result;
}
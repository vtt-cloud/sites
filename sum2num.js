function sum2Num(n1, n2, n3) {
    n = parseInt(n1.value) + parseInt(n2.value);
    if (n == parseInt(n3.value)) { 
      alert('Good job! ' + n3.value);
    } 
    else {
      alert('Bad job! ' + n);
    }   
  }
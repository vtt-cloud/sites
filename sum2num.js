function sum2Num(n1, n2, n3) {
    n = parseInt(n1.value) + parseInt(n2.value);
    if (n == parseInt(n3.value)) { 
      alert('Good job!');
    } 
    else {
      alert('Bad job! Result must be' + n);
    }   
  }

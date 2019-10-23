function xo(str) {
    var huruf
    var panjang = str.length
    var jumlahx = 0
    var jumlaho = 0

    for (huruf = 0 ; huruf < panjang; huruf++) {
        if (str[huruf] === 'x') {jumlahx += 1}
        else if (str[huruf] === 'o') {jumlaho += 1}
    }
    return jumlahx === jumlaho
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
function balikKata(kata) {
  
  var jumlah = kata.length
  var balikKata
  
  balikKata = ''
  
  while (jumlah > 0) {
    balikKata += (kata[jumlah - 1])
    jumlah--
  }
  return balikKata
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS
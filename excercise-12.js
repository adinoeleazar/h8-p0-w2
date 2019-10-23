function konversiMenit(menit) {
  
  var detik
  if (menit%60 < 10) {detik = '0' + menit%60}
  else {detik = menit%60}

    return Math.floor(menit/60) + ':' + detik
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
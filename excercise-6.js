// Nomor 1
console.log('NOMOR 1' + '\n')


var number = 2

console.log('LOOPING PERTAMA')

while(number <= 20) {
    console.log(number + ' - I love coding')
    number += 2    
}

console.log('LOOPING KEDUA')

while(number > 2) {
    number -= 2
    console.log(number + ' - I will become fullstack developer')
}


// Nomor 2
console.log('\n' + '\n' + 'NOMOR 2' + '\n')

console.log('LOOPING PERTAMA')

for(var nomor = 1; nomor <= 20; nomor ++) {
    console.log(nomor + ' - I love coding')
}

console.log('LOOPING KEDUA')

for(var nomor = 20; nomor >= 1; nomor --) {
    console.log(nomor + ' - I will become fullstack developer')
}


// Nomor 3
console.log('\n' + '\n' + 'NOMOR 3' + '\n')

var angka1 = 1
while (angka1 <= 100) {
    if (angka1 % 2 === 0) {
        console.log('GENAP')
    }
    else {console.log('GANJIL')}
    angka1 ++
}

var angka2 = 1
while (angka2 <= 100) {
    if (angka2 % 3 === 0) {
        console.log(angka2 + ' KELIPATAN 3')
    }
    else {console.log('')}
    angka2 += 2
}

var angka5 = 1
while (angka5 <= 100) {
    if (angka5 % 6 === 0) {
        console.log(angka5 + ' KELIPATAN 6')
    }
    else {console.log('')}
    angka5 += 5
}

var angka9 = 1
while (angka9 <= 100) {
    if (angka9 % 10 === 0) {
        console.log(angka9 + ' KELIPATAN 10')
    }
    else {console.log('')}
    angka9 += 9
}
console.log('Tugas 1' + '\n')

function shoutOut() {
    return 'Halo Function!'
}

console.log(shoutOut())


console.log('\n' + '\n' + 'Tugas 2' + '\n')

function calculateMultiply(num1, num2) {
    return num1 * num2
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);


console.log('\n' + '\n' + 'Tugas 3' + '\n')

function processSentence() {
    return 'Nama saya ' + name + ', umur saya ' + age + 'tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!'
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);
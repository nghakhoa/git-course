for (let i = 1; i <= 100; i++);

for (let i = 2; i <= 9; i++) {
    console.log('Bảng cửu chương ' + i);
    for (let j = 1; j <= 10; j++) {
        console.log(i + ' x ' + j + ' = ' + (i * j));
    }
}

const soLe = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        soLe.push(i);
    }
}
console.log(soLe);

for (let i = 1; i <= 10; i++) {
    console.log('user' + i + 'example.com');
}
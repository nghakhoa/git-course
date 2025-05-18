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

const monthTotal = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 300 },
    { month: 4, total: 400 },
    { month: 5, total: 500 },
    { month: 6, total: 600 },
    { month: 7, total: 700 },
    { month: 8, total: 800 },
    { month: 9, total: 900 },
    { month: 10, total: 1000 },
    { month: 11, total: 1100 },
    { month: 12, total: 1200 }
];

let sum = 0;
for (let i = 0; i < monthTotal.length; i++) {
    const month = monthTotal[i];
    const total = month.total;
    sum = sum + total;
    console.log('Tổng doanh thu 12 thang la:' + sum);
}
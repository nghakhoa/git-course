function multiply(a, b) {
    const multiply = a * b;
    return a * b;
}
console.log(multiply(2, 3));
console.log(multiply(5, 6));

function findMin(a, b, c) {
    return Math.min(a, b, c);
}
console.log(findMin(1, 2, 3));
console.log(findMin(123, 6556, 3115));

function calculateInterest(principal, rate, years) {
    return (principal + principal * rate * years) / 100;

}
console.log(calculateInterest(1000, 4.5, 2));
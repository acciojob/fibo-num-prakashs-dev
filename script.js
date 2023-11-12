function isFibonacci(num) {
		// Write your code here
	let a = 0, b = 1;
    for (let i = 0; i < num; i++) {
        let c = a + b;
        if(num == c) return true;
        a = b;
        b = c;
    }
  return false;
}
const input = parseInt(prompt("Enter a number"));
alert(isFibonacci(input));

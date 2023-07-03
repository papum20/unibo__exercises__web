function fibo(n) {
	if(n == 1) return [0];
	else if(n == 2) return [0, 1];
	else {
		var a = fibo(n - 1);
		a.push(a[a.length - 1] + a[a.length - 2]);
		return a;
	}
}

console.log(fibo(10));
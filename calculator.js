function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a-b;
}

function sum (array) {
	return array.reduce((total, current) => total + current, 0);
};
	
function multiply (array) {
	let sum = 1;
    for (let i = 0; i < array.length; i++) {
        sum = sum * array[i];
    }
    return sum;
}

function power(a,b) { 
	return a ** b;
}

function factorial(n) { 
	if (n === 0) return 1;
	let num = 1; 
	for (let i = n; i > 0; i--) { 
		 num *= i; 
	}
	return num;
};
		
 
	



	
		




module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
	
	

	

	

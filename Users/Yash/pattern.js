// main JavaScript
function printNumbers(n){
	for (var i = 1; i <= n ; i++) {
		cout(i);
	}
}
function printReverseNumbers(n){
	for (var i = n; i >= 1; i--) {
		cout(i);
	}
}
	
	
function pattern(){

	var n = 3;


	for (var i = 0; i <= n ; i++) {
			cout(" ","\t*"+(n-i));
			printNumbers(2*i+1);
			newLine();
		}
	newLine(2);	
	for (var i = 0; i <= n ; i++) {
			cout(" ","\t*"+(n-i));
			printNumbers(i+1);
			printReverseNumbers(i);
			newLine();
		}

}

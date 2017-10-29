function char2int(char){
	
		if(char.length == 1){
		
		if(typeof(char) == "string"){
			return char.charCodeAt(0);
			} 
		}
		else{
			cout("ASCII value of first character is returned ","\n");		
			return char.charCodeAt(0);
		}
	
	
}

function str2Array(string){
	return string.split("");
}

function int2char(code){
	val = parseInt(code);
	
		if(val >= 0 && val <= 255 ){
			return String.fromCharCode(code);
		}
	
		cout(code+" does not represent any valid ascii","\n");	
		return -1;

}

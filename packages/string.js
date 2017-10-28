function getASCII(char){
	
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

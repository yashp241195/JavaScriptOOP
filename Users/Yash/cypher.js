// main JavaScript

function cypher(){
	this.input_text = [];
}


 cypher.prototype.getCyper = function method(string,type = "enc") {

 	this.input_text = str2Array(string);
 	coded = [];
 	
 	for (var i = 0; i < this.input_text.length; i++) {

 			var temp = this.ceaser(this.input_text[i],type);
 			coded.push(temp);

 		}
 		
 	return coded.toString().replace( /,/g, "" );
	
 };

 cypher.prototype.ceaser = function(char,type = "enc",shift = 4,mod = 26) {
  	
	 	temp = char2int(char);

	 	if(temp >= 65 && temp <= 90){
	 		begin = 65;
	 		end = 90;
	 	}
	 	else{
	 		begin = 97;
	 		end = 122;
	 	}

		if (type =="enc" ) { 	

 			encode = ((temp + shift) - begin) % mod + begin;
 			encode =  int2char(encode); 
 		
 			return encode;

 		}else{
 			
	 		decode = ((temp - shift) - end) % mod + end;
	 		decode =  int2char(decode); 
	 		
 			return decode;

	 	}

 };


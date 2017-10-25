// Use to write on the HTML page as Console

function cout(string,end = null){
	
	delimiter = '';
	counter = 1
	
	if(end != null && end.length > 1){
		
		MaxItr = parseInt(end[end.length-1])
		// if last element is a Number 
		if(MaxItr != NaN){
			// maximum delimiter
			if(MaxItr < 7){
				counter = MaxItr;
			}
			end = end.substr(0,end.length-2)
		}
	}
	
	for (var i = 0; i < counter; i++){

			switch(end){
			
			case "\n": delimiter += '<br>';
						break;
			case "\t": delimiter += '&nbsp;&nbsp;&nbsp;';
						break;
			case ",": delimiter +=', ';
						break;
						
			default:  delimiter += ' ';
    		}
		}
	
   	var out = string + delimiter;
	document.write(out);
}

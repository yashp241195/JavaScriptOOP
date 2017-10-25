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

function newLine(string){
	cout("","\n*"+string.toString());
}

function print1DArray(arr,fromIndex,toIndex){
	if (arr != null){
		maxIndex = arr.length - 1;
		
		
		if(fromIndex <= toIndex){
			
			if(fromIndex >= 0 && toIndex <= maxIndex){
				
				table = "<table class = \"table_class\">";
				IndexData = "<tr class = \"table_row\"><th style=\"color:green;\">Index </th>";
				tableData = "<tr class = \"table_row\"><th style=\"color:green;\">Data  </th>";

				for(i = fromIndex; i <= toIndex; i++){

					IndexData += "<th>"+i+"</th>"; 
					tableData += "<td>"+arr[i]+"</td>";
				}
				IndexData += "</tr>";
				tableData += "</tr>";
				table += IndexData + tableData +"</table>";

				newLine(2);
				cout(table);
				newLine(2);
			}
		}
		else {
			newLine(2);
			cout("Can't View the Array","\n*2");
		}
	}
}

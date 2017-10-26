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



function print1DArray(arr,fromIndex,toIndex,is2D = false,x="Data"){
	if (arr != null){
		maxIndex = arr.length - 1;
		
		if(fromIndex <= toIndex){
			
			if(fromIndex >= 0 && toIndex <= maxIndex){


				
				table = "<table class = \"table_class\">";
				if(is2D == false){
					newLine(2);
					IndexData = "<tr class = \"table_row\"><th style=\"color:green;\">Index </th>";
				}

							
				tableData = "<tr class = \"table_row\"><th style=\"color:green;\">"+x.toString()+"</th>";

				for(i = fromIndex; i <= toIndex; i++){
					if(is2D == false){
						IndexData += "<th> "+i+" </th>";
					}
					tableData += "<td> "+arr[i]+" </td>";
				}
				tableData += "</tr>";

				if(is2D){
					return tableData;
				}else{
					IndexData += "</tr>";
					table += IndexData + tableData +"</table>";
					cout(table);
					newLine(1);
				}

			}
			else {
				newLine(2);
				cout("Can't View the Array, Error : Indexes out of range ","\n*2");
			}
		}
		else {
			newLine(2);
			cout("Can't View the Array, Error: fromIndex is greater than toIndex ","\n*2");
		}
	}
}
function print2DArray(arr,fromRowIndex,toRowIndex,fromColumnIndex,toColumnIndex){


			
	if(arr != null){
		newLine(2);
	
		MaxRowIndex = arr.length - 1
		MaxColIndex = arr[0].length - 1

		if(fromRowIndex <= toRowIndex && fromRowIndex >= 0 && toRowIndex<= MaxRowIndex ){
			
			if(fromColumnIndex <= toColumnIndex && fromColumnIndex >= 0 && toColumnIndex<= MaxColIndex){
				
				//creating Index
				table = "<table class = \"table_class\">";
				Index = "<tr class = \"table_row\"><th style=\"color:green;\">Index</th>";
				for (var i = fromColumnIndex; i <= toColumnIndex; i++) {
					Index += "<th>"+i+"</th>";
				}
				table +=Index+"</tr>"; 

				for (var i = fromRowIndex; i <= toRowIndex; i++) {

					table += print1DArray(arr[i],fromColumnIndex,toColumnIndex,true,i);

				}
				table += "</table>";

				cout(table)
			
			}else{		
				newLine(2);
				cout("Can't View the Array, Error: Column : fromIndex is greater than toIndex ","\n*2");
			}

		}else{
			
			newLine(2);
			cout("Can't View the Array, Error: Row : fromIndex is greater than toIndex ","\n*2");
		}
	}
	
}

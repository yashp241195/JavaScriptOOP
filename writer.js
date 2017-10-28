function loadstyle(string = "online"){
	var online = "<link rel=\"stylesheet\" href=\" https://yashp241195.github.io/JavaScriptOOP/outputstyle.css\">";
	var offline = "<link rel=\"stylesheet\" href=\"outputstyle.css\">";
	if(string == "local"){
		cout(offline);
	}else{
		cout(online);
	}
}


// Use to write on the HTML page as Console
function cin(arr){
	temp = arr.shift();
	return temp
}


function cout(string,end = null){
	
	delimiter = '';
	counter = 1;
	
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

function newLine(string = 1){
	cout("","\n*"+string.toString());
}

function view(object,name = "undefined"){
	if(typeof(object) == "object"){
		cout("Can't view non premitive data type, use printObject() instead");
	}else{
		
		Objtype = typeof(object);
		value = object.toString();

		table = "<table class = \"table_class\">"; 
		table += "<tr class = \"table_row\"><th  style=\"color:purple;\">VariableName</th><td>"+name+"</td></tr>";
		table += "<tr class = \"table_row\"><th  style=\"color:green;\">Value</th><td>"+value+"</td></tr>";
		table += "<tr class = \"table_row\"><th  style=\"color:green;\">Data Type</th><td>"+Objtype+"</td></tr>";
		table += "</table>";
		newLine(2);
		cout(table);

	}
}

function print1DArray(arr,fromIndex = 0,toIndex = null,is2D = false,x="Data"){
	if (arr != null){
		maxIndex = arr.length - 1;
		
		if(toIndex == null){
			toIndex = maxIndex;
		}
		
		if(fromIndex <= toIndex){
			
			if(fromIndex >= 0 && toIndex <= maxIndex){


				
				table = "<table class = \"table_class\">";
				if(is2D == false){

					
					y = toIndex - fromIndex + 1;
					IndexData = "<tr class = \"table_row\">";
					IndexData += "<tr class = \"table_row\"><th style=\"color:purple;\">ClassName</th>";
					IndexData += "<th style=\"color:DodgerBlue;\" colspan=\""+y+"\">Array</th></tr>";
					IndexData += "<tr class = \"table_row\"><th style=\"color:green;\">Index </th>";
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
					newLine(1);
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
function print2DArray(arr,fromRowIndex=0,toRowIndex =null,fromColumnIndex=0,toColumnIndex=null,Objtype = "Array",isObj = false,isfloat =false){

	floatLeft="";
			
	if(arr != null){
		if(!isObj){
			newLine();
			newLine();
		}

		if(isfloat){
			floatLeft = "style=\"float:left;\"";
		}

	
		MaxRowIndex = arr.length - 1
		MaxColIndex = arr[0].length - 1
		
		if(toRowIndex == null){
			toRowIndex = MaxRowIndex;
		}
		if(toColumnIndex == null){
			toColumnIndex = MaxColIndex;
		}

		if(fromRowIndex <= toRowIndex && fromRowIndex >= 0 && toRowIndex<= MaxRowIndex ){
			
			if(fromColumnIndex <= toColumnIndex && fromColumnIndex >= 0 && toColumnIndex<= MaxColIndex){
				
				
								
				table = "<table "+floatLeft+" class = \"table_class\">";
				x = toColumnIndex-fromColumnIndex + 1;
				Index = "<tr class = \"table_row\"><th style=\"color:purple;\">ClassName</th>";
				Index +="<th style=\"color:DodgerBlue;\"  colspan=\""+x+"\">"+Objtype+"</th></tr>";


				Index += "<tr class = \"table_row\"><th style=\"color:green;\">Index</th>";
				for (var i = fromColumnIndex; i <= toColumnIndex; i++) {
					Index += "<th>"+i+"</th>";
				}
				table +=Index+"</tr>"; 

				for (var i = fromRowIndex; i <= toRowIndex; i++) {

					table += print1DArray(arr[i],fromColumnIndex,toColumnIndex,true,i);

				}
				table += "</table>";

				cout(table);
			
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


function printObject(object,innerObjectelementNo = 0,isFloat = false){
	
	ClassName = object.constructor.name

	Value = [];
	
	var alpha = "$";

	for(key in object) {
	    if(object.hasOwnProperty(key)) {
	        var value = object[key];
	        if(typeof(value) == "object"){
	        	if(value != null){

	        		if(value.constructor.name != "Array"){
	        			heteroProperty = Object.getOwnPropertyNames(object);
	        			
	        			i = 0;
	        			for(key2 in value){
	        				if(!Object.hasOwnProperty(key2)){
	        					alpha = value[key2];
	        				}

		        				if(i==innerObjectelementNo){
		        						break;
		        				}
	        				i++;	
	        			}
	        			if(typeof(alpha) =="Array" || typeof(alpha) =="string" || typeof(alpha) =="number"){
	        					
	        			}else{
	        				alpha = "$*";

	        			}
	        			
	        		
	        			value =heteroProperty[innerObjectelementNo]+" : "+alpha;
	        		}
	        	}
	        	
	        }
	        Value.push(value);
	    }
	}

	var PropertyNames = [];
	PropertyNames = Object.getOwnPropertyNames(object);
	maxIndex = PropertyNames.length-1;
	
	matrix = [];

	matrix.push(PropertyNames);
	matrix.push(Value);

	print2DArray(matrix,0,1,0,maxIndex,ClassName,true,isFloat);
	
}

function init1DArray(length = null,value = 0){
	

	if(length != null && length != 0){
		array = new Array(length);

		for (var i = 0; i < length; i++) {
			array[i] = [value];
		}
		return array;		
	}
	cout("Can't Create Array");
}


function init2DArray(x = null , y = null , value = 0){
	var matrix = [];

	if(x != null && x!=0 && y != null && y!=0  ){

		for(var i = 0; i < x ;i++){
			var array = init1DArray(y,value);
			matrix.push(array);
		}

		return matrix;

	}
	
	cout("Can't Create Array");
	
}

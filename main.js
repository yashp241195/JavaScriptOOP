
// main JavaScript

function main(is){
	
	
	
	var LL = new LinkedList();
	cout("Console Output","\n*2");
	LL.insert(cin(is));
	LL.insert(cin(is));
	LL.insert(cin(is));
	LL.insert(cin(is));
	newLine(3);
	printObject(LL);
	LL.printList();
	
	arr = ["YY",12,11,11]; 
	arr2 = [[9,8,7,6],[2,5,1,0]];
	
	print1DArray(arr,0,3)
	print2DArray(arr2,0,1,0,3);
	
	
	newLine(3);
	
	
	var car = {type:"Fiat", model:"500", color:"white"};
	printObject(car);

	var a = 123;
	view(a,"a");

	var b = 4.58;
	view(b,"b");

	var c = "Yash";
	view(c,"c");
			
	var d = false;
	view(d,"d");

	newLine(5);		
}


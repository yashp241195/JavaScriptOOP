// main JavaScript

function main(){

	var LL = new LinkedList();
	cout("Console Output","\n*2");
	LL.insert(1);
	LL.insert(2);
	LL.insert(3);
	LL.insert(4);

	arr = [11,12,11,11];
	arr2 = [[9,8,7,6],[2,5,1,0]];

	print1DArray(arr,0,3)

	
	print2DArray(arr2,0,1,0,3);

	LL.printList();
}
		
main();

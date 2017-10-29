// main JavaScript

// Class defination with constructor

// Class Node
function Node(data,next = null){
	this.data = data;
	this.next = next;
	
}

// Class LinkedList
function LinkedList(start = null){
	this.start = start;
}

	// defining the methods of Linked List

	LinkedList.prototype.insert = function method(data) {
		cout("Inserting "+data,"\n");

		if(this.start == null){
			this.start = new Node(data);

		}else{
			var i = this.start;
			while(i.next != null){
				i=i.next;
			}
			i.next = new Node(data);
		}
	};

	LinkedList.prototype.printList = function method(){
		newLine(3)
		cout("Printing the LinkedList : ","\n*2")
		floatLeft = true;
		var i = this.start;

		while(i != null){
			
			printFloatedArrow();
			printObject(i,0,floatLeft);	
			
			i = i.next;
		}

		clearFloat();
		
		
		
	};

	
	

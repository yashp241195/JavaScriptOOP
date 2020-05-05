
function getRandColor(){
	return "#"+((1<<24)*Math.random()|0).toString(16);
}

function loopSlow(){

	var n = 10;
    var i = 0;
    var j = 0;
    var j_start = 0;
    var i_end = n;
    var j_end = n;
    // (2*n)-1;

	var timer =	setInterval(function(){ 

		if(j == j_end){

			newLine(1);

			j = j_start;
			if(i == i_end){	clearInterval(timer);}else{i++;}
			
			}else{
			if(i < i_end){

			
			/*
			if((j < (i_end-1)-i) || (j > (i_end-1)+i)){

				cout(" _ "," ",getRandColor(),"");
			}

			else{
				cout(" * "," ",getRandColor(),"");
			}	
			*/	

			/*if (j < n-i-1) {
				cout(" _ "," ",getRandColor(),"");
			}else{
				cout(" * "," ",getRandColor(),"");
			}*/

			if (j <= i) {
				cout(" * "," ",getRandColor(),"");
			}else{
				cout(" _ "," ",getRandColor(),"");
			}




				j++;


			}
		}
		
	}, 1000/10);
	
}




	
function pattern(){


    loopSlow();

	newLine(2);


	
}

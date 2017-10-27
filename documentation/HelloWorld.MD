# First Program : Hello World

Earlier, we saw the implementation of index.html and setup. 
Now, we are ready to write our first program using this 
JavaScript based library.

    Step 1 : Open the main.js file 

## Basic Input Output Operations (cin,cout,newLine)

#### main.js
    
      function main(is){
            
           /* 
              1) cout(string,delimiter) :
            
              cout helps to print the statement on html webpage(DOM)
              cout function has 2 arguments
                
                1st argument : data which should be written on the 
                              index.html (Output Console) file
                
                2nd argument : delimiter
                        "\n" is for newLine
                        "\t" for tab spacing
                        ","  for comma
                        " "  for spacing
                        "\t*2" means 2 tab spacing
                        "\n*3" means 3 newLines
                        max limit is \t*6 , \n*6 
                        if exceeds 6 then,
                            it will mean \n*1
                          example : \n*100 means \n*1 
                        
           */
           
           cout(" Hello World !! ","\t*2");
                     
           var x = "This is my first program using Visualize JS library";
           
           cout(x,"\n*2");
           
           /*
              "is" is an input stream array which we saw earlier
              used like string args[] in java/C++
              
              if we define Inpustream in run function()
              InputStream = [5,2,3,4,5,4,8];
              
              2) cin(array) :
      
              var x = cin(InputStream); 
              
              cin() will return the first element of InputStream and pop() the first element
              It will work like queue (FIFO)

              x value will be 5 
              
              // updated list
              InputStream = [2,3,4,5,4,8];
              cout(cin(InputStream));
              // updated list
              InputStream = [3,4,5,4,8];
              cout(cin(InputStream));

           */
           var y = cin(is);
           cout(y);
           /*
              3) newLine(argument) :
                 It is the function helps to break the line or "\n" functionality
                 by adding <br> tag
                  
                  argument is set as 1 by default means 1 times \n
                  newLine(4) means 4 times \n 
                
           */
           newLine();
           newLine(4);
           
           
           
	
      }
#### Output

<img src="https://github.com/yashp241195/JavaScriptOOP/blob/master/documentation/img/out1.png" height="200" width="400">

Now we are ready to move on to the visulization part which is the heart of this project.In next slide we will see how to visualize 
premitive data types such as int,char,boolean,arrays etc

Click [here](https://github.com/yashp241195/JavaScriptOOP/blob/master/documentation/Datatypes.MD) to go to next slide

[previous](https://github.com/yashp241195/JavaScriptOOP/blob/master/README.md)

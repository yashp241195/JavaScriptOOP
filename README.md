# Visualize JS 
   
    This is an open source project which helps to visualize the algorithms easily.

#### Check the list of Functions in this library : [here](https://github.com/yashp241195/JavaScriptOOP/blob/master/documentation/List_of_functions.MD)

##### Click [here](https://yashp241195.github.io/JavaScriptOOP) to see the demo

### Getting Stated

    Step 1 : Download the repository
    step 2 : open index.html to view the output of the code

<img src ="https://github.com/yashp241195/JavaScriptOOP/blob/master/documentation/img/dir.png" width = "600px" height="200px">   
     
    step 3 : Open index.html in text editor like sublime or notepad and check 
             whether all required files are linked or not to index.html
     
#### index.html     
     <!-- index.html-->       
     
     <!DOCTYPE html>
      <html lang="en">
      <head>
         <meta charset="UTF-8"/>
         <title>Output Console</title>
         <!-- writer.js is mandatory as it contains input output functions and it should be added first -->
         <script src = "writer.js"></script>
         <!-- 
         class.js is auxillary, it contains class to implement LinkedList for the purpose of illustration
         we can add our own script in between these two scipt in order to define custom class and functions
         -->
         <script src = "class.js"></script>
         <!-- main.js is mandatory as it contains main() function and it should be added last -->
         <script src = "main.js"></script>

         <script type="text/javascript">
            function run(){
               // taken as input token stream 
               InputStream = [5,2,3,4,5,4,8];
               /* 
                  loadstyle function() :
                  
                  It helps to load the stylesheet="outputstyle.css" dynamically on demand 
                  
                  argument : "local" means load the CSS from the downloaded folder 
                  argument : "online" means load CSS from the github, doesnot works offline
                  
               */
               loadstyle("local");
               /*
                  main() function :
                  
                  It is the function which will execute first,
                  It is a standard practice followed by most of the programming languages 
                  like C/C++/Java etc.
                  
               */ 
               /* 
                  InputSream array is the array taken as input for main function like
                  "string args" is used in java,C++
                  
                  InputStream will help us to build "cin()" {console input} functionslity.
                  
               */
               main(InputStream);
            }
            // start running the code starting from run() function
            run();		

         </script>
         </head>
      <body>

      </body>
      </html>             
     

Now, you are ready to go, Click [here](https://github.com/yashp241195/JavaScriptOOP/blob/master/documentation/HelloWorld.MD) to read the documentation 

Author : Yash Pratap




    
    


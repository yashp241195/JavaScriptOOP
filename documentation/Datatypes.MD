# Data Types and their Visualizations

# First Program : Hello World

Earlier, we saw the implementation of basic input output operations(cin,cout). 
Now, we are ready to start the visualization part.

Open the main.js file 

#### main.js
    
      function main(is){
          /*
                        
            In JavaScript,
              we have 3 common primitive non-array data types :
                1) number : int,float both falls under this category
                2) string : stream of character
                3) boolean : use to define boolean value either true or false
             
             view(data,identifier) :
               view function will helps us to visualize primitive non-array datatypes
               like int,float,char,boolean etc.
             
             1st argument : value of data
             2nd argument : identifier for the data or name of variable
          
          */
          
          var a = 123;
          view(a,"a");

          var b = 4.58;
          view(b,"b");

          var c = "Yash";
          view(c,"c");

          var d = false;
          view(d,"d");  
          
          
          /*
            Dictionary Object : 
            
            var car = {type:"Fiat", model:"500", color:"white"};
            
            If we want to access the color of car variable of dictionary type object
            we will use car.color which will return value as "white"
              
            cout(car.color); 
            
            // To view the object in tabular format             
            printObject(object) :
            
          */
          
           var car = {type:"Fiat", model:"500", color:"white"};
           printObject(car);
           
           /*
           
            Arrays
           
           */
      
      }


So far we have learned how to perform basic input output operations and visualization of premitive data types. It's time 
to move on to the next topic in which we will learn how to create our own class and it's visualization.

Click [here]() to go to next slide

[previous](https://github.com/yashp241195/JavaScriptOOP/blob/master/documentation/HelloWorld.MD)



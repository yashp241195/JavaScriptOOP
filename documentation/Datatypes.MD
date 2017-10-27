# Data Types and Visualizations

## view, printObject, print1DArray, print2DArray

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
          newLine(3);
          
           var car = {type:"Fiat", model:"500", color:"white"};
           printObject(car);
           
           /*
           
            Arrays : 
                1) 1-Dimentional Array
                    fromIndex = from which Index you wish to visualize
                    toIndex = to which index you wish to visualize
                
                print1DArray(array,fromIndex,toIndex)
                
                2) 2-Dimentional Array
                    fromIndex = from which column Index
                    toIndex = to which column index
                    
                    fromRowIndex = from which row Index you wish to visualize
                    toRowIndex = to which row index you wish to visualize 
                    fromColumnIndex = from which Column Index you wish to visualize
                    toColumnIndex = to which Column index you wish to visualize 
                
                print2DArray(Array,fromRowIndex,toRowIndex,fromColumnIndex,toColumnIndex)
                
               In JavaScript,
                 Heterogeneous Arrays are also supported means:
                 var Array = [1,2,3,"Yash",3,7,false,true]; is also valid
                 we already know by conventional defination Array is the collection of homogeneous datatypes
                 stored at contiguous memory location
            
           
           */
            arr = ["YY",12,false,11.1]; 
            arr2 = [[9,8,"alpha",6],[2,true,1,0]];

            print1DArray(arr,0,3)
            print2DArray(arr2,0,1,0,3);
           
            newLine(5);
      }

### Output

<img src="https://github.com/yashp241195/JavaScriptOOP/blob/master/documentation/img/out2.png" height="600" width="400">
<img src="https://github.com/yashp241195/JavaScriptOOP/blob/master/documentation/img/out3.png" height="600" width="400">

So far we have learned how to perform basic input output operations and visualization of premitive data types. It's time 
to move on to the next topic in which we will learn how to create our own class and it's visualization.

Click [here]() to go to next slide

[previous](https://github.com/yashp241195/JavaScriptOOP/blob/master/documentation/HelloWorld.MD)



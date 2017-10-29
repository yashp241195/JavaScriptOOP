@echo off 

:: Used for excution of for loop
setlocal enabledelayedexpansion

:: Add fileNames here

set fileName[0]=index.html
set fileName[1]=main.js

:: Set Your Path

SET SublimePath="C:\Program Files\Sublime Text 3\subl.exe"
SET YourFilePath=""

:: if you are not storing autorun.bat in the main directory then you 
:: must mention the path as given below otherwise it is not necessary

::SET YourFilePath="C:\Users\Yash\Desktop\VisualizeJS\VisualizeJS-master\

:: Query for execution of a program ,please do not touch this

SET Query="" %SublimePath% %YourFilePath%

::
:: 0->initial value of i,1-> increment by 1, 1->iterate till i become 1 

for /l %%i in (0,1,1) do ( 

	:: execute the query by Start command
	Start %Query%!fileName[%%i]!
)
:: pause
exit

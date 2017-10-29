
// main JavaScript

function solveMaze(maze,hasPath){
	this.maze = maze;
	this.Xmax = maze.length;
	this.Ymax = maze[0].length;
	this.solution = this.maze;
	this.hasPath = hasPath;
	this.xfinal = null;
	this.yfinal = null;
	

}
	
	solveMaze.prototype.solve = function method(xf = this.Xmax-1,yf = this.Ymax-1) {
		this.xfinal = xf;
		this.yfinal = yf;

		isSolved = this.solveMazeUtil(0,0);
		if(isSolved == true){
			this.printSolution();
			return true;			
		}else{
			cout("can't be solved");			
			return false;
		}
	};

	solveMaze.prototype.printSolution = function() {
			
			newLine(2);

			cout("The Solution Path is : ");
			print2DArray(this.solution);
		
	};	

	solveMaze.prototype.isSafe = function method(x,y){
		issafe = false;
		// is mouse in maze 
		
		if(x >= 0 && x < this.Xmax && y >= 0 && y < this.Ymax){
			// is mouse safe inside maze			
			if(this.maze[x][y] == this.hasPath){
				issafe = true;
			}
		}
		return issafe;
	};

	solveMaze.prototype.solveMazeUtil = function method(x,y) {
		
		float = true;
		
		printFloatedArrow();
		print2DArray(this.solution,0,this.Xmax-1,0,this.Ymax-1,"Maze",false,float);

		
		player = "<img src=\"images/rat.png\" style=\"height:25px;width:25px;\" alt=\"rat\"/>";
		if(x == this.xfinal && y == this.yfinal){


			this.solution[x][y] = player;
			
			float = false;

			printFloatedArrow();

			print2DArray(this.solution,0,this.Xmax-1,0,this.Ymax-1,"Maze",false,float);

			return true;

		}
			if(this.isSafe(x,y)){
				
			this.solution[x][y] = player;

			
			if (this.solveMazeUtil(x, y+1)){
				
				return true;
			}
			if (this.solveMazeUtil(x+1, y)){
				
				return true;
			}

				/* If none of the above movements work then BACKTRACK: 
				unmark x,y as part of solution path */
			this.solution[x][y] = "<div style=\"background-color:Yellow;\">&nbsp;&nbsp;&nbsp;&nbsp;</div>";

			return false;
		}else{
			this.solution[x][y] = "<div style=\"background-color:LawnGreen;\">&nbsp;&nbsp;&nbsp;&nbsp;</div>";

		} 
		
		clearFloat();
		newLine(2);
		cout("BACKTRACKING");
		newLine(2);
		return false;

	};





function mazeandrat(){
	newLine();
	danger = d = "<div style=\"background-color:red;\">&nbsp;&nbsp;&nbsp;&nbsp;</div>";
	hasPath = s = "<div style=\"background-color:DimGrey;\">&nbsp;&nbsp;&nbsp;&nbsp;</div>";
	tried = "<div style=\"background-color:LawnGreen;\">&nbsp;&nbsp;&nbsp;&nbsp;</div>";
	backtracked = "<div style=\"background-color:Yellow;\">&nbsp;&nbsp;&nbsp;&nbsp;</div>";
	rat = "<img src=\"images/rat.png\" style=\"height:22px;width:22px;\" alt=\"rat\"/>";

	var maze = [[s,d,d,d],
				[s,s,s,s],
				[d,s,d,d],
				[s,s,s,s]];

	cout("<center><h2>Maze and Rat Problem : </h2></center>","\n*1");			
	cout("Representing the maze in 2D matrix","\n*1");		
	print2DArray(maze);
	newLine(2);

	cout("Sign Conventions:");
	newLine(2);
	var sign = {Rat: rat ,Danger :danger, Path:hasPath, Tried:tried,Backtracked:backtracked ,Trial_Sequence:"Right &#8608; Down &#8609;" };
	printObject(sign);
	newLine(2);

	cout("Finding the solution : ","\n*2");
	cout("Start the travelling from 0,0","\n*2");

	newLine(2);
	
	var maze = new solveMaze(maze,hasPath);
	maze.solve()

	newLine(4);

		
}

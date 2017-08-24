var test = [
    ["I","L","A","W"], 
    ["B","N","G","E"], 
    ["I","U","A","O"], 
    ["A","S","R","L"] 
  ]; 

Test.expect( checkWord( testBoard, "E" ) == true );
Test.expect( checkWord( testBoard, "RUN" ) == true );
Test.expect( checkWord( testBoard, "RUNS" ) == false );
Test.expect( checkWord( testBoard, "BINGO" ) == true );
Test.expect( checkWord( testBoard, "LOEUAAIRSALINWBG" ) == true, "Must be able to check indefinite word lengths going in all directions" );
Test.expect( checkWord( testBoard, "SINUS" ) == false, "Valid guesses can't overlap themselves" );
Test.expect( checkWord( testBoard, "BUNGIE" ) == false, "Valid guesses have to be adjacent" );
Test.expect( checkWord( testBoard, "BAKER" ) == false, "All the letters have to be in the board" );
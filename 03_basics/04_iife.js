// Immediately Invoked Function Expression (IIFE)
// globale scope polution make problems 
// so we need IIFE to avoid that problem

// (Function Defination) (execution);
( function dbConnection() {
     //named IIFE
    console.log("DB Conected..");
} )();

( (name) =>  {
    //un-named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
}) ('Afeef Sohail');




   
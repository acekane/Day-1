let first_Number=prompt("Enter Your First Number: ");
let Second_Number=prompt("Enter Your second Number: ");

first_Number=Number(first_Number);
Second_Number=Number(Second_Number);

if(first_Number>=0 && Second_Number>=0){
    let average=(first_Number+Second_Number);
    alert(`The average of Number is:${average}`);   
}
else{
    alert("Please Enter a Only positive Number:\n for Example First Number=10 and second number is 20."); 
}
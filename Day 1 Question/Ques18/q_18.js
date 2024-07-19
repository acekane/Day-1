let basePrice=100;
let disccount="10";
let Disccount=Number(disccount);

let lessDiscountprice=basePrice*Disccount/100;
console.log("disccount Price: ",lessDiscountprice);
let finalPrice=basePrice-lessDiscountprice;
console.log("After Disccount price is: ",finalPrice);

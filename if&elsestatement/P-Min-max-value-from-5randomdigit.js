Random1=Math.floor(Math.random()*1000) + 100 ;
console.log(Random1);
Random2=Math.floor(Math.random()*1000)+100;
console.log(Random2);
Random3=Math.floor(Math.random()*1000)+100;
console.log(Random3);
Random4=Math.floor(Math.random()*1000)+100;
console.log(Random4);
Random5=Math.floor(Math.random()*1000)+100;
console.log(Random5);


 if (Random1>Random2 & Random1>Random3 & Random1>Random4 & Random1>Random5 )
 {
    console.log("Random1 value is maximum: " + Random1)

 }
 else if (Random2>Random1 & Random2 > Random3 & Random2>Random4 & Random2>Random5)
 {
    console.log("Random2 value is maximum: " + Random2);

 }
 else if (Random3>Random1 & Random3 > Random2 & Random3>Random4 & Random3>Random5)
 {
    console.log("Random3 value is maximum: " + Random3);

 }
 else if (Random4>Random1 & Random4 > Random2 & Random4>Random3 & Random3>Random5)
 {
    console.log("Random value is maximum: " + Random3);
 }
 else if (Random5>Random1 & Random5 > Random2 & Random5 > Random3 & Random5>Random4)
 {
    console.log("Random5 value is maximum: " + Random3);
 }
/*
creat a bussiness name generator by combining list of adjectives and shop name and another word.

Adjectives:
Crazy
Amazing
Fire

Shop name:
Engine
Foods
Garments

Another word:
Bros
Limited
Hub

*/

// console.log(Math.random()*3);   //this will generate float number

let r1=Math.floor(Math.random()*3);     //this will generate int number
let r2=Math.floor(Math.random()*3);
let r3=Math.floor(Math.random()*3);

/*
let ad1 =" Crazy ";
let ad2 =" Amazing ";
let ad3 =" Fire ";

let sn1 = " Engine ";
let sn2 = " Foods ";
let sn3 = " Garments ";

let aw1 = " Bros ";
let aw2 = " Limited ";
let aw3 = " Hub ";
*/

let cn=" ";

if(r1==0)   cn=cn.concat(" Crazy ");

else if(r1==1)  cn=cn.concat(" Amazing ");

else    cn=cn.concat(" Fire ");


if(r2==0)   cn=cn.concat(" Engine ");

else if(r2==1)  cn=cn.concat(" Foods ");

else    cn=cn.concat(" Garments ");


if(r3==0)   cn=cn.concat(" Bros ");

else if(r3==1)  cn=cn.concat(" Limited ");

else    cn=cn.concat(" Hub ");


console.log(cn);



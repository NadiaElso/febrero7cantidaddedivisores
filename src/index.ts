
let multiplo:boolean=false;

function esMultiplo(numero1:number,numero2:number):boolean{
  
let division=numero1%numero2;

if (division===0) {
   multiplo=true;
console.log(multiplo);
 } else {
   multiplo=false;
   console.log(multiplo);
 } 

return

 

 }

let multiploDe:boolean=esMultiplo(4,2);

console.log(multiploDe);



function cantidadDedivisores(numeroEntero:number) {
for (let index = 0; index < numeroEntero; index++) {
 
  esMultiplo(numeroEntero,divisores);
}

 

if (multiploDe===true) {
  let divisoresDe:number=0;
  divisoresDe=divisores;
  console.log("los divisores del " + numeroEntero + "son " + divisoresDe );
}


}

cantidadDedivisores(16,2)
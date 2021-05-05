function cores(){
let cores = document.querySelectorAll('.color');
let arraycolor = ['#0d3b66','#faf0ca','#f4d35e','#ee964b','#f95738']
for(let index =0; index < cores.length;index +=1){
cores[index].style.backgroundColor = arraycolor[index];
}
}
cores();
let listaCores = document.getElementById('color-pallete');
for (index = 0 ; index < 4; index +=1 ){
   let colorSquare = document.createElement('li');
   colorSquare.className = 'color';
   listaCores.appendChild(colorSquare);
}

let colorList = document.getElementsByClassName('color');
let colorArray = [ 'black' ,'red', 'purple', 'yellow'];
for(index = 0 ; index < colorList.length ; index +=1){
    colorList[index].style.backgroundColor = colorArray[index]

}

function createPixelBoard (){
    
}
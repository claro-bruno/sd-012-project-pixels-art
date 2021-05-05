function handleSelect(event) {
    const colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
  
  const divColor = document.getElementsByClassName('color');
  for (let div of divColor ){
    div.addEventListener('click', handleSelect);
  }
  
  
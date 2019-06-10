
function init(id){
	console.log(id);
	//console.log(document.getElementById('svg-container').innerHTML);

	// fetch('./svg/sample.svg')
	fetch('./svg/sample'+id+'.svg')
	  .then(data => data.text())
	  .then(html => {
	  	document.getElementById('svg-container').innerHTML = html;
	  	document.getElementById('svg-container').style.overflow = "auto";
	  }).then(()=>{
	  	let svg = document.getElementsByTagName('svg')[0];

	  	// svg.style["-webkit-transition"] = "all 0.2s linear";
		svg.addEventListener('click', e=> {
		    if (e.target.closest('rect')) {
		        let rect = e.target.closest('rect');
		        //console.log(currentColor);
		        rect.style.fill = currentColor;
		    } else {
		    let path = e.target.closest('path');
		    path.classList.contains('st2') ? path.style.fill = currentColor : console.log('path.style: ' + path.style.fill);
		    }
		});
	  });
}


function setColor() {
	let colorActive = document.querySelector('.color.active');
	currentColor = getComputedStyle(colorActive).color;
}

function zoomIn(){
	let svg = document.getElementsByTagName('svg')[0];
	svg.style.transform = "translate(50%,50%) scale(2,2)";
	// svg.style["-webkit-transition"] = "all 0.5s ease";
}
function zoomOut(){
	// $('#svg-container').fadeOut(1);
	// $('#svg-container').fadeIn(1);

	let svg = document.getElementsByTagName('svg')[0];
	svg.style.transform = "";
}


function loadSVG(id){
	//console.log('***************************************************' + id);

	//Init SVG Object
	let currentColor;
	var param_filename = null;
	setColor();

	init(id);
	
	let colors = document.getElementsByClassName('color');
	let colorsContainer = document.querySelector('.footernav');

	colorsContainer.addEventListener('click', e => {

		for(let i=0; i < colors.length; i++) {
			colors[i].classList.remove('active');
		}

		let newColor = e.target.closest('.color');
		newColor.classList.add('active');
		setColor();
	});
}

$(document).ready(function(){

	init(1);
	init(2);
	init(3);
	
	
	//Init SVG Object
	// let currentColor;
	// var param_filename = null;
	// setColor();

	// init();
	
	// let colors = document.getElementsByClassName('color');
	// let colorsContainer = document.querySelector('.footernav');

	// colorsContainer.addEventListener('click', e => {

	// 	for(let i=0; i < colors.length; i++) {
	// 		colors[i].classList.remove('active');
	// 	}

	// 	let newColor = e.target.closest('.color');
	// 	newColor.classList.add('active');
	// 	setColor();
	// });

});	


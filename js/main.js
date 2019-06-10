let currentColor;

var param_filename = null;

function setColor() {
  let colorActive = document.querySelector('.color.active');
  currentColor = getComputedStyle(colorActive).color;
}
setColor();
function zoomIn(){
	let svg = document.getElementsByTagName('svg')[0];
	svg.style.transform = "translate(50%,50%) scale(2,2)";
	// svg.style["-webkit-transition"] = "all 0.5s ease";
}
function zoomOut(){
	let svg = document.getElementsByTagName('svg')[0];
	svg.style.transform = "";
}
function init(){
	fetch('./svg/sample.svg')
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
		        console.log(currentColor);
		        rect.style.fill = currentColor;
		    } else {
		    let path = e.target.closest('path');
		    path.classList.contains('st2') ? path.style.fill = currentColor : console.log(path.style.fill);
		    }
		});
	  });
}
init();
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

function generate_rnd_string(){

	let r = Math.random().toString(36).substring(7);
	r = r + ".jpg";
	console.log("random", r);
	return r;
}

/*
function upload_image(){


  let coloredSvg = document.getElementsByTagName('svg')[0];
  let temp = '' + coloredSvg.outerHTML;
  canvg(document.getElementById('canvas'), temp);

  let img = canvas.toDataURL("image/png");
  console.log(img);

  var formData = new FormData(); 
  formData.append("myfile", img);

  param_filename = generate_rnd_string();
  formData.append("filename", param_filename);

  var location_url = "./page4.html?name=" + param_filename;
	
  
  $.ajax({
			url: "upload.php", 
			type: "POST",             
			data: formData, 
			contentType: false,
			cache: false,
			processData:false,

				success: function(data)
				{

					//alert("Done!");

					window.location.href = location_url;
					//alert(window.location.href);
				}
			});

//$.post( "upload.php", formData ) ;
//alert(location_url);
//window.location.href = location_url;
sleep(3000);

}
*/

function download2() {

  let coloredSvg = document.getElementsByTagName('svg')[0];
  let temp = '' + coloredSvg.outerHTML;
  canvg(document.getElementById('canvas'), temp);

  let img = canvas.toDataURL("image/png");
  console.log(img);


  triggerDownload(img);
};

function triggerDownload (imgURI) {
  var evt = new MouseEvent("click", {
    view: window,
    bubbles: false,
    cancelable: true
  });
  var a = document.createElement("a");
  a.setAttribute("download", 'resultIMG');
  a.setAttribute("href", imgURI);
  a.setAttribute("target", '_blank');
  a.dispatchEvent(evt);
}

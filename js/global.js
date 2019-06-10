
function backtopage2(){

	window.location.href = "./page2.html?action=1";	
}

function goto_paintpage() {

	setTimeout(
	function() {
   		window.location.href = "./page3.html"

	}, 1000);
}

function showHideElement(id, visible){
	//console.log(id);

	if(visible == true){
		document.getElementById(id).classList.remove("hide");
		return;
	}
	
	document.getElementById(id).classList.add("hide");
}

let next_animation_complete = false;
let video_pane_content = null;

let video_pane_width = 0;
let video_pane_height = 0;


function showCloneDiv(id){

	var pane_element = $("#" + id)

	//console.log(pane_element.width());
	//console.log(pane_element.height());

	let nWidth = pane_element.width();
	let nHeight = pane_element.height();

	//console.log(pane_element.html());
	video_pane_content =  pane_element.html();

	pane_element.css({"background-color": '#89E9C2'});
	pane_element.html("");
	pane_element.width(nWidth);
	pane_element.height(nHeight);

	//start animation
	//console.log("start animation!");
	rendervideoAnimation("video-container");

	//animationComplete();

}



function animationComplete() {

	
	//console.log("prev_content");
    //console.log('test completed');
    //alert("Done!");

    //element.html(prev_content);
    //alert("111");

    
    //recoverVideoPane("video-container", video_pane_content);

}

function recoverVideoPane(id, content){

	var element = $("#" + id)
	//element.html("");
	//element.html(content);
	//alert("ready recover!");
	//console.log("ready recover!");
	element.html(content);

	/*$('.video').parent().click(function () {

		if($(this).children(".video").get(0).paused)
		{

			$(this).children(".video").get(0).play();
			$(this).children(".playpause").fadeOut();
		}
		else
		{
			$(this).children(".video").get(0).pause();
			$(this).children(".playpause").fadeIn();
		}
	});*/

	//add onclick event

	document.getElementById("next_Ctrl").removeEventListener("click", upload_image);
	document.getElementById("next_Ctrl").addEventListener("click", goto_finalpage);

	
	document.getElementById("back_Ctrl").removeEventListener("click", backtopage2);
	//$("#back_Ctrl").off("click");
	document.getElementById("back_Ctrl").addEventListener("click", back_paintpage);
	//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

}
function gotopage2(){
	window.location.href = "./page2.html";
}

function back_paintpage(){
	
	//console.log("4---------------->3 state!");

	showHideElement("video-container", false);
	showHideElement("svg-container", true);

	showHideElement("function-buttons", true);
	showHideElement("side-images", true);
	showHideElement("crayon", true);

	document.getElementById("next_Ctrl").removeEventListener("click", goto_finalpage);
	document.getElementById("next_Ctrl").addEventListener("click", next_paintpage);

	document.getElementById("back_Ctrl").removeEventListener("click", back_paintpage);
	document.getElementById("back_Ctrl").addEventListener("click", backtopage2);

}

function next_paintpage(){

	//console.log("3---------------->4 state!");

	showHideElement("crayon", false);
	showHideElement("video-container", true);

	showHideElement("function-buttons", false);
	showHideElement("svg-container", false);
	showHideElement("side-images", false);

	document.getElementById("next_Ctrl").removeEventListener("click", upload_image);
	document.getElementById("next_Ctrl").addEventListener("click", goto_finalpage);

	document.getElementById("back_Ctrl").removeEventListener("click", backtopage2);
	
}

function rendervideoAnimation(id){
	
	var animContainer = document.getElementById(id);

	var animationData = {"assets":[],"v":"4.3.0","ddd":0,"layers":[{"ddd":0,"ind":0,"ty":1,"nm":"blob__yellow","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[540,540,0]},"a":{"k":[540,540,0]},"s":{"k":[{"i":{"x":[0.222,0.222,0.667],"y":[1,1,0.667]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p222_1_0p167_0p167","0p222_1_0p167_0p167","0p667_0p667_0p167_0p167"],"t":4,"s":[0,0,100],"e":[100,100,100]},{"t":15}]}},"hasMask":true,"masksProperties":[{"cl":true,"inv":false,"mode":"a","pt":{"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":4,"s":[{"i":[[26.858,-3.247],[25.249,-14.754],[-5.297,-33],[-16.249,-9.037],[-28.885,-3.379],[-21,-2.703],[-40.627,14.108],[-1.297,12],[7.283,17.874],[17.465,10.855]],"o":[[-19,2.297],[-25.249,14.754],[5.297,33],[14.667,8.157],[28.885,3.379],[21,2.703],[17.679,-6.139],[3.22,-29.802],[-8.734,-21.435],[-22.887,-14.224]],"v":[[476,432.703],[431.249,460.246],[379.703,490],[426.333,512.843],[462.115,534.621],[501,518.297],[551.321,547.139],[565.297,516],[575.717,473.126],[521.887,477.224]]}],"e":[{"i":[[145.748,0],[141.126,-140.618],[22.297,-160],[-7.41,-117.525],[-128.115,-71.621],[-127.399,0],[-141.321,102.861],[0,194.556],[64.283,87.874],[138.363,82.457]],"o":[[-214.963,0],[-141.795,141.284],[-17.361,124.581],[3.667,58.158],[116.055,64.879],[236.39,0],[145.858,-106.163],[0,-112.43],[-95.835,-131.005],[-116.724,-69.561]],"v":[[506,3.703],[219.249,247.246],[9.703,488],[92.333,749.842],[72.115,1023.621],[526,936.297],[953.321,953.139],[978.297,592],[1063.717,236.126],[768.887,177.224]]}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":21,"s":[{"i":[[145.748,0],[141.126,-140.618],[22.297,-160],[-7.41,-117.525],[-128.115,-71.621],[-127.399,0],[-141.321,102.861],[0,194.556],[64.283,87.874],[138.363,82.457]],"o":[[-214.963,0],[-141.795,141.284],[-17.361,124.581],[3.667,58.158],[116.055,64.879],[236.39,0],[145.858,-106.163],[0,-112.43],[-95.835,-131.005],[-116.724,-69.561]],"v":[[506,3.703],[219.249,247.246],[9.703,488],[92.333,749.842],[72.115,1023.621],[526,936.297],[953.321,953.139],[978.297,592],[1063.717,236.126],[768.887,177.224]]}],"e":[{"i":[[281.812,0],[0,0],[0,-256],[0,-126.158],[0,0],[-271.5,0],[0,0],[0,148.875],[0,156.126],[0,0]],"o":[[-281.812,0],[0,0],[0,256],[0,126.158],[0,0],[271.5,0],[0,0],[0,-148.875],[0,-156.126],[0,0]],"v":[[501.812,0.016],[-0.001,-0.004],[-0.297,416],[0,845.842],[0.115,1079.621],[532.5,1080.297],[1080.036,1079.997],[1080.047,652.875],[1079.967,268.126],[1080.012,-0.026]]}]},{"t":32}]},"o":{"k":100},"x":{"k":0},"nm":"Mask 1"}],"sw":1080,"sh":1080,"sc":"#f4e097","ip":4,"op":33,"st":4,"bm":0,"sr":1},{"ddd":0,"ind":1,"ty":1,"nm":"blob__white","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[540,540,0]},"a":{"k":[540,540,0]},"s":{"k":[{"i":{"x":[0.222,0.222,0.667],"y":[1,1,0.667]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p222_1_0p167_0p167","0p222_1_0p167_0p167","0p667_0p667_0p167_0p167"],"t":0,"s":[0,0,100],"e":[100,100,100]},{"t":11}]}},"hasMask":true,"masksProperties":[{"cl":true,"inv":false,"mode":"a","pt":{"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":0,"s":[{"i":[[26.858,-3.247],[25.249,-14.754],[-5.297,-33],[-16.249,-9.037],[-28.885,-3.379],[-21,-2.703],[-40.627,14.108],[-1.297,12],[7.283,17.874],[17.465,10.855]],"o":[[-19,2.297],[-25.249,14.754],[5.297,33],[14.667,8.157],[28.885,3.379],[21,2.703],[17.679,-6.139],[3.22,-29.802],[-8.734,-21.435],[-22.887,-14.224]],"v":[[476,432.703],[431.249,460.246],[379.703,490],[426.333,512.843],[462.115,534.621],[501,518.297],[551.321,547.139],[565.297,516],[575.717,473.126],[521.887,477.224]]}],"e":[{"i":[[145.748,0],[141.126,-140.618],[22.297,-160],[-7.41,-117.525],[-128.115,-71.621],[-127.399,0],[-141.321,102.861],[0,194.556],[64.283,87.874],[138.363,82.457]],"o":[[-214.963,0],[-141.795,141.284],[-17.361,124.581],[3.667,58.158],[116.055,64.879],[236.39,0],[145.858,-106.163],[0,-112.43],[-95.835,-131.005],[-116.724,-69.561]],"v":[[506,3.703],[219.249,247.246],[9.703,488],[92.333,749.842],[72.115,1023.621],[526,936.297],[953.321,953.139],[978.297,592],[1063.717,236.126],[768.887,177.224]]}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":17,"s":[{"i":[[145.748,0],[141.126,-140.618],[22.297,-160],[-7.41,-117.525],[-128.115,-71.621],[-127.399,0],[-141.321,102.861],[0,194.556],[64.283,87.874],[138.363,82.457]],"o":[[-214.963,0],[-141.795,141.284],[-17.361,124.581],[3.667,58.158],[116.055,64.879],[236.39,0],[145.858,-106.163],[0,-112.43],[-95.835,-131.005],[-116.724,-69.561]],"v":[[506,3.703],[219.249,247.246],[9.703,488],[92.333,749.842],[72.115,1023.621],[526,936.297],[953.321,953.139],[978.297,592],[1063.717,236.126],[768.887,177.224]]}],"e":[{"i":[[281.812,0],[0,0],[0,-256],[0,-126.158],[0,0],[-271.5,0],[0,0],[0,148.875],[0,156.126],[0,0]],"o":[[-281.812,0],[0,0],[0,256],[0,126.158],[0,0],[271.5,0],[0,0],[0,-148.875],[0,-156.126],[0,0]],"v":[[501.812,0.016],[-0.001,-0.004],[-0.297,416],[0,845.842],[0.115,1079.621],[532.5,1080.297],[1080.036,1079.997],[1080.047,652.875],[1079.967,268.126],[1080.012,-0.026]]}]},{"t":28}]},"o":{"k":100},"x":{"k":0},"nm":"Mask 1"}],"sw":1080,"sh":1080,"sc":"#ffffff","ip":0,"op":33,"st":0,"bm":0,"sr":1}],"ip":0,"op":33,"fr":60,"w":1080,"h":1080};
	var params = {
	    container: animContainer,
	    renderer: 'svg',
	    loop: false,
	    autoplay: true,
	    animationData: animationData,
	    rendererSettings: { 
	        preserveAspectRatio:'none'
	    }
	};

	var anim = bodymovin.loadAnimation(params);
	//anim.addEventListener('complete',animationComplete);

	anim.addEventListener("complete", function() {
    if (anim.playDirection == -1) {

    	//console.log("++++++++++++++++++++++++++");
        
        //anim.setDirection(1);
        //anim.play();
        
    } else {
    	//console.log("-------------------------");
    	$('#video-container').css({"background-color": '#F4E097'});
    	//$('#video-container').css({"background-color": '#FFFFFF'});
    	recoverVideoPane("video-container", video_pane_content);
        
    }
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

	  	//console.log("WIDTH : ", svg.clientWidth);
	  	//console.log("HEIGHT : ", svg.clientHeight);

	  	//set same width, height
	  	//var video_element = $("#video-container");
	  	//video_element.width(svg.clientWidth);
	  	//video_element.height(svg.clientHeight);

	  	//document.getElementById("video-container").style.height = svg.clientHeight;


	  	//height = document.getElementById('svg-container').clientHeight;

	  	//video_pane_height = document.getElementById('svg-container').clientHeight;
	  	//console.log("HEIGHT : ", svg.clientHeight);

	  	// svg.style["-webkit-transition"] = "all 0.2s linear";
		svg.addEventListener('click', e=> {
		    if (e.target.closest('rect')) {
		        let rect = e.target.closest('rect');
		        //console.log(currentColor);
		        rect.style.fill = currentColor;
		    } else {
		    let path = e.target.closest('path');
		    path.classList.contains('st2') ? path.style.fill = currentColor : console.log(path.style.fill);
		    }
		});
	  });
}

function generate_rnd_string(){

	let r = Math.random().toString(36).substring(7);
	r = r + ".jpg";
	//console.log("random", r);
	return r;
}

function download2() {

	let coloredSvg = document.getElementsByTagName('svg')[0];
	let temp = '' + coloredSvg.outerHTML;
	canvg(document.getElementById('canvas'), temp);

	let img = canvas.toDataURL("image/png");
	//console.log(img);


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

function sayHi() {
  alert('Hello');
}



function upload_image(){



	let coloredSvg = document.getElementsByTagName('svg')[0];
	let temp = '' + coloredSvg.outerHTML;
	canvg(document.getElementById('canvas'), temp);

	let img = canvas.toDataURL("image/png");
	//console.log(img);

	var formData = new FormData(); 
	formData.append("myfile", img);

	param_filename = generate_rnd_string();
	formData.append("filename", param_filename);


	var location_url = "./page3.html?name=" + param_filename;

		
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
					//window.location.href = location_url;

					showHideElement("crayon", false);
					showHideElement("function-buttons", false);
					showHideElement("svg-container", false);
					showHideElement("side-images", false);

					showHideElement("video-container", true);
					showCloneDiv("video-container", true);

					document.getElementById("filename_id").value = param_filename;

					//window.location.href = location_url;

					//setTimeout(sayHi, 1000);

					//document.getElementById("svg-container").innerHTML = document.getElementById("video-container").innerHTML;

				},
				error: function(data){	
					//console.log("error in sending ajax!");
				}
			});
	//sleep(10);
}


function getfilename_fromCurrentUrl(){

	var currentUrl = window.location.href;
	var urlArray = currentUrl.split("?name=");

	return urlArray[1];
}
function getfilename_fromhiddenTag(){

	var filename = document.getElementById("filename_id").value;
	return filename;
}
function goto_finalpage(){

	var location_url = "./page5.html?name=" + getfilename_fromhiddenTag();
	window.location.href = location_url;
}

function back_finalpage(){

	/* 5 ---------> 4*/

	var filename = getfilename_fromCurrentUrl();
	var location_url = "./page3.html?action=4&filename=" + filename;
	window.location.href = location_url;


	//alert(filename);

	//document.getElementById("filename_id").value = filename;

	//next_paintpage();
	
	//showHideElement("svg-container", true);

}

function getuploadedFileUrl(){

	var full_url = window.location.href;
	var res = full_url.replace("/page5.html?name=", "/uploads/");

	return res;
}

function shareFacebook(){

	//console.log($(".jssocials-share-facebook a"));
	// console.log("Html:" + $(".jssocials-share-facebook a").html());
	$(".jssocials-share-facebook a")[0].click();

}

function shareTwitter(){

	//console.log("Html :" + $(".jssocials-share-twitter a").html());
	$('.jssocials-share-twitter a')[0].click();
}

function shareInstagram(){
	//$('.jssocials-share jssocials-share-facebook').click();
	//alert("instagram!")
	console.log("no instagram!")
}

function shareEmail(){
	//console.log("Html :" + $(".jssocials-share-email a").html());

	$('.jssocials-share-email a')[0].click();
}


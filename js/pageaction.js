
$(document).ready(function(){


	$('input[type=file]').on("change", function() {

    var $files = $(this).get(0).files;

    if ($files.length) {

      // Reject big files
      if ($files[0].size > $(this).data("max-size") * 1024) {
        console.log("Please select a smaller file");
        return false;
      }

      // Begin file upload
      console.log("Uploading file to Imgur..");

      // Replace ctrlq with your own API key
      var apiUrl = 'https://api.imgur.com/3/image';
      var apiKey = 'bc42c7908de8962';

      var settings = {
        async: false,
        crossDomain: true,
        processData: false,
        contentType: false,
        type: 'POST',
        url: apiUrl,
        headers: {
          Authorization: 'Client-ID ' + apiKey,
          Accept: 'application/json'
        },
        mimeType: 'multipart/form-data'
      };

      var formData = new FormData();
      formData.append("image", $files[0]);
      //console.log($files[0]);
      settings.data = formData;

      // Response contains stringified JSON
      // Image URL available at response.data.link
      $.ajax(settings).done(function(response) {
        //console.log(response.success);
        //console.log(response.data.link);

        var obj = JSON.parse(response);
        console.log(obj.success);
        console.log(obj.data.link);

      });

    }
  });


	// $("#social-share").jsSocials({
	// 	url: "",
	// 	text: "paint image",
	//     showLabel: false,
	//     showCount: false,
	//     shares: ["email", "twitter", "facebook", "googleplus", "linkedin"]
	// });

	social_action(2, false);
	social_action(3, false);
	social_action(4, false);

	$('.video').parent().click(function () {

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
	});


});


function pauseVideo(){

	var vid = document.getElementById("myvideo_id"); 
	vid.pause();

	$(".playpause").fadeIn();
	

	//$('#myvideo_id').pause();
	//$(".playpause").fadeIn();
}

function resumeVideo(){

	//$('#myvideo_id').play();
	//$('.video').parent().fadeOut();

	var vid = document.getElementById("myvideo_id"); 
	vid.play();
	$(".playpause").fadeOut();
}


function nextButton(){
	document.getElementById('iterateEffects1').click();
}

function prevButton(){
	document.getElementById('iterateEffects2').click();
}

function social_action(pageid, action){

	switch(pageid){

		case 1:

			if(action == true){

				$('#facebook1_id').show();
				$('#twitter1_id').show();
				$('#instagram1_id').show();

			}else{

				$('#facebook1_id').hide();
				$('#twitter1_id').hide();
				$('#instagram1_id').hide();

			}

		break;

		case 2:

			if(action == true){

				$('#facebook2_id').show();
				$('#twitter2_id').show();
				$('#instagram2_id').show();

			}else{

				$('#facebook2_id').hide();
				$('#twitter2_id').hide();
				$('#instagram2_id').hide();

			}

		break;

		case 3:

			if(action == true){

				$('#facebook3_id').show();
				$('#twitter3_id').show();
				$('#instagram3_id').show();

			}else{

				$('#facebook3_id').hide();
				$('#twitter3_id').hide();
				$('#instagram3_id').hide();

			}

		break;

		case 4:

			if(action == true){

				$('#facebook4_id').show();
				$('#twitter4_id').show();
				$('#instagram4_id').show();

			}else{

				$('#facebook4_id').hide();
				$('#twitter4_id').hide();
				$('#instagram4_id').hide();

			}

		break;
	}
}


function startButton(){
	nextButton();

	social_action(1, false);
	social_action(2, true);
	social_action(3, false);
	social_action(4, false);
}

function nextButtonPage2(arg){

	$("#svg-container").show();

	document.getElementById('pagestate_id').value = 3;
	showHideElement("crayon", true);


	loadSVG(arg);
	document.getElementById("svg_id").value = arg;
	nextButton();


	social_action(1, false);
	social_action(2, false);
	social_action(3, true);
	social_action(4, false);


}

function showHideElement(id, visible){

	if(visible == true){
		document.getElementById(id).classList.remove("hide");
		return;
	}
	
	document.getElementById(id).classList.add("hide");

	/*var element = $('#'+id);

	if(visible == true){
		element.fadeOut(500);
	}

	element.fadeIn(500);*/
}

//if current state ==3, make animation (3-->4)

function next3Page(){

	var current_state = document.getElementById('pagestate_id').value;

	if(current_state == 3){

		zoomOut();
		//sendRequestFileUpload();
		sendRequestCloudService();

		document.getElementById('pagestate_id').value = 4;

		

		/*console.log($('#svg-container').width());
		console.log($('#svg-container').height());*/

		//hide paint content with crayon
		//showHideElement('crayon');
		
		/*var element_obj = $('#slider-item-page3');
		var content_html = element_obj.html();
		let nHeight = element_obj.height();

		element_obj.hide();
		$('#leftrightbuttons_id').hide();

		var animation_element = $('#slider-item-animation');
		animation_element.width(screen.width);
		animation_element.height(nHeight);

		console.log(screen.width);
		console.log(nHeight);

		animation_element.fadeOut(800);
		animation_element.fadeIn(800);

		setTimeout(function(){ rendervideoAnimation('slider-item-animation', 1); }, 1600);*/

		var svg_element = $('#svg-container');
		var video_element = $('#video-container');

		svgWidth = svg_element.width();
		svgHeight = svg_element.height();

		//console.log("FIRST: "+ svgHeight);

		//diffHeight = (svgWidth - video_element.height())/2;

		//console.log(svgWidth + ' : ' + svgHeight);

		video_element.width(svgWidth);
		video_element.height(svgHeight);

		// var c = document.getElementById("canvas");
		// c.width = '800px';
		// c.height = '450px';

	
		$('#crayon').fadeOut(200);
		$('#side-images').fadeOut(200);
		$('#function-buttons').fadeOut(200);

		

		svg_element.fadeOut(1500, function(){

			//sendRequestFileUpload();

			video_element.css({"background-color": '#89E9C2'});
			let video_content = video_element.html();
			video_element.html("");					
			

			video_element.fadeIn(1000, function(){
				
				rendervideoAnimation("video-container", 1, video_content, 0);
			});

			video_element.removeClass("hide");
			
			

			

			//vodeo_element.fadeIn(3000);
			//vodeo_element.removeClass("hide");

			
			
		});

	}else if(current_state == 4){

		document.getElementById('pagestate_id').value = 5;
		nextButton();

		//setting img tag,

		social_action(1, false);
		social_action(2, false);
		social_action(3, false);
		social_action(4, true);

		console.log("+++++++++++++++++++++++++++");

		pauseVideo();


	}else{
		//console.log("next3Page ELSE CASE!")

	}
}

function backToPaintPage(){

	document.getElementById('pagestate_id').value = 4;
	prevButton();

	social_action(1, false);
	social_action(2, false);
	social_action(3, true);
	social_action(4, false);

}
function setpaintedImage(){

	var full_imageurl = document.getElementById("filename_id").value;

	var logo = document.getElementById("final_image");
	logo.src = full_imageurl;
	logo.style.display = "block";

	$('.loader').hide();

	//console.log(logo.src);

	var fa_download = document.getElementById('fa-download');
	fa_download.href = full_imageurl;
}

function setFinalImage(){

	var filename = document.getElementById("filename_id").value;

	var logo = document.getElementById("final_image");
	logo.src = "uploads/" + filename;
	logo.style.display = "block";

	$('.loader').hide();

	//console.log(logo.src);

	var fa_download = document.getElementById('fa-download');
	fa_download.href = "uploads/" + filename;
}

function generate_rnd_string(){

	let r = Math.random().toString(36).substring(7);
	r = r + ".jpg";

	return r;
}

function sendRequestCloudService(){

	let coloredSvg = document.getElementsByTagName('svg')[0];
	let temp = '' + coloredSvg.outerHTML;

	canvg(document.getElementById('canvas'), temp);
	let imgdata = canvas.toDataURL("image/png");
	
	//var formData = new FormData(); 
	//formData.append("myfile", img);

	//param_filename = generate_rnd_string();
	//formData.append("filename", param_filename);

	// Replace ctrlq with your own API key
	var apiUrl = 'https://api.imgur.com/3/image';
	var apiKey = 'bc42c7908de8962';

	var settings = {
	    async: false,
	    crossDomain: true,
	    processData: false,
	    contentType: false,
	    type: 'POST',
	    url: apiUrl,
	    headers: {
	      Authorization: 'Client-ID ' + apiKey,
	      Accept: 'application/json'
	    },
	    mimeType: 'multipart/form-data'
	};

	var formData = new FormData();
    formData.append("image", imgdata);
    settings.data = formData;

    console.log(imgdata);

  	// Response contains stringified JSON
  	// Image URL available at response.data.link
  	$.ajax(settings).done(function(response) {

  		console.log("2$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    	//console.log(response.success);
    	//console.log(response.data.link);
/*
    	var obj = JSON.parse(response);
    	console.log(obj.success);
    	console.log(obj.data.link);

    	document.getElementById("filename_id").value = obj.data.link;
    	setpaintedImage();

    	var URL = obj.data.link;
		
		$("#social-share").jsSocials({
			url: URL,
			text: "paint image",
		    showLabel: false,
		    showCount: false,
		    shares: ["email", "twitter", "facebook", "googleplus", "linkedin"]
		});	
		*/
  });


}

function sendRequestFileUpload(){



	let coloredSvg = document.getElementsByTagName('svg')[0];
	let temp = '' + coloredSvg.outerHTML;

	canvg(document.getElementById('canvas'), temp);
	let img = canvas.toDataURL("image/png");
	
	var formData = new FormData(); 
	formData.append("myfile", img);

	param_filename = generate_rnd_string();
	formData.append("filename", param_filename);


	$.ajax({
			url: "upload.php", 
			type: "POST",             
			data: formData, 
			contentType: false,
			cache: false,
			processData:false,

				success: function(data)
				{
					document.getElementById("filename_id").value = param_filename;
					setFinalImage();

					var URL = getuploadedFileUrl(param_filename);
					//console.log(URL);

					//$("#social-share").attr("url", URL);

					$("#social-share").jsSocials({
						url: URL,
						text: "paint image",
					    showLabel: false,
					    showCount: false,
					    shares: ["email", "twitter", "facebook", "googleplus", "linkedin"]
					});

				},
				error: function(data){	
					//console.log("error in sending ajax!");
				}
			});
}

function getuploadedFileUrl(filename){

	var full_url = window.location.href.replace("#" , "");
	var res = full_url.replace("/index.php", "/uploads/" + filename);

	return res;
}

function prev3Page(){

	var current_state = document.getElementById('pagestate_id').value;

	if(current_state == 3){

		pauseVideo();

		//alert($("#svg-container").html());

		$("#svg-container").hide();
		//$("#svg-container").html("<center><div class='loader2'></div></center>")

		//$("#svg-container").html("")

		document.getElementById('pagestate_id').value = 2;
		showHideElement("crayon", false);
		prevButton();

		social_action(1, false);
		social_action(2, true);
		social_action(3, false);
		social_action(4, false);

		

	}else if(current_state == 4){

		document.getElementById('pagestate_id').value = 3;
		pauseVideo();

		/*var element_obj = $('#slider-item-page3');
		var content_html = element_obj.html();
		let nHeight = element_obj.height();

		element_obj.hide();
		$('#leftrightbuttons_id').hide();
		
		var animation_element = $('#slider-item-animation');

		console.log(screen.width);
		console.log(nHeight);

		document.getElementById('slider-item-animation').style.display = "block";

		animation_element.fadeOut(800);
		animation_element.fadeIn(800);

		setTimeout(function(){ rendervideoAnimation('slider-item-animation', -1); }, 1600);*/



		var svg_element = $('#svg-container');
		var video_element = $('#video-container');

		video_element.css({"background-color": '#89E9C2'});

		videogWidth = video_element.width();
		videoHeight = video_element.height();

		//console.log(svgWidth + ' : ' + svgHeight);

		//svg_element.width(svgWidth);
		//svg_element.height(svgHeight);
		
		
		
		$('#function-buttons').fadeIn(500);

		

		video_element.fadeOut(1500, function(){

			$('#crayon').fadeIn(500);
			//$('#side-images').fadeIn(500);
			var oDiv = document.getElementById("side-images");
        	oDiv.style.removeProperty("display");

			let video_content = video_element.html();
			video_element.html("");
			video_element.width(videogWidth);
			video_element.height(videoHeight);

			//showHideElement("video-container", false);
			//video_element.removeClass('hide');
			document.getElementById('video-container').style.display = 'block';
			// video_element.css({"background-color": '#89E9C2'});
			video_element.fadeIn(500);

			//console.log("LAST: "+ videoHeight);

			rendervideoAnimation("video-container", -1, video_content,0);

			//svg_element.css({"background-color": '#89E9C2'});
			//svg_element.fadeIn(300);

			//rendervideoAnimation("svg-container", -1, svg_content, 0);

			//svg_element.fadeIn(1000);

			//rendervideoAnimation("video-container", 1, "",0);

			//rendervideoAnimation("video-container", 1, video_content);


			/*let video_content = video_element.html();
			video_element.html("");			
			video_element.css({"background-color": '#89E9C2'});

			video_element.fadeIn(300);
			video_element.removeClass("hide");

			rendervideoAnimation("video-container", 1, video_content);*/

			//vodeo_element.fadeIn(3000);
			//vodeo_element.removeClass("hide");
			
		});



	}else{

		//console.log("prev3Page ELSE CASE!")

	}
}

function showPaintPane(){

	$('#leftrightbuttons_id').show();

	//showHideElement("video-container", false);
	showHideElement("crayon", true);
	
	showHideElement("function-buttons", true);
	showHideElement("svg-container", true);
	showHideElement("side-images", true);


	$('#video-container').addClass("hide");
}

function showVideoPane(){

	$('#leftrightbuttons_id').show();

	showHideElement("crayon", false);
	//showHideElement("video-container", true);

	showHideElement("function-buttons", false);
	showHideElement("svg-container", false);
	showHideElement("side-images", false);

	$('#video-container').removeClass("hide");
	//$('#slider-item-page3').show();
}

function rendervideoAnimation(id, direction, content, ndiffHeight){

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

	anim.addEventListener("complete", function(){

		if (anim.playDirection == -1) {        
       
    	} else{

    		if (direction == 1){
    			//$('#myvideo_id').css({"margin-top": ndiffHeight});
	    		//console.log(ndiffHeight);

	    		//$('#video-container').css({"background-color": '#000000'});

	    		//$('#video-container').css({"background-image": 'url(../images/play-pause.png)'});
				
				$('#video-container').fadeOut(0);
	    		$('#video-container').fadeIn(300);

	    		$('#video-container').html(content);

    		}else{

    			$('#video-container').html(content);

    			$('#video-container').fadeOut(0);
	    		$('#svg-container').fadeIn(200);


    		}

    		
    	}

	});


	//$('#video-container').html("");

	/*
	
	anim.addEventListener("complete", function() {

		//$('#video-container').show();
		console.log('--------------------------------');


    	if (anim.playDirection == -1) {
        
       
    	} else{

   			console.log("-------------  COMPLETED ANIMATION  ------------");

   			$('#slider-item-animation').fadeOut(500);

   			setTimeout(function(){ 

   				$('#slider-item-page3').show();

   				if(direction == 1){

   					showVideoPane();
   					$('#slider-item-animation').html("");
   					//console.log($('#slider-item-animation').html());
   				}
   				else if(direction == -1){
   					console.log("+++++++++++++++++++++++++++++++++++++++");
   					showPaintPane();
   					$('#slider-item-animation').html("");

   				}else{
   					console.log('unexpected Exception!');
   				}

   			}, 500);
   			

    	   	}
	});*/
}


function shareFacebook(){

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
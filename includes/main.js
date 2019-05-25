$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp(){
	
	$( function() {
		$( "#gallery" ).sortable();
		$( "#gallery" ).disableSelection();
	  } );

	makeGallery(pictures);
	addModalCloseHandler();
	$("figure").on("click",displayImage);
}
function makeGallery(imageArray){
	for(var i = 0; i < imageArray.length; i++){
		var MyFigureElement = $("<figure>").addClass("imageGallery col-xs-12 col-sm-6 col-md-4").css("background-image","url("+ imageArray[i] + ")");
		
		var MyFigCaptionElement = $("<figcaption>").html(imageArray[i]);
		
		MyFigCaptionElement.appendTo(MyFigureElement);
		$("#gallery").append(MyFigureElement);
	}

}


function displayImage(){
	
	var URLofImage = $(this).css("background-image");
	console.log("hope this works",URLofImage); 

	var theImage = URLofImage.slice((URLofImage.lastIndexOf("/")-6),(URLofImage.lastIndexOf('"')));
	console.log("I see the problem", theImage);
	
	var ImageName = URLofImage.slice((URLofImage.lastIndexOf("/")+1),(URLofImage.lastIndexOf('"')-4)); 
	
	$(".modal-title").text(ImageName);

	$("img").attr("src",theImage);

	$("#galleryModal").modal("show");
	
}

function addModalCloseHandler(){

	$("img").on("click",modalClose);
	
	function modalClose(){
		$("#galleryModal").modal("hide");
	}
}

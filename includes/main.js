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
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
	//on change, rebuild the images array into the new order
	*/
	$( function() {
		$( "#gallery" ).sortable();
		$( "#gallery" ).disableSelection();
	  } );

	makeGallery(pictures);
	addModalCloseHandler();
}
function makeGallery(imageArray){
	for(i = 0; i < pictures.length; i++);

	var MyFigureElement = $("<figure>").addClass("imageGallery col-xs-12 col-sm-6 col-md-4").css("background-image","url("+ pictures[i] + ")");
	var MyFigCaptionElement = $("<figcaption>").html(pictures[i]);
	imageArray= MyFigCaptionElement.appendTo(MyFigureElement);

	imageArray.on("click",displayImage);

	imageArray.appendTo("#gallery");

	
}

function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	$("img").on("click",modalClose);
	
	function modalClose(){
		$("#galleryModal").modal("hide");
	}
}

var x = "url(images/landscape-1.jpg)";
console.log("the whole:",x);

var sum = x.slice((x.lastIndexOf("/")-6),(x.lastIndexOf('"')));
console.log("does this work?",sum);

var bum = x.slice((x.lastIndexOf("/")+1),(x.lastIndexOf('"')));
console.log("does this work?",bum);



function displayImage(){
	//find the url of the image by grabbing the background-image source, store it in a variable
	var URLofImage = $(this).css("background-image");

	//grab the direct url of the image by getting rid of the other pieces you don't need
	var Image = URLofImage.slice((URLofImage.lastIndexOf("/")-6),(URLofImage.lastIndexOf('"')));

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
	// pexels-photo-132037
	//take a look at the lastIndexOf method
	var ImageName = URLofImage.slice((URLofImage.lastIndexOf("/")+1),(URLofImage.lastIndexOf('"')));

	 //change the modal-title text to the name you found above
	$(".modal-title").text(ImageName);

	 //change the src of the image in the modal to the url of the image that was clicked on
	$("img").attr("src",Image);

	//show the modal with JS. 
	$("#galleryModal").modal();

}





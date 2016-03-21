$(document).ready(function() {

setInterval(function(){
	var $btnPortfolio = $('#btnPortfolio');

	if($btnPortfolio.is(":hover")){
		$('.portfolioRelease').css({
			backgroundColor: '#000',
			backgroundImage: 'url("img/strikeCall.jpg")',
			backgroundSize: 'cover'
		});

	}else{
		$('.portfolioRelease').css('backgroundColor', '#131313');
		$('.portfolioRelease').css({
			backgroundColor: '#131313',
			backgroundImage: 'url("img/triangleCall.jpg")',
			backgroundSize: 'initial'
		});
	}
 },0);
	
	

	

});
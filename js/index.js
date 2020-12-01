$(document).ready(function(){

	$(document).on("mousemove",function (event){
		console.log(event.pageX);
	
		$(".land-21")
					.animate({top:"150px"},3500)
					//.promise().then(function(){$(".land-21").css("background-position-y",event.pageX/2-10)
					//.animate({opacity:"100%"},1000)
					//})
		$(".land-2").animate({top:"150px"},3500)
		$(".land-3").animate({top:"150px"},2500)
		$(".moon").animate({bottom:"50px"},2000)
		$(".snow").animate({top:"10px"},7000)
	})	
})


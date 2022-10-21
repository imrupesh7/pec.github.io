
// var topbar = document.getElementById('topbar');

// window.addEventListener('scroll', function () {



// 	if (this.window.pageYOffset >= 103.2) {
// 		topbar.classList.add('sticky');
// 	} else {
// 		topbar.classList.remove('sticky');
// 	}
// });

// $(document).ready(function () {
// 	$("#bars").click(function () {
// 		$("#bars").toggleClass("fa-times");
// 		$("#navbar").toggleClass("menu");
// 		$('.navbar').toggleClass("black");
// 	})

// });





// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
// 	autoplay:true,
//     autoplayTimeout:3000,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1,
//             // nav:true
//         },
//         600:{
//             items:2,
        
//         },
//         1000:{
//             items:4,
//         }
//     }
// })

$('.owl-carousel').owlCarousel({
    loop:true,
    items:4,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            dots:false
        }
    }
})





$('.your-class').slick({
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $(document).ready(function () {
	$(".plus1").click(function () {
        $(".plus1").css("display", "none");
		$(".d-none-gallery-container").slideToggle("fast");
        
	});
});


var menu = document.getElementById("menu")

function showmenu() {
    menu.style.left = "0"
}

function hidemenu() {
    menu.style.left = "-200%"
}


window.onclick = function (e) {
    if (e.target == bars) {
        menu.style.left = "0%";
    }

    else {
        menu.style.left = "-200%";
    }
}


// $(document).ready(function () {
// 	$(".fa-bars").click(function () {
// 		$(".fa-bars").toggleClass("fa-times");
//         $("header nav ul").toggleClass("width");
// 		// $("#navbar").toggleClass("menu");
// 		// $('.navbar').toggleClass("black");
// 	})

// });








// var a = 0;
// function hello() {
// 	a += 1;
// 	document.getElementById("clicks1").innerHTML = a;
// 	document.getElementById("click").style = "color:yellow";
// }


// $(document).ready(function () {


// 	$(".scroll").hide();
// 	$(window).scroll(function () {
// 		if ($(window).scrollTop() > 0) {
// 			$('.scroll').fadeIn("fast");

// 		}
// 		else {
// 			$('.scroll').fadeOut("fast");
// 		}
// 	})
// });


// $('.scroll').click(function () {
// 	$("html,body").animate({
// 		scrollTop: 0
// 	}, 1000);
// 	return false;
// });




// function showmodal() {
// 	document.getElementById("popup").style.visibility = "visible";
// }

// setTimeout(showmodal, 3000)





// window.onclick = function (e) {
// 	if (e.target == popup) {
// 		popup.style.visibility = "hidden";
// 	}
// }


// var i = 0;

// var path = new Array();
// path[0] = "img/display-8.jpeg"
// path[1] = "img/display-14.jpeg"
// path[2] = "img/display-20.jpeg"
// path[3] = "img/Sat_20on_20the_20Rocks_edited.webp"

// function swapimg() {
// 	document.getElementById("photo").src = path[i];
// 	if (i < path.length - 1) i++;
// 	else i = 0;


// 	setTimeout("swapimg()", 1000);

// }





// $(".tab-list").on("click", ".tab", function (e) {
// 	e.preventDefault();
// 	$(".tab").removeClass("activetab");
// 	$(".tab-content").removeClass("show");
// 	$(this).addClass("activetab");
// 	$($(this).attr("href")).addClass("show");
// });






// function myImageFunction(productSmallImg) {
// 	var productFullImg = document.getElementById("img-Box");
// 	productFullImg.src = productSmallImg.src;
// }



// function modal() {
// 	document.getElementById("popup").style.visibility = "hidden";
// }

// function user() {
// 	document.getElementById("popup").style.visibility = "visible";
// }


// $(document).ready(function () {
// 	$("#circle").click(function () {
// 		$(".loginform").toggleClass("right");

// 	})

// });

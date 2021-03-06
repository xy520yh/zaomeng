function rePosition(){
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var ratio = width/750;
    if(width<=750){
        document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
    }else{
        document.getElementsByTagName('html')[0].style.fontSize="100px";
    }
}
rePosition();
window.onresize = function(){
    rePosition();
};

$(function(){
//预注册页面切换
	var swiper1 = new Swiper('.swiper-img', {
		observer: true,
		observeParents: true,
		slidesPerView:1,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
			switch(index){
				case 0:text='5万';break;
				case 1:text='10万';break;
				case 2:text='20万';break;
				case 3:text='30万';break;
				case 4:text='40万';break;
					}
			return '<span class="' + className + '">' + text + '</span>';
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
  
	

	
	//special视频弹出
	$('.snews1').on('click', "a", function (g) {
		g.preventDefault();
		var url = $(this).attr('data-url');
		if (!url) {
		  concole.log("no content")
		  return
		}
		$('.video_box').addClass('active');
		$('.video_box .note').html('<p>Loading...</p>')
		if (url.indexOf('youtube') != -1) {//视频
		   var html = ` <iframe width="680" height="480" src="${url}" frameborder="0" allowfullscreen></iframe>`
		  $('.video_box .note').html(html)
		} 
	  });
	  $('.video_box .closed1').on('click', function () {
		$('.video_box').removeClass('active')
	  })
	
	

	//首屏点击预注册按钮弹出预注册页面
	$('body').on("click", '#login_before', function () {
		$('.main_nei').css('display','block');
	
	});
	$('body').on("click", '.pre_close img', function () {
	   $('.main_nei').css('display','none');
	 
	 });	
		
	
	

	var cardswiper = new Swiper('.card_container', {
		slidesPerView: 1,
		observer: true,//修改swiper自己或子元素时，自动初始化swiper
		observeParents: true,//修改swiper的父元素时，自动初始化swiper
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	//点击右上角折叠菜单栏弹出导航
	$('body').on("click", '.menu_button', function () {
		$('.nav_box').toggleClass('active')
	});
	$('body').on("click", '.nav_box .closed', function () {
		$('.nav_box').removeClass('active')
	});
	$('.nav_link div').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	$('.link01').click(function(){
		$('.nav_box').toggleClass('active');
		jQuery('html,body').animate({scrollTop:$('#page01').offset().top}, 1000);
	});
	$('.link02').click(function(){
		$('.nav_box').toggleClass('active');
		jQuery('html,body').animate({scrollTop:$('#page02').offset().top}, 1000);
	});
	$('.link03').click(function(){
		$('.nav_box').toggleClass('active');
		jQuery('html,body').animate({scrollTop:$('#page03').offset().top}, 1000);
	});
	$('.link04').click(function(){
		$('.nav_box').toggleClass('active');
		jQuery('html,body').animate({scrollTop:$('#page04').offset().top}, 1000);
	});
	$('.link05').click(function(){
		$('.nav_box').toggleClass('active');
		jQuery('html,body').animate({scrollTop:$('#page05').offset().top}, 1000);
	});
	$('.link06').click(function(){
		$('.nav_box').toggleClass('active');
		jQuery('html,body').animate({scrollTop:$('#page06').offset().top}, 1000);
	});
	$('.link07').click(function(){
		$('.nav_box').toggleClass('active');
		jQuery('html,body').animate({scrollTop:$('#page07').offset().top}, 1000);
	});
	
	
	
	
	/*定义キャラ詳細*/
	var swiper1 = new Swiper('.card_container', {
       slidesPerView: 1,
	     observer:true,//修改swiper自己或子元素时，自动初始化swiper
		 observeParents:true,//修改swiper的父元素时，自动初始化swiper
	  loop: true,
	  
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	//三个tab做出切换
	$('.card_tab ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(".card_tab_note").eq($(this).index()).show().siblings(".card_tab_note").hide();
	})
	$('.nav_link ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	
	})
	
  	

	  //点击客服
  $('body').on("click", '.kefu_icon', function () {
    $('.kefu_box').addClass('active')
  });
  $('body').on("click", '.kefu_box .closed', function () {
    $('.kefu_box').removeClass('active')
  });


  //点击メールで登録
  $('body').on("click", '.login_icon', function () {
	$('.login_icon').addClass('active');
	$('.login_box').toggleClass('active');
	$('.swiper-fullscreen').toggleClass("notouch");
  });
  $('body').on("click", '.login_box .closed', function () {
	  $('.login_icon').removeClass('active');
	$('.login_box').removeClass('active');
	$('.swiper-fullscreen').toggleClass("notouch");
  });



 //点击条件确认弹出对话框
	$('body').on("click", '.btn_confirm', function () {
		$('.account_box').toggleClass('active')
	});
	$('body').on("click", '.account_box .closed', function () {
		$('.account_box').removeClass('active')
	});
  
   	 //点击シリアルコード弹出对话框
	$('body').on("click", '.btn_tc', function () {
		$('.tip_box').toggleClass('active')
	});
	$('body').on("click", '.tip_box .closed', function () {
		$('.tip_box').removeClass('active')
	});


	$('body').on("click", '.tip_btn_01', function () {
		$('.card_name').addClass('active');
		$('.tip_box').toggleClass('active');
	});
	$('body').on("click", '.card_name .closed', function () {
		$('.card_name').removeClass('active');

	});
	//点击ガチャを引く弹出对话框
	$('body').on("click", '.btn_confirm1', function () {
		$('.btn_confirm1').addClass('active2');
		$('.tc_box').toggleClass('active');
	});
	$('body').on("click", '.tc_box .closed', function () {
		$('.btn_confirm1').removeClass('active2');
		$('.tc_box').removeClass('active');

	});

  //gaha页面点击每个图标
	$('body').on("click", '.card_icon', function () {
		$(this).addClass('activea').siblings('.card_icon').removeClass('activea');
	});
 $(window).scroll(function(){
	// scroll at bottom
	if ($(window).scrollTop() + $(window).height() >= $(document).height()-110) {
		$('.fixed_bottom').fadeOut();	
		$('.fixed_bottom_footer').fadeIn();
	}else{
		$('.fixed_bottom').fadeIn();
		$('.fixed_bottom_footer').fadeOut();	
	}
});

 
});

/*$(function () {
	loading();
	var timer = null;
	function loading() {
	
		
		$('body').css('overflow','hidden');
		var search = window.location.href;
		if (search.indexOf('noloading') != -1) {
			$('#loading').css({ opacity: 0, pointerEvents: 'none' });
			$('.wraper').css('opacity', '1');
			$('body').css('overflow','auto');
			clearTimeout(timer);
		}
		timer = setTimeout(function () {
			setTimeout(function () {
				$('#loading').css('opacity', '0');
				$('.wraper').css('opacity', '1');
				$('body').css('overflow','auto');
			}, 2000)
		}, 2000)
	}

})*/
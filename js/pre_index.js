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
  
	
	//palyer中男主角色切换
	var rolesmanwiper = new Swiper('.roles_man_wrap', {
	//autoplay:3000,
		//loop : true,
		effect : 'fade',observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on:{
			slideChangeTransitionStart:function(){
				var length = $(".game_roles .swiper_dock_list li").length;
				$(".game_roles .swiper_dock_list li img").removeClass('on');
				$(".game_roles .swiper_dock_list li img").eq((this.activeIndex-1)%length).addClass('on');
			},
		}
	});
	$(".game_roles .swiper_dock_list li").click(function(){
		var index = $(this).index()+1;
		rolesmanwiper.slideTo(index, 1000, false);
		$(".game_roles .swiper_dock_list li img").removeClass('on');
		$(".game_roles .swiper_dock_list li img").eq(index-1).addClass('on');
	});
	//palyer中男主音频播放
	var list = ['music/1.mp3','music/1.mp3','music/1.mp3','music/1.mp3','music/BGM.mp3'];
	var num=0;
	$('.game_roles .role_jineng a').html('<img id="playVoice" src="images/page04_voice.png"  data-url="'+list[num]+'">');
	$('#man').on('click', "li", function (g) {
		g.preventDefault();
		var index = $(this).children('a').attr('data-index');
		console.log(index)
		var html = '<img id="playVoice" src="images/page04_voice.png"  data-url="'+list[index]+'">';
		$('.game_roles .role_jineng a').html(html) 
	});
	var voiceAudio = new Audio();
	$('.game_roles .role_jineng').on('click', '#playVoice', function () {
	  var index = $(this).attr('data-index');
	  voiceAudio.src = $(this).attr('data-url');
	  voiceAudio.play();
	})
	//palyer中女主角色切换
	var roleswomanwiper = new Swiper('.roles_woman_wrap', {
	//autoplay:3000,
		//loop : true,
		effect : 'fade',
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on:{
			slideChangeTransitionStart:function(){
				var length = $(".game_roles_woman .swiper_dock_list li").length;
				$(".game_roles_woman .swiper_dock_list li img").removeClass('on');
				$(".game_roles_woman .swiper_dock_list li img").eq((this.activeIndex-1)%length).addClass('on');
			},
		}
	});
	$(".game_roles_woman .swiper_dock_list li").click(function(){
	var index = $(this).index()+1;
	roleswomanwiper.slideTo(index);
		$(".game_roles_woman .swiper_dock_list li img").removeClass('on');
		$(".game_roles_woman .swiper_dock_list li img").eq(index-1).addClass('on');
	});
	//palyer中女主音频播放
	var listwoman= ['music/1.mp3','music/1.mp3','music/1.mp3','music/BGM.mp3','music/1.mp3'];
	var num1=0;
	$('.game_roles_woman .role_jineng a').html('<img id="playVoice1" src="images/page04_voice.png"  data-url="'+listwoman[num1]+'">');
	$('#woman').on('click', "li", function (w) {
		w.preventDefault();
		var index1 = $(this).children('a').attr('data-index');
		console.log(index1)
		var html = '<img id="playVoice1" src="images/page04_voice.png"  data-url="'+listwoman[index1]+'">';
		$('.game_roles_woman .role_jineng a').html(html) 
	});
	
	$('.game_roles_woman .role_jineng').on('click', '#playVoice1', function () {
		var index1 = $(this).attr('data-index');
		voiceAudio.src = $(this).attr('data-url');
		voiceAudio.play();
	})

	//chara中女主声音切换
	var page5One= ['music/1.mp3','music/BGM.mp3','music/1.mp3'];
	var page5Two= ['music/1.mp3','music/1.mp3','music/1.mp3'];
	var page5Three= ['music/BGM.mp3','music/1.mp3','music/BGM.mp3']
	var page5Four= ['music/1.mp3','music/1.mp3','music/1.mp3'];
	charaVoice('#voice_01',page5One);
	charaVoice('#voice_02',page5Two);
	charaVoice('#voice_03',page5Three);
	charaVoice('#voice_04',page5Four);
	function charaVoice(id,arr){
	  for(var i=0; i<page5One.length; i++){
	  $(id).find('img').eq(i).attr('data-url',arr[i]);
	  $(id).on('click', 'img', function () {
		$(this).addClass('active').siblings().removeClass('active');
	  })
	}
		$(id).on('click', 'img', function () {
		  voiceAudio.src = $(this).attr('data-url');
		  voiceAudio.play();
		})
	
	}
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
	  $('.video_box .closed').on('click', function () {
		$('.video_box').removeClass('active')
	  })
	//第三屏幕图片向下切换
	var swiper3 = new Swiper('.page3_container', {
		autoplay: {
			delay: 6500,
			disableOnInteraction: false,
		},
		loop:true,
		autoHeight: true, 
		direction: 'vertical',
		navigation: {
			nextEl: '.page3_container .swiper-button-next',
		},
	});
	//第六屏幕图片向下切换
	var swiper6 = new Swiper('.page6_container', {
		autoplay: {
			delay: 6500,
			disableOnInteraction: false,
		  },
		loop:true,
		autoHeight: true, 
		direction: 'vertical',
		navigation: {
			nextEl: '.swiper-button-next',
		},
	
	});
	//第五屏幕切换
	var swiper = new Swiper('.chara_main', {
		slidesPerView: 1,
		spaceBetween: 30,
		//loop: true,
		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		},
	});
	
	//第四屏幕男女性别切换
	$('body').on("click", '.man_ico', function () {
		$(this).addClass('active').siblings().removeClass('active');
		//alert('aaa');
		$('.game_roles').css('display','block');
		$('.game_roles_woman').css('display','none');
	});
	$('body').on("click", '.woman_ico', function () {
		$(this).addClass('active').siblings().removeClass('active');
		//alert('aaa');
		$('.game_roles').css('display','none');
		$('.game_roles_woman').css('display','block');
	});
	//首屏点击预注册按钮弹出预注册页面
	$('body').on("click", '#login_before', function () {
		$('.main_nei').css('display','block');
	
	});
	$('body').on("click", '.pre_close img', function () {
	   $('.main_nei').css('display','none');
	 
	 });	
		
	
	var swiper2 = new Swiper('.snews1', {
	   pagination: {
		el: '.swiper-pagination',
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	});


	//点击右上角折叠菜单栏弹出导航
	$('body').on("click", '.menu_button', function () {
		$('.nav_box').toggleClass('active')
	});
	$('body').on("click", '.nav_box .navs_close', function () {
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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	//三个tab做出切换
	$('.card_tab ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(".card_tab_one").eq($(this).index()).show().siblings(".card_tab_one").hide();
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
  });
  $('body').on("click", '.login_box .closed', function () {
	  $('.login_icon').removeClass('active');
    $('.login_box').removeClass('active');
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



/*
 $(window).scroll(function(){
	// scroll at bottom
	if ($(window).scrollTop() + $(window).height() == $(document).height()) {
		$('.fixed_bottom').css('display','none');	
		$('.fixed_bottom1').css('display','block');
	}
});*/
/*	$(window).scroll(function(){
	// scroll at bottom
	if ($(window).scrollTop() + $(window).height() == $(document).height()) {
	  alert('1');
	  
	  
	}
});*/
 
});

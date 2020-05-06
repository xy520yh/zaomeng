(function (doc, win) {
	var doc = doc.documentElement;
	doc.addEventListener('DOMContentLoaded', Resize, false);
	// 当DOM加载后执行
	win.addEventListener('resize', Resize, false);
	if (doc.clientWidth) {
		Resize();
	} else {
		setTimeout(Resize, 100)
	}
	// 当屏幕发生变化时执行
	function Resize() {
		doc.style.fontSize = doc.clientWidth / 19.2 + 'px';
	}
})(document, window)


$(function () {
	//首页导航
	var Mainswiper = new Swiper('.swiper-fullscreen', {
		direction: 'vertical',
		mousewheel: true,
		hashNavigation: true,
		pagination: {
			el: '.swiper-pagination .pages',
			clickable: true,
			renderBullet: function (index, className) {
				// return '<span class="' + className + '">0' + (index + 1) + '</span>';
				return '<span class="' + className + '"><image src="images/nav' + (index + 1) + '.png"></span>';
			},
		},
	});

	// $('.navs').on("click", 'span', function () {
	// 	$(this).addClass('clickable').siblings().removeClass('clickable');
	// 	$(this).addClass('active').siblings().removeClass('active');
	// });

	//第四屏幕男详细信息左右切换
	var rolesmanwiper = new Swiper('.roles_man_wrap', {
		//loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	//第四屏幕女男详细信息左右切换
	var roleswomanwiper = new Swiper('.roles_woman_wrap', {
		//loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});
	//第四屏男女性别切换对应
	$('body').on("click", '.man_ico', function () {
		$(this).addClass('active').siblings().removeClass('active');
		$('.game_roles').css('display', 'block');
		$('.game_roles_woman').css('display', 'none');
	});
	$('body').on("click", '.woman_ico', function () {
		$(this).addClass('active').siblings().removeClass('active');
		$('.game_roles').css('display', 'none');
		$('.game_roles_woman').css('display', 'block');
	});


	//第四屏点击5个游戏角色切换到详细信息
	$('.world_list .item').click(function () {
		$('.world_list').css('display', 'none');
		$('.mainShow').css('display', 'block');
	})
	$('.close').click(function () {
		$('.world_list').css('display', 'block');
		$('.mainShow').css('display', 'none');
	})


	//第四屏详细信息内内三个小角色切换
	palyer_role('#palyer_01');
	palyer_role('#palyer_02');
	palyer_role('#palyer_03');
	palyer_role('#palyer_04');
	palyer_role('#palyer_05');
	palyer_role('#palyer_06');
	palyer_role('#palyer_07');
	palyer_role('#palyer_08');
	palyer_role('#palyer_09');
	palyer_role('#palyer_10');
	function palyer_role(id) {
		$(id).on('click', ".small_box div", function () {
			$(this).addClass('active').siblings().removeClass('active');
			$(id).find(".sub_left div").eq($(this).index()).show().siblings(".sub_left div").hide();
		});
	};

	//第四屏男音频
	var list = ['music/1.mp3', 'music/1.mp3', 'music/BGM.mp3', 'music/1.mp3', 'music/BGM.mp3'];
	for (var i = 0; i < list.length; i++) {
		$('.game_roles .voice img').eq(i).attr('data-url', list[i])
	}
	var voiceAudio = new Audio();
	$('.game_roles .voice').on('click', '.palyVoice', function () {
		voiceAudio.src = $(this).attr('data-url');
		voiceAudio.play();
	});
	//第四屏女音频
	var listwoman = ['music/1.mp3', 'music/BGM.mp3', 'music/1.mp3', 'music/BGM.mp3', 'music/1.mp3'];
	for (var i = 0; i < list.length; i++) {
		$('.game_roles_woman .voice img').eq(i).attr('data-url', listwoman[i])
	}
	
	$('.game_roles_woman .voice').on('click', '.palyVoice', function () {
		voiceAudio.src = $(this).attr('data-url');
		voiceAudio.play();
	});


	//第五屏chara音频封装
	var page5One = ['music/1.mp3', 'music/BGM.mp3', 'music/1.mp3'];
	var page5Two = ['music/1.mp3', 'music/1.mp3', 'music/1.mp3'];
	var page5Three = ['music/BGM.mp3', 'music/1.mp3', 'music/BGM.mp3']
	var page5Four = ['music/1.mp3', 'music/1.mp3', 'music/1.mp3'];
	charaVoice('#voice_01', page5One);
	charaVoice('#voice_02', page5Two);
	charaVoice('#voice_03', page5Three);
	charaVoice('#voice_04', page5Four);
	function charaVoice(id, arr) {
		for (var i = 0; i < page5One.length; i++) {
			$(id).find('img').eq(i).attr('data-url', arr[i]);
			$(id).on('click', 'img', function () {
				$(this).addClass('active').siblings().removeClass('active');
			})
		}
		
		$(id).on('click', 'img', function () {
			voiceAudio.src = $(this).attr('data-url');
			voiceAudio.play();
		});

	};

	//第五屏chara角色切换
	var charaswiper = new Swiper('.chara_main', {
		slidesPerView: 1,
		spaceBetween: 30,
		//loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	//第五屏图片角色切换
	var systemswiper = new Swiper('.system_main', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	//第七屏special角色切换
	var swiper = new Swiper('.box3', {
		//  effect: 'coverflow',
		//   grabCursor: true,
		//   centeredSlides: true,
		slidesPerView: 'auto',
		centeredSlides: true,
		loop: true,
		loopedSlides: 5,
		//prevButton:'.lef_1',
		//nextButton:'.rig_1'
		pagination: '.swiper-pagination',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		// coverflowEffect: {
		// 	rotate: 0,
		// 	stretch: 10,
		// 	depth: 60,
		// 	modifier: 2,
		// 	slideShadows : true
		// 	},
	});

	// certifySwiper = new Swiper('#certify .swiper-container', {
	// 	watchSlidesProgress: true,
	// 	slidesPerView: 'auto',
	// 	centeredSlides: true,
	// 	loop: true,
	// 	loopedSlides: 5,
	// 	autoplay: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		//clickable :true,
	// 	},
	// 	on: {
	// 		progress: function(progress) {
	// 			for (i = 0; i < this.slides.length; i++) {
	// 				var slide = this.slides.eq(i);
	// 				var slideProgress = this.slides[i].progress;
	// 				modify = 1;
	// 				if (Math.abs(slideProgress) > 1) {
	// 					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
	// 				}
	// 				translate = slideProgress * modify * 260 + 'px';
	// 				scale = 1 - Math.abs(slideProgress) / 5;
	// 				zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
	// 				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
	// 				slide.css('zIndex', zIndex);
	// 				slide.css('opacity', 1);
	// 				if (Math.abs(slideProgress) > 3) {
	// 					slide.css('opacity', 0);
	// 				}
	// 			}
	// 		},
	// 		setTransition: function(transition) {
	// 			for (var i = 0; i < this.slides.length; i++) {
	// 				var slide = this.slides.eq(i)
	// 				slide.transition(transition);
	// 			}

	// 		}
	// 	}

	// })
	//第七屏弹出视频
	$('.box3').on('click', "a", function (g) {
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


	// 事前登录页角色切换  
	var loginswiper = new Swiper('.login_yy', {
		slidesPerView: 5,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		spaceBetween: 30,
		centeredSlides: true,
		loop: true,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				switch (index) {
					case 0: text = '5万'; break;
					case 1: text = '10万'; break;
					case 2: text = '20万'; break;
					case 3: text = '30万'; break;
					case 4: text = '40万'; break;
				}
				return '<span class="' + className + '">' + text + '</span>';
			},
		},
		grabCursor: true,

		effect: 'slide',
		paginationClickable: true,
		initialSlide: 0,
		keyboardControl: true,
		slideToClickedSlide: true,
		preventClicks: false,
		followFinger: false,
	});

	//点击事前登录经典按钮
	$('body').on("click", '#login_before', function () {
		$('.twitter_box').toggleClass('active')
	});
	$('body').on("click", '.twitter_box .closed', function () {
		$('.twitter_box').removeClass('active')
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

	//点击客服
	$('body').on("click", '.kefu_icon', function () {
		$('.kefu_box').addClass('active')
	});
	$('body').on("click", '.kefu_box .closed', function () {
		$('.kefu_box').removeClass('active')
	});
	/*以下部分是card页面js*/
	/*定义キャラ詳細*/
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
	//三个tab做出切换
	$('.card_tab ul li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
		$(".card_tab_one").eq($(this).index()).show().siblings(".card_tab_one").hide();
	})
	$('.nav_link ul li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
		$('#loading').css('display', 'none');
		$('#video').css('display', 'none');
		$('#video')[0].pause();


	})
	//点击右上角折叠菜单栏弹出导航
	$('body').on("click", '.menu_button', function () {
		$('.nav_link').toggleClass('active')
	});
	$('body').on("click", '.nav_link .navs_close', function () {
		$('.nav_link').removeClass('active')
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


	//文字滚动时，禁止全屏滚动
	/* $('.slide3 .scroll').hover(function () {
		swiper.mousewheel.disable();
	  }, function () {
		swiper.mousewheel.enable();
	  })*/


});

$(function () {
	loading();
	function loading() {
		// $('#bar').css('width', '20%')
		// $('#bar').css('width', '30%')
		// $('#bar').css('width', '50%')
		// $('#bar').css('width', '80%')
		// $('#bar').css('width', '100%')
		$('#video').css('display', 'block');
		$('#video')[0].play();
		setTimeout(function () {
			//   $('#bar').css('display', 'none')
			setTimeout(function () {
				$('#loading').css('display', 'none')
			}, 2000)
		}, 2000)
	}

})
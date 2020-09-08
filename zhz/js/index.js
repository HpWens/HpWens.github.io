$(document).ready(function() {
	// 单屏切换
	var mySwiper = new Swiper('.page-container', {
		direction: 'vertical', // 垂直切换选项
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: true,
		},
		mousewheel: true,

		// 如果需要分页器
		pagination: {
			el: '.all-pagination',
			// bulletClass : 'my-bullet-all',//需设置.my-bullet样式
			clickable: true,
			clickableClass: 'my-pagination-clickable'
		},

		on: {
			slideChangeTransitionEnd: function() {
				if(this.activeIndex == 1) {
					$('.counter').countUp({
						delay: 10,
						time: 1000
					})
					$('.swiper-pagination').addClass('page2-pagination');
					$('.page2_enTheme').addClass('page2_change1');
					$('.page2 .title').addClass('page2_change2');
					$('.page2 > img').addClass('page2_change3');
					$('.page2 .data').addClass('page2_change4');
				} else {
					$('.swiper-pagination').removeClass('page2-pagination');
					$('.page2_enTheme').removeClass('page2_change1');
					$('.page2 .title').removeClass('page2_change2');
					$('.page2 > img').removeClass('page2_change3');
					$('.page2 .data').removeClass('page2_change4');
				}
				if(this.activeIndex == 2) {
					$('.page3_enTheme').addClass('page3_change1');
					$('.page3_theme').addClass('page3_change2');
				} else {
					$('.page3_enTheme').removeClass('page3_change1');
					$('.page3_theme').removeClass('page3_change2');
				}
				if(this.activeIndex == 3) {
					$('.page4_cover').addClass('cover_active');
					$('.page4_enTheme').addClass('page4_change1');
					$('.page4_theme').addClass('page4_change2');
				} else {
					$('.page4_cover').removeClass('cover_active');
					$('.page4_enTheme').removeClass('page4_change1');
					$('.page4_theme').removeClass('page4_change2');
				}
				if(this.activeIndex == 4) {
					$('.page6_enTheme').addClass('page6_change1');
					$('.page6_theme').addClass('page6_change2');
				} else {
					$('.page6_enTheme').removeClass('page6_change1');
					$('.page6_theme').removeClass('page6_change2');
				}
				if(this.activeIndex == 5) {
					$('.page5_enTheme').addClass('page5_change1');
					$('.page5_theme').addClass('page5_change2');
				} else {
					$('.page5_enTheme').removeClass('page5_change1');
					$('.page5_theme').removeClass('page5_change2');
					$('.form input:not(:last-child)').blur(function() {
						$(this).removeClass('focus1');
					});
				}
				if(this.activeIndex == 6) {
					$('.page7_enTheme').addClass('page7_change1');
					$('.page7_theme').addClass('page7_change2');
				} else {
					$('.page7_enTheme').removeClass('page7_change1');
					$('.page7_theme').removeClass('page7_change2');
				}
			},
		},
	})
	
	// tab栏
	$('.nav_menu > li:not(:last-child)').on('click', function() {
		$('.page8').hide();
		$('.swiper-container').show();
		var index = $(this).index();
		mySwiper.slideTo(index, 500, false);
		// console.log('sdfsdf');
		if(index == 1) {
			$('.counter').countUp({
				delay: 10,
				time: 1000
			})
			$('.swiper-pagination').addClass('page2-pagination');
			$('.page2_enTheme').addClass('page2_change1');
			$('.page2 .title').addClass('page2_change2');
			$('.page2 > img').addClass('page2_change3');
			$('.page2 .data').addClass('page2_change4');
		} else {
			$('.swiper-pagination').removeClass('page2-pagination');
			$('.page2_enTheme').removeClass('page2_change1');
			$('.page2 .title').removeClass('page2_change2');
			$('.page2 > img').removeClass('page2_change3');
			$('.page2 .data').removeClass('page2_change4');
		}
		if(index == 2) {
			$('.page3_enTheme').addClass('page3_change1');
			$('.page3_theme').addClass('page3_change2');
		} else {
			$('.page3_enTheme').removeClass('page3_change1');
			$('.page3_theme').removeClass('page3_change2');
		}
		if(index == 3) {
//			console.log('我是第4页');
			setTimeout(function() {
				$('.page4_cover').addClass('cover_active');
			}, 400)
			$('.page4_enTheme').addClass('page4_change1');
			$('.page4_theme').addClass('page4_change2');
		} else {
			$('.page4_cover').removeClass('cover_active');
			$('.page4_enTheme').removeClass('page4_change1');
			$('.page4_theme').removeClass('page4_change2');
		}
		if(index == 4) {
			$('.page6_enTheme').addClass('page6_change1');
			$('.page6_theme').addClass('page6_change2');
		} else {
			$('.page6_enTheme').removeClass('page6_change1');
			$('.page6_theme').removeClass('page6_change2');
		}
		if(index == 5) {
			$('.page7_enTheme').addClass('page7_change1');
			$('.page7_theme').addClass('page7_change2');
		} else {
			$('.page7_enTheme').removeClass('page7_change1');
			$('.page7_theme').removeClass('page7_change2');
		}

	})

	// 下拉列表跳转
	$('.contact').on('click', function(event) {
		event.stopPropagation();
		var index = 4;
		if(index == 4) {
			mySwiper.slideTo(index, 500, false);
			$('.page6_enTheme').addClass('page6_change1');
			$('.page6_theme').addClass('page6_change2');
		} else {
			$('.page6_enTheme').removeClass('page6_change1');
			$('.page6_theme').removeClass('page6_change2');
		}
		$('.page8').hide();
		$('.swiper-container').show();
	})
	$('.bc').on('click', function(event) {
		event.stopPropagation();
		var index = 5;
		if(index == 5) {
			mySwiper.slideTo(index, 500, false);
			$('.page5_enTheme').addClass('page5_change1');
			$('.page5_theme').addClass('page5_change2');
		} else {
			$('.page5_enTheme').removeClass('page5_change1');
			$('.page5_theme').removeClass('page5_change2');
			$('.form input:not(:last-child)').blur(function() {
				$(this).removeClass('focus1');
			});
		}
		$('.page8').hide();
		$('.swiper-container').show();
	})
	$('.join').on('click', function(event) {
		event.stopPropagation();
		var index = 6;
		if(index == 6) {
			mySwiper.slideTo(index, 500, false);
			$('.page7_enTheme').addClass('page7_change1');
			$('.page7_theme').addClass('page7_change2');
		} else {
			$('.page7_enTheme').removeClass('page7_change1');
			$('.page7_theme').removeClass('page7_change2');
		}
		$('.page8').hide();
		$('.swiper-container').show();
		// console.log("sdf");
	})

	// 联系我们
	$('.slideDownList').mouseenter(function() {
		$(this).children('.nav_menu2').stop().slideDown(300);
		$(this).children('img').attr('src', 'icon/nav2@2x.png');
		$('.nav_menu2').css('color', '#FFF');
	})
	$('.slideDownList').mouseleave(function() {
		$(this).children('.nav_menu2').stop().slideUp(200);
		$(this).children('img').attr('src', 'icon/nav@2x.png');
	})

	$(function() {
		// 首页背景视频插件调用
		$('.page1').vidbacking();

		// 鼠标滑过效果
		$('.left img').boxHover('icon/code2@2x.png', 'icon/code@2x.png');
		$('.right a:nth-child(1) img').boxHover('icon/andr2@2x.png', 'icon/andr@2x.png');
		$('.right a:nth-child(2) img').boxHover('icon/apps2@2x.png', 'icon/apps@2x.png');
		$('.page1_line1 img:first-child').boxHover('icon/tips2@2x.png', 'icon/tips1@2x.png');
		$('.page2_header > img').boxHover('icon/more3@2x.png', 'icon/more2@2x.png');
		$('.page3_header > img').boxHover('icon/more3@2x.png', 'icon/more@2x.png');
		$('.page4_header > img').boxHover('icon/more3@2x.png', 'icon/more@2x.png');
		$('.page5_header > img').boxHover('icon/more3@2x.png', 'icon/more@2x.png');
		$('.page6_header > img').boxHover('icon/more3@2x.png', 'icon/more@2x.png');
		$('.page7_header > img').boxHover('icon/more3@2x.png', 'icon/more@2x.png');
		$('.page4_partners .img1').boxHover('icon/32ceb34d9585a423a131ef78be011077@2x1.png',
			'icon/32ceb34d9585a423a131ef78be011077@2x.png');
		$('.page4_partners .img2').boxHover('icon/bilibili@2x (1).png', 'icon/bilibili@2x.png');
		$('.page4_partners .img3').boxHover('icon/baidu@2x1.png', 'icon/baidu@2x.png');
		$('.page4_partners .img4').boxHover('icon/systemSky-o.png', 'icon/systemSky.png');
		$('.page4_partners .img5').boxHover('icon/icon_logo-@2x1.png', 'icon/icon_logo-@2x.png');
		$('.page4_partners .img6').boxHover('icon/youku@2x1.png', 'icon/youku@2x.png');
		$('.page4_partners .img7').boxHover('icon/pcDownload-o.png',
			'icon/pcDownload.png');
		$('.page4_partners .img8').boxHover('icon/ww@2x1.png', 'icon/ww@2x.png');
		$('.page4_partners .img9').boxHover('icon/wangyi@2x1.png', 'icon/wangyi@2x.png');
		$('.page4_partners .img10').boxHover('icon/151c57e4f51cb85ef993410511c2c680@2x1.png',
			'icon/151c57e4f51cb85ef993410511c2c680@2x.png');
		$('.page4_partners .img11').boxHover('icon/alibaba@2x1.png', 'icon/alibaba@2x.png');
		$('.page4_partners .img12').boxHover('icon/17690745d73dd8f0265329abf42c84da@2x1.png',
			'icon/17690745d73dd8f0265329abf42c84da@2x.png');

		$('.nav_menu li').hover(function() {
			$(this).addClass('current1');
			$(this).siblings().removeClass('current1');
			$('.nav_menu2 li').removeClass('current1');
		}, function() {
			$(this).removeClass('current1');
		})

		// 声音开关
		$('.ifMuted').on('click', function() {
			if($('.page1 video').get(0).muted) {
				$('.page1 video').get(0).muted = false;
				$('.ifMuted').attr('src', 'icon/shengyin@2x.png');
			} else {
				$('.page1 video').get(0).muted = true;
				$('.ifMuted').removeAttr('src', 'icon/shengyin@2x.png');
				$('.ifMuted').attr('src', 'icon/shengyin2@2x.png');
			}
		})

		// 更多按钮
		$('.page2_header > img').clickBtn(2);
		$('.page3_header > img').clickBtn(3);
		$('.page4_header > img').clickBtn(4);
		$('.page5_header > img').clickBtn(5);
		$('.page6_header > img').clickBtn(5);
		$('.page7_header > img').clickBtn(5);

		// 关闭按钮
		$('.page8_header img:last-child').on('click', function() {
			$('.page8').hide();
			$(".swiper-container").fadeIn(1500);
		})

		//跳转到帮助中心
		$('.enterHelp').on('click', function() {
			$('.page9').slideDown(200);
			$('.swiper-container').hide();
		})
		$('.page9_header img:last-child').on('click', function() {
			$('.swiper-container').fadeIn();
			$('.page9').hide();
		})

		$('.enterHelp1').on('click', function() {
			$('.swiper-container').hide();
			$('.page8').hide();
			$('.page9').slideDown(200);
		})

	});
	
})
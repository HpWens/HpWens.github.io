(function($) {
	//鼠标滑过效果
	$.fn.boxHover = function(src1, src2) {
		this.hover(function() {
			$(this).attr('src', src1);
		}, function() {
			$(this).attr('src', src2);
		});
		return this;
	}


	//更多按钮
	$.fn.clickBtn = function(num) {
		this.on('click', function() {
			$('.page8_bodyer li:nth-child(' + num + ')').siblings('li').removeClass('current');
			$('.page8_bodyer li:nth-child(' + num + ')').addClass('current');
			$('.nav_menu2 li').removeClass('current');
			$('.page8').slideDown(200);
			$(".swiper-container").hide();
		});
	}

	//第三页视频播放
	$.fn.videoAction = function(num) {
		this.on('click', function() {
			if ($('.vidbacking' + num).get(0).paused) {
				$('.videoBtn' + num).hide();
				$('.vidbacking' + num).get(0).play();
			} else {
				$('.vidbacking' + num).get(0).pause();
				$('.videoBtn' + num).show();
			}
		})
	}

	$.fn.videoAction2 = function(num) {
		this.bind('ended', function() {
			$('.videoBtn' + num).show();
		})
	}
	//第三页视频播放
	$.fn.videoAction = function(num) {
		this.on('click', function() {
			if ($('.vidbacking' + num).get(0).paused) {
				$('.videoBtn' + num).hide();
				$('.vidbacking' + num).get(0).play();
			} else {
				$('.vidbacking' + num).get(0).pause();
				$('.videoBtn' + num).show();
			}
		})
	}

	$.fn.videoAction2 = function(num) {
		this.bind('ended', function() {
			$('.videoBtn' + num).show();
		})
	}

	// 帮助中心点击左侧
	
	$.fn.leftChange = function(rightWrapper) {
		this.on('click', function() {
			$('.' + rightWrapper).show();
			$('.' + rightWrapper).siblings('div').hide();
			$(this).addClass('current');
			$(this).siblings('p').removeClass('current');
		})
	}
	
	// 帮助中心右侧
	$.fn.rightChange = function(detail) {
		this.on('click', function() {
			$('.right_wrapper1').hide();
			$('.' + detail).show();
		})
	}
}(jQuery));

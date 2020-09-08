$(document).ready(function() {
	// 第三页切换
	var mySwiper1 = new Swiper('.switch-container', {
		direction: 'horizontal', // 水平切换选项
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: true,
		},

		// 如果需要分页器
		pagination: {
			el: '.page3-pagination',
			// bulletClass : 'my-bullet-page3',//需设置.my-bullet样式
			clickable: true,
			clickableClass: 'my-pagination-clickable'
		},
	})
	//鼠标点击pagination控制swiper切换
	var imgList = ['img/6.jpg', 'img/12.jpg', 'img/ec2.jpg', 'img/3-1@2x.png'];
	for (i = 0; i < mySwiper1.pagination.bullets.length; i++) {
		mySwiper1.pagination.bullets[i].index = i;
		mySwiper1.pagination.bullets[i].onmouseover = function() {
			mySwiper1.slideTo(this.index);
			$('.thisPage').text('0' + (this.index + 1));
			$('.page3').css('background-image', 'url(' + imgList[this.index] + ')');
			$('.bgBlur').css('background-image', 'url(' + imgList[this.index] + ')');
		};
	}
	
	// 第三页视频交换效果
		var count = 1;
		$('.videoBtn1').on('click', function() {
			count = -count;
			if (count == -1) {
				$('.vidbacking1').attr('src', 'video/6.mp4');
				$('.vidbacking1').attr('poster', 'img/6.jpg');
				$('.vidbacking2').attr('src', 'video/7.mp4');
				$('.vidbacking2').attr('poster', 'img/7.jpg');
				$('.page3').css('backgroundImage', 'url(' + 'img/7.jpg' + ')');
				$('.bgBlur').css('backgroundImage', 'url(' + 'img/7.jpg' + ')')

			} else {
				$('.vidbacking2').attr('src', 'video/6.mp4');
				$('.vidbacking2').attr('poster', 'img/6.jpg');
				$('.vidbacking1').attr('src', 'video/7.mp4');
				$('.vidbacking1').attr('poster', 'img/7.jpg');
				$('.page3').css('backgroundImage', 'url(' + 'img/6.jpg' + ')');
				$('.bgBlur').css('backgroundImage', 'url(' + 'img/6.jpg' + ')')
			}
		})
		var count1 = 1;
		$('.videoBtn3').on('click', function() {
			count1 = -count1;
			if (count1 == -1) {
				$('.vidbacking3').attr('src', 'video/12.mp4');
				$('.vidbacking3').attr('poster', 'img/12.jpg');
				$('.vidbacking4').attr('src', 'video/8.mp4');
				$('.vidbacking4').attr('poster', 'img/8.jpg');
				$('.page3').css('backgroundImage', 'url(' + 'img/8.jpg' + ')');
				$('.bgBlur').css('backgroundImage', 'url(' + 'img/8.jpg' + ')')
			} else {
				$('.vidbacking4').attr('src', 'video/12.mp4');
				$('.vidbacking4').attr('poster', 'img/12.jpg');
				$('.vidbacking3').attr('src', 'video/8.mp4');
				$('.vidbacking3').attr('poster', 'img/8.jpg');
				$('.page3').css('backgroundImage', 'url(' + 'img/12.jpg' + ')');
				$('.bgBlur').css('backgroundImage', 'url(' + 'img/12.jpg' + ')')
			}
		})

		//第三页视频播放
		$('.videoBtn1').videoAction(2);
		$('.videoBtn2').videoAction(2);
		$('.vidbacking2').videoAction(2);
		$('.videoBtn3').videoAction(4);
		$('.videoBtn4').videoAction(4);
		$('.vidbacking4').videoAction(4);

		$('.vidbacking1').videoAction2(1);
		$('.vidbacking2').videoAction2(2);
		$('.vidbacking3').videoAction2(3);
		$('.vidbacking4').videoAction2(4);
})

$(document).ready(function() {
	// 帮助中心点击左侧
		$('.left_line1').leftChange('right_wrapper1');
		$('.left_line2').leftChange('right_wrapper2');
		$('.left_line3').leftChange('right_wrapper3');
		$('.left_line4').leftChange('right_wrapper4');

		// 帮助中心右侧
		$('.right_wrapper1 p:nth-child(2)').rightChange('detail1');
		$('.right_wrapper1 p:nth-child(3)').rightChange('detail2');
		$('.right_wrapper1 p:nth-child(4)').rightChange('detail3');
		$('.right_wrapper1 p:nth-child(5)').rightChange('detail4');
		$('.right_wrapper1 p:nth-child(6)').rightChange('detail5');
		$('.right_wrapper1 p:nth-child(7)').rightChange('detail6');
		$('.right_wrapper1 p:nth-child(8)').rightChange('detail7');
		$('.right_wrapper1 p:nth-child(9)').rightChange('detail8');
		$('.right_wrapper1 p:nth-child(10)').rightChange('detail9');
		$('.right_wrapper1 p:nth-child(11)').rightChange('detail10');
		$('.right_wrapper1 p:nth-child(12)').rightChange('detail11');
		$('.right_wrapper1 p:nth-child(13)').rightChange('detail12');
		$('.right_wrapper1 p:nth-child(14)').rightChange('detail13');
		$('.right_wrapper1 p:nth-child(15)').rightChange('detail14');
		$('.right_wrapper1 p:nth-child(16)').rightChange('detail15');
		$('.right_wrapper1 p:nth-child(17)').rightChange('detail16');
		$('.right_wrapper1 p:nth-child(18)').rightChange('detail17');

		// 单击击图片放大
		$('#image').on('click', function() {
			$(this).toggleClass('imgChange');
			var flag = $('#image').is('.imgChange');
			if (flag) {
				$('.right_wrapper2Right').hide();
			} else {
				$('.right_wrapper2Right').show();
			}
		})
})

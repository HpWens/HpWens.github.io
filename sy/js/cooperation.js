$(document).ready(function() {
	// 表单判断
		$(".form > :input").keyup(function() {
			var $emptyFields = $('.form :input').filter(function() {
				return $.trim(this.value) === "";
			});

			if (!$emptyFields.length) {
				$('#input1').addClass('input1');
				// console.log('filled');
			} else {
				$('#input1').removeClass('input1');
			}
		});
		
		
		$('.form input:not(:last-child)').focus(function() {
			$(this).addClass('focus1');
			$(this).addClass('isActive');
		})
		$('.form input:not(:last-child)').blur(function() {
			$(this).removeClass('focus1');
			$(this).removeClass('isActive');
		})

		$('#input1').on('click', function() {
			var flag = $(this).is('.input1');
			if (flag) {
				$.ajax({
					type: 'post',
					url: 'https://api.changdou.top/api/businessk/cooperation',
					data: {
						'name': $("#name").val(),
						'mobile': $("#mobile").val(),
						'wechat': $("#wechat").val(),
						'comefrom': 'guanwang'
					},
					dataType: 'json',
					success: function(data) {
						alert('提交成功！');
					},
					error: function() {
						alert('提交失败！');
					}
				})
			} else {
				$(this).attr('disabled', 'disabled');
			}
		})
})

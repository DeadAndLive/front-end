$(() => {
	var width = $(window).width() / 16;
	$("html").css("fontSize", width);
	if ($(window).width() < 1080) {
		$(location).attr("href", "404.html");
	}
	$(window).resize(() => {
		width = $(window).width() / 16;
		$("html").css("fontSize", width);
		if ($(window).width() < 1080) {
			$(location).attr("href", "404.html");
		}
	});
	for (var i = 40; i >= 0; i--) {
		$(".cube-1").append("<span class='cube-1-y' style='transform: rotateY("+i*9+"deg);'></span>")
	}
	var color = ["red","orangered","yellow","aqua","blue","purple"];
	var [maxbox_1,nav2ul,cubesn1,cubesn2,cubesn3,cubesn4,cubeS,cube,cubesd
	,maxbox_4,mb4_right,mb4_left,mb4r_img,maxbox_2,mb2r_top,mb2r_bottom,mb2_left
	,maxbox_3,mb3_left,mb3_right,mb3r_txt,mb3_center,cube1y]
	= [$(".maxbox-1"),$(".nav-2 ul li div"),$(".cube>span:nth-child(1)")
	,$(".cube>span:nth-child(2)"),$(".cube>span:nth-child(3)")
	,$(".cube>span:nth-child(4)"),$(".cube>span"),$(".cube"),$(".cube>span>div")
	,$(".maxbox-4"),$(".mb4-right"),$(".mb4-left"),$(".mb4-r-img"),$(".maxbox-2")
	,$(".mb2-r-top"),$(".mb2-r-bottom"),$(".mb2-left"),$(".maxbox-3"),$(".mb3-left")
	,$(".mb3-right"),$(".mb3-r-txt"),$(".mb3-center"),$(".cube-1-y")];
	
	$(maxbox_1).stop().show(1000);
	var before = $(".before");
	var deg = [-90,-180,-270,-360,-360];
	var maxboxArr = [maxbox_1,maxbox_2,maxbox_3,maxbox_4,before];
	for (var i = 0; i < deg.length; i++) {
		touch(maxboxArr[i],deg[i]);
	}
	rY = () => {
		$(cubeS).stop().animate({
			width: "70vw",
			height: "60vh",
			left: "15vw",
			top: "20vh"
		},500);
		setTimeout(() => {
			$(cubeS).stop().animate({
				width: "100vw",
				height: "95vh",
				left: "0",
				top: "0"
			},1000);
		},1000);
	}
	mb1Show = () => {
		$(maxbox_1).stop().fadeIn(1000);
	}
	mb1Hide = () => {
		$(maxbox_1).stop().fadeOut(1000);
	}
	mb2Show = () => {
		$(maxbox_2).stop().fadeIn(1000);
		setTimeout(() => {
			$(mb2r_top).stop().animate({
				right: "0"
			},1000);
			$(mb2r_bottom).stop().animate({
				right: "0"
			},1000);
		},1000);
		$(mb2_left).stop().delay(1000).slideDown(1000);
	}
	mb2Hide = () => {
		$(mb2_left).stop().slideUp(1000);
		$(mb2r_top).stop().animate({
			right: "-100%"
		},1000);
		$(mb2r_bottom).stop().animate({
			right: "100%"
		},1000);
	}
	mb3Show = () => {
		$(maxbox_3).stop().fadeIn(1000);
		setTimeout(() => {
			$(mb3_left).stop().show(1000);
			$(mb3_right).stop().show(1000);
			$(mb3r_txt).stop().slideDown(2500);
			$(mb3_center).stop().delay(1000).fadeIn(1000);
		},2000);
	}
	mb3Hide = () => {
		$(mb3_right).stop().hide(1000);
		$(mb3_left).stop().hide(1000);
		$(mb3r_txt).stop().hide(1000);
		$(mb3_center).stop().fadeOut(1000);
	}
	mb4Hide = () => {
		$(mb4_right).stop().hide(1000);
		$(mb4_left).stop().hide(1000);
		$(mb4r_img).stop().fadeOut(1000);
	}
	mb4Show = () => {
		$(maxbox_4).stop().fadeIn(1000);
		setTimeout(() => {
			$(mb4_right).stop().slideDown(1000);
			$(mb4_left).stop().show(1000);
			$(mb4r_img).stop().delay(1000).fadeIn(1000);
		},1000);
	}
	function touch(maxbox,deg) {
		$(maxbox).on("touchstart", e => {
			startX = e.originalEvent.changedTouches[0].pageX,
			startY = e.originalEvent.changedTouches[0].pageY;
			}
		);
		$(maxbox).on("touchmove",e => {
			endX = e.originalEvent.changedTouches[0].pageX,
			endY = e.originalEvent.changedTouches[0].pageY;
			distanceX = endX-startX;
			distanceY = endY-startY;
			if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX>300){
				rY();
				if (deg == -90) {
					return;
				} else {
					var rY1 = degE => {
						$(cube).css({
							"transform": "rotateY("+degE+"deg)",
							"transition": "1s"
						});
					}
					switch (maxbox){
						case maxboxArr[1]:
						rY1(0);
						mb1Show();
						mb2Hide();
							break;
						case maxboxArr[2]:
						rY1(-90);
						mb2Show();
						mb3Hide();
							break;
						case maxboxArr[3]:
						rY1(-180);
						mb3Show();
						mb4Hide();
							break;
						case maxboxArr[4]:
						rY();
						mb4Show();
						$(before).stop().hide();
						$(cube).css({
							"transform": "rotateY(-270deg)",
							"transition": "1s"
						});
							break;
						default:
							break;
					}
				}
			}else if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX<-300){
				rY();
				$(cube).css({
					"transform": "rotateY("+deg+"deg)",
					"transition": "1s"
				});
				switch (maxbox){
					case maxboxArr[0]:
					mb1Hide();
					mb2Show();
						break;
					case maxboxArr[1]:
					mb2Hide();
					mb3Show();
						break;
					case maxboxArr[2]:
					mb3Hide();
					mb4Show();
						break;
					case maxboxArr[3]:
					$(cubesd).stop().hide(1000);
					$(before).stop().show();
						break;
					default:
						break;
				}
			}else{
			}
		});
	}
	
	$(nav2ul).on("click", function() {
		$(cube1y).css("boxShadow","0 0 0.05rem "+color[parseInt(Math.random()*5)]);
		$(this).parent().siblings().children().css("backgroundColor","rgba(0,0,0,0.5)");
		$(this).css("backgroundColor","black");
		$(this).addClass("nav-2-max").parent().siblings().children().removeClass("nav-2-max");
		var index = -($(this).parent().index());
		$(cubesn1).css("transform", "rotateY(180deg) translateZ(35vw)");
		$(cubesn2).css("transform", "translateZ(35vw)");
		$(cubesn3).css("transform", "rotateY(270deg) translateZ(35vw)");
		$(cubesn4).css("transform", "rotateY(90deg) translateZ(35vw)");
		rY();
		if (-index != 4) {
			$(cube).css({
				"transform": "rotateY(" + index * 90 + "deg)",
				"transition": "1s"
			});
		}
		if (-index == 0) {
			mb1Show();
		} else {
			mb1Hide();
		}
		if (-index == 4) {
			$(cubesd).stop().hide(1000);
		}
		if (-index == 3) {
			mb4Show();
		} else {
			mb4Hide();
		}
		if (-index == 1) {
			mb2Show();
		} else {
			mb2Hide();
		}
		if (-index == 2) {
			mb3Show();
		} else {
			mb3Hide();
		}
	});
	port = () => {
		var num = 1025;
		return () => {
			num++;
			$(".mb4-u-l-t").text("" + num);
		}
	}
	$(".mb4-u-l-i1 > img").on("click",port());
	$(".mb3-l-input input").on("focus",function() {
		$(this).css({
			color: "#fff",
			backgroundColor: "rgba(0,0,0,0.5)",
			borderRadius: "0.08rem"
		});
	});
	$(".mb3-l-input input").on("focusout",function() {
		$(this).css({
			color: "#000",
			backgroundColor: "#fff",
			borderRadius: "0.08rem"
		});
	});
	
	$(".mb2-menu>img").on("click",() => {
		$(".mb2-m-down").stop().slideToggle(500);
	});
	
	$(".mb1-l-txt>p:odd").css("fontSize", "0.2rem");
	$(".mb1-l-txt>p:even").css("fontSize", "0.1rem");
	$(".mb1-l-txt>p:eq(0)").css({
		fontSize: "0.5rem",
		color: "black",
		fontWeight: "700",
		fontFamily: "Impact, Charcoal, sans-serif",
		marginBottom: "0.4rem"
	});
	
	$(".mb1-hanb>img").on("click",() => {
		$(".mb1-menu").stop().slideToggle(500);
	});
	var img_index = 1;
	var toggle_img = $(".toggle_img");
	$(toggle_img).on("click",() => {
		img_index++;
		if (img_index > 9) {
			img_index = 2;
		}
		$(".mb4-r-txt").stop().fadeOut(1000);
		$(".mb4-r-img>img").stop().fadeOut(500);
		setTimeout(() => {
			$(".mb4-r-img>img").attr("src","img/full"+img_index+".jpg");
			$(".mb4-r-img>img").stop().fadeIn(500);
		},500);
	});
	$(toggle_img).on("mouseleave",() => $(".mb4-r-txt").stop().fadeIn(1000));
	
});

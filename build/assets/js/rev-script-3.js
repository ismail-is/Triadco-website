	
			var tpj=jQuery;
			var revapi26;
			tpj(document).ready(function() {
				if(tpj("#slider-boxed").revolution == undefined){
					revslider_showDoubleJqueryError("#slider-boxed");
				}else{
					revapi26 = tpj("#slider-boxed").show().revolution({
						sliderType:"standard",
						jsFileLocation:"revolution/js/",
						sliderLayout:"auto",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"off",
							touch:{
								touchenabled:"on",
								touchOnDesktop:"off",
								swipe_threshold: 75,
								swipe_min_touches: 50,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							},
							
							arrows: {
								style: "hermes",
								enable: true,
								hide_onmobile: false,
								hide_onleave: false,
								// tmp: '<div class="tp-arr-allwrapper">	<div class="tp-arr-imgholder"></div>	<div class="tp-arr-titleholder">{{title}}</div>	</div>',
								left: {
									h_align: "left",
									v_align: "center",
									h_offset: 0,
									v_offset: 0
								},
								right: {
									h_align: "right",
									v_align: "center",
									h_offset: 0,
									v_offset: 0
								}
							},
							thumbnails: {
								style:"zeus",
								enable:true,
								width:80,
								height:80,
								min_width:80,
								wrapper_padding:10,
								wrapper_color:"#fff",
								wrapper_opacity:"0.5",
								tmp: '<span class="tp-thumb-img-wrap"><span class="tp-thumb-image"></span></span>',
								visibleAmount:10,
								hide_onmobile:false,
								hide_onleave:false,
								direction:"horizontal",
								span:false,
								position:"inner",
								space:10,
								h_align:"right",
								v_align:"bottom",
								h_offset:0,
								v_offset:0
							}							
							,
							bullets: {
								enable:true,
								hide_onmobile:false,
								style:"hephaistos",
								hide_onleave:false,
								direction:"horizontal",
								h_align:"right",
								v_align:"bottom",
								h_offset:30,
								v_offset:30,
								space:5,
								tmp:''
							}
						},
						responsiveLevels: [1240, 1024, 778, 480],
						visibilityLevels: [1240, 1024, 778, 480],
						gridwidth: [1240, 1240, 1240, 800],
						gridheight: [660, 700, 700, 700],
						lazyType:"none",
						parallax: {
							type:"scroll",
							origo:"slidercenter",
							speed:2000,
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
						},
						shadow:0,
						spinner:"off",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						fullScreenAutoWidth:"off",
						fullScreenAlignForce:"off",
						fullScreenOffsetContainer: "",
						fullScreenOffset: "60px",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}
			});	/*ready*/

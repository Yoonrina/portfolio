$(function(){


  //opening (gif이미지)
  $('.opening').each(function(index,item){

    gsap.fromTo(item,{
      height:'100%',
    },{
      scrollTrigger:{
        trigger:item,
        start:"top 100%",
        //markers:true,
      },
      height:0,
      duration:0.5,
      delay:1
    })
  })
  setTimeout(function() { 
    $('.gemstone').addClass('hidden'); 
  }, 1200);

  //opening (랜덤)
  // function opening(){
  //   let randomNumber = Math.floor(Math.random() * 5);
  //   let imgName = ['bg01', 'bg02', 'bg03', 'bg04', 'bg05'];
  //   $('.gemstone').children('img').attr('src', 'img/op/' + imgName[randomNumber] + '.jpg');
  // }
  // opening();
  // let set = setInterval(function(){
  //             opening();
  //             if($('.gemstone').hasClass('hidden')){
  //               clearInterval(set);
  //             }
  //           },150);

  // gsap.fromTo('.opening',{
  //   height:'100%',
  // },{
  //   scrollTrigger:{
  //     trigger:'.opening',
  //     start:"top 100%",
  //     //markers:true,
  //   },
  //   height:0,
  //   duration:0.5,
  //   delay:1
  // })
  // setTimeout(function() { 
  //   $('.gemstone').addClass('hidden'); 
  // }, 1200);

  



  //cursor
  $(window).mousemove(function(e){
    w = $('.cursor').width()/3
    h = $('.cursor').height()/3

    gsap.to('.cursor',{
      x:e.clientX-w,
      y:e.clientY-h,
      duration:0.1
    });
  });

  //cursor hover
  $('a').mouseover(function(){
    gsap.to('.cursor',{
      scale:4,
      backgroundColor:'#791515',
      duration:0.2
    });
  })

  $('a').mouseleave(function(){
    gsap.to('.cursor',{
      scale:1,
      backgroundColor:'#157928',
      duration:0.2
    });
  })

  //logo
  $('.logo').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop:0},500);
  });


  //sc_01
  $('.down_arrow').click(function(e){
    e.preventDefault();
    sc02 = $('.sc_02').offset().top;

    $('html, body').stop().animate({scrollTop:sc02},900,'easeOutCubic');
  });

  const headTxt = new SplitType('.spliteTitle', { types: 'words, chars', });

  motion = gsap.from(headTxt.words,{
    opacity:0,
    yPercent:10,
    stagger:0.05,
    delay:1.1,
    duration:1
  });

  motion.play();

  setTimeout(function() { 
    $('.spliteTitle').addClass('none'); 
    $('.spliteTitle2').removeClass('none'); 
  }, 3000);



  //sc_02
  $('.keyword').click(function(e){
    e.preventDefault();
    target = $(this).children('a').attr('href');
    textArea = $('.text_area').offset().top;

    $('.txtwrap').removeClass('on')
    $(target).addClass('on')

    $('html, body').stop().animate({scrollTop:textArea},1000,'easeOutCubic');
  });


  $('#pf').click(function(e){
    e.preventDefault();
    sc03 = $('.sc_03').offset().top;
    $('html, body').stop().animate({scrollTop:sc03},1000,'easeOutCubic');
  });


  $('.love .img_wrap').click(function(){
    if($('.img_wrap').hasClass('reverse')){
      $('.img_wrap').removeClass('reverse');
    }else{
      $('.img_wrap').addClass('reverse');
    };
  })

  $('.love .mo_img_wrap').click(function(){
    if($('.mo_img_wrap').hasClass('reverse')){
      $('.mo_img_wrap').removeClass('reverse');
    }else{
      $('.mo_img_wrap').addClass('reverse');
    };
  })

  var swiper = new Swiper(".mo_love", {
    navigation: {
      nextEl: ".mo_love .mo_n",
      prevEl: ".mo_love .mo_p",
    },
  });


  $('#contact').click(function(e){
    e.preventDefault();
    ft = $('footer').offset().top;
    $('html, body').stop().animate({scrollTop:ft},1000,'easeOutCubic');
  });


  //ston scroll,scrub
  $('.up').each(function(index,item){

    if($(this).data('y')){
      yVal = $(this).data('y');
    }else{
      yVal = 50
    }
  
    gsap.fromTo(item,{
      yPercent:yVal,
    },{
      scrollTrigger:{
        trigger:item,
        start:"top 100%",
        end:"bottom 50%",
      // markers:true,
       scrub:1,
      },
      yPercent:0,
      duration:1,
    })
  })

  //text_area
  $('.up2').each(function(index,item){
  
    gsap.fromTo(item,{
      yPercent:30,
      opacity:0,
    },{
      scrollTrigger:{
        trigger:item,
        start:"top 100%",
        end:"bottom 50%",
      // markers:true,
      },
      yPercent:0,
      opacity:1,
      duration:1,
    })
  })


  //sc_03
  var swiper = new Swiper(".pf_wrap", {
    loop: true,
    speed:1000,
    navigation: {
      nextEl: ".sc_03 .next",
      prevEl: ".sc_03 .prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + 'no' +(index + 1) + "</span>";
      },
    },
  });



  //footer
  $('.mali').click(function (e) { 
    e.preventDefault();
    $('#addr').select();
    document.execCommand("copy");
    alert("주소가 복사되었습니다"); 
  });



  gsap.fromTo('.scrub',{
    yPercent:-150,
  },{
    scrollTrigger:{
      trigger:'footer',
      start:"10% 100%",
      end:"50% 0%",
     //markers:true,
     scrub:0.5,
    },
    yPercent:-50,
    duration:1,
  });



});
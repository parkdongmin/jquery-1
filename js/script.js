$(document).ready(function() {
  // $('p').html("안녕! JQuery");
  var result = $('p').html();
  // document.getElementsbyTagName('p') = $('p')
  console.log(result);

  // google 이라는 id 속성을 갖는 a 태그에
  // click 이벤트를 바인딩(결합)하는 Jquery 코드
  $('a#google').click(function() {
    // alert('구글로 이동합니다');
    // event.preventDefault();
  });

  // GET 방식으로 http 통신을 하는 메소드
  $('#ajax').click(function() {
    $.get('ajax.html', function(response) {
      $('p.content').html(response);
    });
  });

  // Callback 을 위한 테스트함수
  function myCallBack() {
    alert("callback 실행!");
    event.preventDefault();
  }

  // btn 이라는 id 속성을 갖는 모든 태그를 클릭했을때
  // 실행하는 Jquery 코드
  $('#btn').click(function() {
    if ($('h1').css('display') != 'none') {
      $('h1').hide('slow');
    } else {
      $('h1').show('slow');
    }
  });

  // btn 이라는 id 속성을 갖는 모든태그에
  // click 이벤트를 바인딩하는 JQuery 코드
  // $('#btn').click(function() {
  //   if ( $('h1').hasClass('big') ) {
  //     $('h1').removeClass('big');
  //     // $(this).removeClass('big');
  //   } else {
  //     $('h1').addClass('big');
  //   }
  // });

  // google 이라는 id 값을 갖는 모든 a 태그의
  // 속성값들중에, href 라는 속성의 값을
  // javascript 변수인 href에 담아 초기화 시킨다
  var href = $('a#google').attr('href');
  // alert(href);
  $('a#google').attr('href', 'www.naver.com');

  // google 이라는 id 값을 갖는 모든 a 태그의
  // 2가지 속성을 바꾸거나 넣는다.
  // 첫번째는 href 속성의 값을 http://google.com 으로 바꾸고
  // 두번째는 target 속성의 값을 _blank로 바꾼다 (추가)
  $('a#google').attr({
    href: 'http://google.com',
    target: '_blank'
  });



});

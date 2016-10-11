$(document).ready(function() {
  // 다양한 셀렉터 문법
  // $('a');
  // $('#myId');
  // $('.myClass');
  // $('input[name="email"]');
  // $('#header h1.title');
  // $('div.myClass, ul.fruits');

  var a = $('a');
  a.attr('href', 'http://www.naver.com');
  a.html('Naver');
  // $('#header h1.title').attr('href', 'http://www.naver.com');
  // $('#header h1.title').html('Naver');

  // Filtering 해주는 JQuery 메소드
  $('ul li').has('p');
  $('ul li').not('.selected');
  $('ul li').first();
  $('ul li').eq(2);

  // fruits class 이름을 갖는 요소를 찾고
  // 그 중에 selected class 이름을 갖는 요소를 찾는다
  // 찾은 요소의 css style 을 {color: red} 로 정의한다
  $('.fruits').find('.selected').css('color', 'red');

  // $('h1.title').click(function() {
  //   alert('메뉴를 준비중입니다');
  // });

  $('h1.title').on('click', function() {
    alert('메뉴를 준비중입니다');
  });




});

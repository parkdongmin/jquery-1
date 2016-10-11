$(document).ready(function() {
  // Form Event
  $('input#content').focus(function() {
    console.log('focusing to #content');
  });
  $('input#content').blur(function() {
    console.log('blur to #content')
  });
  $('select').change(function() {
    console.log('select value changed');
  });

  // Keyboard Event
  $('input#content').keydown(function() {
    console.log('keydown');
  });
  $('input#content').keyup(function() {
    console.log('keyup');
  });

  // Mouse Event
  $('input#act').click(function() {
    console.log('act button click');
  });
  $('input#act').hover(function() {
    console.log('act buuton mouse over');
  });
  $('input#toggle').click(function() {
    $('p.target').toggle(1000, function() {
      console.log('toggle it');
    });
    // .slideToggle()
    // .fadeToggle()
  });




});

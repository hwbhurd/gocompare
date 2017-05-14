$(document).ready(function() {
  $('#loading').fadeOut();

  $('#may-may').click(function() {
    $('#one').attr('src', 'images/may-fake-launch.jpg');
    $('#two').attr('src', 'images/may-launch.jpg');
    $("#container1").twentytwenty();
    $('h1').removeClass('active');
    $(this).addClass('active');
  });
  $('#corbyn-may').click(function() {
    $('#one').attr('src', 'images/corbyn-launch.jpg');
    $('#two').attr('src', 'images/may-launch.jpg');
    $("#container1").twentytwenty();
  });

});

$(window).on('load', function(){
  $("#container1").twentytwenty();
});

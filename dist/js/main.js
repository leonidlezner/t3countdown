//=require _debug.js

function secondsToTime(time) {
  var s = Math.floor(time % 60);
  var m = Math.floor((time / 60) % 60);
  return { seconds: s, minutes: m };
}

function fillZeros(timePart) {
  if(timePart < 10) {
    return '0' + timePart;
  } else {
    return '' + timePart;
  }
}

$(function() {
    
    $('.countdown').each(function() {
      var start_time = $(this).attr('data-time');
      
      var current_time = start_time;
      
      $(this).append('<div class="minutes" /><div class="delimiter" /><div class="seconds" />');
      
      var minutes_element = $(this).find('.minutes');
      var seconds_element = $(this).find('.seconds');
      
      var timer = setInterval(function() {
        current_time--;
        
        var time = secondsToTime(current_time);
        
        minutes_element.text(fillZeros(time.minutes));
        seconds_element.text(fillZeros(time.seconds));
        
        if(current_time <= 0) {
          clearInterval(timer);
          // Countdown reaches the Zero!
          
          
          
        }
      }, 1000);
      
      
      
    });
    
    
});

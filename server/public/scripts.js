
function downloadMood() {
  $.get('/mood', function(mood) {
    $('#theimg').attr('src', '/img/' + mood.sum + '.gif');
  });
}

setInterval(downloadMood, 1000);

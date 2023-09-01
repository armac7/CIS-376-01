$(document).ready(function() {
  
  // IF you click left AKA Chad
  $('#chad').click(function() {
    $('#outputDiv').hide();
    console.log("user clicked chad");
    $('#outputImg').attr('src', 'https://external-preview.redd.it/OFJy8yiZ6GoqKSLnBvozq3sJBGLyGNIoTTMbHqYkRTQ.jpg?width=1080&height=565.445026178&auto=webp&s=4978d0d4a153f40abd669c21c2ec852b5329097b')
    $('#outputMsg').text("The truth is, you're a gigachad. You've learned to follow God, and listen to Him. You go to the gym almost every day, and seek traditional values. You're on the right path. Just always remember, of all things: be kind: all truly strong people are kind. Keep on the path. Keep going. Keep struggling. God Bless.");
    $('#outputDiv').toggle();
  });
  
  $('#wojack').click(function(){
    $('#outputDiv').hide();
    console.log("user clicked wojack");
    $('#outputImg').attr('src', 'https://wallpapercave.com/wp/wp8711040.jpg');
    $('#outputMsg').text("The truth is: you're on the path of destruction. Divulging in humanly pleasures is the wide gate, by which many can enter. Go to the gym, start eating right, and turn to God. What is impossible with man is made possible with God. It's not too late to be better. Get up, and get started. You can do it, bro.");
    $('#outputDiv').toggle();
  });
  
});
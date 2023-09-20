$('document').ready(function(){
  $('#output').hide();
  $('#outputTxt').hide(); 

  $('#head-text').text("Life has been spiraling out of control...you walk out into the rainy night...");
  
  ////// Code for the "Bar" Scenario. ////////
  $('#bar-container').click(function(){
    // hides everything thats needs hiding
    $('#text').hide();
    $('#bar-container').hide();
    $('#gym-container').hide();
    $('#church-container').hide();
    
    // changes header text
    $('#head-text').text("BAD ENDING: So, you decided to go to the bar...");
    // toggles output and changes it.
    $('#output').toggle();   
    $('#outputTxt').toggle(); 
 
    $('#outputImg').attr('src','https://i.ytimg.com/vi/R7j9OFh84pY/maxresdefault.jpg');
    $('#outputTxt').text("Sinking further into your depression, you decided to go to the bar, and from there it spiraled out of control. Instead of learning from your past mistakes, and harnessing self-control, you made it even worse. You started living even more worldly than before, focusing on temporary pleasures as opposed to permanent gains. From drinking, it only got much worse. You lost yourself in the madness and sorrow, and woed unto the world your darkest self. From here on out, your empathy was none. You always found reasons to complain, or make life worse for yourself. You were scornful and jealous, hatefilled and angry, sorrowful and depressed.");
    
  });
  
  
  ///// Code for the "Gym" Scenario //////
  $('#gym-container').click(function(){

    $('#text').hide();
    $('#bar-container').hide();
    $('#gym-container').hide();
    $('#church-container').hide();

    $('#head-text').text("NEUTRAL ENDING: So, you decided to go to the gym...");

    $('#output').toggle(); 
    $('#outputTxt').toggle(); 

    $('#outputImg').attr('src','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.A4uZVw5DVkThA-Uc2INg1AHaEK%26pid%3DApi&f=1&ipt=1167ff8378b96d7c6bc1cb7e32bcb31021a3f66d1cf50e58540ad34bf1ae7d36&ipo=images');
    $('#outputTxt').text("As opposed to succumbing to this world and its woes, you instead chose to better yourself. Is it for the right reason? That is yet to be decided. It could be for revenge, or it could be for love, or for kindness. There is only one right way forward, and through God can that right path be illuminated. For now though, it is one more set until failure, and that is how the time is measured. Will you fall back into the pit you were a moment before? Will you overcome it all and become a better person? It's all on the wind. It's time to get those reps rolling, those muscles burning, and those calories skyrocketing. Keep on struggling.");
    
  });
  
  
  
  ///// Code for the "Church" Scenario //////
  $('#church-container').click(function(){
    $('#text').hide();
    $('#bar-container').hide();
    $('#gym-container').hide();
    $('#church-container').hide();
    $('#head-text').text("GOOD ENDING: So, you decided to go to church...");
    
    $('#output').toggle();   
    $('#outputTxt').toggle(); 
    $('#outputImg').attr('src','https://i.kym-cdn.com/photos/images/facebook/002/314/948/f21.jpg');
    $('#outputTxt').text("In your lonliest moment, whenever all was lost, whenever the winds beat down unto you, and when the world felt as though it had reached its end, from the rain came a vision, and soon the clouds parted, for a storm is necessary for us to experienced a rainbow. Without a storm, we would never appreciate the rainbow. Stepping back into church, or perhaps even for the first time, HE spoke to you, and through Him you seek to be better. You seek to become stronger, gentler, kinder, because all truly strong people are kind. With this, so too came the gym. Instead of chasing butterflies, you built a garden, so now they shall come to you. This was not the end, but the path to a new beginning. Deus Vult and God Bless.");
  });
  
});
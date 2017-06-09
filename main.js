$(document).ready(function(){
  var followers=[];
$.ajax({
   type: "GET",
   url: "https://api.twitch.tv/kraken/streams/freecodecamp",
   headers:{
     'Client-ID': 'k1f5n273d23o7k57t5uopf1urzocgl'
   },
   success: function(data1){
     if (data1.stream === null) {
       //FCC Offline
       $("#freeccstatus").html("Free Code Camp is Currently OFFLINE!");

    } else {
      //FCC Online
      $("#freeccstatus").html("Free Code Camp is Currently LIVE!");
    }
    }
  }); 
  ////////////////////////////////////////////////////////////////////////////////
 /* $.ajax({
   type: "GET",
   url: "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/",
   headers:{
     'Client-ID': 'k1f5n273d23o7k57t5uopf1urzocgl'
   },
   success: function(data2)
    {
     for(var i=0;i<data2.follows.length;i++)
       {
         followers.push(data2.follows[i].channel.display_name);
       }
      followers.push("ashwini1994");
      followers.push("surabhi1994");
      
    }
  });*/
  ///////////////////////////////////////////////////////////////////////////////////
  $.ajax({
   type: "GET",
   url: "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/",
   headers:{
     'Client-ID': 'k1f5n273d23o7k57t5uopf1urzocgl'
   },
   success: function(data2)
    {
        for(var i=0;i<data2.follows.length;i++)
          {
            console.log(data2.follows[i].channel.status);
            var displayname=data2.follows[i].channel.display_name;
            var logo=data2.follows[i].channel.logo;
            var status=data2.follows[i].channel.status;
            if(logo==null)
              logo="C:\Users\Aswini\Downloads\Paomedia-Small-N-Flat-Sign-error.ico";
          
      $("#followerInfo").prepend("<div class='row'>"+"<div class='col-md-4'><img src='"+logo+"'></img></div>"+"<div class='col-md-4'>"+displayname+"</div>"+"<div class='col-md-4'>"+status+"</div>");
          }
    }
  });
  });

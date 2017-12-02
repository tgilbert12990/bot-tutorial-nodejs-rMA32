var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/rules/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/https://daddyleagues.com/iliminded/rules;botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexSiege = /^\/siege/; botRegexOW = /^\/ratings/; 
      botRegexSlut = /^\/slut/; botRegexMason = /^\/mason/;
      botRegexProp = /^\/prop/;botRegexKys = /^\/kys/; botRegexSlam = /^\/slam/; botRegexBrye = /^\/brye/;
      botRegexGian = /^\/gian/; botRegexScrotes = /^\/scrotes/; botRegexShaki = /^\/shaki/;
      botRegexDaf = /^\/dafuq/; botRegexMA32 = /^\/pending/; botRegexTrade = /^\/trade/; 
      siege1 = 'https://i.groupme.com/756f0700ac4e4e4e309c029796; siege2 = 'https://i.groupme.com/1279x752.jpeg.756f0700ac4e4e4e309c029796
      siege3 = 'https://i.groupme.com/756f0700ac4e4e4e309c029796;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && /rules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/iliminded/rules);
    this.res.end();
  } 
  else if(request.text && /schedule.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/iliminded/schedules);
    this.res.end();
  }
  else if(request.text && /power.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/iliminded/standing/ranking);
    this.res.end();
  } 
  else if(request.text && /divison.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/iliminded/standings);
    this.res.end();
  } 
  else if(request.text && /home.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/iliminded);
    this.res.end();
  } 
  else if(request.text && /owners.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/iliminded/coaches);
    this.res.end();
  } 
  else if(request.text && /stats.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/iliminded/stats/player);
    this.res.end();
  } 
  else if(request.text && /records.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/iliminded/stats/career);
    this.res.end();
  } 
  else if(request.text && /teamstats.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/iliminded/stats/team);
    this.res.end();
  } 
  else if(request.text && /player.test(request.text)) {
    this.res.writeHead(200);
    //postMessage("http://www.daddyleagues.com/maddenrating?name=&position=all&team="+request.text.substring(5,8));
    postMessage("https://daddyleagues.com/iliminded/players);
    this.res.end();
  } 
  
  else if(request.text && botRegexOW.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.daddyleagues.com/maddenrating/");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1hSuEG7oplnx4IX6HGsMOjsWb9TCqC4-F1NLjuBz5PCM/edit");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    
    postMessage("http://daddyleagues.com/nml18/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/nml18/players?name="+rep+"&position=all&team=all");
    
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.reddit.com/r/TheNiceMaddenLeague/");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1zRLaUZ12vUOORFdNQbPCzJW5T0zFBrkth_osH9b7d34/edit?usp=drivesdk");
    this.res.end();
  } 
  else if(request.text && botRegexMason.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/845x1170.jpeg.002f5f8a4b6c4afbb858f474f99506ad");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexMA32.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/12hVrn7ShR3An6bP5uBF3gaoTQQgVciC-0RqtWVZ39Ls/edit?usp=sharing");
    this.res.end();
  }
  else if(request.text && botRegexTrade.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/forms/d/e/1FAIpQLSdrbe5iBRaBC7EWoodVm8z6285-dG2EdHXAOMOgz8md8T1jwQ/viewform");
    this.res.end();
  }
  
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;

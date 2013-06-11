//Requests from data from Twitter
var req1 = new XMLHttpRequest();
req1.open(													//Sync Request
    "GET",
    "https://api.twitter.com/1/trends/2357024.json",
    true);
req1.onreadystatechange  = onTrendData;						//Call fx
req1.send(null);											//Send Request

//Requests from data from Twitter
var req2 = new XMLHttpRequest();
req2.open(													//Sync Request
    "GET",
    "https://api.twitter.com/1/trends/23424900.json",
    true);
req2.onreadystatechange  = onTrendData;						//Call fx
req2.send(null);											//Send Request

//Requests from data from Twitter
var req3 = new XMLHttpRequest();
req3.open(													//Sync Request
    "GET",
    "https://api.twitter.com/1/trends/23424975.json",
    true);
req3.onreadystatechange  = onTrendData;						//Call fx
req3.send(null);											//Send Request

//Requests from data from Twitter
var req4 = new XMLHttpRequest();
req4.open(													//Sync Request
    "GET",
    "https://api.twitter.com/1/trends/23424775.json",
    true);
req4.onreadystatechange  = onTrendData;						//Call fx
req4.send(null);											//Send Request

//Requests from data from Twitter
var req5 = new XMLHttpRequest();
req5.open(													//Sync Request
    "GET",
    "https://api.twitter.com/1/trends/23424768.json",
    true);
req5.onreadystatechange  = onTrendData;						//Call fx
req5.send(null);											//Send Request


var data;

var stringArr= new Array();
var windows=new Array(); 
var index = new Array();
var i;

index[1]=0;
index[2]=0;
index[3]=0;
index[4]=0;
index[5]=0;


function onTrendData() {

	if(req1.readyState == 4 && index[1]==0) {
		data = JSON.parse(req1.responseText);
		index[1] = 1;
		for (var k = 0; k < 10; k++) {
           	stringArr[k]= data [0]["trends"][k]["name"];
			stringArr[k]=stringArr[k].replace(/#/gi,"");	
   		}
	} else if(req2.readyState == 4 && index[2]==0) {
		data = JSON.parse(req2.responseText);
		index[2] = 1;
		for (var k = 10; k < 20; k++) {
            stringArr[k]= data [0]["trends"][k-10]["name"];
			stringArr[k]=stringArr[k].replace(/#/gi,"");	
  		}
	} else if(req3.readyState == 4 && index[3]==0) {
		data = JSON.parse(req3.responseText);
		index[3] = 1;
		for (var k = 20; k < 30; k++) {
 			stringArr[k]= data [0]["trends"][k-20]["name"];
			stringArr[k]=stringArr[k].replace(/#/gi,"");	
  		}
	} else if(req4.readyState == 4 && index[4]==0) {
		data = JSON.parse(req4.responseText);
		index[4] = 1;
		for (var k = 30; k < 40; k++) {
   			stringArr[k]= data [0]["trends"][k-30]["name"];
			stringArr[k]=stringArr[k].replace(/#/gi,"");	
  		}
	} else if(req5.readyState == 4 && index[5]==0) {
		data = JSON.parse(req5.responseText);
		index[5] = 1;
		for (var k = 40; k < 50; k++) {
   			stringArr[k]= data [0]["trends"][k-40]["name"];
			stringArr[k]=stringArr[k].replace(/#/gi,"");	
   		}
	}

	if(index[1]==1 && index[2]==1 && index[3]==1 && index[4]==1 && index[5]==1){
			search();
			
			
		}
		
      	}

	function search(callback){		
		for (i = 0; i< 50; i++){
			chrome.tabs.create({url:'http://www.bing.com/search?q=' + stringArr[i]},function(tab){
																						windows[i] = tab.id; 
																						if (i==2){
																							callback();
																						}});
		}
	}

	

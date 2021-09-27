var url;
var fileid;
	
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		url = tabs[0].url;
		// use `url` here inside the callback because it's asynchronous!
		var parts = url.match(/\/d\/(.+)\//);
	if (parts == null || parts.length < 2) {
		fileid= url;
	} else {
		fileid = parts[1];
		console.log(fileid);
	}
});


		
chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(o) {
        if (o.from && o.from === 'popup') {
            chrome.tabs.executeScript(null, {
                code: "window.print();"
            });
        }
    });
});

let btn = document.querySelector('.switch');
let text = document.querySelector('#state')
let state = false
btn.addEventListener('click',()=>{
	if(!state){
		text.innerText = 'On'
		state = true
		
			// let init = {
			// 	method: 'GET',
			// 	async: true,
			// 	headers: {
			// 		Authorization: 'Bearer ' + token,
			// 		'Content-Type': 'application/json'
			// 	},
			// 	'contentType': 'json'
			// };
			// fetch(
			// 		'https://www.googleapis.com/drive/v2/files/'+fileid+'/comments?key=AIzaSyAKEG6a2HiQ3FDyVJonAK2nmamViZRaMQ4',
			// 		init)
			// 		.then((response) => response.json())
					//.then(function(data) {
					//	console.log(state)
			//console.log(data)

			let data2 = ['Northern part of america','not successful','year','Person Who starts it','one','one of the nick name of virginia','State','year','place','another name','removed'];

			chrome.tabs.query({active:true,currentWindow:true},function(tabs){
				chrome.tabs.sendMessage(tabs[0].id , {comments :data2  , active:state, filename:fileid})
					 })



				//});
;
	}
	else{
		text.innerText = 'Off'
		state = false
chrome.tabs.query({active:true,currentWindow:true},function(tabs){
	chrome.tabs.sendMessage(tabs[0].id , { active:state})
	 })}

})





/*
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  // Callback for that request
  sendResponse({ message: 'Background has received that message ?' });
});





chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    console.log("message received from content file");
    sendResponse();
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
  if (message === 'get-user-data') {
    sendResponse(user);
  }
});


chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(o) {
			console.log("received comment id"+o.commentid);
			console.log("received reply word"+o.replyword);
    });
});

chrome.tabs.query({active:true,currentWindow:true},function(tabs){
 port.onMessage.addListener(function(o) {
			console.log("received comment id"+o.commentid);
			console.log("received reply word"+o.replyword);
    });
		 })
	
var commentidreceive;
var replyword;
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	 commentidreceive = request.comment123;
	 replyword = request.reply_textbox;

	}
);


console.log("received comment id"+commentidreceive);
console.log("received reply word"+replyword);
 */


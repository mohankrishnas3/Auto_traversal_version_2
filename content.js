



let data;
var fileid1;
chrome.runtime.onMessage.addListener(
	function(request, sender,response){
		if(!request.active){
			console.log('Doc-mments Off')
			return null;
		}

		console.log(request.comments)
		data = request.comments;
		fileid1 = request.fileid;

if(request.comments)
{


								
	const comment_box = (word,comment)=>{
		
	const commentBox = document.createElement('div');

	//const commentHead = document.createElement('div');
	const commentBody = document.createElement('div');
	const commentData = document.createElement('div');
	//const commentAnchor = document.createElement('p');
	const commentreplyinput = document.createElement("input");
	const commentreplysubmit = document.createElement("button");

	commentreplyinput.placeholder = "Type your reply here..";
	commentreplysubmit.textContent = "Submit"

	const commentValue = document.createElement('p');
	commentBox.className = "comment-block";
	commentBody.className = "body";
	//commentHead.className = "head";
	commentData.className = "data";
	commentreplyinput.className = "replytextbox"
	commentreplysubmit.className = "replysubmitbutton"

	commentreplysubmit.setAttribute("id", "replysubmitbutton");
	commentBox.setAttribute("id", "comment-block");





	// commentBox.className = "comment-block1";
	// commentBody.className = "body1";
	// commentHead.className = "head1";
	// commentData.className = "data1";



	//commentAnchor.innerText = word;
	commentValue.innerText = comment;


	commentData.append(commentValue);
	commentBody.append(commentData);
	//commentBody.append(commentreplyinput);
	//commentBody.append(commentreplysubmit);
	//commentHead.append(commentAnchor);
	//commentBox.append(commentHead);
	commentBox.append(commentBody);


	return commentBox;
	}


	console.log("comments are");
	let comments_details = [];
	let comments_details_reverse = [];
	let comments_details_reverse_1 = [];
	let comments_details_reverse_2 = [];

	let comments_1 = document.querySelectorAll('[class="kix-commentoverlayrenderer-normal kix-htmloverlay docs-ui-unprintable kix-htmloverlay-under-text"]');
	comments_1;
	comments_1.forEach(i => {        
        //console.log(i);
        //console.log(i.parentNode);
		comments_details.push(i);
		let anchor_index = [];
		anchor_index.push(i);
		anchor_index.push(i.parentNode);		
		comments_details_reverse.push(anchor_index)
		//paragraph_element.left + window.scrollX, paragraph_element.top + window.scrollY);
	})

	console.log(comments_details);
	var im = 0;
	var im1;
	var current_im =0;
	while ( im < comments_details_reverse.length) 
	{	
		comments_details_reverse_1 = [];
		im1 =im;
		while ( im1 < comments_details_reverse.length) 
		{									
			if(comments_details_reverse[im1][1] == comments_details_reverse[im][1])
			{
				if (comments_details_reverse[im1][0] != undefined)
				{    
					comments_details_reverse_1.push(comments_details_reverse[im1][0]);    
				}
				current_im = im1;
			}
			im1 = im1 + 1;
		}


		if(comments_details_reverse_1.length > 1)
		{
			comments_details_reverse_1.reverse();
			for(var im2 = 0; im2 <=comments_details_reverse_1.length; im2++ )
			{
				if (comments_details_reverse_1[im2] != undefined)
				{    
					comments_details_reverse_2.push(comments_details_reverse_1[im2]);    
				}				
			}

		}
		else
		{
			if (comments_details_reverse[im][0] != undefined)
			{
			 	comments_details_reverse_2.push(comments_details_reverse[im][0]);
			}			
		}

		im = current_im +1;
	}
	comments_details = comments_details_reverse_2;
	console.log(comments_details);



	var current_anchor;
	var i= 0;
	var j = 0;
	document.addEventListener('keyup', (event) => {

		var name = event.key;
		var code_1 = event.code;
		if (name === 'Control') 
		{
			let boxes = document.querySelectorAll('.comment-block');
			for(let b of boxes)
			{
				if(document.body.hasChildNodes(b) )
				{
						document.body.removeChild(b)
				}
			}

			if (i >= comments_details.length)
			{		
				document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo(0, 0);		
				i = 0;
			}

			document.body.prepend(comment_box("",request.comments[i]))
			let box = document.querySelector('.comment-block');
			box.style.position = "absolute";
			box.style.left = comments_details[i].parentNode.getBoundingClientRect().x + parseInt(comments_details[i].style.left) + parseInt(comments_details[j].style.width)/2 - 78 +'px';
			box.style.top = comments_details[i].parentNode.getBoundingClientRect().y - 80 + 'px';
			//console.log("left co ordinates are "+ box.style.left +"top co ordinates are "+box.style.top);
			current_anchor = comments_details[i];
			j=i;

			
			var y = comments_details[i].parentNode.getBoundingClientRect().y;
			var x = parseInt(comments_details[i].style.left);
			var body_container = document.querySelector("#kix-appview > div.kix-appview-editor-container > div");
			//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x, top: y , behavior: 'smooth'});

			

			if(y > 300)
			{
				//y = y + 300;
				body_container.scrollBy(0,+20);
				//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y - 600  , behavior: 'smooth'});
				//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y - 600  , behavior: 'smooth'});
				document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollBy({  top: y+ 700 , behavior: 'smooth'});
			}

			if(y < 600)
			{
				//y = y + 300;
				body_container.scrollBy(0,+20);
				document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y - 100  , behavior: 'smooth'});
				document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y - 100 , behavior: 'smooth'});


				
			}


			if(x  > 500)
			{
				//y = y + 300;
				body_container.scrollBy(0,+20);
				document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x - 500 + 200 , behavior: 'smooth'});
				document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x - 500 + 200 , behavior: 'smooth'});
			
				
			}



			if(x  < 500)
			{
				//y = y + 300;
				body_container.scrollBy(0,+20);
				document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x -200  , behavior: 'smooth'});
				document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x -200 , behavior: 'smooth'});
			
				
			}
			


			i = i + 1;
		}

		

		if(name === 'Shift')
		{			
			let highlighter5553 = document.querySelectorAll('.comment-block');
			if(highlighter5553)
			{
				let box5553 = document.querySelectorAll('.comment-block');							
				for(let b of box5553)
				{
					if(document.body.hasChildNodes(b) )
					{
						document.body.removeChild(b)
					}
				}
			}			
		}



	})


	document.querySelector("#kix-appview > div.kix-appview-editor-container > div").addEventListener('scroll', function(e) {			
		var highlighter_001 = document.getElementById('docs-revisions-sidebar-title'); 
		if(!highlighter_001)
		{
			console.log("Its scrolling");
			let box = document.querySelector('.comment-block');
			box.style.position = "absolute";
			box.style.left = comments_details[j].parentNode.getBoundingClientRect().x + parseInt(comments_details[j].style.left) + parseInt(comments_details[j].style.width)/2 -78 +'px';
			box.style.top = comments_details[j].parentNode.getBoundingClientRect().y - 80 + 'px';
			console.log("co ordinates are left: "+box.style.left+", Top: "+box.style.top)
		}
	});



	var e1;
	var element_comment_lastedited;
	var chunked_lastedit123= [];
	var last_edited_details = "";

				var elem = document.getElementById('docs-notice');
				elem.addEventListener("click", () => {
					//alert("checked");
					console.log('checked');

					let highlighter5552 = document.querySelectorAll('.comment-block');
								

					if(highlighter5552)
					{
						let box5552 = document.querySelectorAll('.comment-block');
										
										
						for(let b of box5552)
						{
							if(document.body.hasChildNodes(b) )
							{
								document.body.removeChild(b)
							}
						}

					}

					var rowgroup = document.getElementById("docs-revisions-sidebar");
				    rowgroup.addEventListener("click", () => {
						//alert("again checked");
						console.log('again checked');



								var btns = document.querySelectorAll('[class="docs-revisions-tile"]');
								btns.forEach(i => {
								  i.addEventListener('click', function (event) {
										console.log(i.textContent);
										last_edited_details = i.ariaLabel;
									}, false);
								})


								let highlighter555 = document.querySelectorAll('.comment-block');
								

								if(highlighter555)
								{
										let box555 = document.querySelectorAll('.comment-block');
										
										
										for(let b of box555)
										{
											if(document.body.hasChildNodes(b) )
											{
													document.body.removeChild(b)
											}
										}

								}








							//var highlighter_007 = document.getElementById('docs-revisions-sidebar-title'); 
							//if(highlighter_007)
							//{
							    chunked_lastedit123= [];
							    var k1_lastedit ,i1_lastedit= 0;
							    var i2_lastedit , i9_lastedit ;
							    var paragraph_count_lastedit = document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(6) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div").childElementCount;
							    var parentnode_selector_lastedit = "#kix-appview > div.kix-appview-editor-container > div > div:nth-child(6) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div";
							    k1_lastedit = 0;
								var count1_lastedit = 0;
								var count2_lastedit = 0;
								var count3_lastedit = 0;
								var count4_lastedit = 0;
								var previous = "rgb(32, 33, 34)";
								var present = "";

								console.log("paragraph count "+ paragraph_count_lastedit);
								for ( i1_lastedit = 1; i1_lastedit <= paragraph_count_lastedit; i1_lastedit++)
								{
									var childnode_lastedit = " > div:nth-child("+i1_lastedit+")"
									var childnode_selector_lastedit = parentnode_selector_lastedit + childnode_lastedit;
									console.log("paragraph"+i1_lastedit);						
									var line_count_lastedit = document.querySelector(childnode_selector_lastedit).childElementCount;
									console.log("  number of lines "+ line_count_lastedit);							
									for(i2_lastedit = 1; i2_lastedit<= line_count_lastedit; i2_lastedit++)
									{				
											var line_childnode_lastedit = " > div:nth-child("+i2_lastedit+")";
											var line_childnode_selector_lastedit = childnode_selector_lastedit + line_childnode_lastedit;
											console.log("  line"+i2_lastedit);												
											var line_child_count_lastedit =  document.querySelector(line_childnode_selector_lastedit + " > div.kix-lineview-content > span:nth-child(2) > span").childElementCount;
											console.log("  js path for line"+ line_childnode_selector_lastedit + " > div.kix-lineview-content > span:nth-child(2) > span");
											console.log("    number of span elements "+ line_child_count_lastedit);
											for(i9_lastedit = 1; i9_lastedit<= line_child_count_lastedit; i9_lastedit++)
											{
												if(document.querySelector(line_childnode_selector_lastedit+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9_lastedit+")") == null)
												{
													var line_child_span_lastedit = document.querySelector(line_childnode_selector_lastedit+ " > div.kix-lineview-content > span:nth-child(2) > span > a:nth-child("+i9_lastedit+") > span");
													console.log("    anchor element span "+i9_lastedit);
													//console.log("	 element color is "+ line_child_span_lastedit.style.color);
													present = line_child_span_lastedit.style.color
													if(line_child_span_lastedit.style.color == "rgb(0, 121, 107)")
													{
														console.log("    changed element");
														
													}
													console.log("    present color "+ present);
													console.log("    previous color "+ previous); 
													if((previous == "rgb(32, 33, 34)" || previous == "rgb(6, 69, 173)"|| previous == "") && (present == "rgb(0, 121, 107)"))
													{
														console.log("first element changed");
														chunked_lastedit123.push(line_child_span_lastedit);
													}

												}
												else
												{
													var line_child_span_lastedit = document.querySelector(line_childnode_selector_lastedit+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9_lastedit+")");
													console.log("    span element "+i9_lastedit);
													//console.log("    element color is "+ line_child_span_lastedit.style.color);
													present = line_child_span_lastedit.style.color
													if(line_child_span_lastedit.style.color == "rgb(0, 121, 107)")
													{
														console.log("    changed element");
													}
													console.log("    present color "+ present);
													console.log("    previous color "+ previous);
													if((previous == "rgb(32, 33, 34)" || previous == "rgb(6, 69, 173)" || previous == "") && (present == "rgb(0, 121, 107)"))
													{
														console.log("first element changed");
														chunked_lastedit123.push(line_child_span_lastedit);
													}
												}
												var span_text = line_child_span_lastedit.textContent.replace(/[\u200B-\u200D\uFEFF]/g, '')
												console.log("    Text content is below");
												console.log("    "+span_text);
												previous = present;
													
											}																		
									}


								}

							//}





					});
						
						e1= 0;
						
						document.addEventListener('keydown', (event) => {
							var name = event.key;
							var code = event.code;
							if (e1 >= chunked_lastedit123.length)
							{
								document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo(0, 0);
								e1 = 0;
							 }	
							if (name === 'n') {


								let highlighter5551 = document.querySelectorAll('.comment-block');
								

								if(highlighter5551)
								{
										let box5551 = document.querySelectorAll('.comment-block');
										
										
										for(let b of box5551)
										{
											if(document.body.hasChildNodes(b) )
											{
													document.body.removeChild(b)
											}
										}

								}


								document.body.prepend(comment_box("",last_edited_details))
								let box_lastedit = document.querySelector('.comment-block');
			     		
								//box.style.transform = `translate(${chunked[i][0]}px,${chunked[i][1]}px)`
								//anchor_coord.push(anchor_index_list[k1][0], line_child_span.getBoundingClientRect().x -78 + line_offset, line_child_span.getBoundingClientRect().y - 90 +window.scrollY);//paragraph_element.left + window.scrollX, paragraph_element.top + window.scrollY);
								element_comment_lastedited = chunked_lastedit123[e1];
								box_lastedit.style.position = "absolute";
								box_lastedit.style.left = chunked_lastedit123[e1].getBoundingClientRect().x  -50 + 'px';
								box_lastedit.style.top = chunked_lastedit123[e1].getBoundingClientRect().y - 90 + 'px';
								console.log("you pressed n co ordinates are left: "+box_lastedit.style.left+", Top: "+box_lastedit.style.top)


								var y_last = chunked_lastedit123[e1].getBoundingClientRect().top;
								var x_last = chunked_lastedit123[e1].getBoundingClientRect().x;
								var body_container_last = document.querySelector("#kix-appview > div.kix-appview-editor-container > div");
								//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x, top: y , behavior: 'smooth'});

								if(y_last > 300)
								{
									//y = y + 300;
									body_container_last.scrollBy(0,+20);
									//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y - 600  , behavior: 'smooth'});
									//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y - 600  , behavior: 'smooth'});
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo(0, y_last - 350);
									console.log("y>350");
									//chunked_lastedit123[e1].scrollIntoView();

								}

								if(y_last < 300)
								{
									//y = y + 300;
									//body_container_last.scrollBy(0,+20);
									//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y_last -100 , behavior: 'smooth'});
									//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y_last -100 , behavior: 'smooth'});
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo(0, y_last - 250 );
									console.log("y<300");

									//chunked_lastedit123[e1].scrollIntoView();

									
								}


								if(x_last  > 500)
								{
									//y = y + 300;
									body_container_last.scrollBy(0,+20);
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x_last - 500 + 200 , behavior: 'smooth'});
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x_last - 500 + 200 , behavior: 'smooth'});
									console.log("x > 500");
									
								}



								if(x_last  < 500)
								{
									//y = y + 300;
									body_container_last.scrollBy(0,+20);
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x_last -200  , behavior: 'smooth'});
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x_last -200 , behavior: 'smooth'});
									console.log("x < 500");
									
								}
								




								console.log("you pressed n");
								
								e1 = e1 + 1;

							}
							if (event.ctrlKey) {
								//alert(`Combination of ctrlKey + ${name} \n Key code Value: ${code}`);
								return;
							} else {
								//alert(`Key pressed ${name} \n Key code Value: ${code}`);
								return;
							}








						}, false);




								document.querySelector("#kix-appview > div.kix-appview-editor-container > div").addEventListener('scroll', function(e) {
			                
											//var highlighter_001 = document.getElementById('docs-docos-commentsbutton');
											var highlighter_006 = document.getElementById('docs-revisions-sidebar-title'); 
											if(highlighter_006)
											{
												console.log("Its scrolling");
												let box_lastedit_scrolling = document.querySelector('.comment-block');
										  		box_lastedit_scrolling.style.position = "absolute";
												box_lastedit_scrolling.style.left = element_comment_lastedited.getBoundingClientRect().x -50 + 'px';
												box_lastedit_scrolling.style.top = element_comment_lastedited.getBoundingClientRect().y - 90 + 'px';
												console.log("co ordinates are left: "+box_lastedit_scrolling.style.left+", Top: "+box_lastedit_scrolling.style.top)
											}


									});



							});
				  





/*	var chunked_lastedit123= [];
	var k1_lastedit ,i1_lastedit= 0;
	var i2_lastedit , i9_lastedit ;
	var paragraph_count_lastedit = document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div").childElementCount;
	var parentnode_selector_lastedit = "#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div";
	k1_lastedit = 0;
	var count1_lastedit = 0;
	var count2_lastedit = 0;
	var count3_lastedit = 0;
	var count4_lastedit = 0;
	var previous = "rgb(32, 33, 34)";
	var present = "";

	console.log("paragraph count "+ paragraph_count_lastedit);
	for ( i1_lastedit = 1; i1_lastedit <= paragraph_count_lastedit; i1_lastedit++)
	{
		var childnode_lastedit = " > div:nth-child("+i1_lastedit+")"
		var childnode_selector_lastedit = parentnode_selector_lastedit + childnode_lastedit;
		console.log("paragraph"+i1_lastedit);						
		var line_count_lastedit = document.querySelector(childnode_selector_lastedit).childElementCount;
		//console.log("  number of lines "+ line_count_lastedit);							
		for(i2_lastedit = 1; i2_lastedit<= line_count_lastedit; i2_lastedit++)
		{				
				var line_childnode_lastedit = " > div:nth-child("+i2_lastedit+")";
				var line_childnode_selector_lastedit = childnode_selector_lastedit + line_childnode_lastedit;
				console.log("  line"+i2_lastedit);												
				var line_child_count_lastedit =  document.querySelector(line_childnode_selector_lastedit + " > div.kix-lineview-content > span:nth-child(2) > span").childElementCount;
				//console.log("  js path for line"+ line_childnode_selector_lastedit + " > div.kix-lineview-content > span:nth-child(2) > span");
				//console.log("    number of span elements "+ line_child_count_lastedit);
				for(i9_lastedit = 1; i9_lastedit<= line_child_count_lastedit; i9_lastedit++)
				{
					if(document.querySelector(line_childnode_selector_lastedit+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9_lastedit+")") == null)
					{
						var line_child_span_lastedit = document.querySelector(line_childnode_selector_lastedit+ " > div.kix-lineview-content > span:nth-child(2) > span > a:nth-child("+i9_lastedit+") > span");
						console.log("    "+line_child_span_lastedit.textContent);
						//console.log("	 element color is "+ line_child_span_lastedit.style.color);
						present = line_child_span_lastedit.style.color
						if(line_child_span_lastedit.style.color == "rgb(0, 121, 107)")
						{
							console.log("    changed element");
							
						}
						//console.log("    present color "+ present);
						//console.log("    previous color "+ previous); 
						if((previous == "rgb(32, 33, 34)" || previous == "rgb(6, 69, 173)"|| previous == "") && (present == "rgb(0, 121, 107)"))
						{
							//console.log("first element changed");
							chunked_lastedit123.push(line_child_span_lastedit);
						}

					}
					else
					{
						var line_child_span_lastedit = document.querySelector(line_childnode_selector_lastedit+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9_lastedit+")");
						console.log("    "+line_child_span_lastedit.textContent);
						//console.log("    span element "+i9_lastedit);
						//console.log("    element color is "+ line_child_span_lastedit.style.color);
						present = line_child_span_lastedit.style.color
						if(line_child_span_lastedit.style.color == "rgb(0, 121, 107)")
						{
							console.log("    changed element");
						}
						//console.log("    present color "+ present);
						//console.log("    previous color "+ previous);
						if((previous == "rgb(32, 33, 34)" || previous == "rgb(6, 69, 173)" || previous == "") && (present == "rgb(0, 121, 107)"))
						{
						//	console.log("first element changed");
							chunked_lastedit123.push(line_child_span_lastedit);
						}
					}
					//var span_text = line_child_span_lastedit.textContent.replace(/[\u200B-\u200D\uFEFF]/g, '')
					//console.log("    Text content is below");
					//console.log("    "+span_text);
					previous = present;
						
				}																		
		}


	}*/

}


})
﻿var toolDiv=$("#toolwrap"),workexDiv=$("#workexcertwrap"),acadDiv=$("#acadwrap"),typeWriterIntroDiv=$("#typeWriterIntro"),introDivCounter=0,introWordCounter=0,introWordSpeed=500,introWordText="",introDivText=["Hello!","Namaste!","Hola!","Howdy!","Guten Tag!","Bonjour!","Olà!","Merhaba!","Ciao!"];function type(){introWordCounter<introWordText.length&&(document.getElementById("typeWriterIntro").innerHTML+=introWordText.charAt(introWordCounter),introWordCounter++,setTimeout(type,introWordSpeed))}function typeWriter(){introWordCounter=0,introWordText=introDivText[introDivCounter],document.getElementById("typeWriterIntro").innerHTML="",type(),introDivCounter<introDivText.length-1?introDivCounter++:introDivCounter=0}function createSkillBar(){$(".skill-bar").each(function(){var e=$(this).find(".skill-percent");e.css("width","0%"),e.html("");var t=$(this).attr("data-percent");e.animate({width:t},750,function(){var r="<span style='color:#50433B; font-size:110%; font-weight: bold;'>"+t+"</span>";e.html(r)})})}function updateProgressBar(){var e=document.body.clientHeight-screen.height,t=document.scrollingElement.scrollTop,r=t>=e?"100%":t/e*100+"%";$(".navbar-progressbar").css("width",r)}function fillIntroBar(){var e=$(".border-bar.up"),t=$(".border-bar.bottom");e.css("background-color","#50433B"),t.css("background-color","#50433B"),e.css("width","0%"),t.css("width","0%"),e.css("width","100%"),t.css("width","100%")}function clearIntroBar(){var e=$(".border-bar.up"),t=$(".border-bar.bottom");e.css("width","100%"),t.css("width","100%"),e.css("width","0%"),t.css("width","0%"),e.css("background-color","transparent"),t.css("background-color","transparent")}function apparatingLetters(){var e=$(".apparateLetters");e.removeClass("invisible");for(var t=0;t<e.length;t++){for(var r=e[t],n=r.innerText,o="",a=0;a<n.length;a++)" "==n[a]?o+=n[a]:o+="<span>"+n[a]+"</span>";r.innerHTML=o}}function reanimateApparition(){var e=$(".apparateLetters");e.removeClass("apparateLetters").fadeOut(500,function(){e.fadeIn(500).addClass("apparateLetters")})}function slideUp(e){headerDivObjects=e.find(".header-text"),buttonObjects=e.find(".btn-tabs"),0==headerDivObjects.hasClass("slideUp")&&headerDivObjects.addClass("slideUp"),0==buttonObjects.hasClass("slideUp")&&buttonObjects.addClass("slideUp")}function checkNullUndefinedOrEmpty(e){return null==e||null==e||""==e}function moveToElement(e){var t="#"+e,r=$(t).offset(),n=$(".navbar").css("height");switch(r=r.top-parseFloat(n.substring(0,n.lastIndexOf("px")))+1,$("html, body").animate({scrollTop:r},1e3),$("#navbarSupportedContent").children().find(".active").removeClass("active"),$(t).addClass("active"),t){case"#tooltech":createSkillBar();break;case"#home":reanimateApparition();break;case"#workexcert":slideUp(workexDiv);break;case"#acadProjects":slideUp(workexDiv),slideUp(acadDiv)}return!1}function initMap(){var e={lat:32.985625,lng:-96.750838},t=new google.maps.Map(document.getElementById("map-grad"),{zoom:12,center:e}),r=(new google.maps.Marker({position:e,animation:google.maps.Animation.DROP,map:t}),{lat:23.129832,lng:72.541336}),n=new google.maps.Map(document.getElementById("map-ugrad"),{zoom:15,center:r});new google.maps.Marker({position:r,animation:google.maps.Animation.DROP,map:n})}function mobilecheck(){return window.innerWidth<=800&&window.innerHeight<=600}function checkReturnToTop(){document.scrollingElement.scrollTop>100?"hidden"==$("#move-top").css("visibility")&&$("#move-top").css("visibility","visible"):"visible"==$("#move-top").css("visibility")&&$("#move-top").css("visibility","hidden")}function isNavBarOpen(){var e=$(event.target);!0!==$(".navbar-collapse").hasClass("show")||e.hasClass("navbar-toggle")||$("#navMenuToggleIcon").click()}$(document).ready(function(){$(".loader").fadeOut(800,function(){apparatingLetters(),createSkillBar(),checkReturnToTop(),typeWriter(),updateProgressBar(),fillIntroBar()})}),toolDiv.mouseenter(function(){createSkillBar()}),workexDiv.mouseenter(function(){slideUp(workexDiv)}),acadDiv.mouseenter(function(){slideUp(acadDiv)}),$(".intro").mouseenter(function(){reanimateApparition(),clearIntroBar()}),$(".intro").mouseleave(function(){fillIntroBar()}),document.addEventListener("scroll",function(){checkReturnToTop(),isNavBarOpen(),updateProgressBar()}),document.addEventListener("click",function(){isNavBarOpen()}),setInterval(typeWriter,6e3);
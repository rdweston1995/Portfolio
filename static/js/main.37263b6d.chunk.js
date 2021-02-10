(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,function(e){e.exports=JSON.parse('{"text":"I\u2019m a full stack web developer based in Seattle working as a freelance web developer for the past year. I\u2019ve been primarily working with JavaScript and React to build response and dynamic front ends. Using node with express to build the backend. The more I learn of React the more that I love working with it. I\u2019m eager to start learning other stacks and technologies to further expand my skill set. I work well solo or in a team environment with a preference on team. Getting to bounce ideas off other developers to build a better product or to help when stuck I\u2019ve always found to be a better way to complete the task at hand. I\u2019m interested in a career in Web Development or Software Development.","linkedin":"https://www.linkedin.com/in/robertdweston/","github":"https://github.com/rdweston1995","email":"robert.d.weston@gmail.com"}')},,,function(e,t,a){},,,function(e){e.exports=JSON.parse('[{"skill":"HTML","detail":"This is what I know about HTML"},{"skill":"CSS","detail":"CSS"},{"skill":"JavaScript","detail":"JavaScript"},{"skill":"Java","detail":"Java"},{"skill":"Python","detail":"Python"},{"skill":"SQL","detail":"SQL"},{"skill":"MySQL","detail":"MySQL"},{"skill":"MongoDB","detail":"MongoDB"},{"skill":"DynamoDB","detail":"DynamoDB"},{"skill":"Git/Github","detail":"Git/Github"},{"skill":"Node","detail":"Node"},{"skill":"REST API\'s","detail":"REST API\'s"},{"skill":"aJax","detail":"aJax"},{"skill":"jQuery","detail":"jQuery"},{"skill":"React","detail":"React"}]')},function(e,t,a){t.karaoke=a(29),t.hikingApp=a(30)},function(e){e.exports=JSON.parse('[{"title":"Just Duet","website":"https://gentle-brook-97291.herokuapp.com/","text":"Just Duet is a karaoke app for a user who doesn\'t know what song they want to sing. Or that wants to look up the lyrics of a song. Using Spotify API and MusixMatch API to gather song and lyrics data for the user.","image":"karaoke","github":"https://github.com/rdweston1995/JustDuet","key":1},{"title":"Bearable","website":"https://rdweston1995.github.io/HikingApp/","text":"Bearable is a hike search app for a user that is looking for new hikes in their specified search area. The user can choose if they want to specify the search further with distance from search area, length of hike, and the user rating of the hike. Using the Hiking Project API paired with the Google Geolocation API for converting the users search to coordinates.","image":"hikingApp","github":"https://github.com/rdweston1995/HikingApp","key":2}]')},function(e){e.exports=JSON.parse('[{"company":"Eat Drink Home","title":"Software Developer","summary":"Developing and automating backend microservices. Developing a RESTful API to parse addresses pulled from a AWS Database to fit into the USPS standard form. Debugging live software systems with Mocha and Chai. Using AWS Lambda to host microservices","start":"October 2019","end":"October 2020","key":1}]')},function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/karaoke.34a50d35.jpg"},function(e,t,a){e.exports=a.p+"static/media/hikingApp.e66bf7f3.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(15),l=a.n(s),r=(a(14),a(5)),o=a(6),c=a(10),m=a(9),u=a(3),p=a(4),d=(a(26),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(u.a,{className:"homePage"},i.a.createElement(p.a,{className:"homePageCol"},i.a.createElement("h1",{id:"homePageName",className:"text"},"Robert Weston"),i.a.createElement("h2",{id:"homePageTitle",className:"text"},"Full Stack Software Developer")))}}]),a}(n.Component)),h=a(17),k=a(11);a(27);var b=function(e){return i.a.createElement("h2",{id:e.id,className:"subHeading"},e.heading)},f=(a(28),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={languages:["HTML","CSS","JavaScript","Java","Python","SQL"],databases:["MySQL","MongoDB","DynamoDB"],tools:["Git/Github","Version Control","Node","REST API's","aJax","jQuery","React"],displayedSkill:""},e.skillOnClick=function(t,a){var n=h.filter((function(e){return e.skill===a}));e.setState((function(e){return{displayedSkill:n[0].detail}}))},e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"aboutMe"},i.a.createElement(b,{id:"aboutMeHeading",className:"text",heading:"About Me"}),i.a.createElement(u.a,{className:"aboutMeRow"},i.a.createElement("div",{className:"aboutMeDiv"},i.a.createElement(u.a,null,i.a.createElement("p",{className:"aboutMeText text",id:"aboutMeId","data-toggle":"tooltip","data-placement":"top",title:"tooltip on top"},k.text)),i.a.createElement(u.a,null,i.a.createElement(p.a,{className:"socialsCol"},i.a.createElement("a",{className:"socials text",href:k.linkedin},"Linkedin")),i.a.createElement(p.a,{className:"socialsCol"},i.a.createElement("a",{className:"socials text",href:k.github},"Github - rdweston1995")),i.a.createElement(p.a,{className:"socialsCol"},i.a.createElement("p",{className:"socials text"},k.email))))),i.a.createElement(u.a,{className:"skillsRow"},i.a.createElement("div",{className:"skillsDiv"},i.a.createElement("h3",{className:"skillsTitle text"},"Skills"),i.a.createElement(u.a,null,i.a.createElement(p.a,{className:"skillsCol"},i.a.createElement("h4",{className:"skillsSubTitle text"},"Languages"),i.a.createElement("div",{className:"languagesList"},this.state.languages.map((function(e,t){return i.a.createElement("p",{className:"text skillListItem",key:t},e)})))),i.a.createElement(p.a,{className:"skillsCol"},i.a.createElement("h4",{className:"skillsSubTitle text"},"Databases"),i.a.createElement("div",{className:"databasesList"},this.state.databases.map((function(e,t){return i.a.createElement("p",{className:"text skillListItem",key:t},e)})))),i.a.createElement(p.a,{className:"skillsCol"},i.a.createElement("h4",{className:"skillsSubTitle text"},"Tools"),i.a.createElement("div",{className:"toolsList"},this.state.tools.map((function(e,t){return i.a.createElement("p",{className:"text skillListItem",key:t},e)}))))))))}}]),a}(n.Component)),g=a(12),E=a(18),w=a.n(E);a(31);var y=function(e){return i.a.createElement(g.a,{id:"projectCard"},i.a.createElement("h2",{className:"projectTitle text font"},e.title),i.a.createElement("img",{className:"websiteImage",src:w.a[e.image],alt:"project example"}),i.a.createElement("p",{className:"projectText text font"},e.text),i.a.createElement("div",{className:"projectBtnDiv"},i.a.createElement("form",{action:e.website,target:"_blank"},i.a.createElement("button",{id:"projectWebsite",className:"projectBtn text font",href:e.website,target:"_blank"},"Website")),i.a.createElement("form",{action:e.github,target:"_blank"},i.a.createElement("button",{id:"projectWebsite",className:"projectBtn text font",href:e.github,target:"_blank"},"Github"))))},N=a(19),v=(a(32),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"projects"},i.a.createElement(u.a,{className:"projectsRow"},i.a.createElement(b,{id:"projectsHeading",heading:"Projects"}),i.a.createElement(p.a,{className:"projectsCol"},N.map((function(e,t){return i.a.createElement(y,{className:"projectCard btn-secondary",title:e.title,text:e.text,website:e.website,github:e.github,image:e.image,key:e.key})})))))}}]),a}(n.Component));a(33);var x=function(e){return i.a.createElement(g.a,{id:"workExpCard"},i.a.createElement("h2",{id:"workExpCompany",className:"text"},e.companyName),i.a.createElement("h3",{id:"workExpTitle",className:"text"},e.jobTitle),i.a.createElement("p",{id:"workExpDuration",className:"text"},e.start,"  -  ",e.end),i.a.createElement("p",{id:"workExpSummary",className:"text"},e.summary))},j=a(20),S=(a(34),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"workExperience"},i.a.createElement(u.a,{id:"workExperienceRow"},i.a.createElement(b,{id:"workExperienceHeading",heading:"Work Experience"}),j.map((function(e,t){return i.a.createElement(x,{companyName:e.company,jobTitle:e.title,summary:e.summary,start:e.start,end:e.end,key:e.key})}))))}}]),a}(i.a.Component)),O=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(d,null),i.a.createElement(f,null),i.a.createElement(S,null),i.a.createElement(v,null))}}]),a}(i.a.Component);l.a.render(i.a.createElement(O,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.37263b6d.chunk.js.map
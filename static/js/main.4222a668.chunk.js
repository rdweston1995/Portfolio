(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,t,a){},24:function(e){e.exports=JSON.parse('[{"skill":"HTML","detail":"This is what I know about HTML"},{"skill":"CSS","detail":"CSS"},{"skill":"JavaScript","detail":"JavaScript"},{"skill":"Java","detail":"Java"},{"skill":"Python","detail":"Python"},{"skill":"SQL","detail":"SQL"},{"skill":"MySQL","detail":"MySQL"},{"skill":"MongoDB","detail":"MongoDB"},{"skill":"DynamoDB","detail":"DynamoDB"},{"skill":"Git/Github","detail":"Git/Github"},{"skill":"Node","detail":"Node"},{"skill":"REST API\'s","detail":"REST API\'s"},{"skill":"aJax","detail":"aJax"},{"skill":"jQuery","detail":"jQuery"},{"skill":"React","detail":"React"}]')},25:function(e){e.exports=JSON.parse('{"text":"I\u2019m a full stack web developer based in Seattle working as a freelance web developer for the past year. I\u2019ve been primarily working with JavaScript and React to build response and dynamic front ends. Using node with express to build the backend. The more I learn of React the more that I love working with it. I\u2019m eager to start learning other stacks and technologies to further expand my skill set. I work well solo or in a team environment with a preference on team. Getting to bounce ideas off other developers to build a better product or to help when stuck I\u2019ve always found to be a better way to complete the task at hand. I\u2019m interested in a career in Web Development or Software Development."}')},26:function(e){e.exports=JSON.parse('[{"title":"Just Duet","website":"https://gentle-brook-97291.herokuapp.com/","text":"Just Duet is a karaoke app for a user who doesn\'t know what song they want to sing. Or that wants to look up the lyrics of a song. Using Spotify API and MusixMatch API to gather song and lyrics data for the user.","image":"https://i.imgur.com/2BVW0Af.jpg","github":"https://github.com/rdweston1995/JustDuet","key":1},{"title":"Hiking App","website":"","text":"Hiking App is a hike search app for a user that is looking for new hikes in their specified search area. The user can choose if they want to specify the search further with distance from search area, length of hike, and the user rating of the hike. Using the Hiking Project API paired with the Google Geolocation API for converting the users search to coordinates.","image":"","github":"https://github.com/rdweston1995/HikingApp","key":2}]')},27:function(e){e.exports=JSON.parse('[{"company":"Eat Drink Home","title":"Software Developer","summary":"Developing and automating backend microservices. Developing a RESTful API to parse addresses pulled from a AWS Database to fit into the USPS standard form. Debugging live software systems with Mocha and Chai. Using AWS Lambda to host microservices","start":"October 2019","end":"","key":1}]')},28:function(e,t,a){e.exports=a(45)},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),l=a.n(i),o=(a(18),a(5)),s=a(6),c=a(8),m=a(7),u=a(9),p=a(10),d=a(47),h=(a(33),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={redirect:!1},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return r.a.createElement(d.a,{to:"/aboutMe"})},e.onClickChangePage=function(){},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{className:"homePage"},r.a.createElement(p.a,{className:"homePageCol"},r.a.createElement("h1",{id:"homePageName"},"Robert Weston"),r.a.createElement("h2",{id:"homePageTitle"},"Full Stack Web Developer")))}}]),a}(n.Component));var k=function(e){return r.a.createElement("li",{className:"skillListItem",value:e.skill,onClick:e.onClick},e.skill)},f=a(24),b=a(25);a(39);var g=function(e){return r.a.createElement("h2",{id:e.id,className:"subHeading"},e.heading)},E=(a(40),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={languages:["HTML","CSS","JavaScript","Java","Python","SQL"],databases:["MySQL","MongoDB","DynamoDB"],tools:["Git/Github","Node","REST API's","aJax","jQuery","React"],displayedSkill:""},e.skillOnClick=function(t,a){var n=f.filter((function(e){return e.skill===a}));e.setState((function(e){return{displayedSkill:n[0].detail}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"aboutMe"},r.a.createElement(u.a,{className:"aboutMeRow"},r.a.createElement(g,{id:"aboutMeHeading",heading:"About Me"}),r.a.createElement("div",{className:"aboutMeDiv"},r.a.createElement("img",{className:"profilePicture",src:"https://i.imgur.com/CbfJJZL.jpg",alt:"The man the myth the legend"}),r.a.createElement("p",{className:"aboutMeText",id:"aboutMeId","data-toggle":"tooltip","data-placement":"top",title:"tooltip on top"},b.text))),r.a.createElement(u.a,{className:"skillsRow"},r.a.createElement("h3",{className:"skillsTitle"},"Skills"),r.a.createElement(p.a,{className:"skillsCol"},r.a.createElement("h4",{className:"skillsSubTitle"},"Languages"),r.a.createElement("ul",{className:"languagesList"},this.state.languages.map((function(t,a){return r.a.createElement(k,{skill:t,key:a,onClick:function(a){return e.skillOnClick(a,t)}})})))),r.a.createElement(p.a,{className:"skillsCol"},r.a.createElement("h4",{className:"skillsSubTitle"},"Databases"),r.a.createElement("ul",{className:"databasesList"},this.state.databases.map((function(t,a){return r.a.createElement(k,{skill:t,key:a,onClick:function(a){return e.skillOnClick(a,t)}})})))),r.a.createElement(p.a,{className:"skillsCol"},r.a.createElement("h4",{className:"skillsSubTitle"},"Tools"),r.a.createElement("ul",{className:"toolsList"},this.state.tools.map((function(t,a){return r.a.createElement(k,{skill:t,key:a,onClick:function(a){return e.skillOnClick(a,t)}})}))))))}}]),a}(n.Component)),y=a(12),v=a(15);a(41);var w=function(e){return r.a.createElement(y.a,{id:"projectCard"},r.a.createElement("h2",{className:"projectTitle"},e.title),r.a.createElement("img",{className:"websiteImage",src:e.image,alt:"project example"}),r.a.createElement("p",{className:"projectText"},e.text),r.a.createElement("div",{className:"projectBtnDiv"},r.a.createElement(v.a,{id:"projectWebsite",className:"projectBtn",href:e.website,target:"_blank"},"Website"),r.a.createElement(v.a,{id:"projectGithub",className:"projectBtn",href:e.github,target:"_blank"},"Github")))},j=a(26),N=(a(42),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"projects"},r.a.createElement(u.a,{className:"projectsRow"},r.a.createElement(g,{id:"projectsHeading",heading:"Projects"}),r.a.createElement(p.a,{className:"projectsCol"},j.map((function(e,t){return r.a.createElement(w,{className:"projectCard btn-secondary",title:e.title,text:e.text,website:e.website,github:e.github,image:e.image,key:e.key})})))))}}]),a}(n.Component));a(43);var S=function(e){return r.a.createElement(y.a,{id:"workExpCard"},r.a.createElement("h2",{id:"workExpCompany"},e.companyName),r.a.createElement("h3",{id:"workExpTitle"},e.jobTitle),r.a.createElement("p",{id:"workExpDuration"},e.start,"  -  ",e.end),r.a.createElement("p",{id:"workExpSummary"},e.summary))},x=a(27),C=(a(44),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"workExperience"},r.a.createElement(u.a,{id:"workExperienceRow"},r.a.createElement(g,{id:"workExperienceHeading",heading:"Work Experience"}),x.map((function(e,t){return r.a.createElement(S,{companyName:e.company,jobTitle:e.title,summary:e.summary,start:e.start,end:e.end,key:e.key})}))))}}]),a}(r.a.Component)),O=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(h,null),r.a.createElement(E,null),r.a.createElement(C,null),r.a.createElement(N,null))}}]),a}(r.a.Component);l.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.4222a668.chunk.js.map
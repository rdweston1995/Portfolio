(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,,function(e){e.exports=JSON.parse('[{"skill":"HTML","detail":"This is what I know about HTML"},{"skill":"CSS","detail":"CSS"},{"skill":"JavaScript","detail":"JavaScript"},{"skill":"Java","detail":"Java"},{"skill":"Python","detail":"Python"},{"skill":"SQL","detail":"SQL"},{"skill":"MySQL","detail":"MySQL"},{"skill":"MongoDB","detail":"MongoDB"},{"skill":"DynamoDB","detail":"DynamoDB"},{"skill":"Git/Github","detail":"Git/Github"},{"skill":"Node","detail":"Node"},{"skill":"REST API\'s","detail":"REST API\'s"},{"skill":"aJax","detail":"aJax"},{"skill":"jQuery","detail":"jQuery"},{"skill":"React","detail":"React"}]')},function(e){e.exports=JSON.parse('{"text":"I\u2019m a full stack web developer based in Seattle working as a freelance web developer for the past year. I\u2019ve been primarily working with JavaScript and React to build response and dynamic front ends. Using node with express to build the backend. The more I learn of React the more that I love working with it. I\u2019m eager to start learning other stacks and technologies to further expand my skill set. I work well solo or in a team environment with a preference on team. Getting to bounce ideas off other developers to build a better product or to help when stuck I\u2019ve always found to be a better way to complete the task at hand. I\u2019m interested in a career in Web Development or Software Development."}')},function(e){e.exports=JSON.parse('[{"title":"Just Duet","website":"https://gentle-brook-97291.herokuapp.com/","text":"Just Duet is a karaoke app for a user who doesn\'t know what song they want to sing. Or that wants to look up the lyrics of a song. Using Spotify API and MusixMatch API to gather song and lyrics data for the user.","image":"https://i.imgur.com/2BVW0Af.jpg","github":"https://github.com/rdweston1995/JustDuet","key":1},{"title":"Hiking App","website":"","text":"Hiking App is a hike search app for a user that is looking for new hikes in their specified search area. The user can choose if they want to specify the search further with distance from search area, length of hike, and the user rating of the hike. Using the Hiking Project API paired with the Google Geolocation API for converting the users search to coordinates.","image":"","github":"https://github.com/rdweston1995/HikingApp","key":2}]')},function(e){e.exports=JSON.parse('[{"company":"Eat Drink Home","title":"Software Developer","summary":"Developing and automating backend microservices. Developing a RESTful API to parse addresses pulled from a AWS Database to fit into the USPS standard form. Debugging live software systems with Mocha and Chai. Using AWS Lambda to host microservices","start":"October 2019","end":"","key":1}]')},function(e,t,a){e.exports=a(33)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),s=a.n(i),l=(a(14),a(5)),o=a(6),c=a(8),m=a(7),u=a(9),p=a(10),d=(a(26),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{className:"homePage"},r.a.createElement(p.a,{className:"homePageCol"},r.a.createElement("h1",{id:"homePageName",className:"text"},"Robert Weston"),r.a.createElement("h2",{id:"homePageTitle",className:"text"},"Full Stack Software Developer")))}}]),a}(n.Component));var h=a(17),k=a(18);a(27);var b=function(e){return r.a.createElement("h2",{id:e.id,className:"subHeading"},e.heading)},f=(a(28),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={languages:["HTML","CSS","JavaScript","Java","Python","SQL"],databases:["MySQL","MongoDB","DynamoDB"],tools:["Git/Github","Version Control","Node","REST API's","aJax","jQuery","React"],displayedSkill:""},e.skillOnClick=function(t,a){var n=h.filter((function(e){return e.skill===a}));e.setState((function(e){return{displayedSkill:n[0].detail}}))},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"aboutMe"},r.a.createElement(u.a,{className:"aboutMeRow"},r.a.createElement(b,{id:"aboutMeHeading",className:"text",heading:"About Me"}),r.a.createElement("div",{className:"aboutMeDiv"},r.a.createElement("img",{className:"profilePicture",src:"https://i.imgur.com/CbfJJZL.jpg",alt:"The man the myth the legend"}),r.a.createElement("p",{className:"aboutMeText text",id:"aboutMeId","data-toggle":"tooltip","data-placement":"top",title:"tooltip on top"},k.text))),r.a.createElement(u.a,{className:"skillsRow"},r.a.createElement("h3",{className:"skillsTitle text"},"Skills"),r.a.createElement(p.a,{className:"skillsCol"},r.a.createElement("h4",{className:"skillsSubTitle text"},"Languages"),r.a.createElement("div",{className:"languagesList"},this.state.languages.map((function(e,t){return r.a.createElement("p",{className:"text skillListItem",key:t},e)})))),r.a.createElement(p.a,{className:"skillsCol"},r.a.createElement("h4",{className:"skillsSubTitle text"},"Databases"),r.a.createElement("div",{className:"databasesList"},this.state.databases.map((function(e,t){return r.a.createElement("p",{className:"text skillListItem",key:t},e)})))),r.a.createElement(p.a,{className:"skillsCol"},r.a.createElement("h4",{className:"skillsSubTitle text"},"Tools"),r.a.createElement("div",{className:"toolsList"},this.state.tools.map((function(e,t){return r.a.createElement("p",{className:"text skillListItem",key:t},e)}))))))}}]),a}(n.Component)),g=a(11),E=a(12);a(29);var y=function(e){return r.a.createElement(g.a,{id:"projectCard"},r.a.createElement("h2",{className:"projectTitle text"},e.title),r.a.createElement("img",{className:"websiteImage",src:e.image,alt:"project example"}),r.a.createElement("p",{className:"projectText text"},e.text),r.a.createElement("div",{className:"projectBtnDiv"},r.a.createElement(E.a,{id:"projectWebsite",className:"projectBtn text",href:e.website,target:"_blank"},"Website"),r.a.createElement(E.a,{id:"projectGithub",className:"projectBtn text",href:e.github,target:"_blank"},"Github")))},v=a(19),w=(a(30),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"projects"},r.a.createElement(u.a,{className:"projectsRow"},r.a.createElement(b,{id:"projectsHeading",heading:"Projects"}),r.a.createElement(p.a,{className:"projectsCol"},v.map((function(e,t){return r.a.createElement(y,{className:"projectCard btn-secondary",title:e.title,text:e.text,website:e.website,github:e.github,image:e.image,key:e.key})})))))}}]),a}(n.Component));a(31);var N=function(e){return r.a.createElement(g.a,{id:"workExpCard"},r.a.createElement("h2",{id:"workExpCompany",className:"text"},e.companyName),r.a.createElement("h3",{id:"workExpTitle",className:"text"},e.jobTitle),r.a.createElement("p",{id:"workExpDuration",className:"text"},e.start,"  -  ",e.end),r.a.createElement("p",{id:"workExpSummary",className:"text"},e.summary))},x=a(20),j=(a(32),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"workExperience"},r.a.createElement(u.a,{id:"workExperienceRow"},r.a.createElement(b,{id:"workExperienceHeading",heading:"Work Experience"}),x.map((function(e,t){return r.a.createElement(N,{companyName:e.company,jobTitle:e.title,summary:e.summary,start:e.start,end:e.end,key:e.key})}))))}}]),a}(r.a.Component)),S=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(d,null),r.a.createElement(f,null),r.a.createElement(j,null),r.a.createElement(w,null))}}]),a}(r.a.Component);s.a.render(r.a.createElement(S,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.ccc2095e.chunk.js.map
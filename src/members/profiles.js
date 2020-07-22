var people = [{


    name:"James",
    role:"Builder, coder",
    yearsInFirst:3,
    personalAttributes:{
        "Age": "14",
        "Grade": "8th",
        "Favorite food": "Korean BBQ"
        },
    bio:"James has done FLL for two years on team 32221 Thunder Chickens as a programmer and builder, the team went to LA regionals twice and won a programming award. He is excited to now start FTC. He enjoys doing kickboxing and Brazilian Ju-Jitsu. He is learning to be a Programmer and Robot designer.",
    imageUrl:"../images/profileJames.png"
},{


    name:"Adrian (AJ) Flores Jr.",
    role: "Builder, coder",
    yearsInFirst: 2,
    personalAttributes:{
        "Age": "14",
        "Grade": "8th",
        "Favorite food": "Soy yogurt",
        },
    bio:"Adrian is a part of Trinity Pacific Christian School and this is his first year in FTC. Last year he was a part of FLL with a team called, “Bricking the Limits” who made it to regionals and now he will be a part of FTC for the next four years. Adrian likes to play video games and plays Piano. He is excited to be a part of Brain Stormz and wants to learn about technology, problem solving, programing, and teamwork.",
    imageUrl:"../images/profileAdrian.png"
},{


    name: "Stu Penrose",
    role: "Head Coach",
    yearsInFirst: 3,
    personalAttributes:{
        "Favorite Food": "σαγανάκι",
        },
    bio: "A life-long hardware &amp; software engineering enthusiast with a passion for teaching, Stu has worked as a product &amp; software engineering leader in a variety of large-scale internet companies over the past 20 years.&nbsp; When he's not coding or hanging out with Brain Stormz, you'll find him flying, sailing, or hanging out with his wife and 4 kids.<br>" + 'Learn more about Stu at&nbsp;<a href="http://stu.penrose.us" target="_blank" rel="noopener">stu.penrose.us</a>',
    imageUrl:"../images/profileStu.jpg"
},{


    name:"Harry Butkiss",
    role:"",
    yearsInFirst:1,
    personalAttributes:{
        "favorite flower" : "fire flower",
        "most awkward moment" : "when I stepped on a rake.  ouch!",
        "superpower":"eating candy"},
    bio:"",
    imageUrl:"../images/profileStu.jpg"
},{


    name:"Harry Butkiss",
    role:"",
    yearsInFirst:1,
    personalAttributes:{
        "favorite flower" : "fire flower",
        "most awkward moment" : "when I stepped on a rake.  ouch!",
        "superpower":"eating candy"},
    bio:"",
    imageUrl:"../images/profileStu.jpg"
}]


for(var x = 0;x<people.length;x++){
    var person = people[x]
    appendBio(person)
}

function appendBio(person){
    var div = document.createElement("div")
    div.setAttribute("class", "profile")
    var personalAttributes = ""
    Object.keys(person.personalAttributes).map(function(attributeName){
        personalAttributes += attributeName + ": " + person.personalAttributes[attributeName] + "<br>"
    })
    div.innerHTML = '<h3>' + person.name + '</h3> ' + 
                    '<img class="pic" src="' + person.imageUrl + '">' + 
                    '<p>' + 
                    '    Team role: ' + person.role + '<br>' + 
                    '    Years in FIRST: ' + person.yearsInFirst + '<br>' + 
                    personalAttributes + 
                    '  <br>  ' + person.bio + 
                    '</p>' + 
                    '<p>&nbsp;</p>';
    document.querySelector(".profiles").appendChild(div)
}
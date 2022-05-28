profiles=[
    {
        "name":"Virat Kohli",
        "username":"virat.kohli",
        "desc":"",
        "img":"https://images.kooapp.com/transcode_input/11664193/a80d03c4-077b-4773-b454-1ee883bab2d9voke.jpg?tr=n-dp_medium"
    },
    {
        "name":"Gurudev Sri Sri Ravi Shankar",
        "username":"Gurudev",
        "desc":"Spiritual Leader",
        "img":"https://images.kooapp.com/transcode_input/5250318/62ab9661-fa52-4198-95c1-192b673b2f09voke.jpg?tr=n-dp_medium"
    },
    {
        "name":"Karan Johar",
        "username":"karanjohar",
        "desc":"Director",
        "img":"https://images.kooapp.com/transcode_input/15105337/E5EB71E2-8355-4E57-ADFB-1FB5CC27A1B0-profile.jpeg?tr=n-dp_medium"
    },
    {
        "name":"Mohammad Shami",
        "username":"mdshami11",
        "desc":"Cricketer",
        "img":"https://images.kooapp.com/transcode_input/3298577/8DA5A9A6-1A1C-4983-BE07-7AF4BB08E6EB-profile.jpeg?tr=n-dp_medium"
    },
    {
        "name":"Madhur Bhandarkar",
        "username":"imbhandarkar",
        "desc":"Director",
        "img":"https://images.kooapp.com/transcode_input/8413202/804BCE74-EC0B-4C7D-8B23-79500E4C3252-profile.jpeg?tr=n-dp_medium"
    },
    {
        "name":"YS Jagan Mohan Reddy",
        "username":"ysjagan",
        "desc":"",
        "img":"https://images.kooapp.com/transcode_input/24688293-8a2f-4ab6-b2d4-c09296e6cdb8voke.jpg?tr=n-dp_medium"
    },
    {
        "name":"Piyush Goyal",
        "username":"piyushgoyal",
        "desc":"Politician",
        "img":"https://images.kooapp.com/transcode_input/3D1BD3ED-CC13-414E-8496-9B1320FB3607-profile.jpeg?tr=n-dp_medium"
    },
    {
        "name":"Sadhguru",
        "username":"SadhguruJV",
        "desc":"",
        "img":"https://images.kooapp.com/transcode_input/fefc2c61-4cf2-4605-863b-b41e66bdbfb3voke.jpg?tr=n-dp_medium"
    },
    {
        "name":"BKShivani",
        "username":"BkShivani",
        "desc":"Spiritual Guide on TV Prog. Awakening ..",
        "img":"https://images.kooapp.com/transcode_input/8325202/profile1630390804203sm6m5t.png?tr=n-dp_medium"
    },
    {
        "name":"Bhupender Yadav",
        "username":"byadavbjp",
        "desc":"",
        "img":"https://images.kooapp.com/transcode_input/8432752/969e3cc3-2338-4d1d-817d-bb1ec357c72cvoke.jpg?tr=n-dp_medium"
    }
]

profiles.forEach(user => {

    var box = document.createElement('div');
    box.setAttribute('class','box');

    var div1 = document.createElement('div');
    var pimg = document.createElement('img');
    pimg.src = user.img;
    div1.append(pimg);
    pimg.setAttribute('class','profile-image');
    div1.style.position = "relative";
    div1.style.height = "60px";


    var div2 = document.createElement('div');
    div2.setAttribute('class','div2');
    var indiv1 = document.createElement('div');
    indiv1.setAttribute('class','indiv1')
    var name = document.createElement('h3');
    name.innerText = user.name;
    name.style.fontSize = "16px";
    var verified = document.createElement('img');
    verified.src = 'https://images.kooapp.com/VerifiedAccountSheild96x96.png';
    verified.style.cssText = 'width:15px;height:15px;margin-left:7.68px;vertical-align: middle'
    indiv1.append(name,verified);


    var indiv2 = document.createElement('div');
    indiv2.setAttribute('class','indiv2');
    var username = document.createElement('p');
    username.innerText ="@"+user.username;
    var desc = document.createElement('p');
    desc.innerText = user.desc;
    indiv2.style.cssText = 'font-size:14px;color:#888888';
    var dot = document.createElement('img');
    dot.src = "https://www.kooapp.com/img/dot.svg";
    dot.style.cssText = 'margin: 0px 6px;'
    if(user.desc!="")
    {
        indiv2.append(username,dot,desc);
    }
    else
    {
        indiv2.append(username);
    }
    div2.append(indiv1,indiv2);

    var div3 = document.createElement('div');
    div3.setAttribute('class','div3')
    var follow = document.createElement('button');
    follow.innerText = "+Follow";
    follow.value = false;
    follow.setAttribute('class','follow');
    follow.addEventListener('click',() => {
        if(follow.value == 'false')
        {
            follow.value = true;
            follow.innerText = "Following";
            follow.setAttribute('class','afterfollow');
        }
        else if(follow.value == 'true')
        {
            follow.value = false;
            follow.innerText = "+Follow";
            follow.setAttribute('class','follow');
        }
    })
    div3.append(follow);

    box.append(div1,div2,div3);

    document.getElementById('allpeople').append(box);

});
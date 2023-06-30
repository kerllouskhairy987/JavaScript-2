

let LookingKhadija  = document.getElementById("lookingkhadija")
let desc = document.querySelector(".desc")
let BtnMentor = document.querySelector("#btnmentor")
let BtnMentorShow = document.querySelector("#btnmentorshow")
let Location = document.querySelector("#location")
let Hired = document.querySelector("#hired")
let Paid = document.querySelector("#paid")
let Duration = document.querySelector("#duration")
let FirstResponse = document.querySelector("#firstresponce")
let SecResponse = document.querySelector("#secresponse")
let ThirResponse = document.querySelector("#thirresponse")
let ForResponse = document.querySelector("#forresponse")
let FirRequire = document.querySelector("#firrequire")
let SecRequire = document.querySelector("#secrequire")
let ThirRequire = document.querySelector("#thirrequire")
let FirExpected = document.querySelector("#firexpected")
let SecExpected = document.querySelector("#secexpected")
let ThirExpected = document.querySelector("#thirexpected")
let ForExpected = document.querySelector("#forxpected")
let FivExpected = document.querySelector("#fivexpected")
let SixExpected = document.querySelector("#sixexpected")
let About = document.querySelector("#about")
let Nam = document.querySelector("#nam")
let Job = document.querySelector("#job")
let Company = document.querySelector("#company")
let PHONE = document.querySelector("#phonenumber")
let Email = document.querySelector("#email")
let FirExpertise = document.querySelector("#firexpertise")
let SecExpertise = document.querySelector("#secexpertise")
let ThirExpertise = document.querySelector("#thirexpertise")
let DescProfile = document.querySelector("#descprofile")
let View = document.querySelector("#viewprofile")
let AboutYou = document.querySelector("#abuotyou")
let PerOne = document.querySelector("#perone")
let DescForPerOne = document.querySelector("#descforperone")
let PerTwo = document.querySelector("#pertwo")
let DescForPerTwo = document.querySelector("#descforpertwo")
let PerThree = document.querySelector("#perthree")
let DescForPerThree = document.querySelector("#descforperthree")
let SEND = document.querySelector("#send")
let Edit = document.querySelector("#edit")
let Setting = document.querySelector("#setting")
let Term = document.querySelector("#term")
let Post = document.querySelector("#post")
// let Logo = document.querySelector("#logo")
let Book = document.querySelector("#book")
let Editt = document.querySelector("#editt")
let Settingg = document.querySelector("#Settingg")
let Termm = document.querySelector("#termm")
let Postt = document.querySelector("#postt")
let FirstIcon = document.querySelector("#firsticon")
let Background = document.querySelector("#background")
let Looking = document.querySelector("#looking")
let Requirments = document.querySelector("#requirments")
let Mentoring = document.querySelector("#mentoring")
let FrontEnd = document.querySelector("#frontend")
let Khadija = document.querySelector("#khadija")
let FirstIconLarge = document.querySelector("#firsticonlarge")
let IForDivFour = document.querySelector("#ifordivfour")
let IForDivTwo = document.querySelector("#ifordivtwo")
let IForDivThree = document.querySelector("#ifordivthree")
let IForDivFive = document.querySelector("#ifordivfive")
let WordDuration = document.querySelector("#wordduration")
let WordHired = document.querySelector("#wordhired")
let WordLocation = document.querySelector("#wordlocation")
let WordPaid = document.querySelector("#wordpaid")
let IconPersonOne = document.querySelector("#iconPersonOne")
let IconPersonTwo = document.querySelector("#iconperesontwo")
let IconPersonThree = document.querySelector("#iconpersonthree")
let WordNam = document.querySelector("#wordnam")
let WordJob = document.querySelector("#wordjob")
let WordCompany = document.querySelector("#wordcopany")
let WordParagOne = document.querySelector("#wordparagone")
let WordParagTwo = document.querySelector("#wordparagtwo")
let WordExpertise = document.querySelector("#wordexpertise")


var arr=[
    {"lookingkhadija" : "   is looking for a mentor"},
    {"desc" : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias, voluptatibus eos eveniet mollitia omnis. Odit aliquid sit quo ad voluptas sum dolorsit amet consectetur adipisicing elit. Consequuntur molestias,voluptatibus eos eveniet mollitia omnis. Odit aliquid sit quo ad voluptas quasi quasi reprehenderit sequi. Nisi ex culpa minus qui labore? "} ,
    {"btnmentor" : " Mentor"} ,
    {"location" : " Remote"} ,
    {"hired" : " none"},
    {"paid" : " 200sdg/ H"},
    {"duration" : " open duration"},
    {"firstresponse" : "Write software application and programs for backend/frontendpurposes."},
    {"secresponse" : "Analyse programs and apps to improve thier futures and functionalities."} , 
    {"thirresponse" : "Test & debug programs and any reported bugs."} ,
    {"forreponse" : "Collaborate with thr tech team to improve the performance, efficiency, andscalability of our tools."},
    {"firrequire" : "knowledge of APIs and webservices."},
    {"secrequire": "knowledge of relational Databases (MySQL, PostgreSQL, SQL server ....) and SQL language."},
    {"thirrequire" : "knowledge of NoSQL databases is a plus."},
    {"firexpected" : "An opportunity to work with remarkably talented colleagues."},
    {"secexpected" : "vast growth potential in every aspect."},
    {"thirexpected" : "15% target bonus with further upside."},
    {"forxpected" : "Employee share scheme participation."},
    {"fivexpected" : "International relation support."},
    {"sixexpected" : "Opportunity to be embedded within a commercial team for those strong with strong commercial interset."},
    {"about" : "About khadija saif"},
    {"nam" : "Balqees Hamdi"},
    {"job" : "Software Engineer"},
    {"company" : "EIT"},
    {"phonenumber" : "099547312"},
    {"email" : "Balqeessabir@gmail.com"},
    {"firexpertise" : "Software Engineering"},
    {"secexpertise" : "Front End Developer"},
    {"thirexpertise" : "UI/UX Design"},
    {"descprofile" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate soluta, ullam tempore error quidem sit mollitia,vero ratione corporis in ipsum atque, harum laboriosam veritatis sapiente ab nihil debitis."},
    {"viewprofile" : "View profile"},
    {"aboutyou" : "About khadija saif"},
    {"PerOne" : "Nora Ali"},
    {"descforperone" : "dolor in reprehenderit in voluptate velit esse cillum dolre eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"},
    {"pertwo" : "Nora Ali"},
    {"descforpertwo" : "dolor in reprehenderit in voluptate velit esse cillum dolre eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"},
    {"perthree" : "Nora Ali"},
    {"descforperthree" : "dolor in reprehenderit in voluptate velit esse cillum dolre eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"},
    {"send" : "Send"},
    {"edit" : "Edit Mentoring opportunity"},
    {"setting" : "Setting"},
    {"term" : "Term and privacy"},
    {"post" : "Post a new opportunity"},
    {"editt" : "Edit Mentoring opportunity"},
    {"Settingg" : "Setting"},
    {"termm" : "Term and privacy"},
    {"postt" : "Post a new opportunity"},
    {"background" : "I have a background about"},
    {"looking" : "I'm looking for help with"},
    {"requirments" : "Requirments"},
    {"mentoring" : "Mentoring Require"} ,
    {"frontend" : "Front End developer"} ,
    {"khadija" : "Khadija Saif "} ,
    {"lookingkhadija" : "is looking for a mentor"} ,
    {"btnmentorshow" : "Mentor"} ,
    {"wordduration" : "Duration : "} ,
    {"wordhired" : "Experince : "} ,
    {"wordlocation" : "Location : "} ,
    {"wordpaid" : "Piad : "} ,
    {"wordnam" : "Name"} ,
    {"wordjob" : "Job title"} ,
    {"wordcopany" : "Company"} ,
    {"wordparagone" : "Phone number"} ,
    {"wordparagtwo" : "Email"} ,
    {"wordexpertise" : "expertise"} ,
]

window.onload = function (){
    LookingKhadija.innerHTML = arr[0].lookingkhadija ; 
    desc.innerHTML = arr[1].desc  ;
    BtnMentor.innerHTML = arr[2].btnmentor ;
    btnmentor.style.borderRadius = "26px" ;    
    btnmentor.style.fontSize = "26px" ;    
    btnmentor.style.border = "none" ;
    btnmentor.style.width = "200px" ;
    btnmentor.style.height = "45px" ;
    Location.innerHTML = arr[3].location ;
    Hired.innerHTML = arr[4].hired ;
    Paid.innerHTML = arr[5].paid ;
    Duration.innerHTML = arr[6].duration ;
    FirstResponse.innerHTML = arr[7].firstresponse ;
    SecResponse.innerHTML = arr[8].secresponse ;
    ThirResponse.innerHTML = arr[9].thirresponse ;
    ForResponse.innerHTML = arr[10].forreponse ;
    FirRequire.innerHTML = arr[11].firrequire ;
    SecRequire.innerHTML = arr[12].secrequire ;
    ThirRequire.innerHTML = arr[13].thirrequire;
    FirExpected.innerHTML = arr[14].firexpected;
    SecExpected.innerHTML = arr[15].secexpected ;
    ThirExpected.innerHTML = arr[16].thirexpected;
    ForExpected.innerHTML = arr[17].forxpected;
    FivExpected.innerHTML = arr[18].fivexpected;
    SixExpected.innerHTML = arr[19].sixexpected;
    About.innerHTML = arr[20].about;
    Nam.innerHTML = arr[21].nam;
    Job.innerHTML = arr[22].job;
    Company.innerHTML = arr[23].company;
    PHONE.innerHTML = arr[24].phonenumber ;
    Email.innerHTML = arr[25].email ;
    FirExpertise.innerHTML = arr[26].firexpertise ;
    SecExpertise.innerHTML = arr[27].secexpertise ;
    ThirExpertise.innerHTML = arr[28].thirexpertise ;
    DescProfile.innerHTML = arr[29].descprofile ;
    View.innerHTML = arr[30].viewprofile;
    AboutYou.innerHTML = arr[31].aboutyou;
    PerOne.innerHTML = arr[32].PerOne ;
    DescForPerOne.innerHTML = arr[33].descforperone;
    PerTwo.innerHTML = arr[34].pertwo;
    DescForPerTwo.innerHTML = arr[35].descforpertwo ;
    PerThree.innerHTML = arr[36].perthree ;
    DescForPerThree.innerHTML = arr[37].descforperthree ;
    SEND.innerHTML = arr[38].send ;
    Edit.innerHTML = arr[39].edit ;
    Setting.innerHTML = arr[40].setting ;
    Term.innerHTML = arr[41].term ;
    Post.innerHTML = arr[42].post ;
    FirstIconLarge.innerHTML = `<i  class=" fa-solid fa-book-bible"></i>` ;
    Book.innerHTML = `<i  class=" fa-solid fa-book-bible"></i>` ;
    Editt.innerHTML = arr[43].editt ;
    Settingg.innerHTML = arr[44].Settingg ;
    Termm.innerHTML = arr[45].termm ;
    Postt.innerHTML = arr[46].postt ;
    Background.innerHTML = arr[47].background ;
    Looking.innerHTML = arr[48].looking ;
    Requirments.innerHTML = arr[49].requirments ;
    Mentoring.innerHTML = arr[50].mentoring ;
    FrontEnd.innerHTML = arr[51].frontend ;
    Khadija.innerHTML =arr[52].khadija ;
    BtnMentorShow.innerHTML = arr[54].btnmentorshow ;
    btnmentorshow.style.borderRadius = "26px" ;    
    btnmentorshow.style.fontSize = "26px" ;    
    btnmentorshow.style.border = "none" ;
    btnmentorshow.style.width = "200px" ;
    btnmentorshow.style.height = "45px" ;
    IForDivFour.innerHTML = `<i class="me-2 fa-solid fa-dollar-sign"></i>`;
    IForDivTwo.innerHTML = `<i class="me-2 fa-solid fa-location-dot"></i>` ;
    IForDivThree.innerHTML = `<i class="me-2 fa-solid fa-whiskey-glass"></i>`;
    IForDivFive.innerHTML = `<i class="me-2 fa-regular fa-clock"></i>` ;
    WordDuration.innerHTML = arr[55].wordduration ;
    WordHired.innerHTML = arr[56].wordhired ;
    WordLocation.innerHTML = arr[57].wordlocation ;
    WordPaid.innerHTML = arr[58].wordpaid ;
    IconPersonOne.innerHTML = `<i class="imgperone me-4 fa-solid fa-circle" ></i>` ;
    IconPersonTwo.innerHTML = `<i class="imgpertwo me-4 fa-solid fa-circle" ></i>` ;
    IconPersonThree.innerHTML = `<i class="imgperone me-4 fa-solid fa-circle" ></i>` ;
    WordNam.innerHTML = arr[59].wordnam ;
    WordJob.innerHTML = arr[60].wordjob ;
    WordCompany.innerHTML = arr[61].wordcopany ;
    WordParagOne.innerHTML = arr[62].wordparagone ;
    WordParagTwo.innerHTML = arr[63].wordparagtwo ;
    WordExpertise.innerHTML = arr[64].wordexpertise ;
}


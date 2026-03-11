/* JOB DATA */

let jobs= [

{
title:"Frontend Developer Intern",
company:"Google",
location:"Pune",
type:"Internship",
salary:"15000/month"
},

{
title:"Frontend Developer",
company:"Amazon",
location:"Mumbai",
type:"Full Time",
salary:"40000/month"
},

{
title:"Frontend Developer",
company:"Flipkart",
location:"Bangalore",
type:"Full Time",
salary:"45000/month"
},

{
title:"Frontend Developer",
company:"Wipro",
location:"Hyderabad",
type:"Internship",
salary:"18000/month"
},

{
title:"Backend Developer",
company:"Microsoft",
location:"Mumbai",
type:"Full Time",
salary:"60000/month"
},

{
title:"Backend Developer",
company:"IBM",
location:"Pune",
type:"Full Time",
salary:"55000/month"
},

{
title:"Backend Developer",
company:"Oracle",
location:"Bangalore",
type:"Full Time",
salary:"52000/month"
},

{
title:"Backend Developer",
company:"Accenture",
location:"Hyderabad",
type:"Full Time",
salary:"50000/month"
},

{
title:"Web Designer",
company:"Infosys",
location:"Bangalore",
type:"Internship",
salary:"12000/month"
},

{
title:"Web Designer",
company:"TCS",
location:"Mumbai",
type:"Full Time",
salary:"35000/month"
},

{
title:"Web Designer",
company:"Capgemini",
location:"Pune",
type:"Full Time",
salary:"30000/month"
},

{
title:"Web Designer",
company:"HCL",
location:"Hyderabad",
type:"Internship",
salary:"15000/month"
},

{
title:"Java Developer",
company:"TCS",
location:"Hyderabad",
type:"Full Time",
salary:"50000/month"
},

{
title:"Java Developer",
company:"Cognizant",
location:"Pune",
type:"Full Time",
salary:"48000/month"
},

{
title:"Java Developer",
company:"Dell",
location:"Bangalore",
type:"Full Time",
salary:"52000/month"
},

{
title:"Java Developer",
company:"Zoho",
location:"Mumbai",
type:"Full Time",
salary:"47000/month"
}
]

/* LOAD JOBS */

function loadJobs(list = jobs){

let container=document.getElementById("jobContainer")

container.innerHTML=""

list.forEach(function(job,index){

container.innerHTML+=`

<div class="job-card">

<h3>${job.title}</h3>

<p><b>Company:</b> ${job.company}</p>

<p><b>Location:</b> ${job.location}</p>

<p><b>Type:</b> ${job.type}</p>

<p><b>salary:</b> ${job.salary}</p>

<button onclick="showDetails(${index})">View Details</button>

</div>

`

})

}

loadJobs([jobs[0],jobs[4],jobs[8],jobs[12]])

/* SEARCH */

function searchJob(){

let title=document.getElementById("title").value.toLowerCase().trim()
let location=document.getElementById("location").value.toLowerCase().trim()

let filtered=jobs.filter(function(job){

return job.title.toLowerCase().includes(title) &&
job.location.toLowerCase().includes(location)

})

if(filtered.length===0){

document.getElementById("jobContainer").innerHTML="<h3>No Jobs Found</h3>"

}else{

loadJobs(filtered)

}

}

/* JOB DETAILS */

function showDetails(index){

let job=jobs[index]

document.getElementById("jobDetails").style.display="block"

document.getElementById("detailTitle").innerText=job.title
document.getElementById("detailCompany").innerText="Company: "+job.company
document.getElementById("detailLocation").innerText="Location: "+job.location
document.getElementById("detailType").innerText="Job Type: "+job.type
document.getElementById("detailSalary").innerText="Salary: "+job.salary

window.scrollTo(0,document.body.scrollHeight)

}

function closeDetails(){

document.getElementById("jobDetails").style.display="none"

}

/* CONTACT */

function sendMessage(){

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let message=document.getElementById("message").value

if(name=="" || email=="" || message==""){

alert("Please fill all fields")

}else{

alert("Message Sent Successfully!")

document.getElementById("name").value=""
document.getElementById("email").value=""
document.getElementById("message").value=""

}

}



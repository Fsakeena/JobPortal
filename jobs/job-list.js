const jCategory = [
    {
        index:0,
        image:"../images/google.png",
        title:"Web Developer",
        rate:"$900-1200/m",
        av:"Full Time",
        companyName:"Google",
        location:"USA",
        vacancy:"01",
        hours:"50h / Week",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, cum illum unde maxime provident consequatur ipsum quod rerum dolor assumenda praesentium placeat voluptatum veniam est qui dolore et ratione porro.",
        workplace:"Work from home",
        education:"Bachelor degree in any Computer Science Course.",
        experience:"2 to 5 year(s)"
    },
    {
        index:1,
        image:"../images/uber.png",
        title:"Business Associate",
        rate:"$900-1200/m",
        av:"Part Time",
        companyName:"Uber",
        location:"Japan",
        vacancy:"02",
        hours:"30h / Week",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, cum illum unde maxime provident consequatur ipsum quod rerum dolor assumenda praesentium placeat voluptatum veniam est qui dolore et ratione porro.",
        workplace:"Hybrid",
        education:"Bachelor degree in any Computer Science Course.",
        experience:"2 to 3 year(s)"
    },

    {
        index:2,
        image:"../images/instagram.png",
        title:"Business Analyst",
        rate:"$900-1200/m",
        av:"Full Time",
        companyName:"Cysco",
        location:"Sri Lanka",
        vacancy:"02",
        hours:"30h / Week",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, cum illum unde maxime provident consequatur ipsum quod rerum dolor assumenda praesentium placeat voluptatum veniam est qui dolore et ratione porro.",
        workplace:"Hybrid",
        education:"Bachelor degree in any Computer Science Course.",
        experience:"2 to 3 year(s)"
    }

    ,

    {
        index:3,
        image:"../images/linkedin.png",
        title:"QA Analyst",
        rate:"$900-1200/m",
        av:"Full Time",
        companyName:"Micro Soft",
        location:"Sri Lanka",
        vacancy:"02",
        hours:"30h / Week",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, cum illum unde maxime provident consequatur ipsum quod rerum dolor assumenda praesentium placeat voluptatum veniam est qui dolore et ratione porro.",
        workplace:"Hybrid",
        education:"Bachelor degree in any Computer Science Course.",
        experience:"2 to 3 year(s)"
    }
]

// Get modal elements
const modal = document.getElementById('jobModal');
const span = document.getElementsByClassName("close")[0]; // close button

// Function to populate and open the modal
function showJobDetails(index) {
    const job = jCategory[index];
    
    document.getElementById("jobTitle").textContent = job.title;
    document.getElementById("jobImage").src = job.image;
    document.getElementById("companyName").textContent = job.companyName;
    document.getElementById("location").textContent = job.location;
    document.getElementById("vacancy").textContent = job.vacancy;
    document.getElementById("hours").textContent = job.hours;
    document.getElementById("workplace").textContent = job.workplace;
    document.getElementById("education").textContent = job.education;
    document.getElementById("experience").textContent = job.experience;
    document.getElementById("jobDescription").textContent = job.description;

    modal.style.display = "block"; // show modal
}





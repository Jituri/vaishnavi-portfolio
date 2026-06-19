function openProject(title, description){

document.getElementById("projectTitle").innerText = title;

document.getElementById("projectDescription").innerText = description;

document.getElementById("projectModal").style.display = "block";

}

function closeProject(){

document.getElementById("projectModal").style.display = "none";

}

window.onclick = function(event){

let modal = document.getElementById("projectModal");

if(event.target == modal){
modal.style.display = "none";
}

}

function showCertificate(title,image){

    document.getElementById("certificateName").innerText = title;

    document.getElementById("certificateImg").src = image;

    document.getElementById("certificatePopup").style.display = "block";
}

function closeCertificate(){

    document.getElementById("certificatePopup").style.display = "none";
}
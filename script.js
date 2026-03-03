let progress = 0;
let student = "";

function login(){
student = document.getElementById("studentName").value;
if(student===""){
alert("Masukkan nama dulu 👨‍🍳");
return;
}
document.getElementById("displayName").textContent = student;
document.getElementById("loginScreen").style.display="none";
document.getElementById("mainContent").style.display="block";
localStorage.setItem("studentName", student);
}

function completeLesson(step){
progress = step * 33;
document.getElementById("progressBar").style.width = progress+"%";
document.getElementById("progressText").textContent = "Progress: "+progress+"%";

if(progress>=99){
document.getElementById("certificateBtn").style.display="inline-block";
}
}

function showCertificate(){
document.getElementById("certName").textContent = localStorage.getItem("studentName");
document.getElementById("certificate").style.display="block";
}

function toggleTheme(){
document.body.classList.toggle("light");
}
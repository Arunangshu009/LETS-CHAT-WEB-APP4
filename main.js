function next(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="2nd_page.html";
}
function logo(){
    window.location="logo_page.html";
}
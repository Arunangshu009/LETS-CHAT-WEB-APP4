var firebaseConfig = {
  apiKey: "AIzaSyCt_XF0fJSdvyj_9kwIDRfR7FgHkTRaBOk",
  authDomain: "kwitter2-83fea.firebaseapp.com",
  databaseURL: "https://kwitter2-83fea-default-rtdb.firebaseio.com",
  projectId: "kwitter2-83fea",
  storageBucket: "kwitter2-83fea.appspot.com",
  messagingSenderId: "557470127827",
  appId: "1:557470127827:web:05adf6c898310234b26626"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwittre_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{
  document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;

 
  console.log("Room names-"+Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
  document.getElementById("output").innerHTML+=row;

  });
}
);}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room name", name);
window.location="kwitter_page.html";
}
function nextPage(){
  window.location="kwitterPage.html";
}
function logout(){
  window.location="first_page.html"
}
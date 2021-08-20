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
  room_name = localStorage.getItem("room_name");
function send(){
    msg = document.getElementById("msg").value; 
    firebase.database().ref(room_name).push({
          name:user_name, 
          message:msg,
          like: 0
          });
          document.getElementById("msg").value = "";
}

function getData() 
{
     firebase.database().ref("/"+room_name).on('value', function(snapshot) 
     {
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) 
    {
           childKey  = childSnapshot.key; childData = childSnapshot.val(); 
           if(childKey != "purpose") 
           {
       firebase_message_id = childKey;
       message_data = childData;

    } });
});
}

function logout(){
  window.location="2nd_page.html"
}
getData();

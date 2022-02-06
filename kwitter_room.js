
var firebaseConfig = {
      apiKey: "AIzaSyDAghGL-yACnWaJLfTDAX20fbpnCgM-Ht4",
      authDomain: "kwitter-51b21.firebaseapp.com",
      databaseURL: "https://kwitter-51b21-default-rtdb.firebaseio.com",
      projectId: "kwitter-51b21",
      storageBucket: "kwitter-51b21.appspot.com",
      messagingSenderId: "1070831542042",
      appId: "1:1070831542042:web:3b7b40f69b6cbba8ae16a3",
      measurementId: "G-VW5B4EX3TR"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+user_name+"!!";

   function addRoom()
   {
         room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
               purpose:"adding room name"
         });
         localStorage.setItem("room_name",room_name);
         window.location="kwitter_page.html";
   }
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name:"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
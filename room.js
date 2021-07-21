var roomname = "";
var username = "";
function adduser() {
    roomname = localStorage.getItem("roomname");
    username = localStorage.getItem("xyz");
    console.log(username);
    console.log(roomname);
    document.getElementById("username").innerHTML = "Welcome " + username;
    document.getElementById("roomname").innerHTML = "Room " + roomname;
}
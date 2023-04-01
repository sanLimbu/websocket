//open the console tab from the browser 
//in the console type
let socket = new WebSocket("ws://localhost:3000/ws")
socket.onmessage = (event) => { console.log("received from the server: ", event.data)}

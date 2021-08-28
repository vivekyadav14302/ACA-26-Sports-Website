// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAh8Wq0_J7KdQeP5kCaIuw5s-zFNWDPsv4",
    authDomain: "sports-website-69f26.firebaseapp.com",
    databaseURL: "https://sports-website-69f26-default-rtdb.firebaseio.com",
    projectId: "sports-website-69f26",
    storageBucket: "sports-website-69f26.appspot.com",
    messagingSenderId: "562130561208",
    appId: "1:562130561208:web:9429441d2c4d67d9522c4d",
    measurementId: "G-EESVM98DHM"
  };
firebase.initializeApp(firebaseConfig)

fire_hum = firebase.database().ref("User_Input")

function mydatafunc(E){
    E.preventDefault()
     alert("Year submit Submit Successfuly !!! Click on OK Button to see results")
    year = document.getElementById('year').value
  
    sentmess(year)
    readResults(year)
}

document.getElementById('sportForm').addEventListener('submit', mydatafunc)


function sentmess(year){
    uref = fire_hum.push()
    uref.set({
        
        user_year: year
    })
}

teams = ["","Delhi Capitals", "Rajasthan Royals","Chennai Super Kings","Kings XI Punjab","Sunrises Hyderabad","Royal Challangers Banglore", "Kolkata Knight Riders", "Mumbai Indians"]
function readResults(year){
    var results = firebase.database().ref(year);
    results.on('value',(data) =>{
        var ranks = data.val();
        document.getElementById('result1').innerHTML = "<br > 1. " + teams[ranks[1]];
        document.getElementById('result2').innerHTML = "<br > 2. " + teams[ranks[2]];
        document.getElementById('result3').innerHTML = "<br > 3. " + teams[ranks[3]];
        document.getElementById('result4').innerHTML = "<br > 4. " + teams[ranks[4]];
        document.getElementById('result5').innerHTML = "<br > 5. " + teams[ranks[5]];
        document.getElementById('result6').innerHTML = "<br > 6. " + teams[ranks[6]];
        document.getElementById('result7').innerHTML = "<br > 7. " + teams[ranks[7]];
        document.getElementById('result8').innerHTML = "<br > 8. " + teams[ranks[8]];
    })
}


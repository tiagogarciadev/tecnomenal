
// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyAT3fOG2RruVPjYTKARsWudSCoxbm1X5rk",
  authDomain: "tecnomenal.firebaseapp.com",
  databaseURL: "https://tecnomenal-default-rtdb.firebaseio.com",
  projectId: "tecnomenal",
  storageBucket: "tecnomenal.appspot.com",
  messagingSenderId: "94845958052"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  // document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
   // document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });}
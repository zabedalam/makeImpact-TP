const functions = require("firebase-functions");
const app = require("express")();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const { signup, login } = require("./controllers/users");

// users routes
app.post("/signup", signup);
app.post("/login", login);

exports.api = functions.region('europe-west1').https.onRequest(app);

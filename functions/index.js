var functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});


 exports.reverseString = functions.https.onRequest((req,res) => {
      switch (req.method) {
        case 'POST':
          const text = req.body.text;
          const reversed = text ? text.split('').reverse().join('') : '';
          res.status(200).send({ result: reversed});
          break;
        default:
          res.status(500).send({ error: 'Something blew up!' });
          break;
      }
    });



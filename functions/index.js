var functions = require('firebase-functions');

let renderModuleFactory = require('@angular/platform-server');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.angular = functions.https.onRequest((req, res) => {
    response.send(
        renderModuleFactory({
            baseUrl: 'http://angular-on-the-server.firebaseapp-staging.com',
            bootstrap: [AppServerModuleNgFactory]
        }, {document: '<app-root></app-root>',url: req.url})
    )
})


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



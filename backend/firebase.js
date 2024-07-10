// backend/firebaseConfig.js
const admin = require('firebase-admin');
const serviceAccount = require('./key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://myntra-project-9c004.firebaseio.com'
});

module.exports = admin;

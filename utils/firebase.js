const admin = require("firebase-admin");

// Load Service Account Key dari file JSON yang Anda unduh dari Firebase Console
const serviceAccount = require("./../firebase-config.json"); // Ganti dengan path yang sesuai

// Inisialisasi Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${process.env.FIREBASE_APP_ID}.firebaseio.com`
});

// Buat instance Firestore
const db = admin.firestore();

module.exports = db;

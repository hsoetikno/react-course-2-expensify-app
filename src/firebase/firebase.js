import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }

// database.ref().on('value', (snapshot) => {
//   const p = snapshot.val()
//   console.log(p.name + ' is a ' + p.job.title + ' at ' + p.job.company)
// })

// database.ref().update({
//   name: 'Danny'
// })

// // database.ref('location/country')
// //   .once('value')
// //   .then((s) => {
// //     const v = s.val()
// //     console.log(v)
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e)
// //   })

// // database.ref().set({
// //   name: 'Harris Soetikno',
// //   age: 27,
// //   stressLevel: 5,
// //   job: {
// //     title: 'Manager',
// //     company: 'Mt Hotham'
// //   },
// //   location: {
// //     city: 'Melbourne',
// //     country: 'Australia'
// //   }
// // }).then(() => {
// //   console.log('Data is saved')
// // }).catch((e) => {
// //   console.log('This failed.', e)
// // })

// // database.ref().update({
// //   'job/company': 'Mt Hotham',
// //   'location/city': 'Victoria',
// //   'stressLevel': 1
// // })

// // database.ref().off()

// // setTimeout(() => {
// //   database.ref().update({
// //     'job/company': 'Microsoft',
// //     'location/city': 'Sydney',
// //     'stressLevel': 8
// //   })
// // }, 5000)





// // database.ref('isSingle').remove().then(() => {
// //   console.log('single attribute is removed')
// // })
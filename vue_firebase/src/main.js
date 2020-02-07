import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDljtDgtEcoiqQa1mjiE0h1IBUYdahowds",
  authDomain: "vue-firebase-demo-1bad7.firebaseapp.com",
  databaseURL: "https://vue-firebase-demo-1bad7.firebaseio.com",
  projectId: "vue-firebase-demo-1bad7",
  storageBucket: "vue-firebase-demo-1bad7.appspot.com",
  messagingSenderId: "685866188831",
  appId: "1:685866188831:web:1e9450d033ea9e1bbe152a",
  measurementId: "G-PLWLBG9L2R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

new Vue({
  render: h => h(App),
}).$mount('#app')

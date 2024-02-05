import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query, 
  orderBy
  } from "https://www.gstatic.com/firebasejs/10.7.2/firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBHWBUFLyOOfG05RKDUiRDUS2J3k8BVSkY",
  authDomain: "insan-cemerlang-dc590.firebaseapp.com",
  projectId: "insan-cemerlang-dc590",
  storageBucket: "insan-cemerlang-dc590.appspot.com",
  messagingSenderId: "1002966213043",
  appId: "1:1002966213043:web:4c787b7684f9eafa35ebc6",
};

const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarSiswa () {
  const siswaRef = collection(db, "siswa");
  const q = query(siswaRef, orderBy("nama"));
  const querySnapshot = await getDocs(q);
  
  let retval = [];
  querySnapshot.forEach((doc) => {
    retval.push({ id: doc.id, nama: doc.data().nama });
  });
  
  return retval;
}
 export async function tambahSiswa(nama) {
   try {
   const docRef = await addDoc(collection(ad, "siswa"),{
    nama: val
  }):
  console.log('Berhasil menyimpan dokumen dengan ID: ' + )
   console.log("Error menambah dokumen: " + e);
 }
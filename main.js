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
  } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyASPpFm467k79sDkVFWWseRou7h8_e2XLY",
  authDomain: "insan-cemerlang-e3a49.firebaseapp.com",
  projectId: "insan-cemerlang-e3a49",
  storageBucket: "insan-cemerlang-e3a49.appspot.com",
  messagingSenderId: "1633123066",
  appId: "1:1633123066:web:77ee69dcef30d9b5ee6743",
  measurementId: "G-WR2W88N8M3"
};


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

export async function tambahSiswa(val) {
  try {
    const docRef = await addDoc(collection(db, "siswa"), {
      nama: val
    });
    console.log('Berhasil menyimpan dokumen dengan ID: ' + docRef.id);
  } catch (e) {
    console.log('Error menambah dokumen: ' + e);
  }
}
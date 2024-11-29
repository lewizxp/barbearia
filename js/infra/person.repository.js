
import { collection,addDoc, db } from "./firebase.js"; 


export async function addPerson(person){
 return await addDoc(collection(db, "person", ),{...person} );
}
import { collection, query, where, getDocs } from "firebase/firestore";

const q = query(collection(db, "person"), where("isActive", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
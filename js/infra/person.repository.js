import{firebase} from "./firebase.js"
import { doc, setDoc } from "firebase/firestore"; 


export async function setPerson(person){
await setDoc(doc(db, "person", ), person);
}
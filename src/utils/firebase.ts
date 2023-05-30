import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Receipe } from "../types/receipes";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const AddReceipeDB = async (receipe:any)=>{
    try {
        const docRef = await addDoc(collection(db, "receipes"), receipe);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

const GetReceipesDB = async ()=>{
    const resp: any[]=[] 

    const querySnapshot = await getDocs(collection(db, "receipes"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  resp.push(doc.data())
});
  return resp
}

export default{
    AddReceipeDB,
    GetReceipesDB
}

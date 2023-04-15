import { db } from "./pages/firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


const questionCollectionRef = collection(db, "questions");
class Helper {
 getQuestions=async()=>{
    const {docs}= await getDocs(questionCollectionRef)
    return docs.map((doc)=>{
        return {...doc.data(),id:doc.id}
    })
 }
 deleteQuestion = (id) => {
  const bookDoc = doc(db, "questions", id);
  return deleteDoc(bookDoc);
};
getQuestion = (id) => {
  const questionDoc = doc(db, "questions", id);
  return getDoc(questionDoc);
};
updateBook = (id, updatedBook) => {
  const bookDoc = doc(db, "questions", id);
  return updateDoc(bookDoc, updatedBook);
};
}

export default new Helper();
import {collection,addDoc,getDocs, query, where} from "firebase/firestore";
import { db } from "./config";
import { TreeNode } from "../models/TreeNode";
  
  const collectionName = "nodes";
  
  export const saveNode = async (nodo: TreeNode) => {
    try {
      await addDoc(collection(db, collectionName), {
        id: nodo.id,
        name: nodo.name,
        type: nodo.type,
        parentId: nodo.parentId,
        createdBy: nodo.createdBy,
      });
    } catch (error) {
      console.error("Error guardando nodo:", error);
    }
  };
  
  export const getNodes = async (userEmail: string): Promise<TreeNode[]> => {
    try {
        const q = query(
            collection(db, collectionName),
            where("createdBy", "==", userEmail)
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map(doc => doc.data() as TreeNode);
    } catch (error) {
        console.error("Error obteniendo nodos:", error);
        return [];
    }
};
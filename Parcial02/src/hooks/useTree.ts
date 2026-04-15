import { useEffect, useState } from "react";
import type { NodeType } from "../models/TreeNode";
import { ArbolNario } from "../models/NaryTree";
import { saveNode, getNodes } from "../firebase/TreeManage";

export const useTree = (userEmail: string | null) => {
  const [tree, setTree] = useState<ArbolNario>(new ArbolNario());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTree = async () => {
    try {
      setLoading(true);

      const nodes = await getNodes(userEmail!);

      const newTree = new ArbolNario();
      if (nodes.length === 0) {
        const root = newTree.insert(
          "home",
          "folder",
          null,
          userEmail || "system"
        );
        await saveNode(root);
      } else {
        newTree.buildFromList(nodes);
      }

      setTree(newTree);
    } catch (err) {
      console.error(err);
      setError("Error cargando el árbol");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userEmail) {
      loadTree();
    }
  }, [userEmail]);

  const addNode = async (
    name: string,
    type: NodeType,
    parentId: string | null
  ) => {
    if (!userEmail) {
      throw new Error("Usuario no autenticado");
    }

    try {
      const newTree = cloneTree(tree);

      const newNode = newTree.insert(
        name,
        type,
        parentId,
        userEmail
      );
      setTree(newTree);

      await saveNode(newNode);

    } catch (err: any) {
      console.error(err);
      setError(err.message);
    }
  };

  const refresh = () => {
    loadTree();
  };

  return {tree,loading,error,addNode,refresh};
};

const cloneTree = (tree: ArbolNario): ArbolNario => {
  const newTree = new ArbolNario();

  if (!tree.raiz) return newTree;

  const nodes = tree.traverse();
  newTree.buildFromList(nodes);

  return newTree;
};
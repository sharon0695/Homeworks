import { useContext } from "react";
import { TreeContext } from "../context/TreeContext";

export const useTree = () => {
  const context = useContext(TreeContext);

  if (!context) {
    throw new Error("useTree must be used within TreeProvider");
  }

  const { tree, addNode } = context;

  // Crear nodo con validación
  const createNode = (parent: string | null, value: string) => {
    if (!value.trim()) {
      alert("El valor no puede estar vacío");
      return;
    }

    addNode(parent, value);
  };

  // Buscar nodo
  const findNode = (value: string) => {
    if (!value.trim()) return null;
    return tree?.find(value);
  };

  return {
    createNode,
    findNode,
    tree, //por si se necesita acceder directamente al árbol
  };
};
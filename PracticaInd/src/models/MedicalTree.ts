import TreeNode from "./Tree";

export const createMedicalTree = () => {
  const root = new TreeNode("Medicina");

  const general = new TreeNode("General");
  const pediatria = new TreeNode("Pediatría");
  const especialidades = new TreeNode("Especialidades");

  const cardio = new TreeNode("Cardiología");
  const neuro = new TreeNode("Neurología");

  especialidades.addChild(cardio);
  especialidades.addChild(neuro);

  root.addChild(general);
  root.addChild(pediatria);
  root.addChild(especialidades);

  return root;
};
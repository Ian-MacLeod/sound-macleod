export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const openModal = (component, childProps) => ({
  type: OPEN_MODAL,
  component,
  childProps
});

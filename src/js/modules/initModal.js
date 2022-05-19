import { Modal } from "./Modal";

export default () => {
  const modal = new Modal({
    isOpen: (modal) => {
    },
    isClose: (modal) => {
    },
  });

  window.lumien_API.modal = modal;
};

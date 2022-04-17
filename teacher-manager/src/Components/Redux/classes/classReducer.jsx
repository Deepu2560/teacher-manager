import { CLASSES, CLASSES_LOADING, CLASSES_SUCCESS } from "./classAction";

const inialStore = {
  isLoading: false,
  classList: [],
};

export const ClassesReducer = (store = inialStore, { type, payload }) => {
  switch (type) {
    case CLASSES:
      return {
        isLoading: false,
        classList: [...payload],
      };
    case CLASSES_LOADING:
      return {
        isLoading: true,
      };
    case CLASSES_SUCCESS:
      return {
        isLoading: false,
        classList: store.classList,
      };
    default:
      return store;
  }
};

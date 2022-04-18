import {
  CLASSES,
  CLASSES_LOADING,
  CLASSES_ERROR,
  CLASSES_DELETE,
} from "./classAction";

const inialStore = {
  isLoading: false,
  classList: [],
  isError: false,
};

export const ClassesReducer = (store = inialStore, { type, payload }) => {
  switch (type) {
    case CLASSES:
      return {
        isLoading: false,
        classList: [...payload],
        isError: false,
      };
    case CLASSES_LOADING:
      return {
        isLoading: true,
        classList: store.classList,
        isError: false,
      };
    case CLASSES_ERROR:
      return {
        isLoading: false,
        classList: store.classList,
        isError: true,
      };
    case CLASSES_DELETE:
      return {
        isLoading: false,
        classList: store.classList,
        isError: false,
      };
    default:
      return store;
  }
};

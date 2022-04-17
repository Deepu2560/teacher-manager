export const CLASSES_LOADING = "CLASSES_LOADING";
export const CLASSES = "CLASSES";
export const CLASSES_SUCCESS = "CLASSES_ERROR";

export const classesLoading = () => ({ type: CLASSES_LOADING });

export const classesSuccess = (payload) => ({ type: CLASSES, payload });

export const classesError = () => ({ type: CLASSES_SUCCESS });

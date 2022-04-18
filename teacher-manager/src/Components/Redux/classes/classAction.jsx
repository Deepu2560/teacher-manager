export const CLASSES_LOADING = "CLASSES_LOADING";
export const CLASSES = "CLASSES";
export const CLASSES_ERROR = "CLASSES_ERROR";
export const CLASSES_DELETE = "CLASSES_DELETE";

export const classesLoading = () => ({ type: CLASSES_LOADING });

export const classesSuccess = (payload) => ({ type: CLASSES, payload });

export const classesError = () => ({ type: CLASSES_ERROR });

export const classesDelete = () => ({ type: CLASSES_DELETE });

export const TEACHER_LOADING = "TEACHER_LOADING";
export const TEACHER = "TEACHER";
export const TEACHER_ERROR = "TEACHER_ERROR";
export const TEACHER_DELETE = "TEACHER_DELETE";

export const teacherLoading = () => ({ type: TEACHER_LOADING });

export const teacherSuccess = (payload) => ({ type: TEACHER, payload });

export const teacherError = () => ({ type: TEACHER_ERROR });

export const teacherDelete = () => ({ type: TEACHER_DELETE });

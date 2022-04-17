export const TEACHER_LOADING = "TEACHER_LOADING";
export const TEACHER = "TEACHER";
export const TEACHER_SUCCESS = "TEACHER_ERROR";

export const teacherLoading = () => ({ type: TEACHER_LOADING });

export const teacherSuccess = (payload) => ({ type: TEACHER, payload });

export const teacherError = () => ({ type: TEACHER_SUCCESS });

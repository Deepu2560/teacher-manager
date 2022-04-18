import {
  TEACHER,
  TEACHER_LOADING,
  TEACHER_ERROR,
  TEACHER_DELETE,
} from "./teacherAction";

const inialStore = {
  isLoading: false,
  teacherList: [],
  isError: false,
};

export const TeacherReducer = (store = inialStore, { type, payload }) => {
  switch (type) {
    case TEACHER:
      return {
        isLoading: false,
        teacherList: [...payload],
        isError: false,
      };
    case TEACHER_LOADING:
      return {
        isLoading: true,
        teacherList: store.teacherList,
        isError: false,
      };
    case TEACHER_ERROR:
      return {
        isLoading: false,
        teacherList: store.teacherList,
        isError: true,
      };
    case TEACHER_DELETE:
      return {
        isLoading: false,
        teacherList: store.teacherList,
        isError: false,
      };
    default:
      return store;
  }
};

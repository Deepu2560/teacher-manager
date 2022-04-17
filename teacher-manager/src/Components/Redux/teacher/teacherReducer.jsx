import { TEACHER, TEACHER_LOADING, TEACHER_SUCCESS } from "./teacherAction";

const inialStore = {
  isLoading: false,
  teacherList: [],
};

export const TeacherReducer = (store = inialStore, { type, payload }) => {
  switch (type) {
    case TEACHER:
      return {
        isLoading: false,
        teacherList: [...payload],
      };
    case TEACHER_LOADING:
      return {
        isLoading: true,
        teacherList: store.teacherList,
      };
    case TEACHER_SUCCESS:
      return {
        isLoading: false,
        teacherList: store.teacherList,
      };
    default:
      return store;
  }
};

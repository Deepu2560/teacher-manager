import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { LoginReducer } from "./Login/loginReducer";
import { ClassesReducer } from "./classes/classReducer";
import { TeacherReducer } from "./teacher/teacherReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  classes: ClassesReducer,
  teacher: TeacherReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

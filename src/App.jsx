import "./App.css";
import Course from "./Components/Course.jsx";
import Header from "./Components/Header.jsx";
import { courses } from "./Data.jsx";
import "./css/Course.css";

function App() {
  return (
    <>
      <Header></Header>
      <div className="course-main">
        {courses?.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </>
  );
}

export default App;

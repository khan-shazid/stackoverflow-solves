import { useEffect, useState } from "react";
import StudentGradingEvaluationForm, {
  StudentFormData,
} from "./StudentGradingEvaluationForm";
import GPACalculator from "./GPACalculator";
import "./Courses";

const App = () => {
  const [formData, setFormData] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmitted = (data) => {
    if (data) {
      setFormData(data);
      setIsFormSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData(null);
    setIsFormSubmitted(false);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>GPA Calculator for Individual Student</h1>
      </div>
      <div>
        {!isFormSubmitted && (
          <StudentGradingEvaluationForm onSubmit={handleFormSubmitted} />
        )}
        {isFormSubmitted && !formData && (
          <p className="text-danger">Enter correct credentials</p>
        )}
      </div>
      {formData && (
        <button className="btn btn-outline-danger" onClick={resetForm}>
          Reset Form
        </button>
      )}
      {formData && formData.courses && (
        <GPACalculator
          subject={formData.courses}
          number={formData.number}
          name={formData.name}
        />
      )}
    </>
  );
};

export default App;
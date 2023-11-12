import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import courses from "./Courses";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Description should be atleast 3 characters." }),
  number: z.number().min(0).max(100),
  courses: z.enum(courses, {
    errorMap: () => ({ message: "Course is required." }),
  }),
});

// export type StudentFormData = z.infer<typeof schema>;

// interface Props {
//   onSubmit: (data: StudentFormData) => void;
// }

const StudentGradingEvaluationForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  console.log("errors =====>", errors)

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        console.log(onSubmit);
      })}
    >
      <div className="mb-3">
        <label htmlFor="studentName" className="form-label">
          Name of Student
        </label>
        <input
          id="studentName"
          type="text"
          className="form-control"
          {...register("name")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="courseName" className="form-label">
          Name of Course
        </label>
        <div>
          <select
            id="courseName"
            className="select-control"
            {...register("courses")}
          >
            <option value=""></option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Enter Number
        </label>
        <input
          id="number"
          type="text"
          className="form-control"
          {...register("number")}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default StudentGradingEvaluationForm;
// interface Props {
//     subject: string;
//     name: string;
//     number: number;
//   }
const GPACalculator = ({ subject, number, name }) => {
    const calculateGpa = () => {
        if (number < 100 && number >= 80) return "A";
        else if (number < 80 && number >= 65) return "B";
        else if (number < 65 && number >= 55) return "C";
        else if (number < 55 && number >= 40) return "D";
        else return "FAIL";
    };
    return (
        <div>
        <h2>GPA Calculator Result for {name}</h2>
        <p>Subject: {subject}</p>
        <p>Number: {number}</p>
        <p>GPA: {calculateGpa()}</p>
        </div>
    );
};
  
export default GPACalculator;
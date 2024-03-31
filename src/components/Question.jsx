
import InterviewAccord from "./InterviewAccord";

const Questions = ({ data }) => {


  return (
    <div>

        {
            data.map((question) => (
                <div key={question.id}>
                  <InterviewAccord question={question} />
                </div>
              )) 
        }
    </div>
  )
};

export default Questions;

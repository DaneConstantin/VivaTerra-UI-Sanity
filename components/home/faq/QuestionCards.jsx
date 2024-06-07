import SingleQuestion from './SingleQuestion';

const QuestionCards = ({ questions }) => {
  return (

    <section className="container px-8 md:px-0">

      <div className="grid gap-6 2xl:gap-8 md:grid-cols-2 xl:grid-cols-3 justify-center">
        {questions &&
          questions.data.map((question) => {
            return (
              <li key={question.id} className="list-none rounded-xl border border-[#262626] min-w-[358px] max-w-[512px] ">
                <SingleQuestion
                  question={question.attributes.Question}
                  answer={question.attributes.Answer}
                />
              </li>
            );
          })}

      </div>
    </section>


  );
};

export default QuestionCards;
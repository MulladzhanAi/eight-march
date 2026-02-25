const LETTERS = ['A', 'B', 'C', 'D', 'E']

export default function QuizScreen({ question, questionIndex, totalQuestions, onAnswer }) {
  return (
    <div className="screen">
      <div className="stack-vertical-lg">
        <div className="quiz-card">
          <div className="quiz-question-meta">
            <span>Вопрос {questionIndex + 1}</span>
            <div className="quiz-progress" aria-hidden="true">
              {Array.from({ length: totalQuestions }).map((_, index) => (
                <div key={index} className="quiz-progress-dot">
                  {index <= questionIndex && <div className="quiz-progress-dot-inner" />}
                </div>
              ))}
            </div>
          </div>

          <div className="quiz-question-text">{question.question}</div>

          <div className="quiz-answers">
            {question.options.map((option, index) => (
              <button
                key={option}
                type="button"
                className="quiz-answer-button"
                onClick={() => onAnswer(option === question.correctAnswer)}
              >
                <span>
                  <span className="quiz-answer-label">{LETTERS[index] ?? '?'}</span>
                  <span>{option}</span>
                </span>
                <span aria-hidden="true">♡</span>
              </button>
            ))}
          </div>
        </div>

        <p className="text-soft">
          Если вдруг ошибёшься — ничего страшного. Просто попробуем ещё раз и выберем новый
          путь к призу.
        </p>
      </div>
    </div>
  )
}


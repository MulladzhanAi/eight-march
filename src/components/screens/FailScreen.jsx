export default function FailScreen({ onTryAgain, onBackToStart }) {
  return (
    <div className="screen">
      <div className="stack-vertical-lg">
        <div className="stack-vertical text-center">
          <span className="emoji-big" aria-hidden="true">
            💔
          </span>
          <h2 className="screen-title">Кажется, одно сердечко запуталось.</h2>
          <p className="screen-subtitle">
            Ничего страшного. Любовь — это тоже про попытки. Давай попробуем ещё раз и найдём
            наш идеальный вариант.
          </p>
        </div>

        <div className="quiz-card">
          <p className="text-soft">
            Хочешь вернуть всё в начало и снова пройти три вопроса? Я обещаю: приз всё так же
            ждёт тебя впереди.
          </p>
        </div>
      </div>

      <div className="buttons-row">
        <button type="button" className="primary-button" onClick={onTryAgain}>
          <span>Попробовать ещё раз</span>
          <span aria-hidden="true">❤️</span>
        </button>

        <button type="button" className="secondary-button" onClick={onBackToStart}>
          <span>Вернуться к началу</span>
        </button>
      </div>
    </div>
  )
}


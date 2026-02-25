export default function StartScreen({ onStart }) {
  return (
    <div className="screen">
      <div className="stack-vertical-lg">
        <div className="stack-vertical">
          <p className="pill-soft">3 вопроса. 1 сердце. 1 приз.</p>
          <h2 className="screen-title">Готова пройти маленький любовный квиз?</h2>
          <p className="screen-subtitle">
            Ответь правильно на три вопроса подряд и открой один из призов.
          </p>
        </div>

        <div className="quiz-card">
          <p className="text-soft">
            • Всего три вопроса, выбирай сердцем.
            <br />
            • Ошибка — и всё начинаем сначала.
            <br />
            • Три верных ответа откроют случайный приз: каждый приз имеет свою редкость: обычный, редкий, эпический. Собери всю коллекцию!
          </p>
        </div>
      </div>

      <button type="button" className="primary-button" onClick={onStart}>
        <span>Начать квиз</span>
        <span aria-hidden="true">💕</span>
      </button>
    </div>
  )
}


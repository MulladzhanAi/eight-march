import { useEffect } from 'react'
import confetti from 'canvas-confetti'

const RARITY_LABELS = {
  common: 'Обычная',
  rare: 'Редкая',
  legendary: 'Легендарная',
}

const RARITY_COLOR = {
  common: '#3b82f6', // синий
  rare: '#facc15', // жёлтый
  legendary: '#a855f7', // фиолетовый
}

export default function SuccessScreen({ prize, onPlayAgain }) {
  useEffect(() => {
    const duration = 1600
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 45,
        spread: 70,
        origin: { y: 0.3 },
        colors: ['#ff8bbf', '#f45aa1', '#ffe1f2', '#f6f0ff'],
        scalar: 0.9,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    frame()
  }, [])

  const rarityLabel = RARITY_LABELS[prize.rarity] ?? 'Особенная'
  const rarityColor = RARITY_COLOR[prize.rarity] ?? '#3b82f6'
  const imageUrl = typeof prize.image === 'string' ? prize.image : ''
  const fileNameFromPath = imageUrl.split('/').pop() || 'prize.jpg'
  const downloadName = fileNameFromPath

  return (
    <div className="screen">
      <div className="stack-vertical-lg">
        <div className="stack-vertical text-center">
          <span className="emoji-xl" aria-hidden="true">
            🏆
          </span>
          <h2 className="screen-title">Ты прошла квиз идеально!</h2>
        </div>

        <article className="prize-card">
          <header className="prize-header">
            <h3 className="prize-title">{prize.name}</h3>
          </header>

          <div className="prize-rarity-line">
            <span
              className="prize-rarity-outline"
              style={{ color: rarityColor, borderColor: rarityColor }}
            >
              <span className="prize-rarity-label">
                Редкость:{' '}
                <span className="prize-rarity-value">{rarityLabel}</span>
              </span>
            </span>
          </div>

          <div className="prize-image-wrapper">
            <img src={prize.image} alt={prize.name} className="prize-image" />
          </div>
        </article>
      </div>

      <div className="buttons-row">
        <button type="button" className="primary-button" onClick={onPlayAgain}>
          <span>Сыграть ещё раз</span>
          <span aria-hidden="true">✨</span>
        </button>

        <a
          href={prize.image}
          download={downloadName}
          className="secondary-button"
          style={{
            textAlign: 'center',
            textDecoration: 'none',
          }}
        >
          <span>Скачать</span>
        </a>
      </div>
    </div>
  )
}


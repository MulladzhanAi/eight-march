export const PRIZES = [
  { id: 1, name: "Твоя нефорская чиби версия", image: `${import.meta.env.BASE_URL}prizes/chibi1.jpg`, rarity: "legendary" },
  { id: 2, name: "Твоя Иссык Кульская версия", image: `${import.meta.env.BASE_URL}prizes/chibi2.jpg`, rarity: "common" },
  { id: 3, name: "На оригинальной фотке такая кьют милашка я не могу, почему так мало таких фоток от тебя", image: `${import.meta.env.BASE_URL}prizes/chibi3.jpg`, rarity: "common" },

  { id: 4, name: "Ну думаю понятно почему легендарка", image: `${import.meta.env.BASE_URL}prizes/chibi4.jpg`, rarity: "legendary" },
  { id: 5, name: "Может вспомнишь что за оригинальная фотка", image: `${import.meta.env.BASE_URL}prizes/chibi5.jpg`, rarity: "common" },

  { id: 6, name: "Я и ананас", image: `${import.meta.env.BASE_URL}prizes/chibi6.jpg`, rarity: "rare" },
  { id: 7, name: "Милашки", image: `${import.meta.env.BASE_URL}prizes/chibi7.jpg`, rarity: "legendary" },
  { id: 8, name: "Моя нефорская чиби версия", image: `${import.meta.env.BASE_URL}prizes/chibi8.jpg`, rarity: "common" },
  { id: 9, name: "Наше фото с годовщины", image: `${import.meta.env.BASE_URL}prizes/chibi9.jpg`, rarity: "rare" },
  { id: 10, name: "Моя версия в полный рост, как брелок (я всегда рядом с тобой)", image: `${import.meta.env.BASE_URL}prizes/chibi10.jpg`, rarity: "rare" },
]

const RARITY_WEIGHTS = {
  common: 0.6,
  rare: 0.3,
  legendary: 0.1,
}

export function choosePrize() {
  const roll = Math.random()
  let rarity = 'common'

  if (roll < RARITY_WEIGHTS.legendary) {
    rarity = 'legendary'
  } else if (roll < RARITY_WEIGHTS.legendary + RARITY_WEIGHTS.rare) {
    rarity = 'rare'
  }

  const byRarity = PRIZES.filter((p) => p.rarity === rarity)
  const pool = byRarity.length ? byRarity : PRIZES
  const index = Math.floor(Math.random() * pool.length)
  return pool[index]
}


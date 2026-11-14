window.PASS_CONFIG = {
  WORKER_URL: "https://tg-pass-relay.tania-kustova.workers.dev",

  // Настройки ежемесячной плашки «СЮРПРИЗ»
  SURPRISE: {
    id: "surprise_crate",
    title: "СЛУЧАЙНЫЙ ДРОП // СЮРПРИЗ",
    subtitle: "1 бесплатный спин каждый месяц (неиспользованный сгорает)",
    monthlyLimit: 1
  },

  // Лимит замен (трейд-ин неиспользованных карточек на весь год)
  SWAP_LIMIT: 3,

  // Категории состояний
  CATEGORIES: [
    { id: "tired", label: "КОГДА УСТАЛ" },
    { id: "bored", label: "КОГДА СКУЧНО" },
    { id: "experiment", label: "ЭКСПЕРИМЕНТЫ" }
  ],

  // Список всех сертификатов
  CARDS: [
    // --- КОГДА УСТАЛ ---
    {
      id: "skip_school",
      code: "MP-01",
      cat: "tired",
      title: "ПРОПУСК УЧЕБНОГО ДНЯ",
      tag: "ЛЕГАЛЬНЫЙ ОТГУЛ",
      rule: "Предупредить вечером накануне. Официальный отгул от школы. Предупредить родителей вечером перед выбранным днем.",
      badge: "ВЕЧЕРОМ НАКАНУНЕ",
      rarity: "arcane",
      limit: 4
    },
    {
      id: "dinner_boss",
      code: "MP-02",
      cat: "tired",
      title: "ШЕФ-ПОВАР УЖИНА",
      tag: "МЕНЮ ДНЯ",
      rule: "Ты решаешь, что вся семья готовит или заказывает на ужин.",
      badge: "ДО 16:00",
      rarity: "epic",
      limit: 2
    },

    // --- КОГДА СКУЧНО ---
    {
      id: "comp_club",
      code: "MP-03",
      cat: "bored",
      title: "КОМПЬЮТЕРНЫЙ КЛУБ",
      tag: "КАТКА НА МАКСИМАЛКАХ",
      rule: "Предупредить за 1-2 дня. Поход в компьютерный клуб.",
      badge: "ЗА 1-2 ДНЯ",
      rarity: "arcane",
      limit: 2
    },
    {
      id: "game_donate",
      code: "MP-04",
      cat: "bored",
      title: "ДОНАТ В ИГРУ",
      tag: "БАЛАНС / ПАСС",
      rule: "Пополнение игрового баланса или покупка пасса.",
      badge: "МГНОВЕННО",
      rarity: "arcane",
      limit: 3
    },
    {
      id: "night_event",
      code: "MP-05",
      cat: "bored",
      title: "НОЧНОЙ РЕЖИМ",
      tag: "ОТБОЙ ПОСЛЕ 00:00",
      rule: "Участие в поздних ивентах или катка с друзьями.",
      badge: "МГНОВЕННО",
      rarity: "epic",
      limit: 4
    },
    {
      id: "late_walk",
      code: "MP-06",
      cat: "bored",
      title: "ПОЗДНЯЯ ПРОГУЛКА",
      tag: "ДО 22:30 (ВЕСНА-ЛЕТО)",
      rule: "Продление вечерней прогулки с друзьями (до 22:30, только летне-весенний период), на связи с родителями.",
      badge: "СОГЛАСОВАТЬ",
      rarity: "epic",
      limit: 4
    },
    {
      id: "movie_night",
      code: "MP-07",
      cat: "bored",
      title: "КОНТРОЛЬ НАД ПУЛЬТОМ",
      tag: "КИНОНОЧЬ",
      rule: "Выбор любого фильма или сериала на вечер + чипсы/попкорн.",
      badge: "МГНОВЕННО",
      rarity: "standard",
      limit: 3
    },

    // --- ЭКСПЕРИМЕНТЫ ---
    {
      id: "ice_cream_legend",
      code: "MP-08",
      cat: "experiment",
      title: "МОРОЖЕНОЕ ПОСЛЕ УЖИНА",
      tag: "ЛЕГЕНДАРНЫЙ ДЕЛИКАТЕС",
      rule: "Строго 1 раз за год. Предъявлять исключительно после ужина!!!",
      badge: "ПОСЛЕ УЖИНА",
      rarity: "arcane",
      limit: 1
    },
    {
      id: "yes_hour",
      code: "MP-09",
      cat: "experiment",
      title: "«ДА-ЧАС» ОТ РОДИТЕЛЕЙ",
      tag: "60 МИНУТ БЕЗ ОТКАЗОВ",
      rule: "Целый час соглашаемся на любую адекватную авантюру или просьбу.",
      badge: "МГНОВЕННО",
      rarity: "epic",
      limit: 1
    }
  ]
};

const translations = {
  pt: {
    title: "Conselho do Tarot do Dia",
    eyebrow: "Tarot diário",
    deckEyebrow: "Baralho completo",
    allCards: "Todas as cartas",
    adviceLabel: "Conselho",
    reflectionLabel: "Pergunta para hoje",
    dailyCard: "Carta do dia",
    freeDraw: "Sorteio livre",
    chosenCard: "Carta escolhida",
    dailyButton: "Ver carta do dia",
    freeDrawButton: "Sortear livremente",
    darkMode: "Modo escuro",
    lightMode: "Modo claro",
    filterAll: "Todas",
    filterMajor: "Maiores",
    filterWands: "Paus",
    filterCups: "Copas",
    filterSwords: "Espadas",
    filterPentacles: "Ouros",
    majorArcana: "Arcano Maior",
    minorArcana: "Arcano Menor",
  },
  en: {
    title: "Tarot Advice of the Day",
    eyebrow: "Daily tarot",
    deckEyebrow: "Full deck",
    allCards: "All cards",
    adviceLabel: "Advice",
    reflectionLabel: "Question for today",
    dailyCard: "Card of the day",
    freeDraw: "Free draw",
    chosenCard: "Chosen card",
    dailyButton: "See daily card",
    freeDrawButton: "Draw freely",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    filterAll: "All",
    filterMajor: "Major",
    filterWands: "Wands",
    filterCups: "Cups",
    filterSwords: "Swords",
    filterPentacles: "Pentacles",
    majorArcana: "Major Arcana",
    minorArcana: "Minor Arcana",
  },
};

const majorArcana = [
  ["0", "O Louco", "The Fool", "Começos, coragem e abertura para o desconhecido.", "Beginnings, courage, and openness to the unknown.", "Dê um passo simples antes de tentar prever o caminho inteiro.", "Take one simple step before trying to predict the whole path.", "Onde você pode experimentar mais e controlar menos hoje?", "Where can you experiment more and control less today?", "☀"],
  ["I", "O Mago", "The Magician", "Ação, habilidade e poder de transformar intenção em movimento.", "Action, skill, and the power to turn intention into movement.", "Use o que você já tem em mãos.", "Use what you already have in your hands.", "Qual atitude pequena pode transformar sua energia agora?", "What small action can shift your energy now?", "✦"],
  ["II", "A Sacerdotisa", "The High Priestess", "Intuição, silêncio e sabedoria interior.", "Intuition, silence, and inner wisdom.", "Antes de responder, escute.", "Listen before you answer.", "Que resposta você já sabe?", "What answer do you already know?", "☾"],
  ["III", "A Imperatriz", "The Empress", "Criação, cuidado, prazer e crescimento.", "Creation, care, pleasure, and growth.", "Cuide do que você quer ver florescer.", "Nurture what you want to see bloom.", "O que precisa de mais carinho?", "What needs more care?", "✿"],
  ["IV", "O Imperador", "The Emperor", "Estrutura, decisão, limites e responsabilidade.", "Structure, decision, boundaries, and responsibility.", "Organize uma parte do caos.", "Organize one part of the chaos.", "Onde falta estrutura?", "Where do you need more structure?", "▲"],
  ["V", "O Hierofante", "The Hierophant", "Tradição, aprendizado e orientação.", "Tradition, learning, and guidance.", "Busque uma referência, mas preserve sua consciência.", "Seek guidance, but keep your own awareness.", "Que ensinamento ainda faz sentido?", "Which teaching still makes sense?", "◆"],
  ["VI", "Os Enamorados", "The Lovers", "Escolhas, vínculos e alinhamento.", "Choices, bonds, and alignment.", "Escolha pelo que conversa com seus valores.", "Choose what aligns with your values.", "Que escolha aproxima você de si?", "Which choice brings you closer to yourself?", "♡"],
  ["VII", "O Carro", "The Chariot", "Direção, foco e movimento.", "Direction, focus, and movement.", "Defina o rumo antes de acelerar.", "Choose your direction before speeding up.", "Qual prioridade conduz seu dia?", "Which priority should guide your day?", "⬟"],
  ["VIII", "A Força", "Strength", "Coragem calma e gentileza firme.", "Calm courage and gentle strength.", "Avance com firmeza e doçura.", "Move forward with firmness and softness.", "Onde você pode ser firme sem se ferir?", "Where can you be firm without hurting yourself?", "∞"],
  ["IX", "O Eremita", "The Hermit", "Recolhimento, clareza interna e sentido.", "Solitude, inner clarity, and meaning.", "Faça menos barulho ao redor.", "Create less noise around you.", "Que distração impede sua escuta?", "What distraction keeps you from listening?", "◇"],
  ["X", "A Roda da Fortuna", "Wheel of Fortune", "Ciclos, mudança e movimento da vida.", "Cycles, change, and life in motion.", "Adapte-se ao que mudou.", "Adapt to what has changed.", "Que mudança pede flexibilidade?", "What change asks for flexibility?", "◎"],
  ["XI", "A Justiça", "Justice", "Equilíbrio, verdade e consequências.", "Balance, truth, and consequences.", "Seja honesta com os fatos.", "Be honest with the facts.", "O que precisa de justiça?", "What needs fairness?", "⚖"],
  ["XII", "O Enforcado", "The Hanged Man", "Pausa e nova perspectiva.", "Pause and new perspective.", "Mude o ângulo antes de insistir.", "Change the angle before insisting.", "O que muda quando você para de forçar?", "What changes when you stop forcing?", "▽"],
  ["XIII", "A Morte", "Death", "Encerramento, renovação e espaço para o novo.", "Ending, renewal, and space for the new.", "Deixe ir uma versão antiga do problema.", "Let go of an old version of the problem.", "O que já acabou?", "What has already ended?", "✧"],
  ["XIV", "A Temperança", "Temperance", "Equilíbrio, paciência e medida.", "Balance, patience, and moderation.", "Procure a medida certa.", "Look for the right measure.", "Onde trocar urgência por constância?", "Where can you trade urgency for consistency?", "≋"],
  ["XV", "O Diabo", "The Devil", "Apego, desejo e padrões repetidos.", "Attachment, desire, and repeated patterns.", "Veja o que te prende sem se condenar.", "Notice what binds you without judging yourself.", "Que hábito pede lucidez?", "Which habit needs awareness?", "●"],
  ["XVI", "A Torre", "The Tower", "Ruptura, verdade súbita e libertação.", "Disruption, sudden truth, and liberation.", "Observe o que a queda revela.", "Observe what the fall reveals.", "Que estrutura já não sustentava você?", "Which structure no longer supported you?", "▰"],
  ["XVII", "A Estrela", "The Star", "Esperança, cura e confiança no processo.", "Hope, healing, and trust in the process.", "Confie mais no seu caminho.", "Trust your path a little more.", "Onde agir com mais esperança?", "Where can you act with more hope?", "✦"],
  ["XVIII", "A Lua", "The Moon", "Sensibilidade, mistério e emoções.", "Sensitivity, mystery, and emotions.", "Não tome medo como profecia.", "Do not treat fear as prophecy.", "Que insegurança precisa de acolhimento?", "Which insecurity needs care?", "☽"],
  ["XIX", "O Sol", "The Sun", "Vitalidade, clareza e alegria.", "Vitality, clarity, and joy.", "Permita-se aparecer.", "Allow yourself to be seen.", "O que fica simples com clareza?", "What becomes simpler with clarity?", "☼"],
  ["XX", "O Julgamento", "Judgement", "Chamado interno, despertar e revisão.", "Inner calling, awakening, and review.", "Escute o chamado para mudar de fase.", "Listen to the call to enter a new phase.", "Que parte sua pede renascimento?", "Which part of you asks for rebirth?", "◌"],
  ["XXI", "O Mundo", "The World", "Conclusão, integração e ciclo completo.", "Completion, integration, and a full cycle.", "Reconheça o quanto você já atravessou.", "Recognize how much you have already crossed.", "Que conquista merece celebração?", "Which achievement deserves celebration?", "◉"],
];

const suits = {
  Paus: {
    en: "Wands",
    symbol: "♣",
    color: "#9a4f2f",
    ptTheme: "energia, ação, criatividade e coragem",
    enTheme: "energy, action, creativity, and courage",
    ptAdvice: "Aja com intenção. Sua energia precisa de direção, não de pressa.",
    enAdvice: "Act with intention. Your energy needs direction, not hurry.",
    ptQuestion: "Onde sua vontade quer movimento hoje?",
    enQuestion: "Where does your will want movement today?",
  },
  Copas: {
    en: "Cups",
    symbol: "♥",
    color: "#2f7d8c",
    ptTheme: "emoções, afeto, intuição e relações",
    enTheme: "emotions, affection, intuition, and relationships",
    ptAdvice: "Escute o coração sem abandonar seus limites.",
    enAdvice: "Listen to your heart without abandoning your boundaries.",
    ptQuestion: "O que suas emoções estão tentando comunicar?",
    enQuestion: "What are your emotions trying to communicate?",
  },
  Espadas: {
    en: "Swords",
    symbol: "♠",
    color: "#4f638b",
    ptTheme: "mente, verdade, comunicação e decisões",
    enTheme: "mind, truth, communication, and decisions",
    ptAdvice: "Procure clareza antes de reagir.",
    enAdvice: "Seek clarity before reacting.",
    ptQuestion: "Que pensamento merece ser revisado com calma?",
    enQuestion: "Which thought deserves to be reviewed calmly?",
  },
  Ouros: {
    en: "Pentacles",
    symbol: "♦",
    color: "#a77a2d",
    ptTheme: "corpo, trabalho, dinheiro e construção prática",
    enTheme: "body, work, money, and practical building",
    ptAdvice: "Cuide do concreto. Pequenas ações sustentam grandes mudanças.",
    enAdvice: "Take care of the practical. Small actions support big changes.",
    ptQuestion: "Que passo prático deixa seu dia mais firme?",
    enQuestion: "Which practical step makes your day more grounded?",
  },
};

const ranks = [
  ["Ás", "Ace", "início potente", "a powerful beginning"],
  ["Dois", "Two", "escolha e equilíbrio", "choice and balance"],
  ["Três", "Three", "crescimento e colaboração", "growth and collaboration"],
  ["Quatro", "Four", "estrutura e estabilidade", "structure and stability"],
  ["Cinco", "Five", "desafio e ajuste", "challenge and adjustment"],
  ["Seis", "Six", "harmonia e passagem", "harmony and transition"],
  ["Sete", "Seven", "avaliação e coragem", "evaluation and courage"],
  ["Oito", "Eight", "movimento e prática", "movement and practice"],
  ["Nove", "Nine", "maturidade e intensidade", "maturity and intensity"],
  ["Dez", "Ten", "fechamento e resultado", "closure and result"],
  ["Pajem", "Page", "curiosidade e aprendizado", "curiosity and learning"],
  ["Cavaleiro", "Knight", "movimento e impulso", "movement and impulse"],
  ["Rainha", "Queen", "domínio interno e cuidado", "inner mastery and care"],
  ["Rei", "King", "maturidade e liderança", "maturity and leadership"],
];

const themeKey = "tarot-tema";
const dailyKey = "tarot-carta-do-dia";
const languageKey = "tarot-idioma";

let currentLanguage = loadLanguage();
let activeDeckFilter = "todos";

const cards = [
  ...majorArcana.map(([number, ptName, enName, ptMeaning, enMeaning, ptAdvice, enAdvice, ptReflection, enReflection, symbol]) => ({
    arcana: "Maior",
    number,
    symbol,
    color: "#7a3f71",
    name: { pt: ptName, en: enName },
    meaning: { pt: ptMeaning, en: enMeaning },
    advice: { pt: ptAdvice, en: enAdvice },
    reflection: { pt: ptReflection, en: enReflection },
  })),
  ...Object.entries(suits).flatMap(([suit, data]) =>
    ranks.map(([ptRank, enRank, ptEssence, enEssence], index) => ({
      arcana: "Menor",
      suit,
      suitEn: data.en,
      number: String(index + 1),
      symbol: data.symbol,
      color: data.color,
      name: {
        pt: `${ptRank} de ${suit}`,
        en: `${enRank} of ${data.en}`,
      },
      meaning: {
        pt: `${capitalize(ptEssence)} no campo de ${data.ptTheme}.`,
        en: `${capitalize(enEssence)} in the field of ${data.enTheme}.`,
      },
      advice: {
        pt: data.ptAdvice,
        en: data.enAdvice,
      },
      reflection: {
        pt: data.ptQuestion,
        en: data.enQuestion,
      },
    }))
  ),
];

const cardImage = document.querySelector("#cardImage");
const cardTitle = document.querySelector("#cardTitle");
const cardMeaning = document.querySelector("#cardMeaning");
const cardAdvice = document.querySelector("#cardAdvice");
const cardReflection = document.querySelector("#cardReflection");
const readingType = document.querySelector("#readingType");
const dailyButton = document.querySelector("#dailyButton");
const freeDrawButton = document.querySelector("#freeDrawButton");
const themeToggle = document.querySelector("#themeToggle");
const languageSelect = document.querySelector("#languageSelect");
const deckGrid = document.querySelector("#deckGrid");
const deckFilters = document.querySelectorAll(".deck-filter");

function t(key) {
  return translations[currentLanguage][key];
}

function value(card, key) {
  return card[key][currentLanguage];
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function cardForToday() {
  const saved = loadDailyCard();

  if (saved && saved.date === todayKey()) {
    return cards[saved.index] || cards[0];
  }

  const index = Math.floor(Math.random() * cards.length);
  saveDailyCard(index);
  return cards[index];
}

function loadDailyCard() {
  try {
    return JSON.parse(localStorage.getItem(dailyKey));
  } catch {
    return null;
  }
}

function saveDailyCard(index) {
  try {
    localStorage.setItem(dailyKey, JSON.stringify({ date: todayKey(), index }));
  } catch {}
}

function randomCard() {
  return cards[Math.floor(Math.random() * cards.length)];
}

function cardImageSrc(card) {
  const name = escapeXml(value(card, "name"));
  const arcana = card.arcana === "Maior" ? t("majorArcana") : `${t("minorArcana")} • ${currentLanguage === "pt" ? card.suit : card.suitEn}`;
  const symbol = escapeXml(card.symbol);
  const color = card.color;
  const smallMarks = card.arcana === "Maior"
    ? symbol
    : Array.from({ length: Math.min(Number(card.number), 10) || 4 }, () => symbol).join(" ");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 630">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fff8eb"/>
          <stop offset="0.52" stop-color="#f1e4cf"/>
          <stop offset="1" stop-color="#e9d3c2"/>
        </linearGradient>
        <radialGradient id="orb" cx="50%" cy="42%" r="45%">
          <stop offset="0" stop-color="${color}" stop-opacity="0.28"/>
          <stop offset="1" stop-color="${color}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="420" height="630" rx="26" fill="#281b29"/>
      <rect x="18" y="18" width="384" height="594" rx="20" fill="url(#bg)" stroke="#c8984d" stroke-width="4"/>
      <rect x="38" y="38" width="344" height="554" rx="14" fill="none" stroke="${color}" stroke-opacity="0.46" stroke-width="2"/>
      <circle cx="210" cy="270" r="138" fill="url(#orb)"/>
      <text x="58" y="78" font-family="Georgia, serif" font-size="26" font-weight="700" fill="${color}">${escapeXml(card.number)}</text>
      <text x="210" y="257" text-anchor="middle" font-family="Georgia, serif" font-size="112" fill="${color}">${symbol}</text>
      <text x="210" y="350" text-anchor="middle" font-family="Georgia, serif" font-size="26" fill="#6e532b">${escapeXml(smallMarks)}</text>
      <line x1="92" y1="420" x2="328" y2="420" stroke="#c8984d" stroke-width="3"/>
      <text x="210" y="472" text-anchor="middle" font-family="Georgia, serif" font-size="31" font-weight="700" fill="#2a2420">${name}</text>
      <text x="210" y="520" text-anchor="middle" font-family="Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="1.5" fill="${color}">${escapeXml(arcana)}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderCard(card, typeKey) {
  cardImage.src = cardImageSrc(card);
  cardImage.alt = `${currentLanguage === "pt" ? "Imagem da carta" : "Image of the card"} ${value(card, "name")}`;
  cardTitle.textContent = value(card, "name");
  cardMeaning.textContent = value(card, "meaning");
  cardAdvice.textContent = value(card, "advice");
  cardReflection.textContent = value(card, "reflection");
  readingType.textContent = t(typeKey);
}

function renderDeck() {
  deckGrid.innerHTML = "";

  cards
    .filter((card) =>
      activeDeckFilter === "todos" ||
      card.arcana === activeDeckFilter ||
      card.suit === activeDeckFilter
    )
    .forEach((card) => {
      const button = document.createElement("button");
      button.className = "mini-card";
      button.type = "button";

      button.addEventListener("click", () => {
        renderCard(card, "chosenCard");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      const image = document.createElement("img");
      image.src = cardImageSrc(card);
      image.alt = `${currentLanguage === "pt" ? "Imagem da carta" : "Image of the card"} ${value(card, "name")}`;

      const name = document.createElement("strong");
      name.textContent = value(card, "name");

      const label = document.createElement("span");
      label.textContent = card.arcana === "Maior"
        ? t("majorArcana")
        : `${t("minorArcana")} · ${currentLanguage === "pt" ? card.suit : card.suitEn}`;

      button.append(image, name, label);
      deckGrid.append(button);
    });
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage === "pt" ? "pt-BR" : "en";
  languageSelect.value = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  dailyButton.textContent = t("dailyButton");
  freeDrawButton.textContent = t("freeDrawButton");
  applyTheme(loadTheme());
}

function loadLanguage() {
  try {
    return localStorage.getItem(languageKey) || "pt";
  } catch {
    return "pt";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem(languageKey, language);
  } catch {}
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-theme", isDark);
  themeToggle.textContent = isDark ? t("lightMode") : t("darkMode");
}

function loadTheme() {
  try {
    return localStorage.getItem(themeKey) || "light";
  } catch {
    return "light";
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(themeKey, theme);
  } catch {}
}

dailyButton.addEventListener("click", () => {
  renderCard(cardForToday(), "dailyCard");
});

freeDrawButton.addEventListener("click", () => {
  renderCard(randomCard(), "freeDraw");
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
  applyTheme(nextTheme);
  saveTheme(nextTheme);
});

languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  saveLanguage(currentLanguage);
  applyLanguage();
  renderCard(cardForToday(), "dailyCard");
  renderDeck();
});

deckFilters.forEach((button) => {
  button.addEventListener("click", () => {
    deckFilters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeDeckFilter = button.dataset.filter;
    renderDeck();
  });
});

applyLanguage();
renderCard(cardForToday(), "dailyCard");
renderDeck(); 
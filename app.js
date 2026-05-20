const majorArcana = [
  ["0", "O Louco", "Começos, coragem e abertura para o desconhecido.", "Dê um passo simples antes de tentar prever o caminho inteiro.", "Onde você pode experimentar mais e controlar menos hoje?", "☀"],
  ["I", "O Mago", "Ação, habilidade e poder de transformar intenção em movimento.", "Use o que você já tem em mãos. A ferramenta principal é sua presença.", "Qual atitude pequena pode transformar sua energia agora?", "✦"],
  ["II", "A Sacerdotisa", "Intuição, silêncio e sabedoria que amadurece por dentro.", "Antes de responder, escute. Nem toda verdade precisa ser apressada.", "Que resposta você já sabe, mas ainda não quis admitir?", "☾"],
  ["III", "A Imperatriz", "Criação, cuidado, prazer e crescimento natural.", "Cuide do que você quer ver florescer. Atenção também é alimento.", "O que precisa de mais carinho e menos cobrança?", "✿"],
  ["IV", "O Imperador", "Estrutura, decisão, limites e responsabilidade.", "Organize uma parte do caos. Um limite bem colocado protege sua energia.", "Onde falta estrutura para sua vontade conseguir agir?", "▲"],
  ["V", "O Hierofante", "Tradição, aprendizado, orientação e valores compartilhados.", "Busque uma referência confiável, mas preserve sua própria consciência.", "Que ensinamento vale seguir e qual já ficou pequeno?", "◆"],
  ["VI", "Os Enamorados", "Escolhas, vínculos e alinhamento entre desejo e valor.", "Escolha pelo que conversa com seus valores, não só pelo impulso do momento.", "Que escolha aproxima você da pessoa que quer se tornar?", "♡"],
  ["VII", "O Carro", "Direção, foco e movimento apesar das tensões.", "Defina o rumo antes de acelerar. Energia sem direção vira cansaço.", "Qual é a prioridade que merece conduzir seu dia?", "⬟"],
  ["VIII", "A Força", "Coragem calma, autocontrole e gentileza firme.", "Não confunda força com dureza. Hoje, avance com firmeza e doçura.", "Em qual situação você pode ser firme sem se ferir?", "∞"],
  ["IX", "O Eremita", "Recolhimento, clareza interna e busca por sentido.", "Faça menos barulho ao redor para ouvir melhor o que importa.", "Que distração está impedindo você de se escutar?", "◇"],
  ["X", "A Roda da Fortuna", "Ciclos, mudança e movimento inevitável da vida.", "Adapte-se ao que mudou. Resistir ao ciclo só aumenta o atrito.", "Que mudança pede mais flexibilidade da sua parte?", "◎"],
  ["XI", "A Justiça", "Equilíbrio, verdade, escolhas e consequências.", "Seja honesta com os fatos. Clareza também é uma forma de cuidado.", "O que precisa ser visto com mais justiça hoje?", "⚖"],
  ["XII", "O Enforcado", "Pausa, nova perspectiva e rendição inteligente.", "Mude o ângulo antes de insistir na mesma resposta.", "O que fica diferente quando você para de forçar?", "▽"],
  ["XIII", "A Morte", "Encerramento, renovação e espaço para o novo.", "Deixe ir uma versão antiga do problema. O fim também abre caminho.", "O que já acabou, mas você ainda tenta carregar?", "✧"],
  ["XIV", "A Temperança", "Equilíbrio, paciência e mistura cuidadosa de forças.", "Procure a medida certa. Nem tudo precisa ser intenso para ser verdadeiro.", "Onde você pode trocar urgência por constância?", "≋"],
  ["XV", "O Diabo", "Apego, desejo, padrões repetidos e consciência da própria sombra.", "Veja o que te prende sem se condenar. Nomear o padrão já abre espaço.", "Que hábito pede mais lucidez da sua parte?", "●"],
  ["XVI", "A Torre", "Ruptura, verdade súbita e libertação de estruturas frágeis.", "Se algo caiu, observe o que essa queda está revelando.", "Que estrutura já não sustentava você de verdade?", "▰"],
  ["XVII", "A Estrela", "Esperança, cura e confiança no processo.", "Confie mais no seu caminho. Nem tudo precisa estar resolvido hoje.", "Onde você pode agir com mais esperança e menos pressa?", "✦"],
  ["XVIII", "A Lua", "Sensibilidade, mistério e emoções que pedem cuidado.", "Não tome medo como profecia. Observe antes de concluir.", "Que insegurança precisa de acolhimento, não de comando?", "☽"],
  ["XIX", "O Sol", "Vitalidade, clareza, alegria e expressão verdadeira.", "Permita-se aparecer. Sua luz não precisa pedir desculpas.", "O que fica mais simples quando você escolhe clareza?", "☼"],
  ["XX", "O Julgamento", "Chamado interno, despertar e revisão profunda.", "Escute o chamado para mudar de fase. Você não precisa caber no antigo roteiro.", "Que parte sua está pedindo renascimento?", "◌"],
  ["XXI", "O Mundo", "Conclusão, integração e sensação de ciclo completo.", "Reconheça o quanto você já atravessou antes de correr para o próximo passo.", "Que conquista merece ser celebrada, mesmo que pareça pequena?", "◉"],
];

const suits = {
  Paus: {
    symbol: "♣",
    color: "#9a4f2f",
    theme: "energia, ação, criatividade e coragem",
    advice: "Aja com intenção. Sua energia precisa de direção, não de pressa.",
    question: "Onde sua vontade quer movimento hoje?",
  },
  Copas: {
    symbol: "♥",
    color: "#2f7d8c",
    theme: "emoções, afeto, intuição e relações",
    advice: "Escute o coração sem abandonar seus limites.",
    question: "O que suas emoções estão tentando comunicar?",
  },
  Espadas: {
    symbol: "♠",
    color: "#4f638b",
    theme: "mente, verdade, comunicação e decisões",
    advice: "Procure clareza antes de reagir. Uma boa pergunta muda tudo.",
    question: "Que pensamento merece ser revisado com calma?",
  },
  Ouros: {
    symbol: "♦",
    color: "#a77a2d",
    theme: "corpo, trabalho, dinheiro e construção prática",
    advice: "Cuide do concreto. Pequenas ações sustentam grandes mudanças.",
    question: "Que passo prático deixa seu dia mais firme?",
  },
};

const ranks = [
  ["Ás", "início potente"],
  ["Dois", "escolha e equilíbrio"],
  ["Três", "crescimento e colaboração"],
  ["Quatro", "estrutura e estabilidade"],
  ["Cinco", "desafio e ajuste"],
  ["Seis", "harmonia e passagem"],
  ["Sete", "avaliação e coragem"],
  ["Oito", "movimento e prática"],
  ["Nove", "maturidade e intensidade"],
  ["Dez", "fechamento e resultado"],
  ["Pajem", "curiosidade e aprendizado"],
  ["Cavaleiro", "movimento e impulso"],
  ["Rainha", "domínio interno e cuidado"],
  ["Rei", "maturidade e liderança"],
];

const themeKey = "tarot-tema";
const dailyKey = "tarot-carta-do-dia";

const cards = [
  ...majorArcana.map(([number, name, meaning, advice, reflection, symbol]) => ({
    id: `maior-${number}`,
    arcana: "Maior",
    number,
    name,
    symbol,
    meaning,
    advice,
    reflection,
    color: "#7a3f71",
  })),
  ...Object.entries(suits).flatMap(([suit, data]) =>
    ranks.map(([rank, essence], index) => ({
      id: `${suit}-${rank}`,
      arcana: "Menor",
      suit,
      number: String(index + 1),
      name: `${rank} de ${suit}`,
      symbol: data.symbol,
      meaning: `${essence.charAt(0).toUpperCase() + essence.slice(1)} no campo de ${data.theme}.`,
      advice: data.advice,
      reflection: data.question,
      color: data.color,
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
const deckGrid = document.querySelector("#deckGrid");
const deckFilters = document.querySelectorAll(".deck-filter");

let activeDeckFilter = "todos";

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
  const safeName = escapeXml(card.name);
  const safeArcana = escapeXml(card.arcana === "Maior" ? "Arcano Maior" : `Arcano Menor • ${card.suit}`);
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
      <text x="210" y="472" text-anchor="middle" font-family="Georgia, serif" font-size="31" font-weight="700" fill="#2a2420">${safeName}</text>
      <text x="210" y="520" text-anchor="middle" font-family="Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="1.5" fill="${color}">${safeArcana}</text>
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

function renderCard(card, type) {
  cardImage.src = cardImageSrc(card);
  cardImage.alt = `Imagem da carta ${card.name}`;
  cardTitle.textContent = card.name;
  cardMeaning.textContent = card.meaning;
  cardAdvice.textContent = card.advice;
  cardReflection.textContent = card.reflection;
  readingType.textContent = type;
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
        renderCard(card, "Carta escolhida");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      const image = document.createElement("img");
      image.src = cardImageSrc(card);
      image.alt = `Imagem da carta ${card.name}`;

      const name = document.createElement("strong");
      name.textContent = card.name;

      const label = document.createElement("span");
      label.textContent = card.arcana === "Maior"
        ? "Arcano Maior"
        : `Arcano Menor · ${card.suit}`;

      button.append(image, name, label);
      deckGrid.append(button);
    });
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-theme", isDark);
  themeToggle.textContent = isDark ? "Modo claro" : "Modo escuro";
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
  renderCard(cardForToday(), "Carta do dia");
});

freeDrawButton.addEventListener("click", () => {
  renderCard(randomCard(), "Sorteio livre");
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
  applyTheme(nextTheme);
  saveTheme(nextTheme);
});

deckFilters.forEach((button) => {
  button.addEventListener("click", () => {
    deckFilters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeDeckFilter = button.dataset.filter;
    renderDeck();
  });
});

applyTheme(loadTheme());
renderCard(cardForToday(), "Carta do dia");
renderDeck();
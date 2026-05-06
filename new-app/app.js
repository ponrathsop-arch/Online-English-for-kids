// Vocabinder state and rendering. VOCAB_DECKS is loaded from ./data/vocab.js.
const deckNames = {
  sports: "Sports",
  placesInTown: "Places in Town",
  symptoms: "Symptoms",
  occupations: "Occupations",
  storyWords: "Story Words",
  cvcWords: "CVC Words",
  houseWords: "House Words"
};

const state = {
  activeDeck: "sports",
  activeIndex: 0
};

const deckList = document.querySelector("#deckList");
const activeDeckLabel = document.querySelector("#activeDeckLabel");
const vocabWord = document.querySelector("#vocabWord");
const vocabMeaning = document.querySelector("#vocabMeaning");
const vocabSentence = document.querySelector("#vocabSentence");
const vocabImage = document.querySelector("#vocabImage");
const imagePlaceholder = document.querySelector("#imagePlaceholder");
const cardCount = document.querySelector("#cardCount");
const prevCard = document.querySelector("#prevCard");
const nextCard = document.querySelector("#nextCard");

function formatDeckName(deckKey) {
  return deckNames[deckKey] || deckKey.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase());
}

function getActiveDeck() {
  return VOCAB_DECKS[state.activeDeck] || [];
}

function renderDeckButtons() {
  deckList.innerHTML = "";

  Object.keys(VOCAB_DECKS).forEach((deckKey) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `deck-button${deckKey === state.activeDeck ? " active" : ""}`;
    button.textContent = formatDeckName(deckKey);
    button.setAttribute("aria-pressed", deckKey === state.activeDeck ? "true" : "false");

    button.addEventListener("click", () => {
      state.activeDeck = deckKey;
      state.activeIndex = 0;
      renderVocabinder();
    });

    deckList.appendChild(button);
  });
}

function renderCard() {
  const deck = getActiveDeck();
  const card = deck[state.activeIndex];

  if (!card) {
    activeDeckLabel.textContent = "No deck selected";
    vocabWord.textContent = "Add words";
    vocabMeaning.textContent = "Add vocabulary cards in data/vocab.js to start reviewing.";
    vocabSentence.textContent = "";
    cardCount.textContent = "0 / 0";
    vocabImage.removeAttribute("src");
    vocabImage.alt = "";
    imagePlaceholder.hidden = false;
    return;
  }

  activeDeckLabel.textContent = formatDeckName(state.activeDeck);
  vocabWord.textContent = card.word;
  vocabMeaning.textContent = card.meaning;
  vocabSentence.textContent = card.sentence;
  cardCount.textContent = `${state.activeIndex + 1} / ${deck.length}`;

  imagePlaceholder.hidden = true;
  vocabImage.hidden = false;
  vocabImage.src = card.image;
  vocabImage.alt = `${card.word} vocabulary picture`;
}

function moveCard(direction) {
  const deck = getActiveDeck();

  if (!deck.length) {
    return;
  }

  state.activeIndex = (state.activeIndex + direction + deck.length) % deck.length;
  renderCard();
}

function renderVocabinder() {
  renderDeckButtons();
  renderCard();
}

vocabImage.addEventListener("error", () => {
  vocabImage.hidden = true;
  imagePlaceholder.hidden = false;
});

prevCard.addEventListener("click", () => moveCard(-1));
nextCard.addEventListener("click", () => moveCard(1));

renderVocabinder();

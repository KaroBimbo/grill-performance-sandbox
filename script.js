const stickerIcons = {
  salmon: `
    <svg class="sticker-svg red-fish-sticker" viewBox="0 0 96 96" aria-hidden="true">
      <path d="M21 50 7 34c11 2 18 7 22 16-4 9-11 14-22 16Z" fill="#C83A2F"/>
      <path d="M24 51c8-18 28-28 48-21 9 3 15 10 19 20-4 10-10 17-19 20-20 7-40-1-48-19Z" fill="#E85B4A"/>
      <path d="M57 31c2-7 8-13 17-16-1 10-5 17-12 22Z" fill="#D94A32"/>
      <path d="M57 69c2 7 8 13 17 16-1-10-5-17-12-22Z" fill="#D94A32"/>
      <path d="M36 42c8-5 20-7 33-3" fill="none" stroke="#FFE2D0" stroke-width="6" stroke-linecap="round"/>
      <path d="M34 58c10 7 23 8 36 2" fill="none" stroke="#B82D24" stroke-width="5" stroke-linecap="round"/>
      <circle cx="72" cy="47" r="4" fill="#2D2218"/>
      <circle cx="73" cy="46" r="1.3" fill="#FFF7E8"/>
    </svg>
  `,
  flour: `
    <svg class="sticker-svg flour-sticker" viewBox="0 0 96 96" aria-hidden="true">
      <path d="M28 28h40l7 50c1 6-4 11-10 11H31c-6 0-11-5-10-11l7-50Z" fill="#FFF7E8"/>
      <path d="M30 28c3-12 33-12 36 0" fill="#F5E6C8"/>
      <path d="M28 28h40l3 19c-15 8-31 8-46 0l3-19Z" fill="#F5E6C8"/>
      <path d="M34 56c9 5 19 5 28 0" fill="none" stroke="#D9B782" stroke-width="4" stroke-linecap="round"/>
      <path d="M37 67h22" stroke="#D9B782" stroke-width="4" stroke-linecap="round"/>
      <circle cx="42" cy="45" r="3" fill="#E7CAA0"/>
      <circle cx="54" cy="43" r="2.5" fill="#E7CAA0"/>
    </svg>
  `,
  zucchini: `
    <svg class="sticker-svg zucchini-sticker" viewBox="0 0 96 96" aria-hidden="true">
      <path d="M25 66c18 9 46-6 56-33-22-5-51 5-62 24-3 5 1 8 6 9Z" fill="#78A947"/>
      <path d="M32 62c17 1 34-9 43-25" fill="none" stroke="#DDF0A5" stroke-width="6" stroke-linecap="round"/>
      <path d="M72 30c3-7 8-11 15-13-1 8-5 13-12 17Z" fill="#3F7D4A"/>
      <path d="M21 60c-4 1-9 0-13-3 5-3 10-4 15-2Z" fill="#5E8F35"/>
      <circle cx="42" cy="55" r="2.5" fill="#5F8F34"/>
      <circle cx="55" cy="49" r="2.5" fill="#5F8F34"/>
    </svg>
  `,
};

const ingredients = [
  { id: "cheese", name: "Сыр", icon: "🧀", color: "#ffe49c" },
  { id: "tomato", name: "Томаты", icon: "🍅", color: "#ffe0d9" },
  { id: "pepper", name: "Перец", icon: "🫑", color: "#dcf5de" },
  { id: "mushroom", name: "Грибы", icon: "🍄", color: "#efe4da" },
  { id: "chicken", name: "Курица", icon: "🍗", color: "#ffe1c7" },
  { id: "corn", name: "Кукуруза", icon: "🌽", color: "#fff4b9" },
  { id: "herbs", name: "Зелень", icon: "🌿", color: "#dff3de" },
  { id: "eggplant", name: "Баклажан", icon: "🍆", color: "#eadff5" },
  { id: "carrot", name: "Морковь", icon: "🥕", color: "#ffe1c2" },
  { id: "potato", name: "Картофель", icon: "🥔", color: "#eee0c3" },
  { id: "onion", name: "Лук", icon: "🧅", color: "#f3e3ff" },
  { id: "garlic", name: "Чеснок", icon: "🧄", color: "#fff4dc" },
  { id: "bacon", name: "Бекон", icon: "🥓", color: "#ffd9d0" },
  { id: "shrimp", name: "Креветки", icon: "🍤", color: "#ffe0cf" },
  { id: "avocado", name: "Авокадо", icon: "🥑", color: "#dff0bf" },
  { id: "lemon", name: "Лимон", icon: "🍋", color: "#fff7a8" },
  { id: "chili", name: "Чили", icon: "🌶️", color: "#ffd1c8" },
  { id: "cucumber", name: "Огурец", icon: "🥒", color: "#d8f1cd" },
  { id: "sauce", name: "Соус", icon: "🥫", color: "#ffd8c7" },
  { id: "bread", name: "Хлеб", icon: "🍞", color: "#ffe4bd" },
  { id: "pineapple", name: "Ананас", icon: "🍍", color: "#fff1a7" },
  { id: "fish", name: "Рыба", icon: "🐟", color: "#dcefff" },
  { id: "salmon", name: "Лосось", icon: stickerIcons.salmon, color: "#ffd6c8" },
  { id: "beef", name: "Говядина", icon: "🥩", color: "#ffd0c8" },
  { id: "pork", name: "Свинина", icon: "🍖", color: "#ffd9cc" },
  { id: "cream", name: "Сливки", icon: "🥛", color: "#fff8e8" },
  { id: "butter", name: "Масло", icon: "🧈", color: "#fff2b8" },
  { id: "flour", name: "Мука", icon: stickerIcons.flour, color: "#fff4dc" },
  { id: "zucchini", name: "Кабачок", icon: stickerIcons.zucchini, color: "#dff0bf" },
  { id: "rice", name: "Рис", icon: "🍚", color: "#f7f5ed" },
  { id: "beans", name: "Фасоль", icon: "🫘", color: "#ead0c0" },
  { id: "peas", name: "Горошек", icon: "🫛", color: "#d9f2c5" },
];

const recipes = [
  {
    title: "Сырные томаты с базиликом",
    time: 15,
    cookTime: "12–15 мин",
    temperature: "180°C",
    tag: "быстрый вариант",
    needs: ["cheese", "tomato", "herbs", "butter"],
    icon: "🧀",
    image: "assets/recipes/cheesy-tomatoes.jpg",
    tones: ["#F5E6C8", "#D94A32"],
    text: "Томаты под мягкой сырной корочкой, базилик и капля масла для быстрого вечера.",
    steps: [
      "Разрежьте томаты пополам и выложите в форму.",
      "Добавьте сыр, зелень и маленький кусочек масла.",
      "Посолите и распределите всё одним слоем.",
      "Готовьте в аэрогриле при 180°C 12–15 минут.",
    ],
    tip: "Если нет томатов, возьмите сладкий перец или ложку густого томатного соуса.",
  },
  {
    title: "Грибной уют с перцем и зеленью",
    time: 25,
    cookTime: "18–22 мин",
    temperature: "175°C",
    tag: "сырно и уютно",
    needs: ["mushroom", "pepper", "herbs", "cheese"],
    icon: "🍄",
    image: "assets/recipes/mushroom-pepper-bake.jpg",
    tones: ["#F5E6C8", "#6F8F3A"],
    text: "Мягкий, домашний вкус для спокойного вечера и красивой подачи на доске.",
    steps: [
      "Нарежьте грибы и перец небольшими кусочками.",
      "Смешайте с маслом, зеленью и щепоткой соли.",
      "Выложите в форму и добавьте немного сыра сверху.",
      "Готовьте при 175°C 18–22 минуты, один раз встряхнув корзину.",
    ],
    tip: "Если грибов мало, добавьте лук или картофель тонкими ломтиками.",
  },
  {
    title: "Праздничный гриль с курицей и кукурузой",
    time: 40,
    cookTime: "24–28 мин",
    temperature: "185°C",
    tag: "лучший для компании",
    needs: ["chicken", "corn", "cheese", "garlic"],
    icon: "🍗",
    image: "assets/recipes/chicken-corn-cheese.jpg",
    tones: ["#F4B84A", "#D94A32"],
    text: "Сытный рецепт для большой компании: сладкая кукуруза, курица и сырная корочка.",
    steps: [
      "Нарежьте курицу небольшими кусочками и смешайте со специями.",
      "Добавьте кукурузу, сыр и немного масла.",
      "Разложите всё в корзине аэрогриля без высокой горки.",
      "Готовьте при 185°C 24–28 минут до румяности.",
    ],
    tip: "Если нет кукурузы, замените её сладким перцем или горошком.",
  },
  {
    title: "Овощной конфетти-микс",
    time: 25,
    cookTime: "16–20 мин",
    temperature: "180°C",
    tag: "овощной вайб",
    needs: ["tomato", "pepper", "corn", "herbs", "eggplant"],
    icon: "🌽",
    image: "assets/recipes/vegetable-confetti.jpg",
    tones: ["#F4B84A", "#3F7D4A"],
    text: "Цветной, легкий и очень фотогеничный набор для веселой готовки.",
    steps: [
      "Нарежьте овощи крупными, но одинаковыми кусочками.",
      "Перемешайте с маслом, зеленью и щепоткой специй.",
      "Разложите на пергаменте или в форме.",
      "Готовьте при 180°C 16–20 минут до лёгкого хруста.",
    ],
    tip: "Если хочется сытнее, добавьте сыр за 3 минуты до конца.",
  },
  {
    title: "Хрустящие хлебные кусочки с сыром",
    time: 15,
    cookTime: "10–12 мин",
    temperature: "180°C",
    tag: "детский хит",
    needs: ["bread", "cheese", "herbs", "butter"],
    icon: "🍞",
    image: "assets/recipes/crispy-bread-cheese.jpg",
    tones: ["#F4B84A", "#F5E6C8"],
    text: "Когда хочется быстро, тепло и с большим соусником рядом.",
    steps: [
      "Нарежьте хлеб крупными кусочками.",
      "Смешайте с маслом, сыром и зеленью.",
      "Готовьте при 180°C 10–12 минут.",
      "Подавайте с тёплым сырным соусом.",
    ],
    tip: "Если сыра мало, смешайте его со сливками или кусочком масла.",
  },
  {
    title: "Мини-лепёшки с сыром и зеленью",
    time: 25,
    cookTime: "12–16 мин",
    temperature: "180°C",
    tag: "сырно и уютно",
    needs: ["flour", "cheese", "butter", "herbs"],
    icon: stickerIcons.flour,
    image: "assets/recipes/mini-flatbreads-cheese.jpg",
    tones: ["#F5E6C8", "#F4B84A"],
    text: "Маленькие домашние лепёшки с мягкой сырной серединкой и тёплой корочкой.",
    steps: [
      "Смешайте муку с щепоткой соли и небольшим количеством воды.",
      "Добавьте сыр, зелень и кусочек масла.",
      "Сформируйте маленькие плоские лепёшки.",
      "Готовьте при 180°C 12–16 минут до золотистого края.",
    ],
    tip: "Если тесто липнет, добавьте ещё немного муки или смажьте руки маслом.",
  },
  {
    title: "Кабачок с сыром и чесноком",
    time: 25,
    cookTime: "14–18 мин",
    temperature: "180°C",
    tag: "овощной вайб",
    needs: ["zucchini", "cheese", "garlic", "herbs"],
    icon: stickerIcons.zucchini,
    image: "assets/recipes/zucchini-cheese-garlic.jpg",
    tones: ["#6F8F3A", "#F5E6C8"],
    text: "Нежный кабачок с сырной корочкой, чесноком и зеленью.",
    steps: [
      "Нарежьте кабачок кружочками или брусочками.",
      "Смешайте с чесноком, зеленью и каплей масла.",
      "Посыпьте сыром.",
      "Готовьте при 180°C 14–18 минут.",
    ],
    tip: "Если кабачок дал много сока, готовьте последние 3 минуты чуть горячее.",
  },
  {
    title: "Большая тарелка все-в-наличии",
    time: 40,
    cookTime: "25–30 мин",
    temperature: "175°C",
    tag: "праздничная тарелка",
    needs: ["cheese", "tomato", "pepper", "mushroom", "herbs", "chicken"],
    icon: "🍅",
    tones: ["#D94A32", "#6F8F3A"],
    text: "Рецепт для тех, кто любит щедро: много начинки, ароматные травы и насыщенный вкус.",
    steps: [
      "Подготовьте овощи и грибы отдельно, чтобы кусочки были одного размера.",
      "Смешайте с курицей, сыром, маслом и травами.",
      "Готовьте партиями, если корзина маленькая.",
      "Держите готовую часть тёплой и добавьте свежую зелень перед подачей.",
    ],
    tip: "Если набор получился слишком сочным, готовьте первые 10 минут без соуса.",
  },
  {
    title: "Сливочная рыба с лимоном",
    time: 25,
    cookTime: "14–18 мин",
    temperature: "170°C",
    tag: "нежный вариант",
    needs: ["fish", "cream", "lemon", "herbs", "butter"],
    icon: "🐟",
    image: "assets/recipes/creamy-fish-lemon.jpg",
    tones: ["#F5E6C8", "#2F5D9C"],
    text: "Нежный вариант с лимонной свежестью, сливочным соусом и мягким ароматом специй.",
    steps: [
      "Смешайте сливки, лимонный сок и специи.",
      "Добавьте рыбу и аккуратно перемешайте.",
      "Выложите в небольшую форму для аэрогриля.",
      "Готовьте при 170°C 14–18 минут, чтобы рыба осталась сочной.",
    ],
    tip: "Если нет сливок, используйте йогурт без сахара или немного сливочного масла.",
  },
  {
    title: "Говяжий гриль с перцем и специями",
    time: 40,
    cookTime: "18–24 мин",
    temperature: "190°C",
    tag: "сытный вариант",
    needs: ["beef", "pepper", "onion", "garlic", "butter"],
    icon: "🥩",
    image: "assets/recipes/beef-pepper-garlic.jpg",
    tones: ["#D94A32", "#2D2218"],
    text: "Более насыщенный вкус: мясо, сладкий перец, лук и пряная корочка.",
    steps: [
      "Нарежьте говядину тонкими полосками.",
      "Смешайте с луком, перцем, маслом и специями.",
      "Разложите тонким слоем, чтобы кусочки жарились, а не тушились.",
      "Готовьте при 190°C 18–24 минуты, перемешав в середине.",
    ],
    tip: "Если говядина плотная, добавьте ложку соуса и оставьте на 10 минут перед готовкой.",
  },
  {
    title: "Свинина в сливочно-чесночном настроении",
    time: 25,
    cookTime: "15–18 мин",
    temperature: "180°C",
    tag: "домашний уют",
    needs: ["pork", "cream", "garlic", "onion", "herbs"],
    icon: "🍖",
    image: "assets/recipes/pork-creamy-garlic.jpg",
    tones: ["#F5E6C8", "#D94A32"],
    text: "Мягкий домашний рецепт для вечера без спешки.",
    steps: [
      "Нарежьте свинину небольшими кусочками.",
      "Смешайте со сливками, чесноком, солью и щепоткой специй.",
      "Выложите в форму или на пергамент.",
      "Готовьте в аэрогриле при 180°C 15–18 минут.",
      "Один раз перемешайте в середине приготовления.",
    ],
    tip: "Если нет сливок, используйте йогурт без сахара или немного сливочного масла.",
  },
  {
    title: "Лосось с лимоном и зеленью",
    time: 25,
    cookTime: "12–16 мин",
    temperature: "175°C",
    tag: "нежный вариант",
    needs: ["salmon", "lemon", "herbs", "butter"],
    icon: stickerIcons.salmon,
    image: "assets/recipes/salmon-lemon-herbs.jpg",
    tones: ["#F5E6C8", "#2F5D9C"],
    text: "Сочная рыба, лимонная свежесть и мягкий аромат зелени.",
    steps: [
      "Посолите лосось и добавьте специи.",
      "Положите рядом ломтики лимона и зелень.",
      "Слегка смажьте рыбу маслом.",
      "Готовьте при 175°C 12–16 минут.",
    ],
    tip: "Если нет лосося, подойдёт любая плотная рыба.",
  },
  {
    title: "Креветки с чесноком и чили",
    time: 15,
    cookTime: "7–10 мин",
    temperature: "180°C",
    tag: "быстрый вариант",
    needs: ["shrimp", "garlic", "chili", "lemon", "herbs"],
    icon: "🍤",
    image: "assets/recipes/shrimp-garlic-chili.jpg",
    tones: ["#F4B84A", "#D94A32"],
    text: "Быстрая средиземноморская тарелка с лёгкой остротой.",
    steps: [
      "Смешайте креветки с чесноком, чили и лимоном.",
      "Добавьте немного масла и зелени.",
      "Выложите одним слоем.",
      "Готовьте при 180°C 7–10 минут.",
    ],
    tip: "Если не хочется остроты, замените чили сладким перцем.",
  },
  {
    title: "Картофель с маслом и специями",
    time: 25,
    cookTime: "20–24 мин",
    temperature: "190°C",
    tag: "быстро и хрустяще",
    needs: ["potato", "butter", "garlic", "herbs"],
    icon: "🥔",
    image: "assets/recipes/potatoes-butter-herbs.jpg",
    tones: ["#F4B84A", "#6F8F3A"],
    text: "Золотистый картофель с хрустящими краями и мягкой серединкой.",
    steps: [
      "Нарежьте картофель дольками.",
      "Смешайте с маслом, специями и зеленью.",
      "Разложите в корзине одним слоем.",
      "Готовьте при 190°C 20–24 минуты, встряхнув в середине.",
    ],
    tip: "Если нет масла, используйте ложку оливкового масла или сливки для мягкости.",
  },
  {
    title: "Баклажан с томатами и сыром",
    time: 25,
    cookTime: "18–22 мин",
    temperature: "180°C",
    tag: "овощной вайб",
    needs: ["eggplant", "tomato", "cheese", "garlic", "herbs"],
    icon: "🍆",
    image: "assets/recipes/eggplant-tomato-cheese.jpg",
    tones: ["#6F8F3A", "#D94A32"],
    text: "Мягкий баклажан, томаты и сырная корочка в итальянском настроении.",
    steps: [
      "Нарежьте баклажан кружочками или кубиками.",
      "Добавьте томаты, чеснок, зелень и немного масла.",
      "Посыпьте сыром.",
      "Готовьте при 180°C 18–22 минуты.",
    ],
    tip: "Если нет баклажана, замените его кабачком или грибами.",
  },
  {
    title: "Фасоль с томатами и зеленью",
    time: 25,
    cookTime: "15–18 мин",
    temperature: "175°C",
    tag: "овощной вайб",
    needs: ["beans", "tomato", "herbs", "garlic", "onion"],
    icon: "🫘",
    tones: ["#F5E6C8", "#3F7D4A"],
    text: "Сытная тёплая фасоль в томатном соусе для спокойного ужина.",
    steps: [
      "Смешайте фасоль с томатами, чесноком и специями.",
      "Выложите в небольшую форму.",
      "Добавьте зелень и немного масла.",
      "Готовьте при 175°C 15–18 минут.",
    ],
    tip: "Если нет фасоли, используйте рис или картофель.",
  },
  {
    title: "Бекон с картофелем и сыром",
    time: 40,
    cookTime: "22–28 мин",
    temperature: "185°C",
    tag: "сытный вариант",
    needs: ["bacon", "potato", "cheese", "onion", "garlic"],
    icon: "🥓",
    image: "assets/recipes/bacon-potato-cheese.jpg",
    tones: ["#F4B84A", "#D94A32"],
    text: "Хрустящая домашняя тарелка для тех, кто хочет посытнее.",
    steps: [
      "Нарежьте картофель тонкими дольками.",
      "Добавьте бекон, лук, специи и немного масла.",
      "Готовьте при 185°C 22–28 минут.",
      "За 3 минуты до конца посыпьте сыром.",
    ],
    tip: "Если нет бекона, замените его курицей или грибами.",
  },
];

const selected = new Set();
const PLATE_TARGET = 5;
let selectedTime = 15;
let selectedMood = "сырно и уютно";
let audioContext;
let musicNodes = [];
let musicTimer = null;
let musicStaffTimer = null;

const ingredientGrid = document.querySelector("#ingredientGrid");
const basketList = document.querySelector("#basketList");
const recipeGrid = document.querySelector("#recipeGrid");
const matchCopy = document.querySelector("#matchCopy");
const musicToggle = document.querySelector("#musicToggle");
const platePile = document.querySelector("#platePile");
const progressCount = document.querySelector("#progressCount");
const progressBar = document.querySelector("#progressBar");
const progressCopy = document.querySelector("#progressCopy");
const revealRecipe = document.querySelector("#revealRecipe");
const selectedTimeCopy = document.querySelector("#selectedTimeCopy");
const selectedMoodCopy = document.querySelector("#selectedMoodCopy");
const licensedMusic = document.querySelector("#licensedMusic");

const flightSlots = [
  [16, 23], [28, 18], [42, 28], [57, 20], [72, 26], [84, 38],
  [18, 48], [34, 42], [50, 52], [66, 45], [80, 58], [15, 70],
  [27, 78], [43, 68], [60, 75], [74, 82], [83, 70], [22, 32],
  [54, 84], [70, 34], [38, 82], [80, 20], [18, 86], [48, 17],
  [62, 62], [78, 44], [14, 58], [25, 62], [84, 82], [36, 24],
  [55, 38], [69, 86],
];

let licensedMusicAvailable;
let flightFrame = 0;

function renderIngredients() {
  ingredientGrid.innerHTML = ingredients
    .filter((item) => !selected.has(item.id))
    .map((item, index) => {
      const slot = flightSlots[index % flightSlots.length];
      const driftX = (index % 2 ? -1 : 1) * (14 + (index % 5) * 3);
      const driftY = (index % 3 ? -1 : 1) * (12 + (index % 4) * 3);
      return `
        <button
          class="flying-food"
          style="--card-color: ${item.color}; --x: ${slot[0]}%; --y: ${slot[1]}%; --delay: ${index * -0.36}s; --duration: ${7 + (index % 6)}s; --drift-x: ${driftX}px; --drift-y: ${driftY}px"
          data-start-x="${slot[0]}"
          data-start-y="${slot[1]}"
          data-velocity-x="${driftX}"
          data-velocity-y="${driftY}"
          data-id="${item.id}"
          data-name="${item.name}"
          title="${item.name}"
          type="button"
          aria-label="Поймать ${item.name}"
        >
          <span class="food-illustration" aria-hidden="true">
            <span class="paint-wash"></span>
            <span class="food-icon">${item.icon}</span>
            <span class="paint-spark"></span>
          </span>
        </button>
      `;
    })
    .join("");
  startFoodFlight();
}

function startFoodFlight() {
  cancelAnimationFrame(flightFrame);

  const cards = [...ingredientGrid.querySelectorAll(".flying-food")];
  if (!cards.length) return;

  const boardRect = ingredientGrid.getBoundingClientRect();
  if (!boardRect.width || !boardRect.height) {
    flightFrame = requestAnimationFrame(startFoodFlight);
    return;
  }

  cards.forEach((card, index) => {
    const size = card.offsetWidth || 68;
    const radius = size / 2 + 4;
    const startX = (Number(card.dataset.startX) / 100) * boardRect.width;
    const startY = (Number(card.dataset.startY) / 100) * boardRect.height;
    const velocityX = Number(card.dataset.velocityX) || 16;
    const velocityY = Number(card.dataset.velocityY) || 14;
    const speedX = 0.16 + (index % 5) * 0.03;
    const speedY = 0.12 + (index % 4) * 0.025;

    card.flight = {
      x: Math.min(Math.max(startX, radius), boardRect.width - radius),
      y: Math.min(Math.max(startY, radius), boardRect.height - radius),
      vx: Math.sign(velocityX || 1) * speedX,
      vy: Math.sign(velocityY || 1) * speedY,
      phase: index * 0.7,
    };
    card.style.setProperty("--flight-x", `${card.flight.x}px`);
    card.style.setProperty("--flight-y", `${card.flight.y}px`);
  });

  let lastTime = performance.now();
  const tick = (now) => {
    const elapsed = Math.min(34, now - lastTime);
    const step = elapsed / 16.67;
    lastTime = now;
    const bounds = ingredientGrid.getBoundingClientRect();

    cards.forEach((card) => {
      if (!card.isConnected || card.classList.contains("is-popping") || card.classList.contains("is-caught")) return;

      const flight = card.flight;
      if (!flight) return;

      const size = card.offsetWidth || 68;
      const radius = size / 2 + 5;
      flight.x += flight.vx * step;
      flight.y += flight.vy * step;

      let bounced = false;

      if (flight.x <= radius) {
        flight.x = radius;
        flight.vx = Math.abs(flight.vx);
        bounced = true;
      } else if (flight.x >= bounds.width - radius) {
        flight.x = bounds.width - radius;
        flight.vx = -Math.abs(flight.vx);
        bounced = true;
      }

      if (flight.y <= radius) {
        flight.y = radius;
        flight.vy = Math.abs(flight.vy);
        bounced = true;
      } else if (flight.y >= bounds.height - radius) {
        flight.y = bounds.height - radius;
        flight.vy = -Math.abs(flight.vy);
        bounced = true;
      }

      const bob = Math.sin(now / 720 + flight.phase) * 2;
      const tilt = Math.max(-5, Math.min(5, flight.vx * 5));
      card.style.setProperty("--flight-x", `${flight.x}px`);
      card.style.setProperty("--flight-y", `${flight.y}px`);
      card.style.setProperty("--bob", `${bob}px`);
      card.style.setProperty("--tilt", `${tilt}deg`);
      if (bounced) {
        card.style.setProperty("--edge-scale", "0.98");
        window.setTimeout(() => card.style.setProperty("--edge-scale", "1"), 120);
      }
    });

    flightFrame = requestAnimationFrame(tick);
  };

  flightFrame = requestAnimationFrame(tick);
}

function renderBasket() {
  const picked = ingredients.filter((item) => selected.has(item.id));
  const progress = Math.min(selected.size, PLATE_TARGET);
  basketList.innerHTML = picked.length ? picked.map((item) => `<span>${item.icon} ${item.name}</span>`).join("") : "Пока пусто";
  platePile.innerHTML = picked.map((item) => `<span class="plate-food" title="${item.name}">${item.icon}</span>`).join("");
  progressCount.textContent = `${progress}/${PLATE_TARGET}`;
  progressBar.style.width = `${(progress / PLATE_TARGET) * 100}%`;
  revealRecipe.disabled = selected.size < PLATE_TARGET;

  if (selected.size >= PLATE_TARGET) {
    progressCopy.textContent = "Тарелка готова. Осталось только включить аэрогриль.";
  } else {
    progressCopy.textContent = selected.size < 2
      ? "Поймай ещё пару продуктов, шеф уже точит ложку."
      : `Поймайте ещё ${PLATE_TARGET - selected.size} ${selected.size === PLATE_TARGET - 1 ? "продукт" : "продукта"}, и сайт предложит рецепт.`;
  }
}

function scoreRecipe(recipe) {
  const hits = recipe.needs.filter((id) => selected.has(id)).length;
  const timeFit = recipe.time <= selectedTime ? 1 : 0;
  const moodFit = recipe.tag === selectedMood || recipe.title.toLowerCase().includes(selectedMood.split(" ")[0]) ? 1 : 0;
  return hits * 2 + timeFit + moodFit;
}

function renderRecipes() {
  const plateReady = selected.size >= PLATE_TARGET;
  const sorted = [...recipes]
    .filter((recipe) => recipe.time <= selectedTime || scoreRecipe(recipe) >= 4)
    .sort((a, b) => scoreRecipe(b) - scoreRecipe(a));

  matchCopy.textContent = plateReady
    ? `Тарелка готова. Лучший вариант уже сверху: до ${selectedTime} минут, настроение — ${selectedMood}.`
    : selected.size > 1
    ? `Шеф нашёл ${sorted.length} идей под ${selectedTime} минут. Добавьте ещё продукты, чтобы попасть точнее.`
    : "Поймай ещё пару продуктов, шеф уже точит ложку.";

  recipeGrid.innerHTML = sorted
    .map((recipe, index) => {
      const matches = recipe.needs.filter((id) => selected.has(id)).length;
      return `
        <article class="recipe-card ${plateReady && index === 0 ? "is-featured" : ""}">
          <div class="recipe-art ${recipe.image ? "has-image" : ""}" style="--tone-a: ${recipe.tones[0]}; --tone-b: ${recipe.tones[1]}">
            ${
              recipe.image
                ? `<img src="${recipe.image}" alt="${recipe.title}" loading="lazy">`
                : `<span aria-hidden="true">${recipe.icon}</span>`
            }
          </div>
          <div class="recipe-body">
            <div class="recipe-meta">
              <span>${recipe.temperature}</span>
              <span>${recipe.cookTime}</span>
              <span>${matches}/${recipe.needs.length} продуктов</span>
              <span>${plateReady && index === 0 ? "лучший вариант" : recipe.tag}</span>
            </div>
            <h3>${recipe.title}</h3>
            <p>${recipe.text}</p>
            <details class="recipe-steps">
              <summary>Шаги и замена</summary>
              <ol>
                ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
              </ol>
              <p class="recipe-tip"><strong>Замена:</strong> ${recipe.tip}</p>
            </details>
          </div>
        </article>
      `;
    })
    .join("");
}

function updateAll() {
  renderIngredients();
  renderBasket();
  renderRecipes();
}

function celebrateKitchen() {
  const colors = ["#e94d3c", "#f6b333", "#5fbf91", "#1f5aa8", "#fff1d8"];

  for (let index = 0; index < 28; index += 1) {
    const confetti = document.createElement("span");
    confetti.className = "kitchen-confetti";
    confetti.style.setProperty("--confetti-x", `${Math.random() * 100}vw`);
    confetti.style.setProperty("--confetti-y", `${-12 - Math.random() * 16}vh`);
    confetti.style.setProperty("--confetti-rotate", `${Math.random() * 360}deg`);
    confetti.style.setProperty("--confetti-color", colors[index % colors.length]);
    confetti.style.animationDelay = `${index * 24}ms`;
    document.body.append(confetti);
    setTimeout(() => confetti.remove(), 1600);
  }
}

function revealBestRecipe() {
  renderRecipes();
  document.querySelector("#recipes").scrollIntoView({ behavior: "smooth", block: "start" });
  celebrateKitchen();
}

function initLottieAnimations() {
  if (!window.lottie) {
    document.body.classList.add("lottie-fallback");
    return;
  }

  document.querySelectorAll("[data-lottie]").forEach((container) => {
    window.lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: container.dataset.lottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
    });
  });
}

function getAudioContext() {
  audioContext ||= new AudioContext();
  return audioContext;
}

async function hasLicensedTrack() {
  if (licensedMusicAvailable !== undefined) return licensedMusicAvailable;

  try {
    const response = await fetch(licensedMusic.currentSrc || licensedMusic.src, { method: "HEAD" });
    licensedMusicAvailable = response.ok;
  } catch (error) {
    licensedMusicAvailable = false;
  }

  return licensedMusicAvailable;
}

function stopGeneratedMusic() {
  if (musicTimer) {
    clearInterval(musicTimer);
    musicTimer = null;
  }

  musicNodes.forEach((node) => {
    try {
      node.stop();
    } catch (error) {
      node.disconnect();
    }
  });
  musicNodes = [];
}

function stopMusicStaff() {
  if (musicStaffTimer) {
    clearInterval(musicStaffTimer);
    musicStaffTimer = null;
  }
  musicToggle.querySelectorAll(".music-staff").forEach((staff) => staff.remove());
}

function startMusicStaff() {
  stopMusicStaff();
  spawnMusicStaff();
  musicStaffTimer = setInterval(spawnMusicStaff, 850);
}

function setMusicButton(isPlaying) {
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicToggle.setAttribute("aria-label", isPlaying ? "Выключить музыку" : "Включить музыку");
}

async function toggleMusic() {
  if (licensedMusic && !licensedMusic.paused) {
    licensedMusic.pause();
    licensedMusic.currentTime = 0;
    stopMusicStaff();
    setMusicButton(false);
    return;
  }

  if (musicTimer) {
    stopGeneratedMusic();
    stopMusicStaff();
    setMusicButton(false);
    return;
  }

  if (licensedMusic && await hasLicensedTrack()) {
    try {
      stopGeneratedMusic();
      licensedMusic.volume = 0.72;
      await licensedMusic.play();
      setMusicButton(true);
      startMusicStaff();
      return;
    } catch (error) {
      console.info("Браузер не смог включить локальный трек, запускаю встроенный фон.");
    }
  }

  const context = getAudioContext();
  if (context.state === "suspended") {
    await context.resume();
  }

  playJazzLoop(context.currentTime + 0.04);
  musicTimer = setInterval(() => playJazzLoop(context.currentTime + 0.04), 7200);
  setMusicButton(true);
  startMusicStaff();
}

function spawnMusicStaff() {
  const staff = document.createElement("span");
  staff.className = "music-staff";
  staff.setAttribute("aria-hidden", "true");
  staff.innerHTML = "<i></i><i></i><i></i><i></i><b>♪</b><b>♬</b><b>♩</b><em></em>";
  musicToggle.append(staff);
  setTimeout(() => staff.remove(), 1900);
}

function playTone(context, frequency, start, duration, type = "sine", volume = 0.035) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  filter.type = "lowpass";
  filter.frequency.value = 1800;
  gain.gain.setValueAtTime(0.001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
  oscillator.connect(filter).connect(gain).connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.05);
  musicNodes.push(oscillator);
}

function playBrush(context, start, volume = 0.018) {
  const buffer = context.createBuffer(1, context.sampleRate * 0.08, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let index = 0; index < data.length; index += 1) {
    data[index] = (Math.random() * 2 - 1) * (1 - index / data.length);
  }
  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  filter.type = "highpass";
  filter.frequency.value = 1900;
  gain.gain.value = volume;
  source.buffer = buffer;
  source.connect(filter).connect(gain).connect(context.destination);
  source.start(start);
  musicNodes.push(source);
}

function playJazzLoop(start) {
  const context = getAudioContext();
  const beat = 0.45;
  const chords = [
    [261.63, 329.63, 392.0, 493.88],
    [220.0, 277.18, 329.63, 440.0],
    [246.94, 311.13, 369.99, 493.88],
    [196.0, 246.94, 293.66, 392.0],
  ];
  const melody = [392, 440, 493.88, 523.25, 493.88, 440, 392, 329.63, 349.23, 392, 440, 392, 329.63, 293.66, 329.63, 392];

  chords.forEach((chord, chordIndex) => {
    const chordStart = start + chordIndex * beat * 4;
    chord.forEach((note, noteIndex) => {
      playTone(context, note, chordStart + noteIndex * 0.025, beat * 3.6, "triangle", 0.018);
    });
    playTone(context, chord[0] / 2, chordStart, beat * 1.8, "sine", 0.032);
    playTone(context, chord[1] / 2, chordStart + beat * 2, beat * 1.4, "sine", 0.024);
  });

  melody.forEach((note, index) => {
    const swing = index % 2 ? 0.08 : 0;
    playTone(context, note, start + index * beat + swing, beat * 0.82, "sine", 0.026);
  });

  for (let index = 0; index < 16; index += 1) {
    playBrush(context, start + index * beat + (index % 2 ? 0.07 : 0), index % 4 === 1 ? 0.024 : 0.012);
  }
  musicNodes = musicNodes.filter((node) => {
    return node.playbackState !== "finished";
  });
}

ingredientGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".flying-food");
  if (!card || card.classList.contains("is-popping") || card.classList.contains("is-caught")) return;
  const id = card.dataset.id;
  const plate = document.querySelector(".plate");
  const cardRect = card.getBoundingClientRect();
  const plateRect = plate.getBoundingClientRect();
  const catchX = plateRect.left + plateRect.width / 2 - (cardRect.left + cardRect.width / 2);
  const catchY = plateRect.top + plateRect.height / 2 - (cardRect.top + cardRect.height / 2);

  card.style.setProperty("--catch-x", `${catchX}px`);
  card.style.setProperty("--catch-y", `${catchY}px`);
  card.style.setProperty("--catch-mid-x", `${catchX * 0.45}px`);
  card.style.setProperty("--catch-mid-y", `${catchY * 0.45 - 38}px`);
  card.style.setProperty("--catch-near-x", `${catchX * 0.84}px`);
  card.style.setProperty("--catch-near-y", `${catchY * 0.84 - 10}px`);
  card.insertAdjacentHTML(
    "beforeend",
    '<span class="bubble-burst" aria-hidden="true"></span><span class="bubble-pop p1" aria-hidden="true"></span><span class="bubble-pop p2" aria-hidden="true"></span><span class="bubble-pop p3" aria-hidden="true"></span><span class="bubble-pop p4" aria-hidden="true"></span>',
  );
  card.classList.add("is-popping");
  selected.add(id);
  setTimeout(() => {
    card.classList.add("is-caught");
  }, 420);
  setTimeout(() => {
    if (!selected.has(id)) return;
    card.remove();
    renderBasket();
    renderRecipes();
  }, 1120);
});

document.querySelector("#clearPlate").addEventListener("click", () => {
  selected.clear();
  renderIngredients();
  renderBasket();
  renderRecipes();
});

revealRecipe.addEventListener("click", revealBestRecipe);

document.querySelectorAll(".time-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".time-chip").forEach((chip) => chip.classList.remove("is-active"));
    button.classList.add("is-active");
    selectedTime = Number(button.dataset.time);
    selectedTimeCopy.textContent = `Выбрано: ${selectedTime} минут`;
    updateAll();
  });
});

document.querySelectorAll(".mood-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mood-chip").forEach((chip) => chip.classList.remove("is-active"));
    button.classList.add("is-active");
    selectedMood = button.dataset.mood;
    selectedMoodCopy.textContent = selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1);
    renderRecipes();
  });
});

document.querySelector("#surpriseMe").addEventListener("click", () => {
  selected.clear();
  const shuffled = [...ingredients].sort(() => Math.random() - 0.5);
  shuffled.slice(0, PLATE_TARGET).forEach((item) => selected.add(item.id));
  document.querySelector("#play").scrollIntoView({ behavior: "smooth" });
  renderIngredients();
  renderBasket();
  renderRecipes();
});

musicToggle.addEventListener("click", toggleMusic);

updateAll();
initLottieAnimations();

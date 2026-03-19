// Organized word bank for progressive difficulty
const wordBank = [
    // Levels 1-50: 3-4 Letters (Easy)
    "KINGDOM", "DOG", "SUN", "SHOULD", "BOX", "SKY", "ICE", "BEDROOM", "RUN", "TEN",
    "FISH", "BIRD", "FIRE", "WIND", "STREET", "TREE", "MOON", "CAKE", "FROG", "KING",
    "LAMP", "HOUSE", "PARK", "ROAD", "STRANGE", "WAVE", "BALL", "BOOK", "COIN", "DOOR",
    "FOOD", "GAME", "HILL", "LEAVES", "NOTE", "ROCK", "SEED", "SLAVERY", "WALK", "ZONE",
    "FAST", "SURVIVE", "GOLD", "BLUE", "HAND", "JUMP", "MILK", "FAITH", "WOLF", "SHIP",

    // Levels 51-150: 5-6 Letters (Medium)
    "APPLE", "BRAIN", "AFTER", "DREAM", "EARTH", "FLAME", "DISTRIBUTE", "HEART", "INDEX", "JOKER",
    "KNIFE", "LEMON", "MUSIC", "NIGHT", "OCEAN", "PHONE", "QUEEN", "RIVER", "SNAKE", "TIGER",
    "UNCLE", "VOICE", "WATER", "YACHT", "ZEBRA", "BREAD", "CHAIR", "DANCE", "FRUIT", "GRAPE",
    "HOUSE", "JELLY", "LIGHT", "MOUSE", "PIANO", "SMILE", "TABLE", "TRAIN", "WORLD", "BRIGHT",
    "COFFEE", "DANGER", "ENERGY", "FLOWER", "GARDEN", "HUNGRY", "ISLAND", "JUNGLE", "KITTEN", "MARKET",

    // Levels 151-300: 7-8 Letters (Hard)
    "AIRPORT", "BALLOON", "CAPTAIN", "DIAMOND", "EVENING", "FEATHER", "GIRAFFE", "HAMSTER", "JOURNEY", "KITCHEN",
    "LANTERN", "MORNING", "NETWORK", "OSTRICH", "PACKAGE", "QUARTER", "RAINBOW", "SCIENCE", "THUNDER", "UNICORN",
    "VILLAGE", "WEATHER", "WHISPER", "ACADEMY", "BICYCLE", "CHICKEN", "DESKTOP", "EXPLORE", "FOREVER", "GUITAR",
    "HISTORY", "IMAGINE", "JOURNAL", "KINGDOM", "LIBRARY", "MESSAGE", "NOTEBOOK", "OUTSIDE", "PERFECT", "QUALITY",
    "REVERSE", "STORAGE", "TEACHER", "UNKNOWN", "VACCINE", "WEBSITE", "YOUTUBE", "AIRLINE", "BAGGAGE", "CABINET",

    // Levels 301-500: 9+ Letters (Expert)
    "ADVENTURE", "BEAUTIFUL", "CHALLENGE", "DIFFERENT", "EDUCATION", "FLAMINGO", "GENERATOR", "HAPPINESS", "IMPORTANT", "KNOWLEDGE",
    "LABYRINTH", "MOUNTAIN", "NOTEWORTHY", "OPERATION", "PORTFOLIO", "QUESTIONS", "RESOURCES", "SIGNATURE", "TELEPHONE", "UMBRELLA",
    "VEGETABLE", "WONDERFUL", "YESTERDAY", "ZEALOUSLY", "AMPLIFIER", "BROADCAST", "CELEBRATE", "DIRECTION", "EQUIPMENT", "FURNITURE",
    "GEOGRAPHY", "HIGHLIGHT", "INTERVIEW", "LANDSCAPE", "MECHANISM", "NAVIGATION", "ORCHESTRA", "PHOTOGRAPH", "REVOLUTION", "SATELLITE",
    "TRANSFORM", "UNIVERSAL", "VARIATION", "WILDERNESS", "AEROPLANE", "BACKPACKER", "CELEBRATION", "DANGEROUS", "EXPERIENCE", "FREEDOM"
];

/**
 * Logic: If the level exceeds the wordBank length, 
 * it loops back but scrambles the words differently.
 */
function scrambleUnique(word) {
    if (!word) return "";
    let chars = word.toUpperCase().split('');
    let scrambled = "";
    let attempts = 0;

    while (attempts < 12) {
        for (let i = chars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [chars[i], chars[j]] = [chars[j], chars[i]];
        }
        scrambled = chars.join('');
        // Ensure it's not the same as the original word
        if (scrambled !== word.toUpperCase()) return scrambled;
        attempts++;
    }
    return scrambled;
}

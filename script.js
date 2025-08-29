// Dati della scheda di allenamento
const workoutData = {
    1: { // Settimana 1 - Focus Ipertrofia
        lunedi: {
            title: "Lunedì – Spinta (17 serie)",
            exercises: [
                { name: "Chest press inclinata macchina", details: "3x8–10 – 90\"" },
                { name: "Chest press orizzontale", details: "3x8–10 – 75\"" },
                { name: "Pectoral fly cavi", details: "3x12 – 60\"" },
                { name: "Shoulder press macchina", details: "3x8–10 – 90\"" },
                { name: "Lateral raise macchina", details: "3x12–15 – 60\"" },
                { name: "Crunch Machine", details: "2x12-15 - 60\"" }
            ]
        },
        martedi: {
            title: "Martedì – Tirata (16 serie)",
            exercises: [
                { name: "Lat machine presa stretta triangolo", details: "4x8–10 – 90\"" },
                { name: "Seated row singolo braccio ai cavi", details: "3x10–12 – 75–90\"" },
                { name: "Pullover ai cavi alta", details: "2x12 – 60\"" },
                { name: "Rear delt machine", details: "2x12–15 – 60\"" },
                { name: "Curl alternato manubri", details: "3x10–12 – 75\"" },
                { name: "Dumbbell Shrug", details: "2x12-15 - 60-90\"" }
            ]
        },
        mercoledi: {
            title: "Mercoledì – Gambe (20 serie)",
            exercises: [
                { name: "Hack squat macchina", details: "4x10 – 90\"" },
                { name: "Leg press", details: "4x10–12 – 90\"" },
                { name: "Leg extension", details: "3x12 – 75\"" },
                { name: "Seated leg curl", details: "2x12 – 75\"" },
                { name: "Standing calf raise", details: "2x12–15 – 60\"" },
                { name: "Seated calf raise", details: "2x12–15 – 60\"" },
                { name: "French press", details: "3x10–12 – 60–75\"" }
            ]
        },
        giovedi: {
            title: "Giovedì – Upper misto (20 serie)",
            exercises: [
                { name: "Chest press orizzontale", details: "3x10–12 – 75\"" },
                { name: "Lat machine larga", details: "3x10–12 – 75\"" },
                { name: "Shoulder press manubri", details: "3x10–12 – 75\"" },
                { name: "Curl cavi alta tensione", details: "3x12–15 – 60\"" },
                { name: "Pushdown barra", details: "3x12–15 – 60\"" },
                { name: "Overhead extension", details: "3x12–15 – 60\"" },
                { name: "Plank con variazioni", details: "2x30–45\"" }
            ]
        },
        venerdi: {
            title: "Venerdì – Cardio Moderato",
            exercises: [],
            isCardio: true
        }
    },
    2: { // Settimana 2 - Focus Forza
        lunedi: {
            title: "Lunedì – Spinta Forza (17 serie)",
            exercises: [
                { name: "Chest press macchina", details: "4x4–6 – 2–3'" },
                { name: "Shoulder press macchina/manubri", details: "3x5–6 – 2–3'" },
                { name: "Pectoral machine (fly)", details: "3x8–10 – 90\"" },
                { name: "Tricipiti ai cavi corda", details: "3x8–10 – 75–90\"" },
                { name: "Lateral raise ai cavi/macchina", details: "2x10 – 60\"" },
                { name: "Torsion Machine", details: "2x10–12" }
            ]
        },
        martedi: {
            title: "Martedì – Tirata Forza (17 serie)",
            exercises: [
                { name: "Lat machine presa prona larga", details: "4x5 – 2–3'" },
                { name: "Seated row macchina", details: "3x5–6 – 2–3'" },
                { name: "Pullover ai cavi macchina", details: "2x8 – 90\"" },
                { name: "Curl cavi barra dritta", details: "3x6–8 – 90\"" },
                { name: "Face pull ai cavi", details: "3x10 – 60–75\"" },
                { name: "Dumbbell Shrug", details: "2x6-8 - 90-120\"" }
            ]
        },
        mercoledi: {
            title: "Mercoledì – Gambe Forza (18 serie)",
            exercises: [
                { name: "Leg press orizzontale 45°", details: "4x5 – 2–3'" },
                { name: "Hack squat macchina", details: "3x5–6 – 2–3'" },
                { name: "Leg curl sdraiato macchina", details: "3x6 – 2'" },
                { name: "Hip thrust macchina", details: "3x6 – 2'" },
                { name: "Standing calf raise", details: "2x8 – 90\"" },
                { name: "French press", details: "3x6-8 – 90-120\"" }
            ]
        },
        giovedi: {
            title: "Giovedì – Full/Complementi Forza (19 serie)",
            exercises: [
                { name: "Chest press inclinata macchina", details: "3x5 – 2–3'" },
                { name: "Lat machine presa supina", details: "3x6 – 2–3'" },
                { name: "Shoulder press manubri/macchina", details: "2x6 – 2'" },
                { name: "Bulgarian squat manubri", details: "3x6/gamba – 2'" },
                { name: "Curl manubri panca inclinata", details: "3x8 – 90\"" },
                { name: "Overhead extension", details: "3x6-8 – 120\"" },
                { name: "Crunch Machine", details: "2x12-15 - 60\"" }
            ]
        },
        venerdi: {
            title: "Venerdì – Cardio Moderato",
            exercises: [],
            isCardio: true
        }
    }
};

// Dati della dieta
const dietData = {
    lunedi: {
        title: "🍽️ Lunedì - Piano Alimentare",
        meals: [
            {
                name: "Colazione",
                icon: "🌅",
                foods: [
                    { name: "Latte", quantity: "350g" },
                    { name: "Corn Flakes", quantity: "30g" },
                    { name: "Whey Isolate", quantity: "25g" },
                    { name: "Miele", quantity: "10g" }
                ]
            },
            {
                name: "Merenda",
                icon: "🥜",
                foods: [
                    { name: "Pistacchi", quantity: "10g" },
                    { name: "Yougurt HiPro", quantity: "160g" }
                ]
            },
            {
                name: "Pranzo",
                icon: "🍽️",
                foods: [
                    { name: "Lenticchie Rosse", quantity: "150g" },
                    { name: "Pomodori", quantity: "100g" },
                    { name: "Tilapia", quantity: "200g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            },
            {
                name: "Spuntino 1",
                icon: "☕",
                foods: [
                    { name: "Caffè", quantity: "15g" },
                    { name: "Nocciole", quantity: "10g" }
                ]
            },
            {
                name: "Spuntino 2",
                icon: "🥛",
                foods: [
                    { name: "Mousse Muller", quantity: "200g" }
                ]
            },
            {
                name: "Cena",
                icon: "🌙",
                foods: [
                    { name: "Mozzarella", quantity: "100g" },
                    { name: "Patate Bollite", quantity: "250g" },
                    { name: "Peperoni Grigliati", quantity: "100g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            }
        ]
    },
    martedi: {
        title: "🍽️ Martedì - Piano Alimentare",
        meals: [
            {
                name: "Colazione",
                icon: "🌅",
                foods: [
                    { name: "Latte", quantity: "350g" },
                    { name: "Fiocchi Coop", quantity: "60g" },
                    { name: "Whey Isolate", quantity: "25g" }
                ]
            },
            {
                name: "Merenda",
                icon: "🥜",
                foods: [
                    { name: "Pistacchi", quantity: "15g" }
                ]
            },
            {
                name: "Pranzo",
                icon: "🍽️",
                foods: [
                    { name: "Penne Proteiche Coop", quantity: "160g" },
                    { name: "Pomodori", quantity: "200g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            },
            {
                name: "Spuntino 1",
                icon: "☕",
                foods: [
                    { name: "Caffè", quantity: "15g" },
                    { name: "Nocciole", quantity: "15g" }
                ]
            },
            {
                name: "Spuntino 2",
                icon: "🥛",
                foods: [
                    { name: "Bevanda HiPro", quantity: "330g" }
                ]
            },
            {
                name: "Cena",
                icon: "🌙",
                foods: [
                    { name: "Pane", quantity: "50g" },
                    { name: "Tacchino Petto", quantity: "120g" },
                    { name: "Mozzarella", quantity: "100g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            }
        ]
    },
    mercoledi: {
        title: "🍽️ Mercoledì - Piano Alimentare",
        meals: [
            {
                name: "Colazione",
                icon: "🌅",
                foods: [
                    { name: "Latte", quantity: "350g" },
                    { name: "Corn Flakes", quantity: "60g" },
                    { name: "Whey Isolate", quantity: "25g" },
                    { name: "Miele", quantity: "10g" }
                ]
            },
            {
                name: "Merenda",
                icon: "🥜",
                foods: [
                    { name: "Pistacchi", quantity: "30g" }
                ]
            },
            {
                name: "Pranzo",
                icon: "🍽️",
                foods: [
                    { name: "Penne Proteiche Coop", quantity: "150g" },
                    { name: "Peperoni Grigliati", quantity: "200g" },
                    { name: "Pollo Petto", quantity: "100g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            },
            {
                name: "Spuntino 1",
                icon: "☕",
                foods: [
                    { name: "Caffè", quantity: "15g" },
                    { name: "Nocciole", quantity: "25g" }
                ]
            },
            {
                name: "Spuntino 2",
                icon: "🥛",
                foods: [
                    { name: "Mousse Muller", quantity: "200g" }
                ]
            },
            {
                name: "Cena",
                icon: "🌙",
                foods: [
                    { name: "Merluzzo", quantity: "200g" },
                    { name: "Patate Bollite", quantity: "220g" },
                    { name: "Peperoni Grigliati", quantity: "100g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            }
        ]
    },
    giovedi: {
        title: "🍽️ Giovedì - Piano Alimentare",
        meals: [
            {
                name: "Colazione",
                icon: "🌅",
                foods: [
                    { name: "Latte", quantity: "350g" },
                    { name: "Fiocchi Coop", quantity: "60g" },
                    { name: "Whey Isolate", quantity: "25g" }
                ]
            },
            {
                name: "Merenda",
                icon: "🥜",
                foods: [
                    { name: "Yougurt HiPro", quantity: "160g" }
                ]
            },
            {
                name: "Pranzo",
                icon: "🍽️",
                foods: [
                    { name: "Fagioli", quantity: "100g" },
                    { name: "Zucchine", quantity: "100g" },
                    { name: "Tacchino Petto", quantity: "80g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            },
            {
                name: "Spuntino 1",
                icon: "☕",
                foods: [
                    { name: "Caffè", quantity: "15g" },
                    { name: "Pistacchi", quantity: "20g" }
                ]
            },
            {
                name: "Spuntino 2",
                icon: "🥛",
                foods: [
                    { name: "Bevanda HiPro", quantity: "330g" }
                ]
            },
            {
                name: "Cena",
                icon: "🌙",
                foods: [
                    { name: "Ceci", quantity: "100g" },
                    { name: "Peperoni Grigliati", quantity: "100g" },
                    { name: "Mozzarella", quantity: "100g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            }
        ]
    },
    venerdi: {
        title: "🍽️ Venerdì - Piano Alimentare",
        meals: [
            {
                name: "Colazione",
                icon: "🌅",
                foods: [
                    { name: "Latte", quantity: "350g" },
                    { name: "Corn Flakes", quantity: "50g" },
                    { name: "Whey Isolate", quantity: "25g" },
                    { name: "Miele", quantity: "10g" }
                ]
            },
            {
                name: "Merenda",
                icon: "🥜",
                foods: [
                    { name: "Albicocche Secche", quantity: "15g" }
                ]
            },
            {
                name: "Pranzo",
                icon: "🍽️",
                foods: [
                    { name: "Penne Proteiche Coop", quantity: "100g" },
                    { name: "Pomodori", quantity: "200g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            },
            {
                name: "Spuntino 1",
                icon: "☕",
                foods: [
                    { name: "Caffè", quantity: "15g" },
                    { name: "Yougurt HiPro", quantity: "160g" },
                    { name: "Pistacchi", quantity: "15g" }
                ]
            },
            {
                name: "Spuntino 2",
                icon: "🥛",
                foods: [
                    { name: "Mousse Muller", quantity: "200g" }
                ]
            },
            {
                name: "Cena",
                icon: "🌙",
                foods: [
                    { name: "Manzo Magro", quantity: "150g" },
                    { name: "Ceci", quantity: "110g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            }
        ]
    },
    sabato: {
        title: "🍽️ Sabato - Piano Alimentare",
        meals: [
            {
                name: "Colazione",
                icon: "🌅",
                foods: [
                    { name: "Latte", quantity: "350g" },
                    { name: "Fiocchi Coop", quantity: "50g" },
                    { name: "Whey Isolate", quantity: "25g" }
                ]
            },
            {
                name: "Merenda",
                icon: "🥜",
                foods: [
                    { name: "Yougurt HiPro", quantity: "160g" }
                ]
            },
            {
                name: "Pranzo",
                icon: "🍽️",
                foods: [
                    { name: "Maiale Magro", quantity: "150g" },
                    { name: "Zucchine", quantity: "100g" },
                    { name: "Bresaola", quantity: "50g" },
                    { name: "Olio EVO", quantity: "15g" }
                ]
            },
            {
                name: "Spuntino 1",
                icon: "🥛",
                foods: [
                    { name: "Bevanda HiPro", quantity: "330g" }
                ]
            },
            {
                name: "Cena",
                icon: "🌙",
                foods: [
                    { name: "Pizza Wurstel", quantity: "400g" }
                ]
            }
        ]
    },
    domenica: {
        title: "🍽️ Domenica - Piano Alimentare",
        meals: [
            {
                name: "Colazione",
                icon: "🌅",
                foods: [
                    { name: "Latte", quantity: "350g" },
                    { name: "Fiocchi Coop", quantity: "30g" },
                    { name: "Whey Isolate", quantity: "25g" },
                    { name: "Miele", quantity: "10g" }
                ]
            },
            {
                name: "Merenda",
                icon: "🥜",
                foods: [
                    { name: "Yougurt HiPro", quantity: "160g" }
                ]
            },
            {
                name: "Pranzo",
                icon: "🍽️",
                foods: [
                    { name: "Pollo Petto", quantity: "150g" },
                    { name: "Fagioli", quantity: "50g" },
                    { name: "Pomodori", quantity: "120g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            },
            {
                name: "Spuntino 1",
                icon: "🥜",
                foods: [
                    { name: "Pistacchi", quantity: "25g" }
                ]
            },
            {
                name: "Spuntino 2",
                icon: "🥛",
                foods: [
                    { name: "Yougurt HiPro", quantity: "160g" }
                ]
            },
            {
                name: "Cena",
                icon: "🌙",
                foods: [
                    { name: "Pane", quantity: "90g" },
                    { name: "Mozzarella", quantity: "100g" },
                    { name: "Penne Proteiche Coop", quantity: "100g" },
                    { name: "Peperoni Grigliati", quantity: "80g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            }
        ]
    }
};

// Elementi DOM
const typeSelect = document.getElementById('type');
const weekSelect = document.getElementById('week');
const weekContainer = document.getElementById('week-container');
const daySelect = document.getElementById('day');
const contentTitle = document.getElementById('content-title');
const contentItems = document.getElementById('content-items');
const saveNotice = document.getElementById('save-notice');

// Chiave per il localStorage
const STORAGE_KEY = 'workout-weights';

// Carica i pesi salvati dal localStorage
function loadSavedWeights() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
}

// Salva i pesi nel localStorage
function saveWeights(weights) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(weights));
}

// Genera una chiave unica per ogni esercizio
function getExerciseKey(week, day, exerciseName) {
    return `w${week}_${day}_${exerciseName.replace(/\s+/g, '_').toLowerCase()}`;
}

// Mostra notifica di salvataggio
function showSaveNotice() {
    saveNotice.classList.add('show');
    setTimeout(() => {
        saveNotice.classList.remove('show');
    }, 2000);
}

// Gestisce il cambiamento del peso
function handleWeightChange(week, day, exerciseName, value) {
    const weights = loadSavedWeights();
    const key = getExerciseKey(week, day, exerciseName);
    
    if (value.trim() === '') {
        delete weights[key];
    } else {
        weights[key] = value;
    }
    
    saveWeights(weights);
    showSaveNotice();
}

// Crea l'HTML per un esercizio
function createExerciseHTML(exercise, week, day) {
    const weights = loadSavedWeights();
    const key = getExerciseKey(week, day, exercise.name);
    const savedWeight = weights[key] || '';
    
    return `
        <div class="exercise-card">
            <div class="exercise-name">${exercise.name}</div>
            <div class="exercise-details">${exercise.details}</div>
            <div class="weight-input-container">
                <label>Peso:</label>
                <input 
                    type="number" 
                    class="weight-input" 
                    placeholder="0" 
                    value="${savedWeight}"
                    data-exercise="${exercise.name}"
                    step="0.5"
                    min="0"
                >
                <span class="weight-unit">kg</span>
            </div>
        </div>
    `;
}

// Crea l'HTML per il giorno cardio
function createCardioHTML() {
    return `
        <div class="cardio-day">
            <h2>🏃‍♂️ Cardio Moderato</h2>
            <p>Sessione di allenamento cardiovascolare</p>
        </div>
    `;
}

// Crea l'HTML per un pasto della dieta
function createMealHTML(meal) {
    const foodsHTML = meal.foods.map(food => `
        <div class="meal-item">
            <span class="food-name">${food.name}</span>
            <span class="food-quantity">${food.quantity}</span>
        </div>
    `).join('');
    
    return `
        <div class="meal-card">
            <div class="meal-title">
                <span>${meal.icon}</span>
                <span>${meal.name}</span>
            </div>
            <div class="meal-items">
                ${foodsHTML}
            </div>
        </div>
    `;
}

// Crea l'HTML per la dieta completa del giorno
function createDietHTML(day) {
    const diet = dietData[day];
    const nutritionTargetHTML = `
        <div class="nutrition-target">
            <h3>🎯 Target Giornaliero</h3>
            <div class="nutrition-values">
                <div class="nutrition-item">
                    <strong>2100</strong>
                    Calorie
                </div>
                <div class="nutrition-item">
                    <strong>200g</strong>
                    Carboidrati
                </div>
                <div class="nutrition-item">
                    <strong>170g</strong>
                    Proteine
                </div>
                <div class="nutrition-item">
                    <strong>70g</strong>
                    Grassi
                </div>
            </div>
        </div>
    `;
    
    const mealsHTML = diet.meals.map(meal => createMealHTML(meal)).join('');
    return nutritionTargetHTML + mealsHTML;
}

// Aggiorna la visualizzazione del contenuto
function updateContent() {
    const type = typeSelect.value;
    const week = weekSelect.value;
    const day = daySelect.value;
    
    if (type === 'workout') {
        // Mostra selettore settimana per allenamento
        weekContainer.classList.remove('hidden');
        
        const workout = workoutData[week][day];
        contentTitle.textContent = workout.title;
        
        if (workout.isCardio) {
            contentItems.innerHTML = createCardioHTML();
        } else {
            contentItems.innerHTML = workout.exercises
                .map(exercise => createExerciseHTML(exercise, week, day))
                .join('');
            
            // Aggiungi event listeners per i campi peso
            const weightInputs = contentItems.querySelectorAll('.weight-input');
            weightInputs.forEach(input => {
                input.addEventListener('input', (e) => {
                    const exerciseName = e.target.dataset.exercise;
                    handleWeightChange(week, day, exerciseName, e.target.value);
                });
                
                // Gestisce il focus per una migliore UX mobile
                input.addEventListener('focus', (e) => {
                    e.target.select();
                });
            });
        }
    } else if (type === 'diet') {
        // Nascondi selettore settimana per dieta
        weekContainer.classList.add('hidden');
        
        const diet = dietData[day];
        contentTitle.textContent = diet.title;
        contentItems.innerHTML = createDietHTML(day);
    }
}

// Event listeners
typeSelect.addEventListener('change', updateContent);
weekSelect.addEventListener('change', updateContent);
daySelect.addEventListener('change', updateContent);

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
});

// Prevenire il refresh accidentale della pagina
window.addEventListener('beforeunload', (e) => {
    // Non mostrare il dialogo se non ci sono dati non salvati
    // I dati vengono salvati automaticamente
});

// Gestione dell'orientamento del dispositivo per mobile
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        // Forza un reflow per sistemare eventuali problemi di layout
        document.body.style.height = window.innerHeight + 'px';
        setTimeout(() => {
            document.body.style.height = '';
        }, 100);
    }, 100);
});

// Supporto per installazione come PWA (Progressive Web App)
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
    e.preventDefault();
});

// Aggiunge supporto per la navigazione con la tastiera
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const currentDay = daySelect.selectedIndex;
        if (e.key === 'ArrowLeft' && currentDay > 0) {
            daySelect.selectedIndex = currentDay - 1;
            updateContent();
        } else if (e.key === 'ArrowRight' && currentDay < daySelect.options.length - 1) {
            daySelect.selectedIndex = currentDay + 1;
            updateContent();
        }
    }
});

// Funzione per esportare i dati dei pesi (utile per backup)
function exportWeights() {
    const weights = loadSavedWeights();
    const dataStr = JSON.stringify(weights, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'workout-weights-backup.json';
    link.click();
    
    URL.revokeObjectURL(url);
}

// Funzione per importare i dati dei pesi
function importWeights(jsonData) {
    try {
        const weights = JSON.parse(jsonData);
        saveWeights(weights);
        updateContent();
        showSaveNotice();
        return true;
    } catch (error) {
        console.error('Errore nell\'importazione:', error);
        return false;
    }
}

// Espone le funzioni globalmente per debug/utilizzo futuro
window.workoutApp = {
    exportWeights,
    importWeights,
    loadSavedWeights,
    saveWeights
};

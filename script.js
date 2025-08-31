// Dati della scheda di allenamento
const workoutData = {
    1: { // Settimana 1 - Focus Ipertrofia
        lunedi: {
            title: "Lunedì – Spinta (18 serie)",
            exercises: [
                { name: "Chest press inclinata macchina", details: "3x8–10 – 90\"" },
                { name: "Chest press orizzontale", details: "3x8–10 – 75\"" },
                { name: "Pectoral fly cavi", details: "2x12 – 60\"" },
                { name: "Shoulder press macchina", details: "3x8–10 – 90\"" },
                { name: "Lateral raise macchina", details: "2x12–15 – 60\"" },
                { name: "Rear delt machine", details: "2x12–15 – 60\"" },
                { name: "Crunch Machine", details: "3x12-15 - 60\"" }
            ]
        },
        martedi: {
            title: "Martedì – Tirata (16 serie)",
            exercises: [
                { name: "Lat machine presa stretta triangolo", details: "3x8–10 – 90\"" },
                { name: "Seated row singolo braccio ai cavi", details: "3x10–12 – 75–90\"" },
                { name: "Pullover ai cavi alta", details: "2x12 – 60\"" },
                { name: "Rear delt machine", details: "2x12–15 – 60\"" },
                { name: "Curl alternato manubri", details: "3x10–12 – 75\"" },
                { name: "Dumbbell Shrug", details: "3x12-15 - 75-90\"" }
            ]
        },
        mercoledi: {
            title: "Mercoledì – Gambe (18 serie)",
            exercises: [
                { name: "Hack squat macchina", details: "3x10 – 90\"" },
                { name: "Leg press", details: "3x10–12 – 90\"" },
                { name: "Leg extension", details: "2x12 – 75\"" },
                { name: "Seated leg curl", details: "3x12 – 75\"" },
                { name: "Hip thrust", details: "3x10–12 – 90\"" },
                { name: "Standing calf raise", details: "2x12–15 – 60\"" },
                { name: "Seated calf raise", details: "2x12–15 – 60\"" },
                { name: "Affondi camminati con manubri", details: "1x12/gamba – 90\"" }
            ]
        },
        giovedi: {
            title: "Giovedì – Upper misto (16 serie)",
            exercises: [
                { name: "Chest press orizzontale", details: "3x10–12 – 75\"" },
                { name: "Lat machine larga", details: "3x10–12 – 75\"" },
                { name: "Shoulder press manubri", details: "2x10–12 – 75\"" },
                { name: "Curl cavi alta tensione", details: "2x12–15 – 60\"" },
                { name: "Pushdown barra", details: "2x12–15 – 60\"" },
                { name: "Overhead extension", details: "2x12–15 – 60\"" },
                { name: "Plank con variazioni", details: "2x30–45\"" }
            ]
        },
        venerdi: {
            title: "Venerdì – Cardio Moderato",
            exercises: [],
            isCardio: true
        },
        sabato: {
            title: "Sabato – Cardio Opzionale",
            exercises: [],
            isCardio: true,
            isOptional: true
        },
        domenica: {
            title: "Domenica – Riposo",
            exercises: [],
            isRest: true
        }
    },
    2: { // Settimana 2 - Focus Forza
        lunedi: {
            title: "Lunedì – Spinta Forza (17 serie)",
            exercises: [
                { name: "Chest press macchina", details: "4x4–6 – 2–3'" },
                { name: "Shoulder press macchina/manubri", details: "3x5–6 – 2–3'" },
                { name: "Pectoral machine (fly)", details: "3x8–10 – 90\"" },
                { name: "Tricipiti ai cavi corda", details: "2x8–10 – 75–90\"" },
                { name: "Lateral raise ai cavi/macchina", details: "2x10 – 60\"" },
                { name: "Torsion Machine", details: "2x10–12 – 60\"" }
            ]
        },
        martedi: {
            title: "Martedì – Tirata Forza (15 serie)",
            exercises: [
                { name: "Lat machine presa prona larga", details: "3x5 – 2–3'" },
                { name: "Seated row macchina", details: "3x5–6 – 2–3'" },
                { name: "Pullover ai cavi macchina", details: "2x8 – 90\"" },
                { name: "Curl cavi barra dritta", details: "2x6–8 – 90\"" },
                { name: "Face pull ai cavi", details: "3x10 – 60–75\"" },
                { name: "Dumbbell Shrug", details: "3x6-8 - 90-120\"" }
            ]
        },
        mercoledi: {
            title: "Mercoledì – Gambe Forza (18 serie)",
            exercises: [
                { name: "Leg press orizzontale 45°", details: "3x5 – 2–3'" },
                { name: "Hack squat macchina", details: "3x5–6 – 2–3'" },
                { name: "Leg curl sdraiato macchina", details: "3x6 – 2'" },
                { name: "Hip thrust macchina", details: "3x6 – 2'" },
                { name: "Standing calf raise", details: "2x8 – 90\"" },
                { name: "Affondi bulgari manubri", details: "4x6/gamba – 2'" }
            ]
        },
        giovedi: {
            title: "Giovedì – Full/Complementi Forza (18 serie)",
            exercises: [
                { name: "Chest press inclinata macchina", details: "3x5 – 2–3'" },
                { name: "Lat machine presa supina", details: "3x6 – 2–3'" },
                { name: "Shoulder press manubri/macchina", details: "2x6 – 2'" },
                { name: "Bulgarian squat manubri", details: "3x6/gamba – 2'" },
                { name: "Curl manubri panca inclinata", details: "3x8 – 90\"" },
                { name: "Overhead extension", details: "2x6-8 – 120\"" },
                { name: "Crunch Machine", details: "2x12-15 - 60\"" }
            ]
        },
        venerdi: {
            title: "Venerdì – Cardio Moderato",
            exercises: [],
            isCardio: true
        },
        sabato: {
            title: "Sabato – Cardio Opzionale",
            exercises: [],
            isCardio: true,
            isOptional: true
        },
        domenica: {
            title: "Domenica – Riposo",
            exercises: [],
            isRest: true
        }
    },
    3: { // Settimana 3 - Focus Recupero
        lunedi: {
            title: "Lunedì – Spinta (11 serie)",
            exercises: [
                { name: "Chest press inclinata macchina", details: "2x8–10 – 90\"" },
                { name: "Chest press orizzontale", details: "2x8–10 – 75\"" },
                { name: "Pectoral fly cavi", details: "2x12 – 60\"" },
                { name: "Shoulder press macchina", details: "2x8–10 – 90\"" },
                { name: "Lateral raise macchina", details: "2x12–15 – 60\"" },
                { name: "Crunch Machine", details: "1x12-15 – 60\"" }
            ]
        },
        martedi: {
            title: "Martedì – Tirata (11 serie)",
            exercises: [
                { name: "Lat machine presa stretta triangolo", details: "3x8–10 – 90\"" },
                { name: "Seated row singolo braccio ai cavi", details: "2x10–12 – 75\"" },
                { name: "Pullover ai cavi alta", details: "1x12 – 60\"" },
                { name: "Rear delt machine", details: "1x12–15 – 60\"" },
                { name: "Curl alternato manubri", details: "2x10–12 – 75\"" },
                { name: "Dumbbell Shrug", details: "1x12-15 – 60\"" },
                { name: "French press", details: "1x10–12 – 60–75\"" }
            ]
        },
        mercoledi: {
            title: "Mercoledì – Gambe (15 serie)",
            exercises: [
                { name: "Hack squat macchina", details: "3x10 – 90\"" },
                { name: "Leg press", details: "3x10–12 – 90\"" },
                { name: "Leg extension", details: "2x12 – 75\"" },
                { name: "Seated leg curl", details: "3x12 – 75\"" },
                { name: "Standing calf raise", details: "2x12–15 – 60\"" },
                { name: "Seated calf raise", details: "2x12–15 – 60\"" },
                { name: "Glute bridge bilanciere", details: "1x15 – 75\"" }
            ]
        },
        giovedi: {
            title: "Giovedì – Upper misto (13 serie)",
            exercises: [
                { name: "Chest press orizzontale", details: "2x10–12 – 75\"" },
                { name: "Lat machine larga", details: "2x10–12 – 75\"" },
                { name: "Shoulder press manubri", details: "2x10–12 – 75\"" },
                { name: "Curl cavi alta tensione", details: "2x12–15 – 60\"" },
                { name: "Pushdown barra", details: "2x12–15 – 60\"" },
                { name: "Overhead extension", details: "2x12–15 – 60\"" },
                { name: "Plank con variazioni", details: "1x30–45\"" }
            ]
        },
        venerdi: {
            title: "Venerdì – Cardio Moderato",
            exercises: [],
            isCardio: true
        },
        sabato: {
            title: "Sabato – Cardio Opzionale",
            exercises: [],
            isCardio: true,
            isOptional: true
        },
        domenica: {
            title: "Domenica – Riposo",
            exercises: [],
            isRest: true
        }
    }
};

// Dati delle diete
const dietPlans = {
    "2100": {
        name: "Piano da 2100 Calorie",
        targetMacros: {
            calories: 2100,
            carbs: 200,
            proteins: 170,
            fats: 70
        },
        data: {
    lunedi: {
        title: "🗓️ Lunedì (Allenamento) - Piano Alimentare",
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
                name: "Spuntino",
                icon: "�",
                foods: [
                    { name: "Yougurt HiPro", quantity: "160g" }
                ]
            },
            {
                name: "Pranzo",
                icon: "🍝",
                foods: [
                    { name: "Lenticchie Rosse", quantity: "130g" },
                    { name: "Tilapia", quantity: "200g" },
                    { name: "Olio EVO", quantity: "15g" }
                ]
            },
            {
                name: "Pre-Workout",
                icon: "💪",
                foods: [
                    { name: "Caffè", quantity: "15g" },
                    { name: "Albicocche Secche", quantity: "40g" }
                ]
            },
            {
                name: "Post-Workout",
                icon: "💪",
                foods: [
                    { name: "Mousse Muller", quantity: "200g" }
                ]
            },
            {
                name: "Cena",
                icon: "🥩",
                foods: [
                    { name: "Mozzarella", quantity: "100g" },
                    { name: "Patate Bollite", quantity: "250g" },
                    { name: "Olio EVO", quantity: "15g" }
                ]
            }
        ]
    },
    martedi: {
        title: "🗓️ Martedì (Riposo) - Piano Alimentare",
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
                name: "Spuntino",
                icon: "�",
                foods: [
                    { name: "Pistacchi", quantity: "15g" }
                ]
            },
            {
                name: "Pranzo",
                icon: "🍝",
                foods: [
                    { name: "Penne Proteiche Coop", quantity: "150g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            },
            {
                name: "Pre-Workout",
                icon: "💪",
                foods: [
                    { name: "Caffè", quantity: "15g" },
                    { name: "Albicocche Secche", quantity: "40g" }
                ]
            },
            {
                name: "Post-Workout",
                icon: "💪",
                foods: [
                    { name: "Bevanda HiPro", quantity: "330g" },
                    { name: "Nocciole", quantity: "15g" }
                ]
            },
            {
                name: "Cena",
                icon: "🥩",
                foods: [
                    { name: "Pane", quantity: "30g" },
                    { name: "Tacchino Petto", quantity: "120g" },
                    { name: "Mozzarella", quantity: "100g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            }
        ]
    },
    mercoledi: {
        title: "🗓️ Mercoledì (Allenamento) - Piano Alimentare",
        meals: [
            {
                name: "Colazione",
                icon: "🌅",
                foods: [
                    { name: "Latte", quantity: "350g" },
                    { name: "Corn Flakes", quantity: "40g" },
                    { name: "Whey Isolate", quantity: "25g" },
                    { name: "Miele", quantity: "10g" }
                ]
            },
            {
                name: "Spuntino",
                icon: "�",
                foods: [
                    { name: "Pistacchi", quantity: "30g" }
                ]
            },
            {
                name: "Pranzo",
                icon: "🍝",
                foods: [
                    { name: "Penne Proteiche Coop", quantity: "150g" },
                    { name: "Pollo Petto", quantity: "100g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            },
            {
                name: "Pre-Workout",
                icon: "💪",
                foods: [
                    { name: "Caffè", quantity: "15g" },
                    { name: "Albicocche Secche", quantity: "40g" }
                ]
            },
            {
                name: "Post-Workout",
                icon: "💪",
                foods: [
                    { name: "Mousse Muller", quantity: "200g" },
                    { name: "Nocciole", quantity: "25g" }
                ]
            },
            {
                name: "Cena",
                icon: "🥩",
                foods: [
                    { name: "Merluzzo", quantity: "200g" },
                    { name: "Patate Bollite", quantity: "220g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            }
        ]
    },
    giovedi: {
        title: "🗓️ Giovedì (Riposo) - Piano Alimentare",
        meals: [
            {
                name: "Colazione",
                icon: "🌅",
                foods: [
                    { name: "Latte", quantity: "350g" },
                    { name: "Fiocchi Coop", quantity: "40g" },
                    { name: "Whey Isolate", quantity: "25g" }
                ]
            },
            {
                name: "Spuntino",
                icon: "�",
                foods: [
                    { name: "Yougurt HiPro", quantity: "160g" }
                ]
            },
            {
                name: "Pranzo",
                icon: "🍝",
                foods: [
                    { name: "Fagioli", quantity: "100g" },
                    { name: "Tacchino Petto", quantity: "80g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            },
            {
                name: "Pre-Workout",
                icon: "💪",
                foods: [
                    { name: "Caffè", quantity: "15g" },
                    { name: "Albicocche Secche", quantity: "20g" }
                ]
            },
            {
                name: "Post-Workout",
                icon: "💪",
                foods: [
                    { name: "Bevanda HiPro", quantity: "330g" },
                    { name: "Pistacchi", quantity: "20g" }
                ]
            },
            {
                name: "Cena",
                icon: "🥩",
                foods: [
                    { name: "Ceci", quantity: "100g" },
                    { name: "Mozzarella", quantity: "100g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            }
        ]
    },
    venerdi: {
        title: "🗓️ Venerdì (Allenamento) - Piano Alimentare",
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
                name: "Spuntino",
                icon: "�",
                foods: [
                    { name: "Yougurt HiPro", quantity: "160g" },
                    { name: "Pistacchi", quantity: "15g" }
                ]
            },
            {
                name: "Pranzo",
                icon: "🍝",
                foods: [
                    { name: "Penne Proteiche Coop", quantity: "100g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            },
            {
                name: "Pre-Workout",
                icon: "💪",
                foods: [
                    { name: "Caffè", quantity: "15g" },
                    { name: "Albicocche Secche", quantity: "40g" }
                ]
            },
            {
                name: "Post-Workout",
                icon: "💪",
                foods: [
                    { name: "Mousse Muller", quantity: "200g" }
                ]
            },
            {
                name: "Cena",
                icon: "🥩",
                foods: [
                    { name: "Manzo Magro", quantity: "150g" },
                    { name: "Ceci", quantity: "110g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            }
        ]
    },
    sabato: {
        title: "🗓️ Sabato (Riposo) - Piano Alimentare",
        meals: [
            {
                name: "Colazione",
                icon: "🌅",
                foods: [
                    { name: "Latte", quantity: "350g" },
                    { name: "Fiocchi Coop", quantity: "30g" },
                    { name: "Whey Isolate", quantity: "25g" }
                ]
            },
            {
                name: "Spuntino",
                icon: "🥗",
                foods: [
                    { name: "Yougurt HiPro", quantity: "160g" }
                ]
            },
            {
                name: "Pranzo",
                icon: "🍝",
                foods: [
                    { name: "Maiale Magro", quantity: "150g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            },
            {
                name: "Pre-Workout",
                icon: "💪",
                foods: []
            },
            {
                name: "Post-Workout",
                icon: "💪",
                foods: [
                    { name: "Bevanda HiPro", quantity: "330g" },
                    { name: "Mousse Muller", quantity: "200g" }
                ]
            },
            {
                name: "Cena",
                icon: "🥩",
                foods: [
                    { name: "Pizza Wurstel", quantity: "400g" }
                ]
            }
        ]
    },
    domenica: {
        title: "🗓️ Domenica (Riposo) - Piano Alimentare",
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
                name: "Spuntino",
                icon: "�",
                foods: [
                    { name: "Yougurt HiPro", quantity: "160g" }
                ]
            },
            {
                name: "Pranzo",
                icon: "🍝",
                foods: [
                    { name: "Pollo Petto", quantity: "150g" },
                    { name: "Fagioli", quantity: "50g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            },
            {
                name: "Pre-Workout",
                icon: "💪",
                foods: [
                    { name: "Pistacchi", quantity: "25g" }
                ]
            },
            {
                name: "Post-Workout",
                icon: "💪",
                foods: [
                    { name: "Yougurt HiPro", quantity: "160g" }
                ]
            },
            {
                name: "Cena",
                icon: "🥩",
                foods: [
                    { name: "Pane", quantity: "90g" },
                    { name: "Mozzarella", quantity: "100g" },
                    { name: "Penne Proteiche Coop", quantity: "100g" },
                    { name: "Olio EVO", quantity: "10g" }
                ]
            }
        ]
    }
},
"2300": {
        name: "Piano da 2300 Calorie",
        targetMacros: {
            calories: 2300,
            carbs: 230,
            proteins: 175,
            fats: 77
        },
        data: {
            lunedi: {
                title: "🗓️ Lunedì (Allenamento) - Piano Alimentare",
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
                        name: "Spuntino",
                        icon: "🥗",
                        foods: [
                            { name: "Yougurt HiPro", quantity: "160g" }
                        ]
                    },
                    {
                        name: "Pranzo",
                        icon: "🍝",
                        foods: [
                            { name: "Lenticchie Rosse", quantity: "150g" },
                            { name: "Tilapia", quantity: "200g" },
                            { name: "Olio EVO", quantity: "15g" }
                        ]
                    },
                    {
                        name: "Pre-Workout",
                        icon: "💪",
                        foods: [
                            { name: "Caffè", quantity: "15g" },
                            { name: "Albicocche Secche", quantity: "40g" }
                        ]
                    },
                    {
                        name: "Post-Workout",
                        icon: "💪",
                        foods: [
                            { name: "Mousse Muller", quantity: "200g" },
                            { name: "Pistacchi", quantity: "15g" }
                        ]
                    },
                    {
                        name: "Cena",
                        icon: "🥩",
                        foods: [
                            { name: "Mozzarella", quantity: "100g" },
                            { name: "Patate", quantity: "250g" },
                            { name: "Olio EVO", quantity: "15g" }
                        ]
                    }
                ]
            },
            martedi: {
                title: "🗓️ Martedì (Riposo) - Piano Alimentare",
                meals: [
                    {
                        name: "Colazione",
                        icon: "🌅",
                        foods: [
                            { name: "Latte", quantity: "350g" },
                            { name: "Fiocchi Coop", quantity: "70g" },
                            { name: "Whey Isolate", quantity: "25g" }
                        ]
                    },
                    {
                        name: "Spuntino",
                        icon: "🥗",
                        foods: [
                            { name: "Pistacchi", quantity: "20g" }
                        ]
                    },
                    {
                        name: "Pranzo",
                        icon: "🍝",
                        foods: [
                            { name: "Penne Proteiche Coop", quantity: "150g" },
                            { name: "Olio EVO", quantity: "10g" }
                        ]
                    },
                    {
                        name: "Pre-Workout",
                        icon: "💪",
                        foods: [
                            { name: "Caffè", quantity: "15g" },
                            { name: "Albicocche Secche", quantity: "50g" }
                        ]
                    },
                    {
                        name: "Post-Workout",
                        icon: "💪",
                        foods: [
                            { name: "Bevanda HiPro", quantity: "330g" },
                            { name: "Pistacchi", quantity: "25g" }
                        ]
                    },
                    {
                        name: "Cena",
                        icon: "🥩",
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
                title: "🗓️ Mercoledì (Allenamento) - Piano Alimentare",
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
                        name: "Spuntino",
                        icon: "🥗",
                        foods: [
                            { name: "Pistacchi", quantity: "35g" }
                        ]
                    },
                    {
                        name: "Pranzo",
                        icon: "🍝",
                        foods: [
                            { name: "Penne Proteiche Coop", quantity: "160g" },
                            { name: "Pollo Petto", quantity: "100g" },
                            { name: "Olio EVO", quantity: "10g" }
                        ]
                    },
                    {
                        name: "Pre-Workout",
                        icon: "💪",
                        foods: [
                            { name: "Caffè", quantity: "15g" },
                            { name: "Albicocche Secche", quantity: "50g" }
                        ]
                    },
                    {
                        name: "Post-Workout",
                        icon: "💪",
                        foods: [
                            { name: "Mousse Muller", quantity: "200g" },
                            { name: "Nocciole", quantity: "30g" }
                        ]
                    },
                    {
                        name: "Cena",
                        icon: "🥩",
                        foods: [
                            { name: "Merluzzo", quantity: "200g" },
                            { name: "Patate", quantity: "250g" },
                            { name: "Olio EVO", quantity: "10g" }
                        ]
                    }
                ]
            },
            giovedi: {
                title: "🗓️ Giovedì (Riposo) - Piano Alimentare",
                meals: [
                    {
                        name: "Colazione",
                        icon: "🌅",
                        foods: [
                            { name: "Latte", quantity: "350g" },
                            { name: "Fiocchi Coop", quantity: "40g" },
                            { name: "Whey Isolate", quantity: "25g" }
                        ]
                    },
                    {
                        name: "Spuntino",
                        icon: "🥗",
                        foods: [
                            { name: "Yougurt HiPro", quantity: "160g" }
                        ]
                    },
                    {
                        name: "Pranzo",
                        icon: "🍝",
                        foods: [
                            { name: "Fagioli", quantity: "100g" },
                            { name: "Tacchino Petto", quantity: "80g" },
                            { name: "Olio EVO", quantity: "15g" }
                        ]
                    },
                    {
                        name: "Pre-Workout",
                        icon: "💪",
                        foods: [
                            { name: "Caffè", quantity: "15g" },
                            { name: "Albicocche Secche", quantity: "50g" }
                        ]
                    },
                    {
                        name: "Post-Workout",
                        icon: "💪",
                        foods: [
                            { name: "Bevanda HiPro", quantity: "330g" }
                        ]
                    },
                    {
                        name: "Cena",
                        icon: "🥩",
                        foods: [
                            { name: "Ceci", quantity: "150g" },
                            { name: "Mozzarella", quantity: "100g" },
                            { name: "Olio EVO", quantity: "20g" }
                        ]
                    }
                ]
            },
            venerdi: {
                title: "🗓️ Venerdì (Allenamento) - Piano Alimentare",
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
                        name: "Spuntino",
                        icon: "🥗",
                        foods: [
                            { name: "Yougurt HiPro", quantity: "160g" },
                            { name: "Pistacchi", quantity: "15g" }
                        ]
                    },
                    {
                        name: "Pranzo",
                        icon: "🍝",
                        foods: [
                            { name: "Penne Proteiche Coop", quantity: "120g" },
                            { name: "Olio EVO", quantity: "10g" }
                        ]
                    },
                    {
                        name: "Pre-Workout",
                        icon: "💪",
                        foods: [
                            { name: "Caffè", quantity: "15g" },
                            { name: "Albicocche Secche", quantity: "40g" }
                        ]
                    },
                    {
                        name: "Post-Workout",
                        icon: "💪",
                        foods: [
                            { name: "Mousse Muller", quantity: "200g" },
                            { name: "Nocciole", quantity: "10g" }
                        ]
                    },
                    {
                        name: "Cena",
                        icon: "🥩",
                        foods: [
                            { name: "Manzo Magro", quantity: "150g" },
                            { name: "Ceci", quantity: "110g" },
                            { name: "Olio EVO", quantity: "10g" }
                        ]
                    }
                ]
            },
            sabato: {
                title: "🗓️ Sabato (Riposo) - Piano Alimentare",
                meals: [
                    {
                        name: "Colazione",
                        icon: "🌅",
                        foods: [
                            { name: "Latte", quantity: "350g" },
                            { name: "Fiocchi Coop", quantity: "30g" },
                            { name: "Whey Isolate", quantity: "25g" }
                        ]
                    },
                    {
                        name: "Spuntino",
                        icon: "🥗",
                        foods: [
                            { name: "Yougurt HiPro", quantity: "160g" }
                        ]
                    },
                    {
                        name: "Pranzo",
                        icon: "🍝",
                        foods: [
                            { name: "Maiale Magro", quantity: "150g" },
                            { name: "Olio EVO", quantity: "10g" }
                        ]
                    },
                    {
                        name: "Pre-Workout",
                        icon: "💪",
                        foods: [
                            { name: "Albicocche Secche", quantity: "20g" },
                            { name: "Nocciole", quantity: "10g" }
                        ]
                    },
                    {
                        name: "Post-Workout",
                        icon: "💪",
                        foods: [
                            { name: "Bevanda HiPro", quantity: "330g" },
                            { name: "Mousse Muller", quantity: "200g" }
                        ]
                    },
                    {
                        name: "Cena",
                        icon: "🥩",
                        foods: [
                            { name: "Pizza Wurstel", quantity: "400g" },
                            { name: "Pane", quantity: "30g" }
                        ]
                    }
                ]
            },
            domenica: {
                title: "🗓️ Domenica (Riposo) - Piano Alimentare",
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
                        name: "Spuntino",
                        icon: "🥗",
                        foods: [
                            { name: "Yougurt HiPro", quantity: "160g" }
                        ]
                    },
                    {
                        name: "Pranzo",
                        icon: "🍝",
                        foods: [
                            { name: "Pollo Petto", quantity: "150g" },
                            { name: "Fagioli", quantity: "120g" },
                            { name: "Olio EVO", quantity: "15g" }
                        ]
                    },
                    {
                        name: "Pre-Workout",
                        icon: "💪",
                        foods: [
                            { name: "Pistacchi", quantity: "25g" }
                        ]
                    },
                    {
                        name: "Post-Workout",
                        icon: "💪",
                        foods: []
                    },
                    {
                        name: "Cena",
                        icon: "🥩",
                        foods: [
                            { name: "Pane", quantity: "90g" },
                            { name: "Mozzarella", quantity: "100g" },
                            { name: "Penne Proteiche Coop", quantity: "120g" },
                            { name: "Olio EVO", quantity: "10g" }
                        ]
                    }
                ]
            }
        }
    }
}
};

let currentDietPlan = "2100";
const getCurrentDietData = () => dietPlans[currentDietPlan].data;

// Valori nutrizionali per 100g di prodotto
const valoriNutrizionali = {
    // Cereali e derivati
    "penne_proteiche_coop": {"calorie": 282, "carboidrati": 46, "proteine": 30, "grassi": 3.8},
    "penne_coop": {"calorie": 358, "carboidrati": 73, "proteine": 12.0, "grassi": 1.5},
    "pane": {"calorie": 265, "carboidrati": 63.1, "proteine": 8.1, "grassi": 0.5},
    "corn_flakes_coop": {"calorie": 378, "carboidrati": 84.0, "proteine": 7.3, "grassi": 0.7},
    "fiocchi_riso_grano_orzo_coop": {"calorie": 378, "carboidrati": 81.0, "proteine": 7.9, "grassi": 1.4},
    "patate_bollite": {"calorie": 68, "carboidrati": 14.9, "proteine": 1.9, "grassi": 0.2},

    // Carni
    "pollo_petto": {"calorie": 110, "carboidrati": 0.0, "proteine": 23, "grassi": 1.8},
    "manzo_magro": {"calorie": 208,"carboidrati": 0,"proteine": 26,"grassi": 11},
    "maiale_magro": {"calorie": 187,"carboidrati": 0,"proteine": 25.4,"grassi": 9.5},
    "tacchino_petto": {"calorie": 107,"carboidrati": 0,"proteine": 24,"grassi": 1.2},
    "bresaola": {"calorie": 151,"carboidrati": 0,"proteine": 33.1,"grassi": 2},
    "prosciutto_crudo": {"calorie": 235, "carboidrati": 0.0, "proteine": 27.0, "grassi": 20.0},

    // Pesce
    "salmone": {"calorie": 134, "carboidrati": 0.0, "proteine": 18.2, "grassi": 6.2}, 
    "tonno": {"calorie": 119, "carboidrati": 0.1, "proteine": 16.1, "grassi": 6.1}, 
    "merluzzo": {"calorie": 62, "carboidrati": 0.0, "proteine": 13.4, "grassi": 0.5}, 
    "gamberi": {"calorie": 64, "carboidrati": 0.4, "proteine": 15.1, "grassi": 0.4}, 
    "alici": {"calorie": 89, "carboidrati": 1.3, "proteine": 13.9, "grassi": 3.1}, 
    "sgombro": {"calorie": 128, "carboidrati": 0.4, "proteine": 12.8, "grassi": 8.3}, 
    "nasello": {"calorie": 53, "carboidrati": 1.1, "proteine": 12.8, "grassi": 0.2}, 
    "sogliola": {"calorie": 62, "carboidrati": 0.6, "proteine": 12.7, "grassi": 1.1}, 
    "orata": {"calorie": 100, "carboidrati": 0.0, "proteine": 15.7, "grassi": 3.2}, 
    "branzino": {"calorie": 103, "carboidrati": 0.0, "proteine": 15.4, "grassi": 4.1}, 
    "trota": {"calorie": 103, "carboidrati": 0.0, "proteine": 15.4, "grassi": 4.1}, 
    "pesce_spada": {"calorie": 109, "carboidrati": 0.0, "proteine": 17.3, "grassi": 4.3}, 
    "tilapia": {"calorie": 97, "carboidrati": 0.0, "proteine": 19.5, "grassi": 2.0},

    // Latticini
    "latte_parzialmente_scremato": {"calorie": 46, "carboidrati": 4.9, "proteine": 3.3, "grassi": 1.6},
    "mozzarella": {"calorie": 270, "carboidrati": 1.8, "proteine": 20.0, "grassi": 20.0},
    "whey_isolate": {"calorie": 359, "carboidrati": 4.6, "proteine": 81.0, "grassi": 1.1},

    // Legumi
    "fagioli": {"calorie": 325, "carboidrati": 46.0, "proteine": 23.0, "grassi": 1.6},
    "lenticchie": {"calorie": 310, "carboidrati": 51.0, "proteine": 23.0, "grassi": 1.3},
    "ceci": {"calorie": 355, "carboidrati": 47.0, "proteine": 21.0, "grassi": 6.3},
    "piselli": {"calorie": 310, "carboidrati": 45.0, "proteine": 23.0, "grassi": 2.1},
    "lenticchie_rosse": {"calorie": 332, "carboidrati": 51.0, "proteine": 23.0, "grassi": 1.0},
    
    // Frutta secca
    "pistacchi": {"calorie": 608, "carboidrati": 11.5, "proteine": 18, "grassi": 54},
    "nocciole": {"calorie": 670, "carboidrati": 6, "proteine": 14, "grassi": 63.5},
    "albicocche_secche": {"calorie": 290, "carboidrati": 65, "proteine": 3, "grassi": 0.5},

    // Verdure
    "broccoli": {"calorie": 24, "carboidrati": 5.0, "proteine": 1.7, "grassi": 0.3},
    "spinaci": {"calorie": 20, "carboidrati": 0.5, "proteine": 2.1, "grassi": 0.4},
    "pomodori": {"calorie": 20, "carboidrati": 3.2, "proteine": 1.1, "grassi": 0.2},
    "carote": {"calorie": 28, "carboidrati": 6.66, "proteine": 0.5, "grassi": 0.1},
    "zucchine": {"calorie": 12, "carboidrati": 1.7, "proteine": 0.9, "grassi": 0.1},
    "peperoni_grigliati": {"calorie": 20, "carboidrati": 3.7, "proteine": 0.8, "grassi": 0.2},

    // Frutta
    "mela": {"calorie": 52, "carboidrati": 13.8, "proteine": 0.3, "grassi": 0.1},
    "pesca": {"calorie": 30, "carboidrati": 9.5, "proteine": 0.9, "grassi": 0.3},
    "albicocca": {"calorie": 28, "carboidrati": 6.3, "proteine": 0.4, "grassi": 0.1},
    "susina": {"calorie": 46, "carboidrati": 10.0, "proteine": 0.7, "grassi": 0.3},
    "ciliegie": {"calorie": 48, "carboidrati": 11.0, "proteine": 0.9, "grassi": 0.4},
    "banana": {"calorie": 76, "carboidrati": 17.4, "proteine": 1.2, "grassi": 0.3},

    // Oli e grassi
    "olio_evo": {"calorie": 899, "carboidrati": 0.0, "proteine": 0.0, "grassi": 99.9},

    // Dolcificanti
    "miele": {"calorie": 304, "carboidrati": 80.3, "proteine": 0.6, "grassi": 0.0},

    // Bevande
    "caffe": {"calorie": 2, "carboidrati": 0.0, "proteine": 0.1, "grassi": 0.2},

    // Altro
    "yougurt_hipro": {"calorie": 56, "carboidrati": 3.6, "proteine": 9.4, "grassi": 0.5},
    "bevanda_hipro": {"calorie": 59, "carboidrati": 5.5, "proteine": 8.3, "grassi": 0.5},
    "mousse_muller": {"calorie": 83, "carboidrati": 3.9, "proteine": 10.2, "grassi": 2.7},
    "budino_hipro": {"calorie": 77, "carboidrati": 5.9, "proteine": 10.2, "grassi": 1.2},
    "pizza_wurstel": {"calorie": 230, "carboidrati": 30, "proteine": 8, "grassi": 8},
    "focaccia_cotto_mozzarella": {"calorie": 242, "carboidrati": 35, "proteine": 11, "grassi": 7}
};

// Categorie per organizzare gli alimenti
const categorieAlimenti = {
    "Cereali e derivati": ["penne_proteiche_coop", "penne_coop", "pane", "corn_flakes_coop", "fiocchi_riso_grano_orzo_coop", "patate_bollite"],
    "Carni": ["pollo_petto", "manzo_magro", "maiale_magro", "tacchino_petto", "bresaola", "prosciutto_crudo"],
    "Pesce": ["salmone", "tonno", "merluzzo", "gamberi", "alici", "sgombro", "nasello", "sogliola", "orata", "branzino", "trota", "pesce_spada", "tilapia"],
    "Latticini": ["latte_parzialmente_scremato", "mozzarella", "whey_isolate"],
    "Legumi": ["fagioli", "lenticchie", "ceci", "piselli", "lenticchie_rosse"],
    "Frutta secca": ["pistacchi", "nocciole", "albicocche_secche"],
    "Verdure": ["broccoli", "spinaci", "pomodori", "carote", "zucchine", "peperoni_grigliati"],
    "Frutta": ["mela", "pesca", "albicocca", "susina", "ciliegie", "banana"],
    "Oli e grassi": ["olio_evo"],
    "Dolcificanti": ["miele"],
    "Bevande": ["caffe"],
    "Altro": ["yougurt_hipro", "bevanda_hipro", "mousse_muller", "budino_hipro", "pizza_wurstel", "focaccia_cotto_mozzarella"]
};

// Elementi DOM
const typeSelect = document.getElementById('type');
const targetSelect = document.getElementById('target');
const targetContainer = document.getElementById('target-container');
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
    const diet = getCurrentDietData()[day];
    
    // Macro raggiunti per ogni piano dieta
    const dailyMacros = {
        "2100": {
            lunedi: { calories: 2102, carbs: 197, proteins: 164, fats: 68 },
            martedi: { calories: 2061, carbs: 203, proteins: 166, fats: 73 },
            mercoledi: { calories: 2051, carbs: 200, proteins: 164, fats: 73 },
            giovedi: { calories: 2082, carbs: 184.7, proteins: 165, fats: 69 },
            venerdi: { calories: 2098, carbs: 207, proteins: 167, fats: 68 },
            sabato: { calories: 2105, carbs: 194, proteins: 167, fats: 70 },
            domenica: { calories: 2024, carbs: 193, proteins: 172, fats: 69 }
        },
        "2300": {
            lunedi: { calories: 2335, carbs: 225.1, proteins: 173.0, fats: 76.7 },
            martedi: { calories: 2263, carbs: 233.2, proteins: 172.0, fats: 80.3 },
            mercoledi: { calories: 2268, carbs: 233.6, proteins: 171.2, fats: 79.3 },
            giovedi: { calories: 2359, carbs: 225.4, proteins: 172.5, fats: 76.1 },
            venerdi: { calories: 2259, carbs: 225.5, proteins: 175.0, fats: 75.2 },
            sabato: { calories: 2309, carbs: 226.8, proteins: 171.4, fats: 76.9 },
            domenica: { calories: 2263, carbs: 228.3, proteins: 179.1, fats: 75.3 }
        }
    };
    
    const currentMacros = dailyMacros[currentDietPlan][day];
    const targetMacros = dietPlans[currentDietPlan].targetMacros;
    
    const nutritionTargetHTML = `
        <div class="nutrition-target">
            <div class="target-header">
                <h3>✅ Target ${dietPlans[currentDietPlan].name}</h3>
                <button class="info-button" onclick="showTargetInfo()">ℹ️</button>
            </div>
            <div class="nutrition-values">
                <div class="nutrition-item">
                    <strong>${currentMacros.calories}</strong>
                    Calorie
                </div>
                <div class="nutrition-item">
                    <strong>${currentMacros.carbs}g</strong>
                    Carboidrati
                </div>
                <div class="nutrition-item">
                    <strong>${currentMacros.proteins}g</strong>
                    Proteine
                </div>
                <div class="nutrition-item">
                    <strong>${currentMacros.fats}g</strong>
                    Grassi
                </div>
            </div>
        </div>
    `;
    
    const mealsHTML = diet.meals.map(meal => createMealHTML(meal)).join('');
    
    const foodListButtonHTML = `
        <div class="food-list-section">
            <button class="food-list-button" onclick="showFoodList()">
                📋 LISTA ALIMENTI
            </button>
        </div>
    `;
    
    return nutritionTargetHTML + mealsHTML + foodListButtonHTML;
}

// Funzione per mostrare il popup con i target previsti
function showTargetInfo() {
    const targetMacros = dietPlans[currentDietPlan].targetMacros;
    const popup = document.getElementById('target-popup');
    if (!popup) {
        // Crea il popup se non esiste
        const popupHTML = `
            <div id="target-popup" class="popup-overlay">
                <div class="popup-content">
                    <h3>🎯 Target ${dietPlans[currentDietPlan].name}</h3>
                    <div class="target-info">
                        <div class="target-item">
                            <strong>${targetMacros.calories}</strong> cal
                        </div>
                        <div class="target-item">
                            <strong>${targetMacros.carbs}g</strong> carboidrati
                        </div>
                        <div class="target-item">
                            <strong>${targetMacros.proteins}g</strong> proteine
                        </div>
                        <div class="target-item">
                            <strong>${targetMacros.fats}g</strong> grassi
                        </div>
                    </div>
                    <button class="close-popup" onclick="hideTargetInfo()">Chiudi</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', popupHTML);
    } else {
        // Aggiorna il contenuto del popup esistente
        const popupContent = popup.querySelector('.popup-content');
        popupContent.innerHTML = `
            <h3>🎯 Target ${dietPlans[currentDietPlan].name}</h3>
            <div class="target-info">
                <div class="target-item">
                    <strong>${targetMacros.calories}</strong> cal
                </div>
                <div class="target-item">
                    <strong>${targetMacros.carbs}g</strong> carboidrati
                </div>
                <div class="target-item">
                    <strong>${targetMacros.proteins}g</strong> proteine
                </div>
                <div class="target-item">
                    <strong>${targetMacros.fats}g</strong> grassi
                </div>
            </div>
            <button class="close-popup" onclick="hideTargetInfo()">Chiudi</button>
        `;
    }
    document.getElementById('target-popup').style.display = 'flex';
}

// Funzione per nascondere il popup
function hideTargetInfo() {
    const popup = document.getElementById('target-popup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// Funzione per formattare il nome dell'alimento
function formatFoodName(foodKey) {
    return foodKey
        .replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
        .replace('Coop', 'COOP')
        .replace('Evo', 'EVO')
        .replace('Hipro', 'HiPro');
}

// Funzione per creare l'HTML di un alimento
function createFoodItemHTML(foodKey, foodData) {
    const formattedName = formatFoodName(foodKey);
    return `
        <div class="food-item">
            <div class="food-name-main">${formattedName}</div>
            <div class="food-nutrients">
                <div class="nutrient">
                    <span class="nutrient-value">${foodData.calorie}</span>
                    <span class="nutrient-label">kcal</span>
                </div>
                <div class="nutrient">
                    <span class="nutrient-value">${foodData.carboidrati}g</span>
                    <span class="nutrient-label">carb</span>
                </div>
                <div class="nutrient">
                    <span class="nutrient-value">${foodData.proteine}g</span>
                    <span class="nutrient-label">prot</span>
                </div>
                <div class="nutrient">
                    <span class="nutrient-value">${foodData.grassi}g</span>
                    <span class="nutrient-label">grassi</span>
                </div>
            </div>
        </div>
    `;
}

// Funzione per creare l'HTML di una categoria
function createCategoryHTML(categoryName, foodKeys) {
    const foodsHTML = foodKeys.map(foodKey => 
        createFoodItemHTML(foodKey, valoriNutrizionali[foodKey])
    ).join('');
    
    return `
        <div class="food-category">
            <h3 class="category-title">${categoryName}</h3>
            <div class="foods-grid">
                ${foodsHTML}
            </div>
        </div>
    `;
}

// Funzione per mostrare la lista alimenti
function showFoodList() {
    const categoriesHTML = Object.entries(categorieAlimenti)
        .map(([categoryName, foodKeys]) => createCategoryHTML(categoryName, foodKeys))
        .join('');
    
    const foodListHTML = `
        <div id="food-list-overlay" class="food-list-overlay">
            <div class="food-list-container">
                <div class="food-list-header">
                    <h2>📋 Lista Alimenti</h2>
                    <p class="food-list-description">Valori nutrizionali per 100g di prodotto</p>
                    <button class="close-food-list" onclick="hideFoodList()">✕</button>
                </div>
                <div class="food-list-content">
                    ${categoriesHTML}
                </div>
            </div>
        </div>
    `;
    
    // Rimuovi lista esistente se presente
    const existingList = document.getElementById('food-list-overlay');
    if (existingList) {
        existingList.remove();
    }
    
    // Aggiungi la nuova lista
    document.body.insertAdjacentHTML('beforeend', foodListHTML);
}

// Funzione per nascondere la lista alimenti
function hideFoodList() {
    const foodList = document.getElementById('food-list-overlay');
    if (foodList) {
        foodList.remove();
    }
}

// Funzione per gestire il click fuori dal popup (mobile-friendly)
function handleOutsideClick(event, overlayId, contentClass) {
    const overlay = document.getElementById(overlayId);
    const content = event.target.closest('.' + contentClass);
    
    if (overlay && !content && event.target === overlay) {
        if (overlayId === 'food-list-overlay') {
            hideFoodList();
        } else if (overlayId === 'target-popup') {
            hideTargetInfo();
        }
    }
}

// Aggiunge gestione eventi per chiusura popup su mobile
function addMobileEventListeners() {
    // Gestione touch per chiusura popup
    document.addEventListener('touchstart', function(e) {
        // Food list overlay
        const foodOverlay = document.getElementById('food-list-overlay');
        if (foodOverlay && e.target === foodOverlay) {
            hideFoodList();
        }
        
        // Target popup
        const targetPopup = document.getElementById('target-popup');
        if (targetPopup && e.target === targetPopup) {
            hideTargetInfo();
        }
    }, { passive: true });
    
    // Previene zoom accidentale su doppio tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// Aggiorna la visualizzazione del contenuto
function updateContent() {
    const type = typeSelect.value;
    const week = weekSelect.value;
    const day = daySelect.value;
    const target = targetSelect.value;
    
    if (type === 'workout') {
        // Mostra selettore settimana per allenamento, nascondi target
        weekContainer.classList.remove('hidden');
        targetContainer.classList.remove('show');
        
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
        // Nascondi selettore settimana per dieta, mostra target
        weekContainer.classList.add('hidden');
        targetContainer.classList.add('show');
        
        // Aggiorna il piano dieta corrente
        currentDietPlan = target;
        
        const diet = getCurrentDietData()[day];
        contentTitle.textContent = diet.title;
        contentItems.innerHTML = createDietHTML(day);
    }
}

// Event listeners
typeSelect.addEventListener('change', updateContent);
targetSelect.addEventListener('change', updateContent);
weekSelect.addEventListener('change', updateContent);
daySelect.addEventListener('change', updateContent);

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    // Imposta il piano dieta di default
    targetSelect.value = currentDietPlan;
    updateContent();
    addMobileEventListeners();
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

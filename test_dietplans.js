// Test per verificare la struttura di dietPlans
console.log('Testing dietPlans structure...');

// Estraggo solo la definizione di dietPlans dal file principale
const fs = require('fs');
const content = fs.readFileSync('script.js', 'utf8');

// Trova l'inizio e la fine della definizione di dietPlans
const start = content.indexOf('const dietPlans = {');
const end = content.indexOf('};', start) + 2;

if (start === -1 || end === -1) {
    console.log('❌ Non riesco a trovare la definizione di dietPlans');
    process.exit(1);
}

const dietPlansCode = content.substring(start, end);
console.log('📍 Definizione dietPlans trovata alle posizioni:', start, 'to', end);

try {
    // Valuta il codice
    eval(dietPlansCode);
    
    console.log('✅ dietPlans definito correttamente');
    console.log('🔑 Chiavi disponibili:', Object.keys(dietPlans));
    console.log('📊 Piano 2100 esiste:', dietPlans["2100"] ? 'SÌ' : 'NO');
    console.log('📊 Piano 2300 esiste:', dietPlans["2300"] ? 'SÌ' : 'NO');
    
    if (dietPlans["2100"]) {
        console.log('✅ Piano 2100 ha .data:', dietPlans["2100"].data ? 'SÌ' : 'NO');
    }
    
    if (dietPlans["2300"]) {
        console.log('✅ Piano 2300 ha .data:', dietPlans["2300"].data ? 'SÌ' : 'NO');
    }
    
} catch (error) {
    console.log('❌ Errore nella definizione di dietPlans:');
    console.log(error.message);
    console.log('📍 Possibile errore di sintassi nella struttura');
}

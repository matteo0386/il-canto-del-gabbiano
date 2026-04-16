# Il canto del Gabbiano - Landing page

Landing page statica per promuovere il laboratorio intensivo residenziale **Il canto del Gabbiano** al Bio&B Italyke di Viterbo.

Il sito è pensato per essere pubblicato su GitHub Pages senza backend: solo HTML, CSS e JavaScript vanilla.

## File principali

- `index.html`: struttura della landing, testi, sezioni e form.
- `styles.css`: stile visuale responsive e mobile-first.
- `script.js`: validazione del form e apertura WhatsApp con messaggio precompilato.
- `assets/`: immagini estratte dal PDF e versioni ottimizzate per il web.
- `.nojekyll`: evita trasformazioni Jekyll su GitHub Pages.

## Aprire il progetto in locale

Puoi aprire direttamente `index.html` nel browser.

In alternativa, da terminale:

```bash
python3 -m http.server 8080
```

Poi visita:

```text
http://localhost:8080
```

## Personalizzare il numero WhatsApp

Apri `script.js` e modifica la costante in alto:

```js
const WHATSAPP_NUMBER = "393923048053";
```

Per `wa.me` il numero deve essere in formato internazionale, senza `+`, spazi o trattini.

Nota: il brief locale indicava `3923048053`; qui è stato aggiunto il prefisso Italia `39`. Verificare prima della pubblicazione definitiva.

## Sostituire testi e dati evento

I testi si trovano in `index.html`, sezione per sezione.

Punti da aggiornare appena disponibili:

- Eventuale caparra, saldo, scadenze e condizioni di prenotazione.
- Eventuali posti disponibili o limiti di partecipazione, solo se confermati.

Nel codice sono presenti commenti `TODO` nei punti esatti da completare.

## Sostituire o aggiungere immagini

Le immagini usate dalla pagina sono in `assets/`:

- `hero-bio-bb.jpg`: immagine principale dell'hero.
- `teatro-san-leonardo-optimized.jpg`: immagine della sezione teatro.
- `bio-bb-giardino.jpg`: immagine del giardino/spazio esterno.
- `bio-bb-camera.jpg`: immagine della camera.
- `gabbiano-logo.png`: favicon e piccolo logo.

Per sostituirle, mantieni gli stessi nomi file oppure aggiorna i percorsi in `index.html` e `styles.css`.

## Pubblicare su GitHub Pages

1. Carica tutti i file nel repository GitHub.
2. Vai in **Settings** > **Pages**.
3. In **Build and deployment**, seleziona **Deploy from a branch**.
4. Scegli il branch principale, per esempio `main`.
5. Come cartella scegli `/root`.
6. Salva e attendi la generazione dell'URL pubblico.

## Fonte contenuti

La landing è stata costruita usando come fonte principale il PDF locale:

```text
IL CANTO DEL GABBIANO LABORATORIO .pdf
```

e il brief locale:

```text
Brief.txt
```

Non sono state inventate condizioni economiche non presenti nei materiali.

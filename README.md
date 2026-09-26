# TOK — GitHub Pages

Versione web/PWA del gioco TOK/Tock.

## Pubblicazione su GitHub Pages

1. Crea un repository GitHub.
2. Carica **tutti i file mantenendo la cartella `fonts/`**.
3. In `Settings → Pages`, scegli `Deploy from a branch`.
4. Seleziona `main` e `/ (root)`.
5. Apri l'URL GitHub Pages generato.

## Struttura

- `index.html` — applicazione completa.
- `manifest.json` — configurazione PWA.
- `sw.js` — service worker/offline cache.
- `icon-192.png`, `icon-512.png` — icone PWA.

## Firebase

Il gioco utilizza Firebase Realtime Database tramite CDN per la sincronizzazione delle partite. Le librerie Firebase vengono caricate dall'HTML e quindi **non devono essere copiate nel repository**.

> Nota: le chiavi `apiKey` Firebase web presenti nel client non sono, da sole, una password. La sicurezza del database deve essere affidata alle Firebase Security Rules.

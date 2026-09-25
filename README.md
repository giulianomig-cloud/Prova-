# TOK — Digital Table

Nuova interfaccia 3D per TOK/Torvaianica, con il motore di gioco originale integrato.

## Pubblicazione su GitHub Pages

1. Crea un nuovo repository GitHub.
2. Carica tutti i file presenti in questa cartella nella root del repository.
3. Vai in **Settings → Pages**.
4. Seleziona **Deploy from a branch**.
5. Seleziona `main` e `/ (root)`.
6. Salva e apri l'indirizzo GitHub Pages generato.

## File

- `index.html` — applicazione principale.
- `manifest.json` — configurazione PWA.
- `sw.js` — service worker per cache/offline dell'app shell.
- `icon-192.png` — icona PWA.

Firebase viene caricato tramite CDN nel file `index.html` e il codice contiene già la configurazione Firebase presente nella versione di partenza.

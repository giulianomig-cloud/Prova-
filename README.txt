TOK — GitHub Pages package

Files:
- index.html       main game
- manifest.json    PWA manifest
- sw.js            service worker / cache
- icon-192.png     PWA icon

Upload all four files to the same GitHub Pages folder.

Important:
- Firebase is loaded from Google's CDN and uses the Firebase project already present in the game.
- The package uses system font fallbacks because the original upload did not include the local WOFF2 font binaries.
- The board geometry and game logic are retained from the supplied HTML; the 3D premium skin is CSS/SVG based.

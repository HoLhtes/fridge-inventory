# Fridge Inventory - Web (PWA) + optional Firebase sync

This is a single-page web app for managing fridge/pantry inventory and creating Google recipe search links.
It supports:
- Add / remove ingredients and inventory batches
- Categories (고기/야채/냉동/냉장/기타) and expiry highlight
- Drag & drop between locations
- Double-click quick edit
- LocalStorage persistence (default)
- Optional Firebase Cloud Firestore sync (no auth; simple demo)
- PWA support (manifest + service worker) — can "Add to Home screen"

## Files
- `index.html` — main app (open directly)
- `manifest.json` — PWA manifest
- `service-worker.js` — caches app shell for offline use
- `firebase-config.js` — OPTIONAL. Template file for enabling Firebase sync
- `assets/icon-192.png`, `assets/icon-512.png` — placeholder icons

## How to use locally
1. Unzip the package.
2. Open `index.html` in your browser (Chrome/Edge/Firefox/Safari). For PWAs it's better to host (see GitHub Pages).
3. Add sample data via the "샘플 데이터 추가" button.

## Deploy to GitHub Pages
1. Create a new GitHub repository (public or private).
2. Upload the contents of this folder to the repository root (include all files).
3. In the repository > Settings > Pages, choose the branch (usually `main`) and root, Save.
4. Your site will be available at `https://<username>.github.io/<repo>/`.

## Enable Firebase sync (optional)
1. Create a Firebase project at https://console.firebase.google.com/
2. Add a web app and copy the Firebase config object.
3. Create a file named `firebase-config.js` in the repo root (or add the script block into index.html).
4. Put the following template in `firebase-config.js` (replace placeholders):

```html
<script>
  window.FIREBASE_CONFIG = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "...",
    appId: "..."
  };
  window.FR_USER_ID = "your-unique-userid";
</script>
```

4. Enable Cloud Firestore in the Firebase console (in test mode for initial use).
5. Re-deploy the site (GitHub Pages). The app will automatically initialize Firebase and attempt to sync data under collection `fridge/<FR_USER_ID>/`.

**Security note**: This demo sync approach writes cloud data without authentication and is intended for personal use/testing. For multi-user or production, implement Firebase Authentication and proper security rules.

## Next steps I can help with
- I can upload this package to your GitHub repo (if you give access) or guide you step-by-step.
- Add user authentication (Firebase Auth), conflict resolution, or better merging logic.
- Improve recipe preview by using a server-side scraper or third-party recipe APIs (requires careful handling of terms).
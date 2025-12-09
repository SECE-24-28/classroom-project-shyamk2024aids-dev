# Mobile Recharge Web Application (Frontend Demo)

This zip contains a complete frontend demo for the **Mobile Recharge Web Application (MERN stack)** project described across Days 1–5.
It includes semantic HTML pages, Tailwind CSS via CDN, client-side JavaScript for validation and interactivity, and a mock data fallback (`plans.json`) so the Plan Selection page works without an external API.

## Structure
```
/recharge_app
  /assets
    plans.json
  index.html            # Login page
  signup.html           # Signup page
  recharge.html         # Mobile input & operator selection
  plans.html            # Plan selection (fetches from MOCK API or local plans.json)
  payment.html          # Payment page (simulated)
  confirmation.html     # Recharge confirmation
  dashboard.html        # User dashboard (history from localStorage)
  admin.html            # Admin dashboard (static demo)
  wireframes.html       # Simple wireframe mocks for main screens
  styles.css            # Small custom CSS
  script.js             # Client-side JS (validation, plan fetch, interactions)
  README.md
```

## How to use
1. Unzip and open `index.html` in your browser.
2. Use the navigation links to move between pages.
3. **Plan Selection behavior:**
   - The app first tries to fetch plans from `MOCKAPI_URL` defined in `script.js`.
   - If that request fails (e.g., you haven't created a MockAPI endpoint), it falls back to `assets/plans.json`.
4. To use your own MockAPI:
   - Create an endpoint at https://mockapi.io/ (e.g. `https://mockapi.io/api/v1/plans`)
   - Replace the `MOCKAPI_URL` value near the top of `script.js` with your endpoint URL.
   - Ensure CORS is enabled for the endpoint (mockapi.io has CORS by default).

## Notes
- This is a frontend-only demo (no real payments). The Payment page simulates success.
- Recharge history is stored in `localStorage` for demo purposes.
- Tailwind is included via CDN for quick styling; for production integrate Tailwind properly.

Enjoy! — If you want, I can:
- convert this to a React app (MERN-ready),
- integrate a real Express backend,
- create the MockAPI endpoint for you (I can't create external accounts, but I can provide exact steps).

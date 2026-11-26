# SubTrack — Subscription & Shared Expense Tracker

A responsive single-page dashboard built for the SubTrack project statement using **React, Vite, Tailwind CSS, and Shadcn-style UI components**.

## Features
- Responsive dashboard with Navbar and collapsible mobile Sidebar
- Summary cards for monthly spending, subscriptions, shared expenses, and upcoming renewals
- Add, edit, delete, search, and filter subscriptions
- Add and delete shared expenses with automatic equal per-person split calculation
- Upcoming renewal list and next-seven-days count
- Monthly spending charts using Recharts
- Spending reports and CSV export
- Browser-local persistence using `localStorage`
- Settings page with demo data reset

## Tech stack
- React 18 + Vite
- Tailwind CSS
- Radix UI Dialog and Shadcn-inspired reusable UI primitives
- Lucide React icons
- Recharts

## Run locally
1. Install Node.js (18+ recommended).
2. Open this folder in VS Code.
3. Open the terminal in the project folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Push to your existing GitHub repository
If this folder is replacing/updating an existing project, copy these files into that repository first. Then run:

```bash
git add .
git commit -m "Build SubTrack responsive dashboard"
git push origin main
```

If your repository uses another branch, replace `main` with that branch name.

## Notes
- This is a frontend assignment implementation. It uses sample data and browser `localStorage`; it does not include authentication, a backend API, real payment processing, or actual renewal notifications.
- The dashboard's sample dates are illustrative. Update the sample data in `src/data/sampleData.js` as needed.
- The project uses reusable components styled in the Shadcn UI design approach. Radix Dialog provides accessible modal behavior.

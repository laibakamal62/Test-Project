# Product Dashboard

A modern product dashboard built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**.

## Features

- 🛍️ **Product Listing**: Browse products with pagination.
- 🔍 **Search & Filter**: Find products by name or category.
- ❤️ **Favorites**: Save your favorite items (persisted locally).
- 🌓 **Dark/Light Mode**: Toggle between themes.
- 📱 **Responsive Design**: Optimized for mobile and desktop.

## Technlogies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **State Management**: React Context + Hooks
- **Data Fetching**: Native Fetch API (Server Components)

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Application**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Structure

- `app/`: Application routes and pages.
- `components/`: Reusable UI components.
- `lib/`: API utility functions.
- `hooks/`: Custom hooks (e.g., `useFavoritesContext`).

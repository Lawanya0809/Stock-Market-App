# 📈 Signalist — Stock Market App

Signalist is a stock market tracking application built with **Next.js**, **React**, and **TypeScript**, styled with **Tailwind CSS** and **shadcn/ui**. The project provides the foundation for a full-featured market dashboard — watchlists, alerts, and market insights — with a modern, accessible, form-driven UI.

> This repository is a work in progress. Some sections below (auth, database, market-data integrations) describe the intended direction of the app and may not be fully wired up yet — check `package.json` and the codebase for the current state.

## ✨ Features (current & planned)

- 🔐 User sign-up / onboarding flow with validated forms (`react-hook-form`)
- 🌍 Country selector for onboarding (`react-select-country-list`)
- 🎛️ Command palette / quick-search UI (`cmdk`)
- 🧩 Accessible, themeable UI components via **shadcn/ui** and **Base UI**
- 📊 Live stock prices, watchlists, and market news *(planned — via a market-data provider such as Finnhub)*
- 🔔 Custom price alerts and notifications *(planned)*

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16 (App Router) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS 4, shadcn/ui, Base UI |
| Forms | React Hook Form |
| Icons | Lucide React |
| Linting | ESLint (Next.js config) |

## 📁 Project Structure

```
.
├── app/            # Next.js App Router routes, layouts, and pages
├── components/     # Reusable UI components (shadcn/ui-based)
├── Hooks/          # Custom React hooks
├── lib/            # Utilities, helpers, and shared logic
├── types/          # Shared TypeScript type definitions
├── public/assets/  # Static assets (images, icons, etc.)
├── components.json # shadcn/ui configuration
└── next.config.ts  # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/Lawanya0809/Stock-Market-App.git
   cd Stock-Market-App
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

You can start editing the app by modifying files in the `app/` directory — pages auto-update as you save.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## 🎨 UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) for accessible, composable components. To add a new component:

```bash
npx shadcn add <component-name>
```

Component configuration lives in `components.json`.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a pull request

## 📄 License

No license has been specified for this project yet. Consider adding a `LICENSE` file to clarify usage rights.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix / Base UI](https://base-ui.com)
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

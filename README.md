# Currency Converter

A modern, real-time currency converter built with React. Convert between multiple currencies with live exchange rates, powered by a free API and styled with a beautiful glassmorphism design.

## Features

✨ **Real-time Currency Conversion** — Fetch live exchange rates from a reliable currency API  
🔄 **Swap Currencies** — Quickly switch between "from" and "to" currencies with one click  
💱 **Support for 150+ Currencies** — Convert between major and minor global currencies  
⚡ **Fast & Responsive** — Built with React 19 and Vite for lightning-fast performance  
🎨 **Beautiful UI** — Glassmorphism design with Tailwind CSS and smooth animations  
📱 **Mobile-Friendly** — Fully responsive design works great on all devices  
⏳ **Loading States** — User-friendly loading indicator while fetching exchange rates  

## Tech Stack

- **Frontend Framework:** React 19.1
- **Build Tool:** Vite 7.1
- **Styling:** Tailwind CSS 4.1 + Glassmorphism
- **Icons:** React Icons 5.5
- **API:** [fawazahmed0 Currency API](https://github.com/fawazahmed0/currency-api)
- **Linting:** ESLint 9.33

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/currency-converter.git
   cd currency-converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
npm run preview
```

The `dist/` folder will contain your optimized production build.

## Project Structure

```
src/
├── components/
│   └── InputBox.jsx        # Reusable input component for currency selection
├── hooks/
│   └── useCurrencyInfo.js  # Custom hook to fetch exchange rates
├── App.jsx                 # Main app component
├── index.css              # Global styles
└── main.jsx               # React entry point

public/
└── currency-converter-bg-image.jpg  # Background image
```

## How It Works

1. **Fetch Rates:** The `useCurrencyInfo` custom hook fetches live exchange rates from the CDN-hosted currency API
2. **Convert:** When you enter an amount, the app calculates the conversion using real-time rates
3. **Swap:** Click the swap button to reverse currencies and convert in the opposite direction
4. **Display:** Results update instantly with current exchange rates

## Available Scripts

- `npm run dev` — Start development server with hot module replacement
- `npm run build` — Build for production
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint to check code quality

## Live Demo

🚀 **[View Live Demo on Vercel](https://currency-converter-wheat-nine.vercel.app/)**

## Contributing

Feel free to fork this project and submit pull requests. All contributions are welcome!

## License

This project is open source and available under the MIT License.

## Author

Created as a portfolio project to demonstrate React, Vite, and modern web development practices.

---

**Questions or feedback?** Open an issue on GitHub or reach out!


# Guitar Tuner App

A modern, responsive guitar tuner application inspired by GuitarTuna. Built with React, TypeScript, and Redux for state management, this app provides an intuitive interface for tuning your guitar.

## Features

- **Accurate Tuning:** High-precision tuning based on real-time audio processing.
- **React Router:** Seamless navigation between different sections of the app.
- **State Management:** Utilizes Redux with properly typed slices of state for scalability.
- **TypeScript Strictness:** Avoids `any` type for a fully type-safe experience.
- **Tailwind CSS:** Fully styled with Tailwind for a sleek UI.
- **Vite-Powered:** Fast development and optimized builds with Vite.

## Prerequisites

Ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (Latest LTS recommended)
- **[npm](https://www.npmjs.com/)** (Comes with Node.js)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/guitar-tuner-app.git
   cd guitar-tuner-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Development

To start the development server with Tailwind watch mode:
```sh
npm run w
```

This will launch the app in your browser at `http://localhost:5173/` (default Vite port).

## Project Structure

```
/src
├── assets    # base images for app
├── components    # Reusable UI components
├── features      # Page components for routing
├── hooks       # Custom React hooks/ simple for now nothing to crazy
├── store       # Redux store & slices
├── styles       # input output for TailwindCSS
```

## Build

To create a production build:
```sh
npm run build
```

## Deployment

You can deploy the build output (`dist/` folder) using Vercel, Netlify, or any static hosting provider.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

MIT License. See `LICENSE` file for details.


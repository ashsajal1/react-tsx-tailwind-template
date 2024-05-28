# React TSX Tailwind Template

Welcome to the **React TSX Tailwind Template** repository! This template provides a robust starting point for creating modern, responsive web applications using React, TypeScript, and Tailwind CSS. It's designed to help you quickly set up a new project with best practices and essential configurations already in place.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Project](#running-the-project)
  - [Building the Project](#building-the-project)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Router**: Declarative routing for React.
- **Linting and Formatting**: ESLint and Prettier are configured to maintain code quality and consistency.
- **Dark Mode Support**: Easily switch between light and dark themes.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. Download it from [nodejs.org](https://nodejs.org/).
- **Pnpm**: We use Pnpm as our package manager. Install it globally using npm:
  ```sh
  npm install -g pnpm 
  ```

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/ashsajal1/react-tsx-tailwind-template.git
   ```
2. **Navigate into the project directory**:
   ```sh
   cd react-tsx-tailwind-template
   ```
3. **Install the dependencies**:
   ```sh
   pnpm install
   ```

## Usage

### Running the Project

To start the development server, run:
```sh
pnpm dev
```
This will launch the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building the Project

To create a production-ready build, run:
```sh
pnpm build
```
The optimized build will be output to the `build` folder.

## Project Structure

Here is an overview of the project structure:

```
react-tsx-tailwind-template/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   ├── features/        # Redux slices and features
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utility functions and types
│   ├── pages/           # Page components
│   ├── styles/          # Tailwind CSS configuration and global styles
│   ├── App.tsx          # Main App component
│   ├── index.tsx        # Entry point for React
│   ├── routes.tsx       # React Router setup
│   └── ...              # Other configuration files and utils
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project metadata and scripts
└── pnpm-lock.yaml       # Yarn lockfile
```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or create a pull request. Please ensure your changes follow the project's coding standards and conventions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using the React TSX Tailwind Template! If you have any questions or need further assistance, please don't hesitate to reach out. Happy coding! 🚀

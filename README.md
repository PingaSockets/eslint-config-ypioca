# @pingasockets/eslint-config-ypioca

Shared ESLint 9 configuration for PingaSockets TypeScript projects.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Introduction

`@pingasockets/eslint-config-ypioca` provides a shared ESLint configuration tailored for PingaSockets TypeScript projects.

## Installation

To install the configuration, ensure you have ESLint 9 or higher, then run:

```
npm install --save-dev @pingasockets/eslint-config-ypioca
```

Ensure you have the required peer dependency:

```
npm install --save-dev eslint
```

## Usage

This package uses ESLint 9's **Flat Configuration**. To use it, create an `eslint.config.js` file in the root of your project and extend this configuration.

### Example `eslint.config.js`

```js
 // Importing Lint Settings
import ypiocaConfig from '@pingasockets/eslint-config-ypioca';

export default [
  ...ypiocaConfig, // Applying Lint Settings
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parserOptions: {
         // Adjust to your TypeScript configuration
        project: './tsconfig.json',
      },
    },
  },
  // Overriding imported rules
  {
    rules: {
      // The following rules override the imported ones
      "no-restricted-syntax": "off",
      "unicorn/switch-case-braces": "off",
      "sonarjs/slow-regex": "off"
      // etc., etc., etc.
    }
  },
];
```

### Linting Commands

Run ESLint in your project using the following command:

```bash
npx eslint .
```

Or add a script in your `package.json`:

```json
"scripts": {
  "lint": "eslint ."
}
```

## Features

- **TypeScript Support**: Fully compatible with TypeScript projects.
- **Flat Configuration**: Simplifies the configuration process.
- **Simple Import Sorting**: Organize imports with `eslint-plugin-simple-import-sort`.
- **Code Quality**: Plugins for improved maintainability, such as:
  - `eslint-plugin-jsdoc` for documentation validation.
  - `eslint-plugin-promise` for better promise handling.
  - `eslint-plugin-unicorn` for modern JavaScript practices.
- **Advanced Static Analysis**: Plugins like `eslint-plugin-sonarjs` for complex codebase analysis.

## Core and Peer Dependencies

This package depends on several essential ESLint plugins:

### Core Dependencies

- `@eslint/js`: ESLint core rules.
- `eslint-plugin-depend`: Dependency-related linting.
- `eslint-plugin-simple-import-sort`: Ensures consistent import order.
- `typescript`: TypeScript support.
- `typescript-eslint`: Integrates TypeScript with ESLint.

### Peer Dependencies

- `eslint` version 9 or higher.

## Development

Clone the repository:

```
git clone https://github.com/PingaSockets/eslint-config-ypioca.git
cd eslint-config-ypioca
```

Install dependencies:

```
npm install
```

Make your changes and ensure they adhere to the style guidelines. Since no test scripts are defined, manually verify your updates by linting example projects.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to your branch (`git push origin feature-branch-name`).
5. Open a pull request:

   - After pushing your branch to the repository, go to the repository's GitHub page.
   - Navigate to the **Pull Requests** tab.
   - Click **New Pull Request** and select your branch as the source.
   - Provide a clear and descriptive title for your pull request.
   - In the description, explain the changes you made, why they are necessary, and any other context that reviewers might find useful.
   - Link to any related issues or discussions if applicable.
   - Submit the pull request for review.

## Reporting Issues or Feature Requests

To report bugs, request features, or suggest improvements:

1. Navigate to the [issue tracker](https://github.com/PingaSockets/eslint-config-ypioca/issues).
2. Click the **New Issue** button.
3. Choose the appropriate issue template:
   - **Bug Report**: For reporting unexpected behaviors or errors.
   - **Feature Request**: For proposing new features or enhancements.
4. Fill out the issue form with as much detail as possible:
   - For bugs: Include steps to reproduce, expected behavior, and actual behavior.
   - For feature requests: Explain the feature, its purpose, and any implementation ideas.
5. Submit the issue, and the maintainers will review it as soon as possible.

## License

This project is licensed under the [MIT License](./LICENSE).

---

Developed by the [PingaSockets team](https://github.com/orgs/PingaSockets/people).
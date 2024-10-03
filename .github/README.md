# StellaX Webpage

Welcome to the **StellaX Webpage** repository! This is the landing page for **StellaX**, an AI-powered browser designed to enhance the productivity of software developers by integrating essential developer tools directly into the browsing experience. This repository is the central hub for building and maintaining the landing page using **Next.js**.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Project Locally](#running-the-project-locally)
- [Branching Strategy](#branching-strategy)
- [Contributing](#contributing)
  - [Creating a Feature Branch](#creating-a-feature-branch)
  - [Pull Request Process](#pull-request-process)
- [Code Quality and Formatting](#code-quality-and-formatting)
- [Issue Labels](#issue-labels)
- [Feature Requests and Bug Reports](#feature-requests-and-bug-reports)
- [License](#license)

---

## Project Overview

The **StellaX Webpage** will serve as the face of the **StellaX Technologies** and its flagship product, the StellaX Browser. The webpage will highlight the features, benefits, and unique selling propositions (USP) of the browser, including its AI-powered bug-solving capabilities and seamless integration with development environments.

This project is built using the **Next.js** framework, with a focus on performance, SEO, and responsiveness.

---

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **Styling**: CSS Modules, SCSS, Tailwind CSS (can choose one based on requirements)
- **Version Control**: GitHub
- **Deployment**: Vercel (can be linked for CI/CD)

---

## Getting Started

### Installation

First, fork the repository and install dependencies:

```bash
git clone https://github.com/your-username/stellax.webpage
cd stellax.webpage
npm install
```

### Running the Project Locally

To run the development server:

    npm run dev

The webpage will now be running at `http://localhost:3000`. Open it in your browser to see the changes.

## Branching Strategy

We follow a structured branching strategy to keep the codebase clean and efficient.

### Main Branches:

- `main`: The production-ready branch. Only thoroughly tested code is merged here.

- `dev`: The active development branch. All new features are branched off and merged back here.

### Feature Branches:

For new work or bug fixes, create a feature branch from dev. Follow this naming convention:

- `feature/<description>`
- `bugfix/<issue-description>`

Before submitting, ensure that your code is linted and passes all tests.

## Contributing

We welcome contributions from interns and external contributors. Follow the steps below to contribute effectively:

### Creating a Feature Branch

1. Checkout the `dev` branch:
   ```bash
   git checkout dev
   ```
2. Pull the latest changes:
   ```bash
   git pull origin dev
   ```
3. Create a new branch for your feature:
   ```bash
   git checkout -b feature/<description>
   ```

### Pull Request Process

After implementing your feature or fix, follow these steps:

1. Ensure your code is linted and properly formatted.
2. Push your feature branch:

   ```bash
   git push origin feature/<description>

   ```

3. Open a pull request from your branch to `dev` on GitHub.
4. Add appropriate reviewers, follow the PR template, and describe your changes clearly.
5. Your code will be reviewed by your mentor or other team members.

## Code Quality and Formatting

To maintain high-quality and consistent code, we use ESLint and Prettier for linting and formatting.

### Linting

Run the following command to check for linting errors:

```bash
npm run lint
```

### Formatting:

Run Prettier to format your code:

```bash
npm run format
```

### Pre-Commit Hooks

We have pre-commit hooks set up using Husky to ensure that code is linted and formatted before it is committed.

## Issue Labels

We use GitHub's issue tracking system to manage tasks and bugs. Here are the standard labels you'll find:

- `good first issue`: Simple issues for beginners.
- `UI/UX`: Design-related issues.
- `frontend`: For front-end development tasks.
- `backend`: For back-end or API-related tasks.
- `enhancement`: Feature additions or improvements.
- `bug`: Issues related to functionality bugs.
- `documentation`: Issues related to documentation improvements.

## Feature Requests and Bug Reports

### Feature Requests

If you have an idea to enhance the webpage, please submit a feature request using the template provided in the `.github/ISSUE_TEMPLATE/feature_request.md`.

### Bug Reports

If you encounter any issues, submit a bug report using the `.github/ISSUE_TEMPLATE/bug_report.md`. Include clear steps to reproduce the bug, expected behavior, and actual behavior.

## License

This project is licensed under the MIT License. See the [LICENSE](https://fsf.org/) file for details.

## Contact

If you have any questions or need further clarification, feel free to reach out via GitHub Issues or directly contact the mentor, **VVS Basanth Pedapati**, at [vvs.pedapati@hotmail.com](vvs.pedapati@hotmail.com).

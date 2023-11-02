Welcome to the documentation for this project. This README provides essential information on how to run and build this project.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Development Mode](#development-mode)
  - [Production Build](#production-build)

## Getting Started

### Prerequisites

Before you begin, make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from [Node.js website](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Aziull/maklai_company_test.git

2. Change to the project's directory:

   ```
   cd maklai_company_test
3. Install project dependencies:

   ```
   npm install
## Usage

### Development Mode

To start the project in development mode, use the following command:

      npm start

This command uses webpack serve to run a local development server and opens the project in your default web browser. You can edit the code and see the changes in real-time.

### Production Build
To create an optimized production build of the project, use the following command:

    npm run build

This command runs webpack, which generates a production-ready version of the project in the dist folder.

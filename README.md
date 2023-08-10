# Express.js RESTful API Template

This template provides a simple and organized starting point for building RESTful APIs using Express.js.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Middleware](#middleware)
- [Contributing](#contributing)
- [License](#license)

## Features

- Basic project structure for building RESTful APIs.
- Pre-configured Express.js app with necessary middleware.
- Example routes and controllers to demonstrate API functionality.
- Built-in error handling middleware for consistent error responses.

## Requirements

- Node.js (version >= 12)
- npm or yarn

## Getting Started

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/iHaroon29/Express-Template.git
   cd express-template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Define your API routes in the `routes` directory.
2. Implement your controllers in the `controllers` directory.
3. Run the server:

   ```bash
   npm start
   ```

   Your API will be accessible at `http://localhost:${port}`.

## Project Structure

The project structure follows a basic organization for an Express.js app:

```
express-rest-api-template/
├── controllers/
│   ├── example.controller.js
│   └── ...
├── middleware/
│   ├── authenication.middleware.js
│   └── ...
├── routes/
│   ├── example.route.js
│   └── ...
├── test
|   ├──example.test.js
├── app.js
└── index.js
└── ...

```

- `controllers`: Contains your route handlers and business logic.
- `middleware`: Contains custom middleware, including the error handler.
- `routes`: Defines your API routes and connects them to controllers.
- `test`:Contains tests for API end points.
- `app.js`: Contains express configurations.
- `index.js`: Main entry point of your HTTP/HTTPS Server.

## Routes

Define your API routes in the `routes` directory. For example:

```javascript
// routes/exampleRoutes.js

import { Router } from 'express'
import tryCatch from '../utils/tryCatch.js'
import { exampleController } from '../controllers/example.controller.js'

// Define routes and their associated controller methods
const router = Router()
router.get('/example/:test', tryCatch(exampleController.getExample))

export default router
```

## Middleware

The `middleware` directory contains custom middleware, including an isAuthenticated Middleware. Feel free to add more middleware as needed.

## Tests

The `test` directory contains custom tests, Feel free to add more as needed.

## Contributing

Contributions are welcome! If you find a bug or want to add a feature, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [ISC License](LICENSE).

---

Feel free to customize this README according to your project's specific details and needs. This template provides a starting point for creating Express.js-based RESTful APIs and serves as a guide for developers who want to understand your project's structure and how to use it.

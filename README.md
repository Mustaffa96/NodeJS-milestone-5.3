# Node.js Express API

A clean, efficient, and production-ready Node.js Express API with built-in CI/CD pipeline.

## Features

- 🚀 Express.js with modern JavaScript
- 🛡️ Security middleware with Helmet and CORS
- 📦 Compression for better performance
- ✨ Clean code architecture
- 🔍 ESLint with Airbnb style guide
- 🧪 Jest for testing
- 📝 Error handling middleware
- 🔄 CI/CD with GitHub Actions
- 📄 API health check endpoint
- 🌍 Environment configuration

## Prerequisites

- Node.js >= 16.x
- npm >= 8.x

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd NodeJS-milestone-5.3
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

## Development

Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## Testing

Run the test suite:
```bash
npm test
```

## Linting

Check code style:
```bash
npm run lint
```

## API Endpoints

- `GET /api/health` - Health check endpoint
- Additional endpoints coming soon...

## Project Structure

```
.
├── .github/
│   └── workflows/        # GitHub Actions workflows
├── src/
│   ├── app.js           # Express app setup
│   ├── middleware/      # Custom middleware
│   └── routes/         # API routes
├── tests/              # Test files
├── .env.example        # Environment variables template
├── .eslintrc.json     # ESLint configuration
└── package.json       # Project dependencies and scripts
```

## CI/CD Pipeline

The project includes a GitHub Actions workflow that:
1. Runs on push to main and pull requests
2. Tests on multiple Node.js versions
3. Runs linting checks
4. Executes test suite
5. Builds the application
6. (Optional) Deploys to your chosen platform

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

# ReviewPath 🚀

ReviewPath is a next-generation code review and triage application. It leverages modern AI to analyze Pull Requests, summarize code changes, and provide instantaneous, actionable patch suggestions for CI/CD build failures. 

## Key Features
- **Smart Dashboard**: Connect your GitHub repositories to get a unified overview of pending PRs and repository health.
- **AI Pull Request Summary**: Automatically generates concise, human-readable summaries of complex code diffs.
- **CI Failure Triage**: Instantly identifies why a GitHub Actions build failed and proposes the exact code patch to fix it.
- **Interactive Repo Chat**: Ask a Read-Only AI assistant questions about your codebase, architecture, and current pull requests.
- **Security First**: 100% Read-Only AI operations. ReviewPath uses Multi-Factor Authentication to keep your work secure and will *never* rewrite your commits.

## Tech Stack
- **Frontend**: Next.js 14, React, Tailwind CSS
- **Theming**: Dynamic Light/Dark Mode via `next-themes`
- **Authentication**: NextAuth.js (GitHub OAuth)
- **AI Engine**: Groq LLaMA 3 8B (API) for blazing-fast inference

## Getting Started
To run this application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/omkarchhabra/ReviewPath.git
   ```
2. Navigate to the web application directory:
   ```bash
   cd apps/web
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   *The application will be available at `http://localhost:3000`.*

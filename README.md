# PrepWise

PrepWise is an AI-powered interview preparation platform designed to help candidates practice and improve their interview skills through realistic mock interviews. It leverages advanced AI technologies to provide personalized feedback and simulated interview experiences.

## Features

- **AI Mock Interviews**: Conduct realistic voice-based mock interviews with an AI interviewer.
- **Personalized Feedback**: Receive detailed feedback on your performance, including communication skills, technical knowledge, and more.
- **Customizable Interviews**: Choose from various roles, experience levels, and tech stacks to tailor the interview to your needs.
- **Transcript Analysis**: Review transcripts of your interviews to identify areas for improvement.
- **Dashboard**: Track your progress and view past interview results.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: Express, Node.js
- **Database**: [Firebase](https://firebase.google.com/)
- **AI Integration**:
  - **Voice**: [Vapi](https://vapi.ai/)
  - **LLM**: [Google Gemini](https://ai.google.dev/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/), [Lucide React](https://lucide.dev/)

## Getting Started

Follow these steps to set up the project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/suhasarali/prepwise.git
    cd prepwise
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root directory and add the following variables:

    ```env
    FIREBASE_PROJECT_ID="your-firebase-project-id"
    FIREBASE_PRIVATE_KEY="your-firebase-private-key"
    FIREBASE_CLIENT_EMAIL="your-firebase-client-email"
    GOOGLE_GENERATIVE_AI_API_KEY="your-google-gemini-api-key"
    NEXT_PUBLIC_VAPI_WEB_TOKEN="your-vapi-web-token"
    NEXT_PUBLIC_VAPI_WORKFLOW_ID="your-vapi-workflow-id"
    NEXT_PUBLIC_BASE_URL="http://localhost:3000"
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `app/`: Next.js app router structure.
    -   `api/`: API routes (currently `vapi/generate`).
    -   `(root)/`: Main application pages.
-   `components/`: Reusable UI components.
-   `lib/`: Utility functions and server actions.
    -   `actions/`: Server actions for database and AI interactions.
    -   `vapi.sdk.ts`: Vapi SDK initialization.
-   `constants/`: Constant values and configuration.
-   `firebase/`: Firebase Admin SDK configuration.



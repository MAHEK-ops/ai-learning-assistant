# AI Learning Assistant

AI Learning Assistant is a full-stack web application that converts PDF learning materials into interactive study tools. Users can upload documents and generate flashcards, quizzes, and context-based answers using Google Gemini.

The application is designed to simplify revision by automatically transforming static content into structured learning resources.

---

## How It Works

1. Users register and log in securely.
2. A PDF document is uploaded.
3. The backend extracts text from the PDF and divides it into smaller chunks.
4. These chunks are processed using the Gemini API to generate:
   - Flashcards (question–answer format)
   - Multiple-choice quizzes with explanations
   - Context-aware chat responses
5. Generated content is stored in MongoDB and linked to the user.
6. Users can review flashcards, attempt quizzes, and track their performance.

Authentication is handled using JWT, and passwords are hashed using bcrypt. Uploaded files are stored on the server and processed automatically after upload.

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Google Generative AI (Gemini)
- JWT Authentication
- Bcrypt
- Multer (file handling)
- pdf-parse

### Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios

---

## Project Architecture

```
ai-learning-assistant/
├── backend/                 # Express.js API server
│   ├── config/             # Database and multer configuration
│   ├── controllers/        # Business logic for all routes
│   ├── middleware/         # Authentication and error handling
│   ├── models/             # MongoDB schemas (User, Document, Quiz, etc.)
│   ├── routes/             # API route definitions
│   ├── utils/              # Gemini service, PDF parsing, text chunking
│   ├── uploads/            # Uploaded documents storage
│   └── server.js           # Express app initialization
│
└── frontend/
    └── ai-learning-assistant/
        ├── src/
        │   ├── components/  # Reusable UI components
        │   ├── context/     # React Context for auth state
        │   ├── pages/       # Page components (Dashboard, Documents, etc.)
        │   ├── services/    # API service calls
        │   ├── utils/       # Helper functions and axios config
        │   ├── App.jsx      # Main app router
        │   └── main.jsx     # React entry point
        └── vite.config.js   # Vite configuration
```

---

## Core Functionality

- PDF upload and text extraction  
- AI-generated flashcards with difficulty levels  
- AI-generated multiple-choice quizzes  
- Context-based document chat  
- Quiz scoring and progress tracking  
- Secure user authentication  

---

This project demonstrates full-stack development, API integration, secure authentication, file handling, and AI-driven content generation within a structured learning workflow.

# QuillNote 📝

QuillNote is a modern, responsive note-taking application built with React.js that allows users to create, organize, and manage their notes with ease. Featuring a sleek dark mode UI and user authentication, QuillNote provides a seamless experience for capturing and organizing your thoughts.

## 🚀 Live Demo

[QuillNote Live](https://quill-note.vercel.app)

## ✨ Features

- **User Authentication**

  - Personal accounts with username-based authentication
  - Secure data storage using localStorage
  - User-specific notes management

- **Note Management**

  - Create new notes with title and content
  - View all notes with timestamp and preview
  - Edit existing notes
  - Delete notes with confirmation
  - Real-time search functionality

- **Modern UI/UX**

  - Dark mode interface
  - Responsive design across all devices
  - Clean and intuitive layout
  - Toast notifications for user actions
  - Timestamp display (e.g., "just now", "5 minutes ago")

- **Accessibility**
  - ARIA labels for better screen reader support
  - Semantic HTML structure
  - Keyboard navigation support
  - High contrast dark theme

## 🛠️ Technologies Used

- [React.js](https://reactjs.org/) - Frontend library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Router](https://reactrouter.com/) - Navigation
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Notifications
- [date-fns](https://date-fns.org/) - Date formatting

## 📱 Responsive Design

The application is fully responsive across three standard breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🗂️ Project Structure

```
src/
  ├── components/
  │   ├── Header.jsx
  │   ├── NoteCard.jsx
  │   ├── NoteForm.jsx
  │   ├── ProtectedRoutes.jsx
  │   └── SearchBar.jsx
  ├── hooks/
  │   ├── useAuth.js
  │   └── useNotes.js
  ├── pages/
  │   ├── AddNote.jsx
  │   ├── Login.jsx
  │   ├── NoteDetail.jsx
  │   ├── Notes.jsx
  │   └── NotFound.jsx
  ├── utils/
  │   ├── formatDate.js
  │   └── storage.js
  ├── App.jsx
  ├── index.css
  └── main.jsx
```

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/yourusername/quillnote.git
```

2. Install dependencies

```bash
cd quillnote
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## 📝 Usage

1. Visit the application and create an account with a username
2. Start creating notes using the "New Note" button
3. View all your notes on the home page
4. Search through notes using the search bar
5. Click on a note to view, edit, or delete it
6. Logout to clear all data

## ⚙️ Environment Setup

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)

## 👤 Author

Dhrubajyoti Bhattacharjee

- GitHub: [@KeepSerene](https://github.com/KeepSerene/)
- LinkedIn: [Dhrubajyoti Bhattacharjee](https://www.linkedin.com/in/dhrubajyoti-bhattacharjee-320822318/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/KeepSerene/quill-note-crud-site-task/issues).

## ⭐️ Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./LICENSE) licensed.

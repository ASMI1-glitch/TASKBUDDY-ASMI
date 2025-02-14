# TaskBuddy - A Modern Task Management Application  

## 📌 Overview  
TaskBuddy is a modern, responsive task management tool designed to enhance productivity and streamline task organization. With an intuitive interface and powerful features, TaskBuddy helps users manage tasks efficiently, track task history, and customize views for better workflow management.  

## 🌟 Features  

### 🔑 User Authentication  
- Secure authentication using Firebase Authentication with Google Sign-In.  

### ✅ Task Management  
- Create, edit, and delete tasks seamlessly.  
- Organize tasks by categories (e.g., Work, Personal).  
- Set due dates to stay on top of deadlines.  
- Drag-and-drop functionality for easy task rearrangement.  

### 🏷️ Batch Actions  
- Perform batch actions such as deleting multiple tasks at once.  

### 📂 File Attachments  
- Attach files/documents to tasks for better context.  
- Upload files directly during task creation or editing.  
- View attached files within the task details.  

### 🔍 Advanced Filtering & Search  
- Filter tasks by category.  
- Search tasks by title for quick access.  

### 📌 Board/List View  
- Switch between **Kanban-style board view** and **traditional list view** for task management flexibility.  

### 📱 Responsive Design  
- Fully responsive UI optimized for mobile, tablet, and desktop.  

## 🚀 Getting Started  

### 📋 Prerequisites  
Ensure you have the following installed:  
- Node.js and npm/yarn installed on your system.  

### ⚡ Installation  
1. Clone the repository:  
   ```bash
   git clone <your-repo-url>
   cd taskbuddy
Install dependencies:

bash
Copy
Edit
npm install  
Set up Firebase:

Create a Firebase project at Firebase Console.
Configure Firebase Authentication and Firestore.
Enable Firebase Storage for file attachments.
Add your Firebase configuration details in the .env file:
env
Copy
Edit
VITE_REACT_APP_FIREBASE_API_KEY=your-api-key  
VITE_REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain  
VITE_REACT_APP_FIREBASE_PROJECT_ID=your-project-id  
VITE_REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket  
VITE_REACT_APP_FIREBASE_SENDER_ID=your-sender-id  
VITE_REACT_APP_FIREBASE_APP_ID=your-app-id  
Start the development server:

bash
Copy
Edit
npm start
The app will be available at http://localhost:5173.

📌 Challenges Faced & Solutions
🔄 Data Fetching & State Management
Challenge: Initially, managing server state efficiently was a challenge.
Solution: Implemented React-Query for optimized server-state management, improving data fetching and caching performance.

📂 File Uploads in Firebase Storage
Challenge: Integrating file uploads to Firebase Storage required understanding Firebase's Storage API.
Solution: Referred to Firebase documentation and successfully implemented file attachment features for tasks.

📜 License
This project is open-source and available under the MIT License.

👤 Author
Asmi Prasad

GitHub: https://github.com/ASMI1-glitch/
LinkedIn: www.linkedin.com/in/asmi-prasad-093a622a9
you can clone my git repo-https://github.com/ASMI1-glitch/taskbuddy-thealtergroup-asmi.git

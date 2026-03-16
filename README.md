# Customer Support Zone 🎫

A modern, streamlined customer support ticket management system built with React, Vite, Tailwind CSS, and DaisyUI. This application allows support agents to efficiently track, manage, and resolve customer issues.

## 🚀 Features

- **Ticket Management**: View a comprehensive list of customer tickets with details like title, ID, priority, customer name, and creation date.
- **Create New Tickets**: Easily add new support tickets through a user-friendly modal form.
- **Task Workflow**: Move tickets from "Open" to "Task Status" (In-Progress) and finally mark them as "Resolved".
- **Real-time Metrics**: Visual banner displaying the current count of in-progress and successfully resolved tasks.
- **Search & Filter**: Search tickets by title or customer name, and filter them based on priority levels (High, Medium, Low).
- **Toast Notifications**: Instant interactive feedback for user actions (creating, updating, or resolving tickets) using `react-toastify`.
- **Responsive Design**: Fully responsive UI optimized for both desktop and mobile devices.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [DaisyUI](https://daisyui.com/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)

## ⚙️ Installation & Setup

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd customer-support-zone

   Install dependencies:
Make sure you have Node.js installed, then run:

Bash
npm install
Start the development server:

Bash
npm run dev
Open in Browser:
Navigate to http://localhost:5173 in your web browser to see the application running.

📁 Project Structure Overview
src/components/ - Contains all reusable React components (Navbar, Banner, TicketList, TicketDetailsModal, etc.).

src/tickets.json - Contains the initial mock data for the application.

src/App.jsx - The main application component that manages the global state and layout.

🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

Designed & Developed by Ahnaf Sadik Saad

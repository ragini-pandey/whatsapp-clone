
# WhatsApp Clone

This is a real-time messaging application built using the MERN stack (MongoDB, Express, React, Node.js) with **Pusher** for real-time updates. The application mimics basic functionality of WhatsApp, allowing users to send and receive messages instantly.

## Features

- Real-time messaging with Pusher
- Send and receive text messages
- Store message history with MongoDB
- Fully responsive design

## Tech Stack

### Frontend
- **ReactJS**: User interface development
- **React Router**: Navigation
- **CSS/SCSS**: Styling

### Backend
- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: Database for storing users and chat messages
- **Mongoose**: ODM for MongoDB

### Real-time Messaging
- **Pusher**: Handles real-time message broadcasting between users

## Installation and Setup

### Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/)
- Pusher account for real-time functionality

### Backend Setup

1. Clone the repository and navigate into the project directory:

   ```bash
   git clone https://github.com/yourusername/whatsapp-clone.git
   cd whatsapp-clone
   ```

2. Navigate to the `backend` folder and install the dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file in the `backend` folder and add the following environment variables:

   ```bash
   PORT=9000
   MONGO_URI=your-mongodb-connection-string
   PUSHER_KEY=your_pusher_key
   PUSHER_SECRET=your_pusher_secret
   ```

4. Start the backend server:

   ```bash
   npm run backend
   ```

### Frontend Setup

1. Navigate to the `frontend` folder and install the dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

2. Start the React frontend:

   ```bash
   npm run frontend
   ```

### Running the Application

1. Ensure that both the frontend and backend servers are running.

2. Open your browser and navigate to `http://localhost:3000` to start using the app.
```

## Dependencies

### Backend:
- Express
- Mongoose
- Pusher

### Frontend:
- React
- Axios (for API requests)
- Pusher-js
- React Router

## How to Contribute

1. Fork this repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.

## License

This project is licensed under the MIT License.

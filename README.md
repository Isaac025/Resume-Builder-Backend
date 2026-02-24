This is the backend API for the Resume Builder application. It provides secure user authentication, resume management, and image upload functionality. Built with Node.js, Express, and MongoDB, it handles all server-side operations for the app.
🚀 Features
- User Authentication
- Secure login and registration using JWT tokens
- Password hashing with bcrypt
- Resume Management
- Full CRUD (Create, Read, Update, Delete) functionality
- Store and manage multiple resumes per user
- Image Uploads
- Integrated with ImageKit for handling profile pictures and other assets

🛠️ Tech Stack
| Runtime | Node.js | 
| FrameWork  | Express | 
| Database  | MongoDB | 
| Auth | JWT, bcrypt | 
| File Uploads | ImageKit | 


📂 Project Structure
Resume-Builder-Backend/
│── configs/        # Configuration files
│── controllers/    # Business logic
│── middleware/     # Authentication & request handling
│── models/         # Mongoose schemas
│── routes/         # API routes
│── server.js       # Entry point
│── package.json    # Dependencies & scripts
│── .gitignore



⚙️ Installation & Setup
- Clone the repository
git clone https://github.com/Isaac025/Resume-Builder-Backend.git
cd Resume-Builder-Backend
- Install dependencies
npm install
- Set up environment variables Create a .env file in the root directory with:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
- Run the server
npm start




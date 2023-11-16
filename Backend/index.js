import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import mysql from "mysql";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET","DELETE"],
    credentials: true,
  })
);
app.use(cookieParser())

app.use(express.json());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'iit'
});

app.post('/auth/login/', async (req, res) => {
  const { code, email, password } = req.body;

  // Verify registration number and SMTP credentials in MySQL database
  pool.query('SELECT * FROM data WHERE code = ? ', [code], (error, results) => {
    if (error) {
      console.log('Database error:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    } else if (results.length === 0) {
      console.log('Invalid credentials');
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    } else {
      // Create a transporter object using SMTP
      const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
          user: email,
          pass: password
        }
      });

      // Verify the SMTP credentials by sending a test email
      transporter.verify((error, success) => {
        if (error) {
          console.log('Error:', error);
          res.status(401).json({ success: false, message: 'Invalid credentials' });
        } else {
          console.log('Credentials verified');
          const token = jwt.sign({ email }, "jwt-secret-key", { expiresIn: "1d" });
          res.cookie('token', token);
          res.header('Access-Control-Allow-Credentials', 'true');
          console.log(token)
          res.json({ success: true, message: 'Login successful' });
        }
      });
    }
  });
});

const verifyUser = (req,res,next) =>{
  const token = req.cookies.token
  if(!token){
    return res.json({error:"you are not authenticated"})
  }
  else{
    jwt.verify(token,"jwt-secret-key",(err,decode)=>{
      if(err){
        return res.json({error:"token is not okay"})
      }
      else{
        next()
      }
    })
  }
}

// Dashboard route
app.get('/dashboard', verifyUser, (req, res) => {
  return res.json({status:"success"})
});

app.delete('/dashboard', (req, res) => {
  res.clearCookie('token', { expires: new Date(0),sameSite:"none" , secure:"true" });
  return res.json({ status: "success", message: "Logout successful" });
});
app.delete('/account/basic-info', (req, res) => {
  res.clearCookie('token', { expires: new Date(0),sameSite:"none" , secure:"true" });
  return res.json({ status: "success", message: "Logout successful" });
});
// app.delete('/dashboard/academic/faculty-advisor', (req, res) => {
//   res.clearCookie('token', { expires: new Date(0) });
//   return res.json({ status: "success", message: "Logout successful" });
// });

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.clearCookie('token', { expires: new Date(0) });
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next(err);
});


// Start the server
app.listen(8081, () => {
  console.log("Server is running on http://localhost:8081");
});

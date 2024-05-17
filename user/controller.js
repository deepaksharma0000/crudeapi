

const jwt = require('jsonwebtoken');
const secretKey = 'your_jwt_secret_key';  

const postUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).send({ error: 'Email and password are required' });
    }

    // Check for hardcoded admin credentials
    if (email === "admin@codesfortomorrow.com" && password === "Admin123!@#") {
      const token = jwt.sign({ userId: email }, secretKey, { expiresIn: '1h' });
      return res.send({
        message: "Login successful!",
        token
      });
    } else {
      return res.status(401).send({ error: "Invalid email or password" });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {postUserLogin,};


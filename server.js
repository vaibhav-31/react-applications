const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/crud-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Customer schema
const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobile: String,
  email: String,
  dob: Date,
  avgStep: Number,
  avgSleep: Number,
  avgCalories: Number,
  dailyStepGoal: Number,
});
const Customer = mongoose.model('Customer', customerSchema);

// Define CustomerHealthData schema
const customerHealthDataSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  date: Date,
  type: String,
});
const CustomerHealthData = mongoose.model(
  'CustomerHealthData',
  customerHealthDataSchema
);

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Generate token
const generateToken = (customerId) => {
  return jwt.sign({ customerId }, 'secret_key');
};

// Create a new customer
app.post('/customers', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      mobile,
      email,
      dob,
      avgStep,
      avgSleep,
      avgCalories,
      dailyStepGoal,
    } = req.body;

    const customer = new Customer({
      firstName,
      lastName,
      mobile,
      email,
      dob,
      avgStep,
      avgSleep,
      avgCalories,
      dailyStepGoal,
    });

    const savedCustomer = await customer.save();
    res.json(savedCustomer);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Get all customers
app.get('/customers', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Get a customer by ID
app.get('/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.sendStatus(404);
    }
    res.json(customer);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Update a customer by ID
app.put('/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!customer) {
      return res.sendStatus(404);
    }
    res.json(customer);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Delete a customer by ID
app.delete('/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.sendStatus(404);
    }
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

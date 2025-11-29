require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/health', async (req, res) => {
  try {
    await pool.query('select 1');
    res.json({ status: 'ok' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error' });
  }
});

// will be used later by your AIs to get config
app.get('/config/:clientId/:departmentName', async (req, res) => {
  res.json({ message: 'config placeholder' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});

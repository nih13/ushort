const express = require('express');
const connectDB = require('./config/db')


const app = express();

app.use(express.json({ extented: false }));
connectDB();

const PORT = 5000;

// Define Routes

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

const express = require('express');
const cors = require('cors');
const tasksRoutes = require('./routes/tasksRoutes')
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/tasks', tasksRoutes);

app.get('/', (req, res) => {
    res.send('API is working properly');
})

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});
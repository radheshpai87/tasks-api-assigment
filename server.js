const express = require('expess');
const cors = require('cors');
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/tasks', )

app.get('/', (req, res) => {
    res.send('API is working properly');
})


app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const filePath = path.join(__dirname, "../data/tasks.json");

const readFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading file ${error}`);
        return [];
    }
}

const writeFile = (filePath, data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (error) {
        console.error(`Error writing file ${error}`);
        return false;
    }
}

app.get('/', (req, res) => {
    const tasks = readFile(filePath);
    return res.status(200).json(data);
});

app.post('/', (req, res) => {
    const {title, description, priority, status} = req.body;
    if(!title || !priority) return res.status(400).send('Title & priority are required fields!');
    const tasks = readFile(filePath);
    const newtask = {
        id: `TASKS-${Date.now()}`,
        title,
        description,
        priority,
        createdAt: Date.now().toISOString(),
        status: status || 'pending'
    }
    tasks.push(newtask);
    writeFile(filePath, tasks);
    res.status(201).json({Success: "Tasks added", ...data});
});

module.exports = app;
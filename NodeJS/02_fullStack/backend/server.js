import express from "express";
import cors from "cors";

const app = express();
app.use(cors({origin: 'http://localhost:5173'}))

app.use(express.static('dist')) // npm run build of vite project

const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Programming Joke",
      content:
        "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 2,
      title: "Array Joke",
      content:
        "Why did the developer go broke? Because he used up all his cache!",
    },
    {
      id: 3,
      title: "Boolean Joke",
      content:
        "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
    },
    {
      id: 4,
      title: "Coffee Joke",
      content: "How do you comfort a JavaScript bug? You console it!",
    },
    {
      id: 5,
      title: "Developer Joke",
      content: "Why do Java developers wear glasses? Because they don't C#!",
    },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

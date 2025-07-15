body {
  font-family: 'Segoe UI', sans-serif;
  background: #121212;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

h1 {
  margin-bottom: 20px;
}

.stopwatch {
  background: #1e1e2f;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
  text-align: center;
}

#time {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
}

button {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #00adb5;
  color: white;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #00ffff;
}

.laps {
  max-height: 200px;
  overflow-y: auto;
  text-align: left;
  margin-top: 1rem;
}

.laps ul {
  list-style-type: none;
  padding: 0;
}

.laps li {
  padding: 5px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.95rem;
}

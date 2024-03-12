import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  return (
    <>
      <table className="table-statistics">
        <thead>
          <tr>
            <th>Statistics</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <StatisticLine text={"Good"} value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text={"Neutral"} value={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text={"Bad"} value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text={"Total"} value={total} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine
                text={"Average points"}
                value={(good - bad) / total}
              />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text={"Positive"} value={(100 * good) / total} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  // Evento click en good
  const handleClickGood = () => {
    setGood(good + 1);
  };

  // Evento click en neutral
  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  // Evento click en bad
  const handleClickBad = () => {
    setBad(bad + 1);
  };

  const handleClickGenerate = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    console.log(anecdotes.length - 1);

    setSelected(random);
  };

  const feedbackGiven = bad > 0 || neutral > 0 || good > 0;

  return (
    <>
      <h2>Give feedback</h2>

      <Button handleClick={handleClickGood} text={"Good"} />
      <Button handleClick={handleClickNeutral} text={"Neutral"} />
      <Button handleClick={handleClickBad} text={"Bad"} />

      {feedbackGiven ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}

      <hr />
      <h3>Message of the day</h3>

      <Button text={"Generate"} handleClick={handleClickGenerate} />

      <div>
        <p>{anecdotes[selected]}</p>
      </div>
    </>
  );
};

export default App;

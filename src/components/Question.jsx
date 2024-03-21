import { useEffect, useState } from "react";

function Question() {
  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const fetchQuestion = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=1&type=boolean"
      );
      const data = await response.json();
      let finalData = data.results[0];
      setCategory(finalData.category);
      setQuestion(finalData.question);
      setAnswer(finalData.correct_answer);
    } catch (error) {
      console.log("Error!! While Fetching the data..", error);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const revealAnswer = () => {
    setRevealed(true);
  };

  return (
    <div>
      <div>Category: {category}</div>
      <h3>Question: {question}</h3>
      <button type="button" onClick={revealAnswer}>
        Reveal Answer
      </button>
      {revealed && <div>Answer: {answer}</div>}
    </div>
  );
}
export default Question;

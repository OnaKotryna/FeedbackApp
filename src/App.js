import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeeback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeeback} />
      </div>
    </>
  );
}

export default App;

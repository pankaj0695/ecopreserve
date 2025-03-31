import { useEffect, useState } from "react";
import styles from "./Feedback.module.css";
import Navbar from "../../components/navbar/Navbar";
import { useUser } from "../../store/userContext";
import { useNavigate } from "react-router-dom";

function Feedback() {
  const [feedback, setFeedback] = useState({
    experience: "",
    conflict: "",
    quality: "",
    community: "",
    suggestions: "",
    additional: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && (!user || !user.name)) navigate("/login");
  }, [isLoading, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", feedback);
    setSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setSubmitted(false);
      setFeedback({
        experience: "",
        conflict: "",
        quality: "",
        community: "",
        suggestions: "",
        additional: "",
      });
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <div className={styles.feedbackContainer}>
        <h1 className={styles.title}>Help Us Improve Your Experience</h1>
        <div className={styles.feedbackForm}>
          {submitted ? (
            <div className={styles.thankYou}>
              <h2>Thank you for your feedback! 🎉</h2>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.question}>
                <p>
                  ⭐ How would you rate your overall experience with our
                  website?
                </p>
                <label>
                  <input
                    type="radio"
                    name="experience"
                    value="excellent"
                    onChange={handleChange}
                    checked={feedback.experience === "excellent"}
                  />{" "}
                  Excellent
                </label>
                <label>
                  <input
                    type="radio"
                    name="experience"
                    value="good"
                    onChange={handleChange}
                    checked={feedback.experience === "good"}
                  />{" "}
                  Good
                </label>
                <label>
                  <input
                    type="radio"
                    name="experience"
                    value="poor"
                    onChange={handleChange}
                    checked={feedback.experience === "poor"}
                  />{" "}
                  Poor
                </label>
              </div>

              <div className={styles.question}>
                <p>
                  ⭐ How effective do you find our conflict resolution tools and
                  advice?
                </p>
                <label>
                  <input
                    type="radio"
                    name="conflict"
                    value="effective"
                    onChange={handleChange}
                    checked={feedback.conflict === "effective"}
                  />{" "}
                  Effective
                </label>
                <label>
                  <input
                    type="radio"
                    name="conflict"
                    value="neutral"
                    onChange={handleChange}
                    checked={feedback.conflict === "neutral"}
                  />{" "}
                  Neutral
                </label>
                <label>
                  <input
                    type="radio"
                    name="conflict"
                    value="ineffective"
                    onChange={handleChange}
                    checked={feedback.conflict === "ineffective"}
                  />{" "}
                  Ineffective
                </label>
              </div>

              <div className={styles.question}>
                <p>
                  ⭐ How would you rate the quality of the information provided
                  on our website?
                </p>
                <label>
                  <input
                    type="radio"
                    name="quality"
                    value="excellent"
                    onChange={handleChange}
                    checked={feedback.quality === "excellent"}
                  />{" "}
                  Excellent
                </label>
                <label>
                  <input
                    type="radio"
                    name="quality"
                    value="good"
                    onChange={handleChange}
                    checked={feedback.quality === "good"}
                  />{" "}
                  Good
                </label>
                <label>
                  <input
                    type="radio"
                    name="quality"
                    value="poor"
                    onChange={handleChange}
                    checked={feedback.quality === "poor"}
                  />{" "}
                  Poor
                </label>
              </div>

              <div className={styles.question}>
                <p>
                  ⭐ How effective do you find our community service and social
                  responsibility initiatives?
                </p>
                <label>
                  <input
                    type="radio"
                    name="community"
                    value="effective"
                    onChange={handleChange}
                    checked={feedback.community === "effective"}
                  />{" "}
                  Effective
                </label>
                <label>
                  <input
                    type="radio"
                    name="community"
                    value="neutral"
                    onChange={handleChange}
                    checked={feedback.community === "neutral"}
                  />{" "}
                  Neutral
                </label>
                <label>
                  <input
                    type="radio"
                    name="community"
                    value="ineffective"
                    onChange={handleChange}
                    checked={feedback.community === "ineffective"}
                  />{" "}
                  Ineffective
                </label>
              </div>

              <div className={styles.question}>
                <p>
                  ⭐ What suggestions do you have for improving our website and
                  services?
                </p>
                <textarea
                  name="suggestions"
                  className={styles.inputField}
                  value={feedback.suggestions}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className={styles.question}>
                <p>
                  ⭐ Do you have any additional comments or feedback you would
                  like to share?
                </p>
                <textarea
                  name="additional"
                  className={styles.inputField}
                  value={feedback.additional}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Feedback;

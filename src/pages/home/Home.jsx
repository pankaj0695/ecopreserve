import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.textContent}>
          <h2>Welcome to Our Conflict Resolution Hub</h2>
          <p>
            At our Conflict Resolution Hub, we believe that every conflict holds
            an opportunity for growth and understanding. Our mission is to
            provide you with the tools and resources you need to navigate and
            resolve conflicts effectively. Whether you’re dealing with
            interpersonal issues, workplace disagreements, or community
            disputes, our platform offers comprehensive guides, expert advice,
            and practical strategies to help you achieve peaceful resolutions.
          </p>
          <Link to="/conflict-resolution" className={styles.button}>
            Conflict Resolution
            <img
              src="/right-arrow.png"
              alt="Arrow Icon"
              className={styles.arrowIcon}
            />
          </Link>
        </div>
        <div className={styles.imageContainer}>
          {/* Replace with an actual image or an icon */}
          <img src="/conflictresolution.png" alt="Conflict Resolution Icon" />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.imageContainer}>
          <img src="/communityservice.png" alt="Community Service Icon" />
        </div>
        <div className={styles.textContent}>
          <h2>
            Welcome to Our Community Service and Social Responsibility Platform
          </h2>
          <p>
            We are dedicated to promoting social responsibility and community
            engagement. Our platform connects volunteers, organizations, and
            community members who share a passion for making a positive impact.
            Together, we can create meaningful change and build a stronger, more
            compassionate community.
          </p>
          <Link to="/community-service" className={styles.button}>
            Community Service
            <img
              src="/right-arrow.png"
              alt="Arrow Icon"
              className={styles.arrowIcon}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

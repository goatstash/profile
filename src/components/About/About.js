import "./about.css";
import tb3 from "../../img/tb3.png";
import tb from "../../img/tb.png";
import tb2 from "../../img/tb2.png";
import { useState, useEffect } from "react";

let i = 0;
const About = () => {
  const [imgSrc, setImgSrc] = useState(tb);
  useEffect(() => {
    const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
    const interval = setInterval(() => {
      const images = [tb, tb3];
      //   const randomIndex = Math.floor(Math.random() * images.length);

      function renderImage(arr) {
        console.log(i);

        i = i + 1;
        if (i >= arr.length) {
          i = 0;
        }
        setImgSrc(arr[i]);
      }
      setInterval(renderImage(images), 2000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={imgSrc} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hi! My name is Tobias and I love to create and problem solve. I'm
          passionate and motivated by all things design and thrive on finding
          creative and intuitive solutions to any technical obstacles.
        </p>
        <p className="a-description">
          <b>How do I stay motivated?</b> I truly enjoy problem-solving. There
          is nothing more satisfying then using rationale and a systematic
          approach to dissect a problem and implement a solution.
        </p>
        <p className="a-description">
          <b>How do I relax?</b> Friends, art, music, exercise and education.
          Most spare time is spent with friends enjoying some of Melbourne's
          great live music, going for a run or brushing up on some Spanish.
        </p>
      </div>
    </div>
  );
};
export default About;

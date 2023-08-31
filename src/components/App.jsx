import React, { useEffect, useState } from "react";
import User from "./User";
import Section from "./Section";
import data from "../data.json";

export default function App() {
  const [daily, setDaily] = useState(false);
  const [weekly, setWeekly] = useState(true);
  const [monthly, setMonthly] = useState(false);

  useEffect(() => {
    if (daily) {
      document
        .querySelectorAll(".other p")
        .forEach((x) => (x.style.color = "var(--pale-blue)"));
      document.querySelector(".other p:nth-child(1)").style.color =
        "var(--white)";
    }
    if (weekly) {
      document
        .querySelectorAll(".other p")
        .forEach((x) => (x.style.color = "var(--pale-blue)"));
      document.querySelector(".other p:nth-child(2)").style.color =
        "var(--white)";
    }
    if (monthly) {
      document
        .querySelectorAll(".other p")
        .forEach((x) => (x.style.color = "var(--pale-blue)"));
      document.querySelector(".other p:nth-child(3)").style.color =
        "var(--white)";
    }
  }, [daily, weekly, monthly]);

  return (
    <section className="container">
      <User setDaily={setDaily} setWeekly={setWeekly} setMonthly={setMonthly} />
      {daily &&
        data.map((data) => (
          <Section
            key={data.title}
            title={data.title}
            image={data.image}
            color={data.color}
            current={data.timeframes.daily.current}
            prev={data.timeframes.daily.previous}
            timeFrame="Day"
          />
        ))}
      {weekly &&
        data.map((data) => (
          <Section
            key={data.title}
            title={data.title}
            image={data.image}
            color={data.color}
            current={data.timeframes.weekly.current}
            prev={data.timeframes.weekly.previous}
            timeFrame="Week"
          />
        ))}
      {monthly &&
        data.map((data) => (
          <Section
            key={data.title}
            title={data.title}
            image={data.image}
            color={data.color}
            current={data.timeframes.monthly.current}
            prev={data.timeframes.monthly.previous}
            timeFrame="Month"
          />
        ))}
    </section>
  );
}

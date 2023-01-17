import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const Countdown = (props) => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("January 31,2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));

      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div className="py-3 py-md-3">
      <Container>
        <h2 className="text-center text-info fs-5">Hurry Up!!!</h2>
        <div className="d-flex justify-content-center">
          <div className="p-2 p-md-3">
            <div className="text-center bg-info p-3 text-white rounded">
              <p className="fs-2 border-bottom text-center border-white">{timerDays}</p>
              <small className="">Days</small>
            </div>
          </div>
          <div className="p-2 p-md-3">
            <div className="text-center bg-info p-3 text-white rounded">
              <p className="fs-2 border-bottom text-center border-white ">{timerHours}</p>
              <small className="">Hours</small>
            </div>
          </div>
          <div className="p-2 p-md-3">
            <div className="text-center bg-info p-3 text-white rounded">
              <p className="fs-2 border-bottom text-center border-white ">{timerMinutes}</p>
              <small className="">Minutes</small>
            </div>
          </div>
          <div className="p-2 p-md-3">
            <div className="text-center bg-info p-3 text-white rounded">
              <p className="fs-2 border-bottom text-center border-white">{timerSeconds}</p>
              <small className="">Seconds</small>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Countdown;

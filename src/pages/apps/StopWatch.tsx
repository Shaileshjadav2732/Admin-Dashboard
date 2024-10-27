import AdminSidebar from "../../components/AdminSidebar";
import { useState, useEffect } from "react";
const formateTime = (time: number) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
const StopWatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

    const resetHandler = () => {
      setIsRunning(false);
      setTime(0);
    };

  useEffect(() => {
    let intervalId: number;
    if(isRunning){
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);

    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);


  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Stopwatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formateTime(time)}</h2>
            <button onClick={() => setIsRunning((prev) => !prev)}>{isRunning?"Stop":"Start"}</button>
            <button onClick={()=>resetHandler()}>Reset</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StopWatch;

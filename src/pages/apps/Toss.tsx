import AdminSidebar from "../../components/AdminSidebar";
import { useState } from "react";
const Toss = () => {

  const [angle,setAngle]=useState(0);
  const flipCoin = () => {
    const toss = Math.floor(Math.random() * 2);
  if(toss===0){
    setAngle((prev)=>prev+180);
  }else{
    setAngle((prev)=>prev+360);
  }
  };
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Toss</h1>
        <section>
          <article className="tosscoin" onClick={flipCoin}
         
            style={{ transform: `rotateY(${angle}deg)` }}>
            <div></div>
            <div></div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Toss;

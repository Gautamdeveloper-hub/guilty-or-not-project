// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Mycomponent from './Mycomponent';
// import "./App.css";

// const handleSubmit = (e) => {
//         e.preventDefault();
//         setSubmittedValue(value);
//     };
// function CommentCard=({ user, submittedValue, time, comment }) => {
//     const isDefense = submittedValue === 'defense';

//     return (
//         <div className="comment">
//             <form onSubmit={handleSubmit}>
//                 <label>Write your argument</label>
//                 <input
//                     className="styled-input"
//                     type="text"
//                     value={value}
//                     onChange={(e) => setValue(e.target.value)}
//                     placeholder="type your argument here..." />
//                 <button className="button" type="submit">
//                     Post as Defender
//                 </button>
//             </form>

//             {submittedValue && (
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     style={{
//                         background: "rgba(201, 15, 15, 0.3)",
//                         padding: "1rem",
//                         borderRadius: "8px",
//                         marginTop: "1rem",
//                         color: "white",
//                         borderLeft: `6px solid ${isDefense ? '#4285F4' : '#EA4335'}`,
//                     }}
//                 >
//                     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
//                         <span style={{ fontWeight: 'bold' }}>{user}</span>
//                         <span style={{ fontSize: '0.85rem', color: '#ccc' }}>{time}</span>
//                     </div>
//                     <div style={{
//                         backgroundColor: isDefense ? '#1a73e8' : '#d93025',
//                         color: 'white',
//                         padding: '2px 10px',
//                         display: 'inline-block',
//                         borderRadius: '6px',
//                         fontSize: '0.8rem',
//                         fontWeight: 'bold',
//                         marginBottom: '0.5rem',
//                     }}

//                     >
//                         {isDefense ? 'DEFENSE' : 'OFFENSE'}
//                     </div>

//                     <p style={{ marginTop: '0.5rem', lineHeight: '1.4' }}>{comment}</p>
//                 </motion.div>

//             );
//         }; 


//         </div>
//     );
// }
// function App() {
//     const [value, setValue] = useState("");
//     const [submittedValue, setSubmittedValue] = useState("");
//     const [stance, setStance] = useState("defense");

    

//     return (
//         <div className="container">
//             {/* You can replace this <a> with react-router <Link> but we neeed to install react-router-dom then it work. */}
//             <a href="/" className="back-button">
//                 ← Back to Home
//             </a>

//             <div className="explanation-box">
//                 <h4>Is Group Work Just free labor</h4>
//                 <p>
//                     Group Projects are Exhausting and most of the time, one person does all
//                     work while everyone else slacks
//                 </p>
//             </div>
//             <form>
//             <div className="radio-section">

//                 <label htmlFor="Defender">Defender</label>
//                 <input type="radio" value="defense" name="Defender"
//                     checked={Defender === "defense"}
//                     onChange={() => setStance("defense")}
//                 />
//                 <label htmlFor="Defender">offense</label>
//                 <input controlled={true} type="radio" name="Defender" value="offense"
//                     checked={Defender === "offense"}
//                     onChange={() => setStance("offense")}
//                     </div>
//                     </form>

//             <div className="demo-section">
//                 {submittedValue && (
//                     <CommentCard
//                         user="Anonymous"
//                         time="Just Now"
//                         submittedValue={stance}
//                         comment={submittedValue}
//                     />
//                 )}
//                 <div

//                     className="demo-card"
//                     as={motion.div}
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                 </div>
//                 <Mycomponent/>
//             </div>
//         </div>
//     );
// };

// export default App;

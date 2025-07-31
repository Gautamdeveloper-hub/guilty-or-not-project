
import React, { useState } from "react";
import { motion } from "framer-motion";
function CommentCard({ user, submittedValue, time, comment }) {
    const isDefense = submittedValue.toLowerCase() === 'defense';

    return (
        <div className="component">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    background: "rgba(201, 15, 15, 0.3)",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1rem",
                    color: "white",
                    borderLeft: `6px solid ${isDefense ? '#4285F4' : '#EA4335'}`,
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 'bold' }}>{user}</span>
                    <span style={{ fontSize: '0.85rem', color: '#ccc' }}>{time}</span>
                </div>
                <div style={{
                    backgroundColor: isDefense ? '#1a73e8' : '#d93025',
                    color: 'white',
                    padding: '2px 10px',
                    display: 'inline-block',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                }}>
                    {isDefense ? 'DEFENSE' : 'OFFENSE'}
                </div>
                <p style={{ marginTop: '0.5rem', lineHeight: '1.4' }}>{comment}</p>
            </motion.div>
        </div>
    );
}


function Box1() {
    const [value, setValue] = useState("");
    const [stance, setStance] = useState('');
    const [SubmittedComments, setSubmittedComments] = useState([]);
    const [guiltyVotes, setGuiltyVotes] = useState(0);
    const [notGuiltyVotes, setNotGuiltyVotes] = useState(0);
    const totalVotes = guiltyVotes + notGuiltyVotes;
    const guiltyPercent = totalVotes ? Math.round((guiltyVotes / totalVotes) * 100) : 0;
    const notGuiltyPercent = totalVotes ? Math.round((notGuiltyVotes / totalVotes) * 100) : 0;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value && stance) {
            const newComment = {

                user: "Anonymous",      //  call name 
                comment: value,
                stance: stance,
                time: new Date().toLocaleTimeString() // call time
            };

            setSubmittedComments([...SubmittedComments, newComment]);
            setValue('');
            setStance('');
        }
    };

    return (
        <div className="container">
            <a href="/" className="back-button">← Back to Home</a>

            <div className="explanation-box">
                <h4>Is Group Work Just Free Labor?</h4>
                <p>
                    Group Projects are exhausting and most of the time, one person does all
                    work while everyone else slacks.
                </p>

                <form>
                    <input
                        type="radio"
                        id="defense"
                        value="defense"
                        name="stance"
                        checked={stance === "defense"} 
                        onChange={(e) => setStance(e.target.value)}
                    />
                    <label htmlFor="defense">Defense</label>




                    <input
                        type="radio"
                        id="offense"
                        value="offense"
                        name="stance"
                        checked={stance === "offense"} 
                        onChange={(e) => setStance(e.target.value)}
                    />
                    <label htmlFor="offense">Offense</label>
                  <div>
                    <button className="red"   onClick={(e) => {
                            e.preventDefault();
                            setNotGuiltyVotes(notGuiltyVotes + 1);
                            handleSubmit(e);}}   > not guilty</button>
                     <button
                        className="green"
                        onClick={(e) => {
                            e.preventDefault();
                            setGuiltyVotes(guiltyVotes + 1);
                            handleSubmit(e);
                        }}
                     > Guilty</button>
                </div>
                </form>

 <div className="vote-container">
           
            <div className="result-bar">
                <span>Guilty</span>
                <div className="bar">
                    <div className="guilty-fill" style={{ width: `${guiltyPercent}%` }}></div>
                </div>
                <span>{guiltyPercent}%</span>
            </div>

            <div className="result-bar">
                <span>Not Guilty</span>
                <div className="bar">
                    <div className="not-guilty-fill" style={{ width: `${notGuiltyPercent}%` }}></div>
                </div>
                <span>{notGuiltyPercent}%</span>
            </div>
        </div>




            </div> 
              <div className="demo-section">
                <motion.div className="demo-card"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >


            <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
                <label>Write your argument</label>
                <input
                    className="styled-input"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="type your argument here..."
                />
                <button className="button" type="submit">Post as defender</button>
            </form>
  </motion.div>
            </div>  
            {/* Render submitted comments */}
            {SubmittedComments.map((entry, index) => (
                <CommentCard
                    key={index}
                    user={entry.user}
                    submittedValue={entry.stance}
                    comment={entry.comment}
                    time={entry.time} // store time and show result
                />
            ))}
        </div>

    );
}

export default Box1;





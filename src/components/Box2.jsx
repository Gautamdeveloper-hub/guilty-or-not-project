import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [comment, setComment] = useState('');
  const [stance, setStance] = useState('');
  const [submittedComments, setSubmittedComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment && stance) {
      setSubmittedComments([...submittedComments, { comment, stance }]);
      setComment('');
      setStance('');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <textarea
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', marginBottom: '1rem' }}
        />
        <div style={{ marginBottom: '1rem' }}>
          <label>
            <input
              type="radio"
              value="defense"
              checked={stance === 'defense'}
              onChange={() => setStance('defense')}
            />
            Defense
          </label>
          <label style={{ marginLeft: '1rem' }}>
            <input
              type="radio"
              value="offense"
              checked={stance === 'offense'}
              onChange={() => setStance('offense')}
            />
            Offense
          </label>
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Post As Defender</button>
      </form>
{/* 
      Render submitted comments */}
      {submittedComments.map((entry, index) => (
        <CommentCard key={index} submittedValue={entry.stance} comment={entry.comment} />
      ))}
    </div>
  );
}

const CommentCard = ({ submittedValue, comment }) => {
  const isDefense = submittedValue.toLowerCase() === 'defense';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: '#1e1e2f',
        padding: '1rem',
        borderRadius: '12px',
        color: 'white',
        marginBottom: '1rem',
        borderLeft: `6px solid ${isDefense ? '#4285F4' : '#EA4335'}`,
      }}
    >
      <div
        style={{
          backgroundColor: isDefense ? '#1a73e8' : '#d93025',
          color: 'white',
          padding: '2px 10px',
          display: 'inline-block',
          borderRadius: '8px',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
        }}
      >
        {isDefense ? 'DEFENSE' : 'OFFENSE'} {/*comment vitra button dekhauxa*/}
      </div>

     { /*comment ko  height lai maintain gereko xa  */}
      <p style={{ marginTop: '0.5rem', lineHeight: '1.4' }}>{comment}</p> 
    </motion.div>
  );
};

export default App;
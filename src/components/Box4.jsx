// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';


// function ControlledComponent() {
//   const [value, setValue] = useState('');
//   const [submittedValue, setSubmittedValue] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedValue(value);
//   };

//   const clearValue = () => {
//     setValue('');
//     setSubmittedValue('');
//   };

//   return (
//     <div>
//       <h4>🎛️ Controlled Component</h4>
//       <p>React state controls the input value</p>
      
     

//       <form onSubmit={handleSubmit}>
//           <label>Controlled Input:</label>
//           <StyledInput
//             controlled={true}
//             type="text"
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//             placeholder="Type something..."
//           />
        
//         <Button type="submit">Submit</Button>
//         <Button type="button" onClick={clearValue}>Clear</Button>
//       </form>
      
//       {submittedValue && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           style={{ 
//             background: 'rgba(78, 205, 196, 0.3)', 
//             padding: '1rem', 
//             borderRadius: '8px', 
//             marginTop: '1rem' 
//           }}
//         >
//           <strong>Submitted:</strong> "{submittedValue}"
//         </motion.div>
//       )}
//     </div>
//   );
// }




// function ControlledUncontrolledDemo() {
//   return (
//     <Container>
//       <BackButton to="/">← Back to Home</BackButton>
      
//       <Title>Controlled vs Uncontrolled Components</Title>
      
//       <ExplanationBox>
//         <h3> </h3>
//         <p></p>
//       </ExplanationBox>

//       <DemoSection>
//         <DemoCard
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <ControlledComponent />
//         </DemoCard>

//         <DemoCard
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
         
//         </DemoCard>
//       </DemoSection>

//       <mixedFormExample />

//     </Container>
//   );
// }

// export default ControlledUncontrolledDemo;
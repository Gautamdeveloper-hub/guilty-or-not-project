import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function NavCard({ to, children, ...motionProps }) {
  return (
    <motion.div {...motionProps}>
      <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="nav-card">
          {children}
        </div>
      </Link>
    </motion.div>
  );
}

export default NavCard;
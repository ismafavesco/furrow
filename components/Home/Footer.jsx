import React from 'react';
import { motion } from 'framer-motion';
import AppBar from '../../components/AppBar';
import useMediaQuery from '../../hooks/useMediaQuery';

const variants = {
  hidden: isTabletView => ({ y: isTabletView ? -81 : -131 }),
  show: { y: 0 },
};

const Footer = () => {
  const isTabletView = useMediaQuery(
    ({ breakpoints }) => `(max-width:${breakpoints.sizes.tablet}px)`,
  );

  return (
    <motion.div
      style={{
        position: 'relative',
        height: isTabletView ? '81px' : '131px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      variants={variants}
      initial="hidden"
      animate="show"
      custom={isTabletView}
    >
      <AppBar
        key={isTabletView}
        direction="up"
        renderAs="footer"
        variants={variants}
        initial={false}
        custom={isTabletView}
        transition={{
          duration: 0.7,
          ease: [0.666, 0, 0.237, 1],
        }}
      />
      <motion.div
        style={{
          backgroundColor: '#1f2937',
          color: '#9ca3af',
          borderRadius: '0.375rem',
          padding: isTabletView ? '0.125rem 0.25rem' : '0.25rem 0.5rem',
          fontSize: isTabletView ? '0.75rem' : '1rem',
          lineHeight: isTabletView ? '1rem' : '1.5rem',
          zIndex: 10,
          whiteSpace: 'nowrap',
        }}
        variants={variants}
        custom={isTabletView}
        transition={{
          duration: 0.7,
          ease: [0.666, 0, 0.237, 1],
        }}
      >
        Powered by{' '}
        <a
          href="https://favesco.tech"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#d1d5db', textDecoration: 'none' }}
        >
          Favesco
        </a>
      </motion.div>
    </motion.div>
  );
};

export default React.memo(Footer);

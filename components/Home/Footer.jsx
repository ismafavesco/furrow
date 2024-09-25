import React from 'react';
import { motion } from 'framer-motion';
import AppBar from '../../components/AppBar';
import useMediaQuery from '../../hooks/useMediaQuery';

const variants = {
  hidden: ({ isMobileView, isTabletView }) => ({
    y: isMobileView ? -60 : isTabletView ? -81 : -131,
  }),
  show: { y: 0 },
};

const Footer = () => {
  const isTabletView = useMediaQuery(
    ({ breakpoints }) => `(max-width:${breakpoints.sizes.tablet}px)`
  );
  const isMobileView = useMediaQuery(
    ({ breakpoints }) => `(max-width:${breakpoints.sizes.mobile}px)`
  );

  const viewProps = { isMobileView, isTabletView };

  return (
    <motion.div
      style={{
        position: 'relative',
        height: isMobileView ? '60px' : isTabletView ? '81px' : '131px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      variants={variants}
      initial="hidden"
      animate="show"
      custom={viewProps}
    >
      <AppBar
        key={`${isTabletView}-${isMobileView}`}
        direction="up"
        renderAs="footer"
        variants={variants}
        initial={false}
        custom={viewProps}
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
          padding: isMobileView
            ? '0.125rem 0.25rem'
            : isTabletView
            ? '.2rem .5rem'
            : '0.25rem 0.5rem',
          fontSize: isMobileView
            ? '0.625rem'
            : isTabletView
            ? '0.75rem'
            : '1rem',
          lineHeight: isMobileView
            ? '0.875rem'
            : isTabletView
            ? '1.3rem'
            : '1.5rem',
          zIndex: 10,
          whiteSpace: 'nowrap',
        }}
        variants={variants}
        custom={viewProps}
        transition={{
          duration: 0.9,
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

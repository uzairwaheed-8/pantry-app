'use client'
import React from 'react';
import PropTypes from 'prop-types';
import { SessionProvider as Provider } from 'next-auth/react';

// Define your prop types
const SessionProvider = ({ children, session }) => {
  return <Provider session={session}>{children}</Provider>;
};

// Specify prop types
SessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
  session: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      image: PropTypes.string
    }),
    expires: PropTypes.string
  })
};

export default SessionProvider;

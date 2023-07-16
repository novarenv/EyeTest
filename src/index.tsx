/* eslint-disable prettier/prettier */
import React from 'react';

import AppContainer from './navigations/stacks/AppStack';

interface PropsType {
  showWelcome?: boolean;
  isLoggedIn?: boolean;
}

const App: React.FC<PropsType> = props => {
  return (
    <AppContainer />
  );
};

export default App;

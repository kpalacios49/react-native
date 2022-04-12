
import React from 'react';

const stageContext = React.createContext(null);

const useStageContext = () => React.useContext(stageContext);

export { stageContext, useStageContext };
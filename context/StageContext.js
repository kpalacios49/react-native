
import React from 'react';

const StageContext = React.createContext(null);

const useStageContext = () => React.useContext(StageContext);

export { StageContext, useStageContext };
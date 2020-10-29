import React from 'react';

import { Main as MainContainer } from "../../containers/Main";

import { Wrapper } from './Main.style';

const Main = () => {
  return (
    <Wrapper>
      <MainContainer />
    </Wrapper>
  );
}

export default Main;
export { Main };
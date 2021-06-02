  
import React from 'react';
import '../../App.css';
import {AccountBox} from '../accountBox/index';
import styled from "styled-components";
import Footer from '../Footer';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export default function SignUp() {
  return (
  <>
    <AppContainer>
      <AccountBox />
    </AppContainer>
    <Footer />
  </>
  );
}
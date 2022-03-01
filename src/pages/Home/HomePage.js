import React from 'react'
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import MiddleEarth from '../../components/MiddleEarth/MiddleEarth';
import Fellowship from '../Sections/Fellowship/Fellowship';

const Homepage = () => {
  return (
    <>
      <Header />
      <Main />
      <MiddleEarth />
      <Fellowship />
    </>
  )
}

export default Homepage
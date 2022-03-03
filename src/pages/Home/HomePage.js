import React from 'react'
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import MiddleEarth from '../../components/MiddleEarth/MiddleEarth';
import Fellowship from '../Sections/Fellowship/Fellowship';
import PathMordor from '../Sections/PathMordor/PathMordor';

const Homepage = () => {
  return (
    <>
      <Header />
      <Main />
      <MiddleEarth />
      <Fellowship />
      <PathMordor />
    </>
  )
}

export default Homepage
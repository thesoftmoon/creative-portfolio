import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Layout from '../layout/Layout';
import ImageSlider from '../components/ImageSlider';
import Portfolio from '../components/Portfolio'


function ProjectsPage() {
  const { data } = useContext(DataContext);
  return (
    <Layout>
      <ImageSlider
        title='Test'
        text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, laboriosam!'
        pcImage="/img/hero-headers/hero-header-home-dummy01-small-pc.jpg"
        moImage="/img/hero-headers/hero-header-home-dummy01-small-mo.jpg"
        sliderSize="small"
        opacity={true}
      />
      <Portfolio />

    </Layout>
  )
}

export default ProjectsPage

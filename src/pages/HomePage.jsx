import React from 'react';
import Layout from '../layout/Layout.jsx';
import ImageSlider from '../components/ImageSlider.jsx';
import Portfolio from '../components/Portfolio.jsx'

function HomePage() {
  return (
    <Layout>
        <ImageSlider
            title='Test'
            text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, laboriosam!'
            pcImage="/img/hero-headers/hero-header-home-dummy01-small-pc.jpg"
            moImage="/img/hero-headers/hero-header-home-dummy01-small-mo.jpg"
            sliderSize="small"
          />
          <Portfolio/>
    </Layout>
  )
}

export default HomePage
import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Layout from '../layout/Layout';
import ImageSlider from '../components/ImageSlider'


function AboutPage() {
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
      <main className='about'>
        <section>
          <img className='avatar' src="/img/profile-picture.jpg" alt="" />
          <div className="main-txt">
            <h1>Lorem ipsum dolor sit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus blanditiis explicabo omnis cupiditate animi totam nostrum a provident cumque recusandae? Aperiam, fugiat! Accusamus temporibus aperiam, labore doloribus sit cupiditate voluptas!
            </p>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default AboutPage

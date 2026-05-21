import React, {useContext, useEffect} from 'react';
import { DataContext } from '../context/DataContext.jsx';
import Layout from '../layout/Layout.jsx';
import ImageSlider from '../components/ImageSlider.jsx';
import Portfolio from '../components/Portfolio.jsx'

function HomePage() {

  const { data } = useContext(DataContext);

  useEffect(() => {
    if (data) {
      document.title = `Portafolio | ${data.name} ${data.lastName}`;
    }
  }, [data]);

  if (!data) {
    return <p>Cargando...</p>
  }
  return (
    <Layout>
      <ImageSlider
        title='Test'
        text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, laboriosam!'
        pcImage="/img/hero-headers/hero-header-home-dummy01-small-pc.jpg"
        moImage="/img/hero-headers/hero-header-home-dummy01-small-mo.jpg"
        sliderSize="small"
      />
      <Portfolio />
    </Layout>
  )
}

export default HomePage
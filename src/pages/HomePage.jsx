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
        title={data.title}
        text={data.subTitle}
        pcImage={data.mainHeaderPc}
        moImage={data.mainHeaderMo}
        sliderSize="small"
      />
      <Portfolio />
    </Layout>
  )
}

export default HomePage
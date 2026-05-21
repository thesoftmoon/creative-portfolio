import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import Layout from '../layout/Layout';
import ImageSlider from '../components/ImageSlider';
import Portfolio from '../components/Portfolio'


function ProjectsPage() {
  const { data } = useContext(DataContext);

  useEffect(() => {
    if (data) {
      document.title = `${data.projectsPage.title} | ${data.name} ${data.lastName}`;
    }
  }, [data]);

  if (!data) {
    return <p>Cargando...</p>
  }

  return (
    <Layout>
      <ImageSlider
        title={data.projectsPage.title}
        text={data.projectsPage.title}
        pcImage={data.mainHeaderPc}
        moImage={data.mainHeaderMo}
        sliderSize="small"
        opacity={true}
      />
      <Portfolio />

    </Layout>
  )
}

export default ProjectsPage

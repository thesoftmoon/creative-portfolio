import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import Layout from '../layout/Layout.jsx';
import ImageSlider from '../components/ImageSlider.jsx';

function ProjectPage() {
    const { elementId } = useParams();
    const { data } = useContext(DataContext);
    const [projectData, setProjectData] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (data && data.projects) {
            const foundProject = data.projects.find(project => project.slug === elementId);
            setProjectData(foundProject);
            setLoading(false);
        }
    }, [data, elementId])

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!projectData) {
        return <p>El proyecto no fue encontrado</p>;
    }

    return (
        <Layout>
            <ImageSlider
                title='Test'
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, laboriosam!'
                pcImage={projectData.mainImage}
                moImage="/img/hero-header-home-eventoPrivado-mo.jpg"
                sliderSize="small"
                opacity={true}
            />
            <main>
                <section className='project-info-container'>
                    <h1>{projectData.title}</h1>
                    <p>{projectData.largeInfo}</p>
                    {projectData.otherImages && (
                        projectData.otherImages.map((image, index) => (
                            <img key={index} src={image} alt={projectData.title} />
                        ))
                    )}
                </section>
            </main>
        </Layout>
    )
}

export default ProjectPage
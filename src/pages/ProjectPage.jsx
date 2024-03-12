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

    useEffect(() => {
        if (projectData) {
            document.title = `${projectData.title} | ${data.name} ${data.lastName}`;
        }
    }, [projectData]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!projectData) {
        return <p>El proyecto no fue encontrado</p>;
    }

    return (
        <Layout>
            <ImageSlider
                title={projectData.title}
                text={projectData.shortInfo}
                pcImage={projectData.mainImage}
                moImage={projectData.mainImage}
                sliderSize="small"
                opacity={true}
            />
            <main>
                <section className='project-info-container'>
                    <h2>{projectData.subTitle}</h2>
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
import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import Layout from '../layout/Layout';
import ImageSlider from '../components/ImageSlider';
import { Link } from 'react-router-dom';


function contactPagePage() {
    const { data } = useContext(DataContext);

    useEffect(() => {
        if (data) {
            document.title = `${data.contactPage.title} | ${data.name} ${data.lastName}`;
        }
    }, [data]);

    if (!data) {
        return <p>Cargando...</p>
    }

    return (
        <Layout>
            <ImageSlider
                title={data.contactPage.title}
                text={data.contactPage.title}
                pcImage={data.mainHeaderPc}
                moImage={data.mainHeaderMo}
                sliderSize="small"
                opacity={true}
            />
            <main className='about'>
                <section>
                    <div className="main-txt">
                        <h1>{data.contactPage.infoTextTitle}</h1>
                        <p>{data.contactPage.infoText}</p>
                        <Link className='primary-btn' to={data.rrss.links.mail.url}>Contactame </Link>
                    </div>
                </section>
            </main>

        </Layout>
    )
}

export default contactPagePage

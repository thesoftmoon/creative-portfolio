import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Layout from '../layout/Layout';
import ImageSlider from '../components/ImageSlider';


function contactPagePage() {
    const { data } = useContext(DataContext);

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
                    </div>
                </section>
            </main>

        </Layout>
    )
}

export default contactPagePage

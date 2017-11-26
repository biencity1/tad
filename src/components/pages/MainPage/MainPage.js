import React from 'react';
import { Header, Footer, SectionMain, SectionAbout, SectionPartners, SectionContact, SectionPortfolio } from 'components';


const MainPage = () => {
    return (
        // <SylicTemplate 
        //     header={<Header/>}
        //     responsive
        //     children = {<MainSection1/>}
        //     productList = {<ProductListContainer/>}
        //     footer={<Footer/>}
        //     >
        // </SylicTemplate>

        <div>
            <Header />

                <SectionMain />
                <SectionAbout />
                <SectionPartners />
                <SectionContact />
                <SectionPortfolio />

            <Footer />
        </div>


    );
};

export default MainPage;
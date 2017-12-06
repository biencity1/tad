import React from 'react';
import styles from './MainPage.scss';
import classNames from 'classnames/bind';
import { Header, Footer, SectionMain, SectionAbout, SectionPartners, SectionContact, SectionPortfolio, SectionPortfolio1 } from 'components';


const cx = classNames.bind(styles);

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

        <div className={cx('wrapper')}>
            <Header />

            <SectionMain />
            <SectionAbout />
            <SectionPartners />
            <SectionPortfolio />
            <SectionPortfolio1 />
            <SectionContact />


            <Footer />
        </div>

    );
};

export default MainPage;
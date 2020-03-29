import React from 'react';
import '../assets/style/app.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Carrusel from '../components/Carrusel';
import Categories from '../components/categories';
import CarouselItem from '../containers/carouselItem';
const App = () =>(
    <div className="App">
        <Header />
            <Search />
                <Carrusel />
                <CarouselItem />
                    <Categories />
                    <Footer />


    </div>
);
export default App;

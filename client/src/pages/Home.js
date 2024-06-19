// Importa los componentes necesarios
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Define el componente Home
const Home = () => {
    return (
        <div className="home">
            <Header />
            <main className="main-content">
                {/* Aquí va tu sección central */}
                <section className="middle-section">
                    <h1>Bienvenido a Chopería Baco</h1>
                    <p>Contenido de la sección central...</p>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
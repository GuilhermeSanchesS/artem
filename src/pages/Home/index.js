import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import mockVideos from '../../mock/videos-por-categorias.json';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    // simule fetch api
    setDadosIniciais(mockVideos);
  }, []);

  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      {dadosIniciais.length && (
        <>
          <BannerMain
            videoTitle="O Melhor da Arte, você vê aqui!"
            url={dadosIniciais[0].videos[0].url}
          />

          {dadosIniciais.map((categoria) => (
            <Carousel
              ignoreFirstVideo
              category={categoria}
            />
          ))}
        </>
      )}

      <Footer />
    </div>
  );
}

export default Home;

import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import { Container, Section, Search, GridImages, ImagesContainer, ImagesSection, ImageStyled, IconFav, NameImage } from "./GalleryStyled";

const Gallery = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (imageSrc) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(imageSrc)) {
        return prevFavorites.filter((src) => src !== imageSrc);
      } else {
        return [...prevFavorites, imageSrc];
      }
    });
  };

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const images = [
    { src: 'https://images.unsplash.com/photo-1735946502926-a62b89c6982c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1736144287605-3919f585752c?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1736144287605-3919f585752c?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1735380674308-9e278d784e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1736144287605-3919f585752c?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1735380674308-9e278d784e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1735380674308-9e278d784e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1736148391814-1734e7acf55c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1735380674308-9e278d784e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1735380674308-9e278d784e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1736148391814-1734e7acf55c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1736148391814-1734e7acf55c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1736144287605-3919f585752c?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { src: 'https://images.unsplash.com/photo-1736148391814-1734e7acf55c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1735380674308-9e278d784e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1735380674308-9e278d784e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1736148391814-1734e7acf55c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1736148391814-1734e7acf55c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1736144287605-3919f585752c?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  
  ];

  return (
    <>
    <Header/>
    <SideBar/>
      <Section>
        <Container>
          <Search>
            <input type="text" placeholder='Pesquisar'/>
            <button><i className='bx bx-search'></i></button>
            </Search>

            <GridImages>
            {images.map((image, index) => (
              <>
            <ImagesContainer>
              <ImagesSection key={index}>
                <ImageStyled src={image.src} alt={`Imagem ${index + 1}`} />
                <IconFav
                    className={`bx ${favorites.includes(image.src) ? 'bxs-heart' : 'bx-heart'}`}
                    style={favorites.includes(image.src) ? { color: "#a54e4e" } : {}}
                    onClick={() => toggleFavorite(image.src)}
                  ></IconFav>
              </ImagesSection>
                <NameImage>A Guerra</NameImage>
            </ImagesContainer>
                </>
              ))}
            </GridImages>
        </Container>
      </Section>
      <Footer/>
    </>
  );
};

export default Gallery;
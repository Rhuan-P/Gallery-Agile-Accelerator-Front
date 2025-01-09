import { useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import { SideBarMenu, Option, I, MenuHeader, MenuContent, ToggleButton } from './SideBarStyled';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [favorites, setFavorites] = useState([]);

    const navigate = useNavigate();
  
    const handleNavigation = (route) => {
        navigate(route);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            try {
                const parsedFavorites = JSON.parse(storedFavorites);
                setFavorites(parsedFavorites);
            } catch (error) {
                console.error("Erro ao analisar os favoritos:", error);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (imageSrc) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(imageSrc)
                ? prevFavorites.filter((fav) => fav !== imageSrc)
                : [...prevFavorites, imageSrc]
        );
    };

    return (
        <SideBarMenu isOpen={isOpen}>
            <MenuHeader>
                <ToggleButton onClick={toggleMenu}>
                    <I className={`bx ${isOpen ? 'bx-chevron-left' : 'bx-chevron-right'}`} />
                </ToggleButton>
            </MenuHeader>

            <MenuContent>
                <Option onClick={() => handleNavigation('/user-profile')}>
                    <abbr title="Favoritos">
                        <I 
                            className={`bx bx-heart`} 
                            style={{ color: favorites.length > 0 ? 'red' : '#a0a0a0' }}
                        />
                        {isOpen && <span>Favoritos</span>}
                    </abbr>
                </Option>
                
                {isOpen && favorites.length > 0 && (
                    <div>
                        {favorites.map((imageSrc, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                <img 
                                    src={imageSrc} 
                                    alt={`Favorito ${index}`} 
                                    style={{ width: '50px', margin: '5px' }} 
                                />
                                <button onClick={() => toggleFavorite(imageSrc)}>x</button>
                            </div>
                        ))}
                    </div>
                )}
            </MenuContent>
        </SideBarMenu>
    );
};

export default SideBar;

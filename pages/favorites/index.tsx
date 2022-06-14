import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { useState, useEffect } from 'react';
import { localFavorites } from "../../utils";

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, []);
  
  return (
    <Layout title="Pokémons Favoritos">
      <NoFavorites/>
    </Layout>
  );
};

export default FavoritesPage;

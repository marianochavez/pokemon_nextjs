

const toggleFavorites = (id:number) => {

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (favorites.includes(id)){
        favorites = favorites.filter(fav => fav !== id);
    } else {
        favorites.push(id);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existInFavorites = (id:number): boolean => {
    if (typeof window === 'undefined') return false; // server side rendering

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes(id);
}

const pokemons = (): number[] => {

    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default{
    toggleFavorites,
    existInFavorites,
    pokemons,
}
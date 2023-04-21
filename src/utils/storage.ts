import AsyncStorage from "@react-native-async-storage/async-storage";
import { CardProps } from "../components/Card";

export async function getFavorites(key: string) {
    const favorites = await AsyncStorage.getItem(key);
    return JSON.parse(favorites) || [];
}

export async function saveFavorite(key: string, newItem: CardProps) {
    let myFavorites = await getFavorites(key);

    let hasItem = myFavorites.some(item => item.id === newItem.id)
    
    if (hasItem) {
        console.log('Item já salvo na lista');
        return
    }

    myFavorites.push(newItem);

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
}

export async function removeItem(id: string) {
    let recipes = await getFavorites('@appreceitas');
    let myFavorites = recipes.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites));
    return myFavorites;
}

export async function isFavorite(recipe: CardProps) {
    let myRecipes = await getFavorites('@appreceitas');

    const favorite = myRecipes.find(item => item.id === recipe.id);

    return favorite ? true : false;
}
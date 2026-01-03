import { createContext, useState, useEffect, useContext } from "react";

const RestaurantContext = createContext();

export const RestaurantProvider = 
({children}) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect (() => {
        const data = JSON.parse(localStorage.getItem('evalData')) || [];
        setRestaurants (data);
    }, []);

    const addRestaurant = (newRes) => {
        const updated = [...restaurants, {...newRes, restaurantID : Date.now() }];
        saveAndRefresh(updated, "Successful addition");
    };

    const updateRestaurant = (id, updatedData) => {
        const updated = restaurants.map(res => res.restaurantID === id ? updatedData : res);
        saveAndRefresh(updated, "Successful update");
    };

    const deleteRestaurant = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            const updated = restaurants.filter(res => res.restaurantID !== id);
            saveAndRefresh(updated, "Successful deletion");
        }
    };

    const saveAndRefresh = (data, message) => {
        localStorage.setItem('evalData', JSON.stringify(data));
        setRestaurants(data);
        alert(message);
    };

    return (
        <RestaurantContext.Provider value={{restaurants, addRestaurant, updateRestaurant, deleteRestaurant}}>{children}
        </RestaurantContext.Provider>
    );
};

export const useRestaurants = () => useContext(RestaurantContext);
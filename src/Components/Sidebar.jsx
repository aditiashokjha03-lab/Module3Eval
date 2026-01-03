import { useState } from "react";
import { useRestaurants } from "../Context/RestaurantContext";

const Sidebar = () => {
    const {addRestaurant} = useRestaurants();
    const [form, setForm] = useState ({
        restaurantName: '', address:'', type: 'Rajasthani', parkingLot: 'true', image: 'https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.restaurantName || !form.address) return alert ("Fill all fields");

        addRestaurant({...form, parkingLot: form.parkingLot === 'true', image:''});
    };

    return (
        <div className= "sidebar">
        <h3>Add Restaurant</h3>
        <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={form.restaurantName} onChange={e => setForm({...form, restaurantName: e.target.value})} />
        <input placeholder="Address" value={form.address} onChange={e => setForm({...form, address: e.target.value})} />

        <select value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
        <option>Rajasthani</option>
        <option>Gujrati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        </select>

        <select value={form.parkingLot} onChange={e => setForm({...form, parkingLot: e.target.value})}>
        <option value={true}>Parking Available</option>
        <option value={false}>No Parking</option>
        </select>

        <button type="submit">Add</button>
        </form>
        </div>
    );
};

export default Sidebar;
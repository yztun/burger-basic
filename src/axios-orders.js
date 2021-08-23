import axios from "axios";

const instance = axios.create({
    baseURL : 'https://react-my-burger-mm-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

export default instance;
import axios from 'axios';
import { GET_CINEPLEX } from '../constants';

export const getCineplexs = () => async (dispatch) => {
    try {
        const response = await axios.get(
            'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap'
        );
        if (response.data) {
            dispatch({ type: GET_CINEPLEX, payload: response.data });
        }
    } catch (error) {
        console.log(error);
    }
};

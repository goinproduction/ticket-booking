import axios from 'axios';
import { GET_FILMS } from '../constants';

export const getFilms = (Id) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${Id}`
        );
        if (response.data) {
            dispatch({ type: GET_FILMS, payload: response.data });
        }
    } catch (error) {
        console.log(error);
    }
};

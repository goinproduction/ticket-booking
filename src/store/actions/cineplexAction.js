import axios from 'axios';
import {
    GET_CINEPLEX,
    GET_CINEPLEX_BY_ID,
    GET_CINEPLEX_BY_FILM_ID,
} from '../constants';

export const getCineplexes = () => async (dispatch) => {
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

export const getCineplexById = (Id) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${Id}`
        );
        if (response.data) {
            dispatch({ type: GET_CINEPLEX_BY_ID, payload: response.data });
        }
    } catch (error) {
        console.log(error);
    }
};

export const getCineplexByFilmId = (filmdId) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${filmdId}`
        );
        if (response.data) {
            dispatch({
                type: GET_CINEPLEX_BY_FILM_ID,
                payload: response.data,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

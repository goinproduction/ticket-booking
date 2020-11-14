import Axios from "axios";
class FilmService {
  fetchFilms() {
    return Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08",
    });
  }
}
export default FilmService;

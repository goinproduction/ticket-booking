import Axios from "axios";
class FilmService {
  fetchFilms() {
    return Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
    });
  }
}
export default FilmService;

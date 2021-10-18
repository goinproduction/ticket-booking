import React from 'react';
import latmat from '../assets/img/news1.png';
import news2 from '../assets/img/news2.png';
import news3 from '../assets/img/news3.png';
import news4 from '../assets/img/news4.png';
import news5 from '../assets/img/news5.jpg';
import news6 from '../assets/img/news6.jpg';
import news7 from '../assets/img/news7.jpg';
import news8 from '../assets/img/news8.jpg';
import like from '../assets/img/like.png';
import comment from '../assets/img/comment.png';
import { useHistory } from 'react-router';

const News = () => {
    const history = useHistory();
    const handleRedirect = () => {
        history.push('/news-detail');
    };
    return (
        <div className='news' id='news'>
            <ul className='news-navbar'>
                <li className='news-navbar__item-showing-news news-navbar--active'>
                    <a href='#' className>
                        Điện Ảnh 24h
                    </a>
                </li>
                <li className='news-navbar__item-upcoming-news'>
                    <a href='#' className>
                        Review
                    </a>
                </li>
                <li className='news-navbar__item-upcoming-news'>
                    <a href='#' className>
                        Khuyến Mãi
                    </a>
                </li>
            </ul>
            <div className='news-content'>
                <div className='row'>
                    <div
                        className='col-sm-6'
                        onClick={handleRedirect.bind(this)}
                    >
                        <div className='news-content__left'>
                            <div className='news-content__left-img'>
                                <img src={latmat} alt='latmat' />
                            </div>
                            <p className='news-content__left-title'>
                                Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải
                                tung clip Lật Mặt: 48H đậm chất
                            </p>
                            <p className='news-content__left-description'>
                                Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ
                                tung clip rượt đuổi gay cấn thót tim fans hâm mộ
                            </p>
                            <div className='news-content__left-interact'>
                                <div className='news-content__left-interact-likes'>
                                    <div className='news-content__left-interact-likes-icon'>
                                        <img src={like} alt='like' />
                                    </div>
                                    <p className='news-content__left-interact-likes-numbs'>
                                        0
                                    </p>
                                </div>
                                <div className='news-content__left-interact-comment'>
                                    <div className='news-content__left-interact-comment-icon'>
                                        <img src={comment} alt='comment' />
                                    </div>
                                    <p className='news-content__left-interact-comment-numbs'>
                                        0
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='news-content__right'>
                            <div className='news-content__right-img'>
                                <img src={news2} alt='news2' />
                            </div>
                            <p className='news-content__right-title'>
                                [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN
                                NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ
                                CÁC TỰA GAME ĐÌNH ĐÁM
                            </p>
                            <p className='news-content__right-description'>
                                Bên cạnh những kịch bản gốc mới mẻ và đầy bất
                                ngờ, Hollywood cũng không thiếu những tác phẩm
                                đình đám được chuyển thể từ tiểu thuyết, phim
                                hoạt hình, hay thậm chí là cả trò chơi điện tử.
                            </p>
                            <div className='news-content__right-interact'>
                                <div className='news-content__right-interact-likes'>
                                    <div className='news-content__right-interact-likes-icon'>
                                        <img src={like} alt='like' />
                                    </div>
                                    <p className='news-content__right-interact-likes-numbs'>
                                        2
                                    </p>
                                </div>
                                <div className='news-content__right-interact-comment'>
                                    <div className='news-content__right-interact-comment-icon'>
                                        <img src={comment} alt='comment' />
                                    </div>
                                    <p className='news-content__right-interact-comment-numbs'>
                                        0
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div className='news-content__bottom-left'>
                            <div className='news-content__bottom-left-img'>
                                <img src={news3} alt='news3' />
                            </div>
                            <p className='news-content__bottom-left-title'>
                                PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey
                                Mulligan và màn trả thù đàn ông để đời
                            </p>
                            <p className='news-content__bottom-left-description'>
                                Đề cử giải Oscar danh giá vừa gọi tên Carey
                                Mulligan ở hạng mục nữ chính xuất sắc nhất cho
                                vai diễn "đẫm máu" nhất sự nghiệp của cô trong
                                phim Promising Young Woman (tựa Việt: Cô Gái Trẻ
                                Hứa Hẹn).
                            </p>
                            <div className='news-content__bottom-left-interact'>
                                <div className='news-content__bottom-left-interact-likes'>
                                    <div className='news-content__bottom-left-interact-likes-icon'>
                                        <img src={like} alt='like' />
                                    </div>
                                    <p className='news-content__bottom-left-interact-likes-numbs'>
                                        0
                                    </p>
                                </div>
                                <div className='news-content__bottom-left-interact-comment'>
                                    <div className='news-content__bottom-left-interact-comment-icon'>
                                        <img src={comment} alt='comment' />
                                    </div>
                                    <p className='news-content__bottom-left-interact-comment-numbs'>
                                        1
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='news-content__bottom-mid'>
                            <div className='news-content__bottom-mid-img'>
                                <img src={news4} alt='news4' />
                            </div>
                            <p className='news-content__bottom-mid-title'>
                                VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM
                                “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM
                            </p>
                            <p className='news-content__bottom-mid-description'>
                                Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh
                                giá cao về năng lực diễn xuất là Park Seo Joon,
                                Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị –
                                hành động “Bàn Tay Diệt Quỷ” hứa hẹn sẽ làm cho
                                hội chị em phải mê mẩn vào tháng tới.
                            </p>
                            <div className='news-content__bottom-mid-interact'>
                                <div className='news-content__bottom-mid-interact-likes'>
                                    <div className='news-content__bottom-mid-interact-likes-icon'>
                                        <img src={like} alt='like' />
                                    </div>
                                    <p className='news-content__bottom-mid-interact-likes-numbs'>
                                        2
                                    </p>
                                </div>
                                <div className='news-content__bottom-mid-interact-comment'>
                                    <div className='news-content__bottom-mid-interact-comment-icon'>
                                        <img src={comment} alt='comment' />
                                    </div>
                                    <p className='news-content__bottom-mid-interact-comment-numbs'>
                                        0
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='news-content__bottom-right'>
                            <a className='news-content__bottom-right-item'>
                                <div className='news-content__bottom-right-img'>
                                    <img src={news5} alt='news5' />
                                </div>
                                <p className='news-content__bottom-right-description'>
                                    [Review] Bad Boys For Life - Khi gừng càng
                                    già càng… nhây
                                </p>
                            </a>
                            <a className='news-content__bottom-right-item'>
                                <div className='news-content__bottom-right-img'>
                                    <img src={news6} alt='news6' />
                                </div>
                                <p className='news-content__bottom-right-description'>
                                    [Review] Underwater - Nỗi kinh hoàng dưới
                                    đáy biển xanh sâu thẵm
                                </p>
                                <p />
                            </a>
                            <a className='news-content__bottom-right-item'>
                                <div className='news-content__bottom-right-img'>
                                    <img src={news7} alt='news7' />
                                </div>
                                <p className='news-content__bottom-right-description'>
                                    [Review] Điệp Viên Ẩn Danh - Siêu phẩm hoạt
                                    hình lầy lội dịp cuối năm
                                </p>
                            </a>
                            <a className='news-content__bottom-right-item'>
                                <div className='news-content__bottom-right-img'>
                                    <img src={news8} alt='news8' />
                                </div>
                                <p className='news-content__bottom-right-description'>
                                    [Review] Mắt Biếc - Tình đầu cứ ngỡ một
                                    thời, ai ngờ day dứt một đời!
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='news__viewmore'>
                    <button className='news__viewmore-btn'>XEM THÊM</button>
                </div>
            </div>
        </div>
    );
};

export default News;

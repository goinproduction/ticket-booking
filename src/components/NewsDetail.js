import React from 'react';
import like from '../assets/img/like.png';
import comment from '../assets/img/comment.png';
import share from '../assets/img/sharing-icon.png';
import avt from '../assets/img/avatar.png';
import news3 from '../assets/img/news3.png';
import news4 from '../assets/img/news4.png';
import news5 from '../assets/img/news5.jpg';
import news6 from '../assets/img/news6.jpg';
import news7 from '../assets/img/news7.jpg';
import news8 from '../assets/img/news8.jpg';

const NewsDetail = () => {
    return (
        <>
            <div className='news-detail'>
                <div className='container'>
                    <div className='news-detail'>
                        <div className='row'>
                            <div className='col-sm-12 news-detail__title-top'>
                                <p>
                                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý
                                    Hải tung clip Lật Mặt: 48H đậm chất
                                </p>
                                <div className='news-detail__author'>
                                    TÁC GIẢ 30.03.2021
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12 news-detail__title-count'>
                                <div className='news-detail__title-count-like'>
                                    <img
                                        className='news-detail__title-count-like-icon'
                                        src={like}
                                        alt='like'
                                    />
                                    <span className='news-detail__title-count-like-numbs'>
                                        0 LIKES
                                    </span>
                                </div>
                                <div className='news-detail__title-count-comment'>
                                    <img
                                        className='news-detail__title-count-comment-icon'
                                        src={comment}
                                        alt='comment'
                                    />
                                    <span className='news-detail__title-count-comment-numbs'>
                                        0 BÌNH LUẬN
                                    </span>
                                </div>
                                <div className='news-detail__title-count-share'>
                                    <img
                                        className='news-detail__title-count-share-icon'
                                        src={share}
                                        alt='share'
                                    />
                                    <span className='news-detail__title-count-share-numbs'>
                                        0 CHIA SẺ
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12 news-detail__content'>
                                <p>
                                    <em>
                                        3 tỷ đồng đầu tư, 7 máy quay, 10 tàu bè
                                        thiết bị được đạo diễn Lý Hải huy động
                                        cho phân cảnh "Fast &amp; Furious" kịch
                                        tính trên sông nước.
                                    </em>
                                </p>
                                <p>
                                    Mỗi năm, khán giả yêu điện ảnh lại mong chờ
                                    phần phim
                                    <em>Lật Mặt</em>
                                    mới ra mắt. Điều này vừa là áp lực nhưng
                                    cũng là động lực khiến đạo diễn Lý Hải trăn
                                    trở tìm cách cống hiến cho fan hâm mộ món ăn
                                    tinh thần ngày càng mới lạ và chất lượng.
                                    Qua mỗi phần, Lý Hải lại gây choáng ngợp bởi
                                    tay nghề thiện nghệ và sự đầu tư đẳng cấp. Ở{' '}
                                    <em>Lật Mặt</em>, anh đã thử sức với một
                                    ngôi sao nước ngoài;
                                    <em>Lật Mặt 4 </em>
                                    <strong>Lật Mặt: 48H,&nbsp;</strong>ê kíp
                                    của Lý Hải tiếp tục bứt phá giới hạn khi
                                    thực hiện những cảnh rượt đuổi chân thực, đã
                                    mắt, chưa từng có trên sông nước, được cố
                                    vấn bởi đạo diễn hành động Hàn Quốc.
                                </p>
                                <p
                                    style={{ textAlign: 'center' }}
                                    className='news-detail__content-video'
                                >
                                    <iframe
                                        allowFullScreen
                                        frameBorder={0}
                                        height={420}
                                        src='https://www.youtube.com/embed/VhIwN99HNKE'
                                        width={700}
                                    />
                                </p>
                                <p>
                                    Phim hành động Việt Nam đã từng có những cú
                                    máy mạo hiểm trên nhiều địa hình nhưng chưa
                                    từng có vị đạo diễn nào dám "chơi bạo" trên
                                    sông nước như Lý Hải. Để đầu tư cho tác phẩm
                                    mới nhất lấy bối cảnh miền Tây, Lý Hải không
                                    ngại chi tới 3 tỷ đồng cho một cảnh rượt
                                    đuổi, cháy nổ. Chia sẻ về cú "chơi lớn" chưa
                                    từng thấy này, anh cho biết anh đang thử
                                    thách chính mình, bởi thực hiện các cảnh
                                    rượt đuổi trên xe máy, ô tô sao cho hấp dẫn
                                    kịch tính đã khó, rượt đuổi bằng ghe thuyền
                                    lại càng khó hơn gấp bội. Nam chính Võ Thành
                                    Tâm cũng thành thật chia sẻ: “
                                    <em>
                                        Đoàn phim nào cũng vậy, nghe nói bối
                                        cảnh mà có bối cảnh trên sông thì ai
                                        cũng sợ
                                    </em>
                                    .” Nhưng dường như ê-kíp của đạo diễn Lý Hải
                                    không hề biết sợ khi quyết định thực hiện
                                    một phân đoạn rượt đuổi dài, phức tạp, và
                                    gài cắm một cú cháy nổ cực lớn ngay trên
                                    sông.
                                </p>
                                <p style={{ textAlign: 'center' }}>
                                    <img
                                        alt
                                        src='https://s3img.vcdn.vn/123phim/2021/03/latmat1-0a0ab1.jpg'
                                        style={{ width: '70%' }}
                                    />
                                </p>
                                <p style={{ textAlign: 'center' }}>
                                    <img
                                        alt
                                        src='https://s3img.vcdn.vn/123phim/2021/03/latmat2-b9d8ec.jpg'
                                        style={{ width: '70%' }}
                                    />
                                </p>
                                <p>
                                    Không những thế, do tính nguy hiểm đặc thù
                                    của sông nước, số nhân lực cũng như thiết bị
                                    được đầu tư cho một cảnh quay tốn kém gấp
                                    nhiều lần so với cảnh quay thông thường trên
                                    mặt đất.&nbsp;Tổng cộng 10 tàu bè được huy
                                    động gồm 2 phà nhỏ chở trang thiết bị, 3 tàu
                                    nhỏ chở đạo cụ và 5 ca-nô để đặt máy quay.
                                    Đặc biệt, 7 máy quay được bố trí cùng lúc
                                    nhằm bắt trọn mọi khoảnh khắc "đỉnh" nhất
                                    của dàn diễn viên. Toàn bộ ê-kíp cũng phải
                                    hoạt động tới 200% hay thậm chí 300% công
                                    suất nhằm thỏa mãn yêu cầu khó tính của đạo
                                    diễn Lý Hải.
                                </p>
                                <p>
                                    Bên cạnh đó, tính chân thực là yếu tố được
                                    Lý Hải đặt lên hàng đầu. Ở giây phút cao
                                    trào, cú cháy nổ hoành tráng thật 100% sẽ
                                    khiến cảm xúc khán giả cũng bùng nổ
                                    theo.&nbsp;Nhóm chuyên gia đã tốn cả một
                                    ngày trời chỉ để sắp đặt cho vài chục giây
                                    cháy nổ trên màn ảnh. Và kết quả là những
                                    khung&nbsp;hình ấn tượng chân thật ấy sẽ
                                    mang đến cảm nhận như thể mình đang có mặt
                                    ngay tại hiện trường. Đây là trải nghiệm
                                    khác biệt mà không kỹ xảo hình ảnh nào thay
                                    thế được. Đến các đạo diễn kỳ cựu xứ Hàn
                                    cũng phải thốt lên thán phục và khẳng định
                                    chất hành động của Lý Hải ở đẳng cấp thế
                                    giới nhưng mang bản sắc độc đáo chỉ có tại
                                    Việt Nam.
                                </p>
                                <p style={{ textAlign: 'center' }}>
                                    <img
                                        alt
                                        src='https://s3img.vcdn.vn/123phim/2021/03/latmat3-c2c3e3.jpg'
                                        style={{ width: '70%' }}
                                    />
                                </p>
                                <p>
                                    Có thể nói,&nbsp;
                                    <strong>Lật Mặt: 48H</strong>
                                    &nbsp;là cú "tất tay" của đạo diễn Lý Hải
                                    sau nhiều năm làm nghề. Đây là bước đột phá
                                    với quy mô đầu tư chưa từng có trong suốt
                                    thương hiệu&nbsp;<em>Lật Mặt</em>: “mạnh
                                    tay” dựng 15 nhà sàn với sự góp mặt của
                                    lượng diễn viên quần chúng khổng lồ lên tới
                                    1000 người, mời đạo diễn Hàn Quốc làm cố vấn
                                    hành động, hạn chế tối đa sử dụng diễn viên
                                    đóng thế ở đa số cảnh hành động nguy hiểm,
                                    thực hiện nhiều cảnh quay khó trên sân
                                    thượng, trên sông nước, …Tất cả những nỗ lực
                                    và cố gắng của ê kíp qua từng phần đã
                                    giúp&nbsp;
                                    <em>Lật Mặt</em>&nbsp;sở hữu lượng người hâm
                                    mộ đáng nể, và trở thành thương hiệu series
                                    phim Việt ăn khách nhất mọi thời đại.
                                </p>
                                <p>
                                    Sau khi lỡ hẹn với khán giả trong dịp Tết,
                                    sức nóng của&nbsp;
                                    <strong>Lật Mặt: 48H</strong>
                                    &nbsp;càng tăng độ từng ngày, được đông đảo
                                    người mê phim háo hức trông ngóng tới thời
                                    điểm ra mắt. Bộ phim của đạo diễn Lý Hải
                                    chắc chắn sẽ là cú hích hâm nóng lại thể
                                    loại hành động và tiếp đà cho thành công của
                                    phim Việt trên màn ảnh rộng.
                                </p>
                                <p>
                                    <strong>Lật Mặt: 48H&nbsp;</strong>khởi
                                    chiếu tại các rạp trên toàn quốc từ
                                    <strong> 16.04.2021.</strong>
                                </p>
                            </div>
                        </div>
                        <div className='hr' />
                        <div className='row'>
                            <div className='col-sm-12 news-detail__review'>
                                <span className='news-detail__review-avatar'>
                                    <img src={avt} alt='avatar' />
                                </span>
                                <input
                                    className='news-detail__review-input'
                                    type='text'
                                    placeholder='Bạn nghĩ gì về bài viết này?'
                                />
                            </div>
                        </div>
                        <div className='hr' />
                        <div className='row'>
                            <div className='col-sm-4'>
                                <div className='news-content__bottom-left'>
                                    <div className='news-content__bottom-left-img'>
                                        <img src={news3} alt='news' />
                                    </div>
                                    <p className='news-content__bottom-left-title'>
                                        PROMISING YOUNG WOMAN | Bông hồng nước
                                        Anh Carey Mulligan và màn trả thù đàn
                                        ông để đời
                                    </p>
                                    <p className='news-content__bottom-left-description'>
                                        Đề cử giải Oscar danh giá vừa gọi tên
                                        Carey Mulligan ở hạng mục nữ chính xuất
                                        sắc nhất cho vai diễn "đẫm máu" nhất sự
                                        nghiệp của cô trong phim Promising Young
                                        Woman (tựa Việt: Cô Gái Trẻ Hứa Hẹn).
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
                                                <img
                                                    src={comment}
                                                    alt='comment'
                                                />
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
                                        <img src={news4} alt='news' />
                                    </div>
                                    <p className='news-content__bottom-mid-title'>
                                        VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM
                                        CỦA PHIM “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN
                                        TIM HỘI CHỊ EM
                                    </p>
                                    <p className='news-content__bottom-mid-description'>
                                        Quy tụ 3 nam tài tử vừa điển trai, vừa
                                        được đánh giá cao về năng lực diễn xuất
                                        là Park Seo Joon, Woo Do Hwan và Choi
                                        Woo Sik, tác phẩm kinh dị – hành động
                                        “Bàn Tay Diệt Quỷ” hứa hẹn sẽ làm cho
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
                                                <img
                                                    src={comment}
                                                    alt='comment'
                                                />
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
                                            <img src={news5} alt='news' />
                                        </div>
                                        <p className='news-content__bottom-right-description'>
                                            [Review] Bad Boys For Life - Khi
                                            gừng càng già càng… nhây
                                        </p>
                                    </a>
                                    <a className='news-content__bottom-right-item'>
                                        <div className='news-content__bottom-right-img'>
                                            <img src={news6} alt='news' />
                                        </div>
                                        <p className='news-content__bottom-right-description'>
                                            [Review] Underwater - Nỗi kinh hoàng
                                            dưới đáy biển xanh sâu thẵm
                                        </p>
                                        <p />
                                    </a>
                                    <a className='news-content__bottom-right-item'>
                                        <div className='news-content__bottom-right-img'>
                                            <img src={news7} alt='news' />
                                        </div>
                                        <p className='news-content__bottom-right-description'>
                                            [Review] Điệp Viên Ẩn Danh - Siêu
                                            phẩm hoạt hình lầy lội dịp cuối năm
                                        </p>
                                    </a>
                                    <a className='news-content__bottom-right-item'>
                                        <div className='news-content__bottom-right-img'>
                                            <img src={news8} alt='news' />
                                        </div>
                                        <p className='news-content__bottom-right-description'>
                                            [Review] Mắt Biếc - Tình đầu cứ ngỡ
                                            một thời, ai ngờ day dứt một đời!
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='spacer'></div>
        </>
    );
};

export default NewsDetail;

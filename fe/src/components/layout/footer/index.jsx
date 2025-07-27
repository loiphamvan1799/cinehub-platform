import React from 'react';
import './styles.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container footer-padding">
                <div className="footer-grid">
                    <div>
                        <h3 className="footer-title">Giới thiệu</h3>
                        <ul>
                            <li><a href="#" className="footer-link">Về chúng tôi</a></li>
                            <li><a href="#" className="footer-link">Thoả thuận sử dụng</a></li>
                            <li><a href="#" className="footer-link">Quy chế hoạt động</a></li>
                            <li><a href="#" className="footer-link">Chính sách bảo mật</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="footer-title">Góc điện ảnh</h3>
                        <ul>
                            <li><a href="#" className="footer-link">Thể loại phim</a></li>
                            <li><a href="#" className="footer-link">Bình luận phim</a></li>
                            <li><a href="#" className="footer-link">Blog điện ảnh</a></li>
                            <li><a href="#" className="footer-link">Phim hay tháng</a></li>
                            <li><a href="#" className="footer-link">Phim IMAX</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="footer-title">Hỗ trợ</h3>
                        <ul>
                            <li><a href="#" className="footer-link">Góp ý</a></li>
                            <li><a href="#" className="footer-link">Sale & Services</a></li>
                            <li><a href="#" className="footer-link">Rạp / Giá vé</a></li>
                            <li><a href="#" className="footer-link">Tuyển dụng</a></li>
                            <li><a href="#" className="footer-link">FAQ</a></li>
                        </ul>
                    </div>
                    <div id="register" className="register-grid">
                        <div className="footer-connect">
                            <div className="connect-icons">
                                <a href="#"><svg>...</svg></a>
                                <a href="#"><svg>...</svg></a>
                                <a href="#"><svg>...</svg></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="bottom-content">
                        <div className="footer-logo">
                            <img
                                src="https://www.galaxycine.vn/_next/static/media/galaxy-logo-mobile.074abeac.png"
                                alt="Galaxy Cinema Logo"
                            />
                        </div>
                        <div className="company-info">
                            <h3>CÔNG TY CỔ PHẦN TRÁCH NHIỆM MỘT THÀNH VIÊN</h3>
                            <p>64/13 Trường Chinh, Phường Cẩm lệ, Tp. Đà Nẵng, Việt Nam</p>
                            <p><svg />0774464669 - <svg />: 113 (9:00 - 22:00) - <svg />: <a href="mailto:support@galaxycine.vn">chindoan72@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
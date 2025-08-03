import React from 'react';
import './styles.css';

const AdvertiseRight = () => {
    return (
        <div className="advertise-right">
            <div className="advertise-right__content">
                <h1 className="advertise-right__title">Đặt Vé Online - Không Lo Trễ Nải</h1>
                <p className="advertise-right__description">
                    Ghét đông đúc ồn ào? Lười xếp hàng mua vé? Hãy quên đi cách mua vé giấy truyền thống tốn thời gian hay xếp hàng lấy vé online phiền toái.
                </p>
                <div className="advertise-right__qr">
                    <span className="advertise-right__qr-code">
                        <img
                            alt="Icon QR"
                            loading="lazy"
                            width="150"
                            height="150"
                            decoding="async"
                            className="advertise-right__qr-img"
                            src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/515182543_2039336476852975_5751554552216461785_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=zphI-Dhzk_wQ7kNvwGTsbkG&_nc_oc=AdlC_-xA1QPagNtGH9C3R_C4z4y97BUA5RDm38Zmk5Bny5J5hMWtpcnPJSTeM8drG1hXTIglRVlCccViS-Cj8htp&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&oh=03_Q7cD2wHf8nq9EJIrKPqk0uMPa9Z3wgwU1wOeJFzMMSvqmJfxfQ&oe=688F208E"
                        />
                    </span>
                    <span className="advertise-right__or">OR</span>
                    <ul className="advertise-right__app-list">
                        <li className="advertise-right__app-item">
                            <a
                                className="advertise-right__app-link"
                                target="_blank"
                                href="https://apps.apple.com/vn/app/id593312549"
                            >
                                <img
                                    alt="Icon App Store"
                                    loading="lazy"
                                    width="140"
                                    height="120"
                                    decoding="async"
                                    className="advertise-right__app-img"
                                    src="https://www.galaxycine.vn/_next/static/media/icon-ios-app-store.65ed00df.svg"
                                />
                            </a>
                        </li>
                        <li className="advertise-right__app-item">
                            <a
                                className="advertise-right__app-link"
                                target="_blank"
                                href="https://play.google.com/store/apps/details?id=com.galaxy.cinema&hl=vi"
                            >
                                <img
                                    alt="Icon Google App Store"
                                    loading="lazy"
                                    width="150"
                                    height="140"
                                    decoding="async"
                                    className="advertise-right__app-img"
                                    src="https://www.galaxycine.vn/_next/static/media/icon-google-app-store.f4c38402.svg"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseRight;
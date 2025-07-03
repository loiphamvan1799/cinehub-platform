import React from "react";
import './styles.css';

const ButtonWrapper = ({ movieCount }) => {
    if (movieCount <= 8) {
        return null;
    }

    return (
        <div className="wrapper">
            <div className="seeMore">
                <a href="#">Xem thêm &gt;</a>
            </div>
        </div>
    );
};

export default ButtonWrapper;
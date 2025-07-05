import React from 'react';
import AdvertiseLeft from '../AdvertiseLeft/AdvertiseLeft';
import AdvertiseRight from '../AdvertiseRight/AdvertiseRight';
import './styles.css';

const AdvertiseSection = () => {
    return (
        <div className="advertise-wrapper">
            <div className="advertise">
                <div className="advertise__wrap">
                    <div className="advertise__container">
                        <div className="advertise__left-container">
                            <AdvertiseLeft />
                        </div>
                        <div className="advertise__right-container">
                            <AdvertiseRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseSection;
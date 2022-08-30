import Header from './Header/';
import Footer from './Footer/';
import PhotoViewer from '../Photoviewer';
import React from "react";

const Page = () => {

    const brokenImages = [
        1, 24, 32, 36, 44, 47
    ];

    let what = getImageUrls();

    function getImageUrls() {let urls =[];
        for (let i = 0; i < 50; i++) {
            if (!brokenImages.includes(i)) {
                const imageNumberString = i.toString().padStart(2, '0');
                urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
            }
        }
        return urls;
    }


    return (
        <div className="pageContent">
            <PhotoViewer images={ what } />
        </div>
    );
}

export default Page;
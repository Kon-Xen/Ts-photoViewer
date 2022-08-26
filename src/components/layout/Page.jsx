import Header from './Header/';
import Footer from './Footer/';
import PhotoViewer from '../Photoviewer';

const Page = () => {
    return (
        <div className="wrapper">  
            <Header />
            <PhotoViewer image={"https://picsum.photos/id/600/1600/900.jpg"} />
            <Footer />
        </div>
    );
}

export default Page;
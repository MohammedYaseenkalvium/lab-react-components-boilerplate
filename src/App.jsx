import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import GalleryHeader from './components/Galleryheader';
import GalleryMain from './components/GalleryMain';

const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <div>
     
    <GalleryHeader/>
    <GalleryMain imageData={imageData}/>

   
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;

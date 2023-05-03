import { useEffect, useState } from 'react';
import imageUrls from './image_urls.json';
import './App.css';

function App() {
  const [imgUrls, setImgUrls] = useState();
  useEffect(() => {
    setImgUrls(imageUrls)
  }, [])
  return (
    <div className="App">
      <div id="my-svg" >
        { /* eslint-disable */
          // imgList.map(data => ( // eslint-disable-line no-use-before-define
          imgUrls && imgUrls.map(data => (
            // <Image src={`data:image/png;base64,${data}`} height={100} width={100} priority /> // eslint-disable-next-line no-use-before-define
            <img key={data} src={data} height={100} width={100} /> // eslint-disable-next-line no-use-before-define
          ))}
      </div>
    </div>
  );
}

export default App;

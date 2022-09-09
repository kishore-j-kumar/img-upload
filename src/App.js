import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const formData = new FormData();
  const fileField = document.querySelector('input[type="file"]');

  return (
    <div>
      <h1>IMGUpload</h1>
      {selectedImage && (
        <div>
        <img alt="Image not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />

      <br />
        <form  method='post' action='/upload_image'>
            <label htmlFor="img">Select image:</label>
            <input type="file" id="img" name="img" accept="image/*"></input>
            <input type="submit" value="Upload"></input>
        </form>
    </div>
  );
}

export default App;

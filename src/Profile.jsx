import React , {useState} from "react";
import img5 from './images/background.webp'
import Dropzone from 'react-dropzone';

const Profile =() =>{

    const [selectedFile, setSelectedFile] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  
    return(
        <div>
            <div style={{display:"flex"}}>
                
                <div className="profile-pic">
                <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            {selectedFile ? (
              <div className="image-container">
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Uploaded"
                  className="rounded-image"
                />
                
              </div>
            ) : (
              <p className="profile-text">Upload Profile Pic</p>
            )}
          </div>
        )}
      </Dropzone>
                </div>
                <div className="profile-back">
                <img src={img5} alt="" className="profile"/>
                </div>
                
            </div>
            <div className="personal">
               <div className="person">
                <h1>Personal</h1>
                <div>
                  <label htmlFor="" className="label-main">Name</label> <br />
                  <input type="text" value={"S Rajesh"} className="input-main"/>
                </div>
                <div>
                  <label htmlFor="" className="label-main">D O B</label> <br />
                  <input type="text" value={"18-04-2000"} className="input-main"/>
                </div>
                <div>
                  <label htmlFor="" className="label-main">Gender</label> <br />
                  <input type="text" value={"Male"} className="input-main"/>
                </div>
                <div>
                  <label htmlFor="" className="label-main">City</label> <br />
                  <input type="text" value={"Neyveli"} className="input-main"/>
                </div>
                <div>
                  <label htmlFor="" className="label-main">Phone</label> <br />
                  <input type="text" value={"8870521234"} className="input-main"/>
                </div>
               </div>
               <div className="education">
                <h1>Education</h1>
                <div>
                  <label htmlFor="" className="label-main">10th %</label> <br />
                  <input type="text" value={"86%"} className="input-main"/>
                </div>
                <div>
                  <label htmlFor="" className="label-main">12th%</label> <br />
                  <input type="text" value={"76%"} className="input-main"/>
                </div>
                <div>
                  <label htmlFor="" className="label-main">Degree</label> <br />
                  <input type="text" value={"B.E"} className="input-main"/>
                </div>
                <div>
                  <label htmlFor="" className="label-main">Degree %</label> <br />
                  <input type="text" value={"71%"} className="input-main"/>
                </div>
                <div>
                  <label htmlFor="" className="label-main">Branch</label> <br />
                  <input type="text" value={"Mechanical"} className="input-main"/>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Profile
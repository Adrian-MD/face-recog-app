import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ input, imageUrl, box }) => {
    return (
        <div className='center ma pa3'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='Face Recognizing pic' src={imageUrl} width='500px' height='auto' />
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;
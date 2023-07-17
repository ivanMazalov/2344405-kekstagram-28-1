import './form.js';
import { createPictures } from './data.js';
import { renderPictures } from './render-pictures.js';
//import { renderPictureModal } from './picture-modal.js';

//renderPictureModal();

const photoData = createPictures();
renderPictures(photoData);
const picture = renderPictures(photoData);

export {picture};

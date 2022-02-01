import Image from 'next/image';
import imgPath from './banner.png';

const ImageBanner = () => (
  <Image src={imgPath} alt="codinglab.io banner logo" />
);

export default ImageBanner;

// Next, React
import { ImagePicker } from 'components/ImagePicker';
import { FC } from 'react';

export const ImageView: FC = ({ }) => {

  return (

    <div className="md:hero mx-auto p-4">
    <div className="md:hero-content flex flex-col">
      <h1 className="mb-6 text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
        Image
      </h1>
      
      {/* CONTENT GOES HERE */}
      <div className="text-center">
       <ImagePicker />
      </div>
    </div>
  </div>
  );
};

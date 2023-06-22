import React from 'react';
import Feature from './Feature';

const featureList = [
  {
    text: 'Designed For You',
    text2: 'Not for Models',
    image: 1,
  },
  {
    text: '180 day guarantee',
    text2: 'shop hassle free',
    image: 2,
  },
  {
    text: 'Perfectly fitted',
    text2: 'Not for Models',
    image: 3,
  },
  {
    text: 'Natural Fabrics',
    text2: 'Wool, Cotton & Linen',
    image: 4,
  },
  {
    text: 'Sustainable',
    text2: 'low carbon footprint',
    image: 5,
  },
  {
    text: 'made responsibly',
    text2: 'Ethical Manufacturing',
    image: 6,
  },
];

const FeatureList = () => {
  return (
    <div className="relative py-4">
      <div>
        <img src={require('../../../images/third.jpeg')} alt="man-with-coat" />
      </div>
      {/* responsiveness left */}
      <div className="sm:absolute sm:bottom-[5%] sm:origin-center sm:left-[10%] mt-4  grid grid-cols-1 px-2 sm:grid-cols-3 gap-4">
        {featureList.map((feature, index) => {
            return <Feature key={index} feature={feature} />
        })}
      </div>
    </div>
  );
};

export default FeatureList;

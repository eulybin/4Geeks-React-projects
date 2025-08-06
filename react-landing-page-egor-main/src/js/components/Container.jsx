import React from 'react';
import Card from './Card';
import Jumbotron from './Jumbotron';

const cardData = [
  {
    title: 'Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis excepturi.',
    id: 1,
    buttonLabel: 'Go somewhere',
    buttonLink: 'https://youtube.com',
  },
  {
    title: 'Title 2',
    description: 'Some other and brief description for the second card! Just saying whatever...',
    id: 2,
    buttonLabel: 'Go someplace',
    buttonLink: 'https://github.com',
  },
  {
    title: 'Title 3',
    description: 'dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet, adipisicing.',
    id: 3,
    buttonLabel: 'Go anywhere',
    buttonLink: 'https://google.com',
  },
  {
    title: 'Title 4',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority.',
    id: 4,
    buttonLabel: 'Go everywhere',
    buttonLink: 'https://facebook.com',
  },
];

const Container = () => {
  const insertCardData = cardData.map((card) => {
    return (
      <div key={card.id} className='col-md-6 col-lg-3'>
        <Card
          title={card.title}
          description={card.description}
          buttonLabel={card.buttonLabel}
          buttonLink={card.buttonLink}
        />
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Jumbotron />
        </div>
      </div>

      <div className='row'>{insertCardData}</div>
    </div>
  );
};

export default Container;

const mockProducts = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    titles: ['Speed','Durability','Sustainablity'],
    bodies: [
      'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
      'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
      'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
    ],
    coverImgPath: '../../../assets/img/phone-cover.jpg'
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    titles: ['Clear','Director','Iconic'],
    bodies: [
      'This camera makes shooting the world in true colour easy — so you can capture memories in the moment, store in 10-bit and relive them in spectacular quality later',
      'Cinematic Mode transforms movies shot on your phone with best-ever artificial colour reproduction — putting the power of pro filmmaking directly into your hands',
      'Phone mini\'s AI Palettes can learn the colour profile of any picture on your phone and turn it into a custom filter. Just open your picture, tap and hold — filter made'
    ],
    coverImgPath: '../../../assets/img/phone-cover.jpg'
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: '',
    titles: ['Comfortable','Reasonable','R-rate'],
    bodies: [
      'Our AI Adaptive Eye Protection System automatically chooses the optimal colour temperature and brightness for your surroundings, keeping your eyes feeling comfortable. ',
      'Phone series features motion compensation technology, which can bring videos at 30 fps or lower up to 60 or 120 fps, reducing motion blur and lag and delivering clearer and smoother video experience. ',
      'A smooth 120Hz refresh rate, 3K QHD+ clarity, and billion-colour vibrancy make this a flagship-\
      level screen that has it all and does it all. With its vast range of smart and customizable\
      features, you’ll wonder how you ever lived without it.'
    ],
    coverImgPath: '../../../assets/img/phone-cover.jpg'
  }
];

module.exports = mockProducts;

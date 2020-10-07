import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'A piece of hardware with the sensors which do data transmission when connected to the internet.',
    media: '/static/images/products/product5.png',
    title: 'Device',
    totalDownloads: '594',
     devices:10,
    connected:10,
    acquired: 0
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'A device that facilitates the connection between a range of of data sources and the cloud. It also collects the data from different child devices and send it to the IoT Hub.',
    media: '/static/images/products/product1.png',
    title: 'Gateway Device',
    totalDownloads: '625',
     devices:10,
    connected:10,
    acquired: 0
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Certificates secure device communication through data encryption and other methods as well.',
    media: '/static/images/products/product2.png',
    title: 'Certificates',
    totalDownloads: '857',
     devices:10,
    connected:10,
    acquired: 0
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'A device where analytics happens in real-time at the device. It sends data to the parent device at fixed time intervals.',
    media: '/static/images/products/product3.png',
    title: 'Edge Device',
    totalDownloads: '406',
     devices:10,
    connected:10,
    acquired: 0
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'A device that not only serves as the bridge between sensors and the IoT Hub, but also does data aggregation and pre-processing before sending.',
    media: '/static/images/products/product4.png',
    title: 'Edge Gateway Device',
    totalDownloads: '835',
    devices:10,
    connected:10,
    acquired: 0
  }
];

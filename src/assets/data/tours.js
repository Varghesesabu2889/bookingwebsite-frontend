import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";


const tours = [
  {
    id: "01",
    title: "Yumthang Valley,Sikkim",
    city: "Sikkim",
    distance: 300,
    address:"North Sikkim, Sikkim, India",
    price: "60,000",
    maxGroupSize: 10,
    desc: "Yumthang Valley is a picturesque village in North Sikkim, known for its natural beauty and as a base for exploring the stunning. Here famous for its colorful blooms during spring. ",
    reviews: [
      {
        // name: "jhon doe",
        // rating: 4.5,
      },
    ],
    avgRating: 4.6,
    photo: tourImg01,
    // featured: true,
  },
  {
    id: "02",
    title: "Majuli, Assam",
    city: "Assam",
    distance: 400,
    address: "Brahmaputra River, Assam, India",
   price: "55,000",
    maxGroupSize: 8,
    desc: "Majuli is the largest river island in the world, located in the Brahmaputra River in Assam. It is known for its vibrant culture, traditional Assamese villages, and the unique satras  preserving ancient art forms like Sattriya dance and music.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 3.8,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Hogenakkal Falls, Tamil Nadu",
    city: "Tamil Nadu",
    distance: 180,
    address:"Dharmapuri district, Tamil Nadu, India",
    price: "25,000",
    maxGroupSize: 8,
    desc: "Often referred to as the Niagara of India, Hogenakkal Falls is a stunning waterfall on the Kaveri River, known for its medicinal baths and coracle boat rides through the cascading waters",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.2,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Living Root Bridges, Meghalaya",
    city: "Meghalaya",
    distance: 500,
    address:" Cherrapunji and Mawlynnong areas: East Khasi Hills district, Meghalaya, India ",
    price: "55,000",
    maxGroupSize: 8,
    desc: "In the northeastern state of Meghalaya, particularly in the Cherrapunji and Mawlynnong areas, you can find living root bridges. These bridges are made by guiding the roots of rubber trees across rivers, creating strong and durable natural bridges that continue to grow and strengthen over time.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.2,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Ross Island, Andaman and Nicobar Islands",
    city: "Andaman and Nicobar Islands",
    distance: 500,
    address:" Andaman and Nicobar Islands, India",
    price: "85,000",
    maxGroupSize: 8,
    desc: "Ross Island is an abandoned British colonial settlement in the Andaman Islands. It features overgrown ruins, including a church, cemetery, and old buildings, giving visitors a glimpse into its historical past.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 3.9,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Shettihalli Rosary Church, Karnataka",
    city: "Karnataka",
    distance: 500,
    address: "Shettihalli, Tumakuru, Karnataka, India",
    price: "30,000",
    maxGroupSize: 8,
    desc: " The Shettihalli Rosary Church is a partially submerged church located in Hassan district, Karnataka. It is a stunning sight during monsoon when the Hemavati River floods, partially covering the church's ruins.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 3.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Loktak Lake and Phumdis, Manipur",
    city: "Manipur",
    distance: 500,
    address: "Loktak Lake,Moirang, Bishnupur district, Manipur, India",
    price: "40,000",
    maxGroupSize: 8,
    desc: "Loktak Lake in Manipur is known for its unique floating islands called phumdis. These circular mass of vegetation, soil, and organic matter float on the lake's surface and are home to diverse flora and fauna, including the endangered Sangai deer.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.8,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Nanda Devi Sanctuary, Uttarakhand",
    city: "Uttarakhand",
    distance: 500,
    address:" Chamoli district, Uttarakhand, India",
    price: "50,000",
    maxGroupSize: 8, 
    desc: "The Nanda Devi Sanctuary is a rare and pristine wilderness area in the Garhwal Himalayas. It is home to diverse flora and fauna, including rare species like the snow leopard and Himalayan musk deer.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.7,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'makanan' | 'minuman';
  image: string;
}

export const menuItems: MenuItem[] = [
  // Makanan
  {
    id: 'mie-kocok-bandung',
    name: 'Mie Kocok Bandung',
    price: 20000,
    category: 'makanan',
    image: 'https://media.istockphoto.com/id/525365848/photo/mee-goreng-mamak-popular-cusine-in-malaysia.webp?a=1&b=1&s=612x612&w=0&k=20&c=p7K6H8ZoARxkhXeVRqsjj4Ddred-N_R9NFBbZ81alDQ='
  },
  {
    id: 'ramen',
    name: 'Ramen',
    price: 23000,
    category: 'makanan',
    image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'ramen-kari',
    name: 'Ramen Kari',
    price: 25000,
    category: 'makanan',
    image: 'https://media.istockphoto.com/id/1983335270/photo/high-angle-view-of-a-delicious-tonkotsu-ramen-in-a-bowl-on-a-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20'
  },
  {
    id: 'sop-iga',
    name: 'Sop Iga',
    price: 30000,
    category: 'makanan',
    image: 'https://images.pexels.com/photos/12208779/pexels-photo-12208779.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'ayam-bakar',
    name: 'Ayam Bakar',
    price: 25000,
    category: 'makanan',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=600'
  },
  {
    id: 'ayam-goreng',
    name: 'Ayam Goreng',
    price: 20000,
    category: 'makanan',
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'ayam-opor',
    name: 'Ayam Opor',
    price: 23000,
    category: 'makanan',
    image: 'https://images.pexels.com/photos/19981467/pexels-photo-19981467/free-photo-of-makanan-sendok-hidangan-garpu.png?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'ayam-kari',
    name: 'Ayam Kari',
    price: 25000,
    category: 'makanan',
    image: 'https://images.pexels.com/photos/10810653/pexels-photo-10810653.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'seblak-janda',
    name: 'Seblak Janda',
    price: 25000,
    category: 'makanan',
    image: 'https://qr.ptsuparmatbk.com/blog/wp-content/uploads/2024/07/seblak.webp'
  },
  {
    id: 'seblak-jahanam',
    name: 'Seblak Jahanam',
    price: 27000,
    category: 'makanan',
    image: 'https://allofresh.id/blog/wp-content/uploads/2023/07/resep-seblak-4-2-780x470.jpg'
  },
  {
    id: 'seblak-iga-komplit',
    name: 'Seblak Iga Komplit',
    price: 28000,
    category: 'makanan',
    image: 'https://media.istockphoto.com/id/1288555863/id/foto/seblak-ceker.jpg?b=1&s=612x612&w=0&k=20'
  },
  {
    id: 'cireng-kering',
    name: 'Cireng Kering',
    price: 13000,
    category: 'makanan',
    image: 'https://media.istockphoto.com/id/1303679927/id/foto/camilan-cireng-goreng-indonesia-dengan-saus-celup.jpg?b=1&s=612x612&w=0&k=20'
  },
  {
    id: 'cireng-banjur',
    name: 'Cireng Banjur',
    price: 15000,
    category: 'makanan',
    image: 'https://paxelmarket.co/wp-content/uploads/2022/02/Cireng-banjur-532x800.jpg'
  },
  {
    id: 'cireng-kuah',
    name: 'Cireng Kuah',
    price: 12000,
    category: 'makanan',
    image: 'https://i.pinimg.com/474x/e1/47/d0/e147d05d44e9b50c2e29627c3e15cd82.jpg'
  },
  {
    id: 'cireng-cricket',
    name: 'Cireng Cricket',
    price: 17000,
    category: 'makanan',
    image: 'https://media.istockphoto.com/id/1288555863/id/foto/seblak-ceker.jpg?b=1&s=612x612&w=0&k=20'
  },
  {
    id: 'bakso-urat',
    name: 'Bakso Urat',
    price: 20000,
    category: 'makanan',
    image: 'https://images.pexels.com/photos/15862941/pexels-photo-15862941/free-photo-of-makanan-sehat-sayuran-hidangan.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'bakso-telor',
    name: 'Bakso Telor',
    price: 19000,
    category: 'makanan',
    image: 'https://images.unsplash.com/photo-1687425973283-d0d266b73325?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'bakso-mercon',
    name: 'Bakso Mercon',
    price: 23000,
    category: 'makanan',
    image: 'https://filebroker-cdn.lazada.co.id/kf/S377e85875fce45dd92546de49b941ca9G.jpg'
  },
  {
    id: 'cuangki-iga-komplit',
    name: 'Cuangki Iga Komplit',
    price: 29000,
    category: 'makanan',
    image: 'https://down-id.img.susercontent.com/file/57885976ef7aa293b5da8b68c18496a7'
  },
  {
    id: 'cuangki-iga-biasa',
    name: 'Cuangki Iga Biasa',
    price: 27000,
    category: 'makanan',
    image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//88/MTA-23382240/boci_cuanki_kuah_paket_5_bungkus_exstra_pedas_gurih_full03_a4497972.jpg'
  },
  {
    id: 'nasi-goreng-biasa',
    name: 'Nasi Goreng Biasa',
    price: 15000,
    category: 'makanan',
    image: 'https://images.unsplash.com/photo-1680674774705-90b4904b3a7f?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'nasi-goreng-ayam-komplit',
    name: 'Nasi Goreng Ayam Komplit',
    price: 20000,
    category: 'makanan',
    image: 'https://images.unsplash.com/photo-1696340030298-a7f877a7780c?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'pangsit-kering',
    name: 'Pangsit Kering',
    price: 14000,
    category: 'makanan',
    image: 'https://images.pexels.com/photos/1860196/pexels-photo-1860196.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'pangsit-basah',
    name: 'Pangsit Basah',
    price: 15000,
    category: 'makanan',
    image: 'https://images.pexels.com/photos/28898334/pexels-photo-28898334/free-photo-of-pangsit-rusia-buatan-sendiri-yang-lezat-dalam-mangkuk.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'pangsit-goreng',
    name: 'Pangsit Goreng',
    price: 16000,
    category: 'makanan',
    image: 'https://images.pexels.com/photos/6646369/pexels-photo-6646369.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'pangsit-hot',
    name: 'Pangsit Hot',
    price: 13000,
    category: 'makanan',
    image: 'https://images.pexels.com/photos/4202387/pexels-photo-4202387.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'batagor-kuah',
    name: 'Batagor Kuah',
    price: 17000,
    category: 'makanan',
    image: 'https://media.istockphoto.com/id/2155233483/photo/batagor-made-from-fish-or-chicken-dumpling.webp?a=1&b=1&s=612x612&w=0&k=20'
  },
  {
    id: 'batagor-banjir',
    name: 'Batagor Banjir',
    price: 18000,
    category: 'makanan',
    image: 'https://media.istockphoto.com/id/2169802415/photo/batagor-served-on-a-serving-plate-with-peanut-sauce-sambal-and-chili-sauce-this-is-authentic.webp?a=1&b=1&s=612x612&w=0&k=20'
  },
  {
    id: 'kentang-goreng',
    name: 'Kentang Goreng',
    price: 10000,
    category: 'makanan',
    image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'sate-taichan',
    name: 'Sate Taichan',
    price: 20000,
    category: 'makanan',
    image: 'https://images.unsplash.com/photo-1645696301019-35adcc18fc21?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'mendoan',
    name: 'Mendoan',
    price: 7000,
    category: 'makanan',
    image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'burger',
    name: 'Burger',
    price: 15000,
    category: 'makanan',
    image: 'https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'soto-mie',
    name: 'Soto Mie',
    price: 15000,
    category: 'makanan',
    image: 'https://media.istockphoto.com/id/1400859010/photo/indonesian-noodles-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20'
  },
  {
    id: 'soto-bogor',
    name: 'Soto Bogor',
    price: 13000,
    category: 'makanan',
    image: 'https://img.freepik.com/free-photo/thai-food-noodles-with-pork-meatball-vegetable_1150-27942.jpg'
  },
  {
    id: 'soto-babat',
    name: 'Soto Babat',
    price: 17000,
    category: 'makanan',
    image: 'https://images.unsplash.com/photo-1681378128359-a5c2492a3535?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'soto-lamongan',
    name: 'Soto Lamongan',
    price: 20000,
    category: 'makanan',
    image: 'https://img.freepik.com/free-photo/thai-food-noodles-with-pork-meatball-vegetable_1150-27934.jpg'
  },

  // Minuman
  {
    id: 'teh-manis',
    name: 'Teh Manis',
    price: 5000,
    category: 'minuman',
    image: 'https://images.pexels.com/photos/7923465/pexels-photo-7923465.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'teh-tawar',
    name: 'Teh Tawar',
    price: 3000,
    category: 'minuman',
    image: 'https://images.pexels.com/photos/28848713/pexels-photo-28848713/free-photo-of-teh-tradisional-turki-dalam-gelas-di-meja.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'matcha',
    name: 'Matcha',
    price: 15000,
    category: 'minuman',
    image: 'https://images.pexels.com/photos/2611811/pexels-photo-2611811.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'jus-anggur',
    name: 'Jus Anggur',
    price: 10000,
    category: 'minuman',
    image: 'https://images.pexels.com/photos/20485965/pexels-photo-20485965/free-photo-of-minuman-kaca-anggur-dekorasi.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'jus-apple',
    name: 'Jus Apple',
    price: 10000,
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1507120366498-4656eaece7fa?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'jus-jeruk',
    name: 'Jus Jeruk',
    price: 10000,
    category: 'minuman',
    image: 'https://images.pexels.com/photos/7377091/pexels-photo-7377091.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'jus-buah-naga',
    name: 'Jus Buah Naga',
    price: 10000,
    category: 'minuman',
    image: 'https://images.pexels.com/photos/4551975/pexels-photo-4551975.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'brown-sugar',
    name: 'Brown Sugar',
    price: 12000,
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1637273484213-3b41dfbdcf99?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'teh-tarik',
    name: 'Teh Tarik',
    price: 7000,
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1603618309543-d42b7d2a0ba7?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'ice-cream',
    name: 'Ice Cream',
    price: 10000,
    category: 'minuman',
    image: 'https://plus.unsplash.com/premium_photo-1661427159078-9d85039e99b8?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'thai-tea',
    name: 'Thai Tea',
    price: 15000,
    category: 'minuman',
    image: 'https://media.istockphoto.com/id/1405841153/photo/thai-milk-tea-milk-ice-tea-cheddar-is-a-traditional-thai-drink-that-has-long-been-popular.webp?a=1&b=1&s=612x612&w=0&k=20'
  },
  {
    id: 'lemon-tea',
    name: 'Lemon Tea',
    price: 10000,
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'coffee-sunrise',
    name: 'Coffee Sunrise',
    price: 13000,
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1588413335672-87b35888b55d?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'coffee-latte',
    name: 'Coffee Latte',
    price: 10000,
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1634473115508-4291d758cf03?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'coffee-americano',
    name: 'Coffee Americano',
    price: 8000,
    category: 'minuman',
    image: 'https://images.pexels.com/photos/29179913/pexels-photo-29179913/free-photo-of-kopi-hitam-aromatik-dihiasi-kulit-jeruk.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'coffee-cappuccino',
    name: 'Coffee Cappuccino',
    price: 12000,
    category: 'minuman',
    image: 'https://images.pexels.com/photos/17864141/pexels-photo-17864141/free-photo-of-cangkir-cappuccino-kilang-tanaman.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'leci-tea',
    name: 'Leci Tea',
    price: 15000,
    category: 'minuman',
    image: 'https://img.okezone.com/content/2016/07/14/481/1437808/wah-minum-jus-leci-bantu-turunkan-berat-badan-dYyFyDrhLP.jpg'
  },
  {
    id: 'strawberry-tea',
    name: 'Strawberry Tea',
    price: 17000,
    category: 'minuman',
    image: 'https://cdn.yummy.co.id/content-images/images/20240330/f3afdc3414b8563f070df27614226f21.jpg?x-oss-process=image/format,webp'
  },
  {
    id: 'blueberry-tea',
    name: 'Blueberry Tea',
    price: 17000,
    category: 'minuman',
    image: 'https://cdn1-production-images-kly.akamaized.net/AH8Ejn2bH7x1swumlVnzhyrz2hg=/680x383/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1543418/original/30f0931696e187ee37f2fcfbeda3ea8dice.jpg'
  },
  {
    id: 'grape-tea',
    name: 'Grape Tea',
    price: 20000,
    category: 'minuman',
    image: 'https://cdn.yummy.co.id/content-images/images/20230613/SZeGpdVCVqAQW7pMTf92aZ8tYrAnQXwD-31363836363533393834d41d8cd98f00b204e9800998ecf8427e.jpg?x-oss-process=image/resize,w_388,h_388,m_fixed'
  },
];

export function formatRupiah(amount: number): string {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

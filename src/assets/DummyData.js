const dummyBrands = [
  'Aspirants',
  'Bloodline of Combat',
  'Coral Coast',
  'Epoque', 
  'Vitafield'
]

const dummyProducts = [
  {
    name: 'Letter of Wessex',
    sku: 'EPO-1',
    description: '<b>Melantha</b>',
    brand: 'EPOQUE',
    variety: [
      { name: 'Activate Melantha Skill', sku: 'AMS-1', price: 88888888 }
    ],
    imageUrl: 'https://gamepress.gg/arknights/sites/arknights/files/2020-02/ArtMelanthaSkinEpoque.png'
  },
  {
    name: 'Ten Thousand Mountains',
    sku: 'BOC-4',
    description: '<b>Ruby</b>',
    brand: 'Bloodline of Combat',
    variety: [
      { name: 'Chen the Holungday', sku: 'BOC-7', price: 999999999 }
    ],
    imageUrl: 'https://gamepress.gg/arknights/sites/arknights/files/2023-05/%E7%AB%8B%E7%BB%98_%E5%81%87%E6%97%A5%E5%A8%81%E9%BE%99%E9%99%88_skin1.png'
  }
]

export { dummyBrands, dummyProducts }
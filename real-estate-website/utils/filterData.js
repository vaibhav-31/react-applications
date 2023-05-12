export const filterData = [
    {
      items: [
        { name: 'Buy', value: 'for-sale' },
        { name: 'Rent', value: 'for-rent' },
      ],
      placeholder: 'Purpose',
      queryName: 'purpose',
    },
    {
      items: [
        { name: '10,000', value: '10000' },
        { name: '20,000', value: '20000' },
        { name: '30,000', value: '30000' },
        { name: '40,000', value: '40000' },
        { name: '50,000', value: '50000' },
        { name: '60,000', value: '60000' },
        { name: '85,000', value: '85000' },
      ],
      placeholder: 'Min Price(₹)',
      queryName: 'minPrice',
    },
    {
      items: [
        { name: '50,000', value: '50000' },
        { name: '60,000', value: '60000' },
        { name: '85,000', value: '85000' },
        { name: '110,000', value: '110000' },
        { name: '135,000', value: '135000' },
        { name: '160,000', value: '160000' },
        { name: '185,000', value: '185000' },
        { name: '200,000', value: '200000' },
        { name: '300,000', value: '300000' },
        { name: '400,000', value: '400000' },
        { name: '500,000', value: '500000' },
        { name: '600,000', value: '600000' },
        { name: '700,000', value: '700000' },
        { name: '800,000', value: '800000' },
        { name: '900,000', value: '900000' },
        { name: '1000,000', value: '1000000' },
      ],
      placeholder: 'Max Price(₹)',
      queryName: 'maxPrice',
    },
    {
      items: [
        { name: 'Apartment', value: '4' },
        { name: 'Townhouses', value: '16' },
        { name: 'Villas', value: '3' },
        { name: 'Penthouses', value: '18' },
        { name: 'Hotel Apartments', value: '21' },
        { name: 'Villa Compound', value: '19' },
        { name: 'Residential Plot', value: '14' },
        { name: 'Residential Floor', value: '12' },
        { name: 'Residential Building', value: '17' },
      ],
      placeholder: 'Property Type',
      queryName: 'categoryExternalID',
    },
  ];
  
  export const getFilterValues = (filterValues) => {
    const {
      purpose,
      categoryExternalID,
      minPrice,
      maxPrice,
    } = filterValues;
  
    const values = [
      {
        name: 'purpose',
        value: purpose,
      },
      {
        name: 'minPrice',
        value: minPrice,
      },
      {
        name: 'maxPrice',
        value: maxPrice,
      },
      {
        name: 'categoryExternalID',
        value: categoryExternalID,
      },
    ];
  
    return values;
  };
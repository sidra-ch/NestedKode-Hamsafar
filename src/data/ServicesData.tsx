// Afghanistan Tourism Services Data
export interface ServiceDataType {
   id: number;
   category: 'Flight' | 'Bus' | 'Hotel' | 'Home & Residence' | 'Tour' | 'Insurance';
   thumb: string;
   title: string;
   location: string;
   price: number;
   rating: number;
   reviews?: string;
   featured?: boolean;
   description?: string;
   duration?: string;
   capacity?: string;
}

const services_data: ServiceDataType[] = [
   // FLIGHTS
   {
      id: 1,
      category: 'Flight',
      thumb: '/assets/img/afghanistan/flight-kabul.jpg',
      title: 'Kabul to Herat Flight',
      location: 'Kabul - Herat',
      price: 120,
      rating: 4.5,
      reviews: '(45 Reviews)',
      featured: true,
      duration: '1h 30min',
      capacity: '150 Seats'
   },
   {
      id: 2,
      category: 'Flight',
      thumb: '/assets/img/afghanistan/flight-mazar.jpg',
      title: 'Kabul to Mazar-i-Sharif',
      location: 'Kabul - Mazar-i-Sharif',
      price: 95,
      rating: 4.7,
      reviews: '(52 Reviews)',
      duration: '1h 15min',
      capacity: '180 Seats'
   },
   {
      id: 3,
      category: 'Flight',
      thumb: '/assets/img/afghanistan/flight-kandahar.jpg',
      title: 'Kabul to Kandahar Flight',
      location: 'Kabul - Kandahar',
      price: 85,
      rating: 4.6,
      reviews: '(38 Reviews)',
      duration: '50min',
      capacity: '120 Seats'
   },
   {
      id: 4,
      category: 'Flight',
      thumb: '/assets/img/afghanistan/flight-bamyan.jpg',
      title: 'Kabul to Bamyan Flight',
      location: 'Kabul - Bamyan',
      price: 75,
      rating: 4.8,
      reviews: '(28 Reviews)',
      featured: true,
      duration: '45min',
      capacity: '50 Seats'
   },

   // BUS SERVICES
   {
      id: 5,
      category: 'Bus',
      thumb: '/assets/img/afghanistan/bus-kabul-herat.jpg',
      title: 'Luxury Bus Kabul-Herat',
      location: 'Kabul - Herat',
      price: 25,
      rating: 4.3,
      reviews: '(65 Reviews)',
      featured: true,
      duration: '12 hours',
      capacity: '40 Seats'
   },
   {
      id: 6,
      category: 'Bus',
      thumb: '/assets/img/afghanistan/bus-kabul-kandahar.jpg',
      title: 'Express Bus Kabul-Kandahar',
      location: 'Kabul - Kandahar',
      price: 20,
      rating: 4.4,
      reviews: '(78 Reviews)',
      duration: '8 hours',
      capacity: '45 Seats'
   },
   {
      id: 7,
      category: 'Bus',
      thumb: '/assets/img/afghanistan/bus-mazar.jpg',
      title: 'Comfort Bus Kabul-Mazar',
      location: 'Kabul - Mazar-i-Sharif',
      price: 22,
      rating: 4.2,
      reviews: '(42 Reviews)',
      duration: '10 hours',
      capacity: '40 Seats'
   },
   {
      id: 8,
      category: 'Bus',
      thumb: '/assets/img/afghanistan/bus-jalalabad.jpg',
      title: 'City Bus Kabul-Jalalabad',
      location: 'Kabul - Jalalabad',
      price: 12,
      rating: 4.5,
      reviews: '(90 Reviews)',
      featured: true,
      duration: '3 hours',
      capacity: '50 Seats'
   },

   // HOTELS
   {
      id: 9,
      category: 'Hotel',
      thumb: '/assets/img/afghanistan/hotel-kabul.jpg',
      title: 'Kabul Serena Hotel',
      location: 'Kabul, Afghanistan',
      price: 180,
      rating: 4.8,
      reviews: '(125 Reviews)',
      featured: true,
      description: 'Luxury 5-star hotel in central Kabul'
   },
   {
      id: 10,
      category: 'Hotel',
      thumb: '/assets/img/afghanistan/hotel-herat.jpg',
      title: 'Herat Grand Hotel',
      location: 'Herat, Afghanistan',
      price: 120,
      rating: 4.6,
      reviews: '(89 Reviews)',
      description: '4-star hotel near historical sites'
   },
   {
      id: 11,
      category: 'Hotel',
      thumb: '/assets/img/afghanistan/hotel-mazar.jpg',
      title: 'Mazar Plaza Hotel',
      location: 'Mazar-i-Sharif, Afghanistan',
      price: 95,
      rating: 4.5,
      reviews: '(67 Reviews)',
      description: 'Modern hotel near Blue Mosque'
   },
   {
      id: 12,
      category: 'Hotel',
      thumb: '/assets/img/afghanistan/hotel-bamyan.jpg',
      title: 'Bamyan Mountain Lodge',
      location: 'Bamyan, Afghanistan',
      price: 75,
      rating: 4.7,
      reviews: '(54 Reviews)',
      featured: true,
      description: 'Scenic lodge with mountain views'
   },

   // HOME & RESIDENCE
   {
      id: 13,
      category: 'Home & Residence',
      thumb: '/assets/img/afghanistan/guesthouse-kabul.jpg',
      title: 'Kabul Family Guesthouse',
      location: 'Kabul, Afghanistan',
      price: 45,
      rating: 4.4,
      reviews: '(78 Reviews)',
      featured: true,
      capacity: '6 Guests'
   },
   {
      id: 14,
      category: 'Home & Residence',
      thumb: '/assets/img/afghanistan/apartment-herat.jpg',
      title: 'Herat City Apartment',
      location: 'Herat, Afghanistan',
      price: 55,
      rating: 4.6,
      reviews: '(45 Reviews)',
      capacity: '4 Guests'
   },
   {
      id: 15,
      category: 'Home & Residence',
      thumb: '/assets/img/afghanistan/villa-mazar.jpg',
      title: 'Mazar Traditional House',
      location: 'Mazar-i-Sharif, Afghanistan',
      price: 65,
      rating: 4.5,
      reviews: '(32 Reviews)',
      capacity: '8 Guests'
   },
   {
      id: 16,
      category: 'Home & Residence',
      thumb: '/assets/img/afghanistan/cottage-bamyan.jpg',
      title: 'Bamyan Valley Cottage',
      location: 'Bamyan, Afghanistan',
      price: 40,
      rating: 4.7,
      reviews: '(28 Reviews)',
      featured: true,
      capacity: '4 Guests'
   },

   // TOURS
   {
      id: 17,
      category: 'Tour',
      thumb: '/assets/img/afghanistan/tour-band-e-amir.jpg',
      title: 'Band-e Amir Lakes Tour',
      location: 'Bamyan, Afghanistan',
      price: 180,
      rating: 4.9,
      reviews: '(156 Reviews)',
      featured: true,
      duration: '2 Days',
      capacity: '10 Guests'
   },
   {
      id: 18,
      category: 'Tour',
      thumb: '/assets/img/afghanistan/tour-kabul-heritage.jpg',
      title: 'Kabul Heritage Tour',
      location: 'Kabul, Afghanistan',
      price: 95,
      rating: 4.7,
      reviews: '(98 Reviews)',
      duration: '1 Day',
      capacity: '15 Guests'
   },
   {
      id: 19,
      category: 'Tour',
      thumb: '/assets/img/afghanistan/tour-herat-ancient.jpg',
      title: 'Ancient Herat Discovery',
      location: 'Herat, Afghanistan',
      price: 140,
      rating: 4.8,
      reviews: '(87 Reviews)',
      duration: '3 Days',
      capacity: '12 Guests'
   },
   {
      id: 20,
      category: 'Tour',
      thumb: '/assets/img/afghanistan/tour-panjshir.jpg',
      title: 'Panjshir Valley Adventure',
      location: 'Panjshir, Afghanistan',
      price: 220,
      rating: 4.9,
      reviews: '(64 Reviews)',
      featured: true,
      duration: '4 Days',
      capacity: '8 Guests'
   },

   // INSURANCE
   {
      id: 21,
      category: 'Insurance',
      thumb: '/assets/img/afghanistan/insurance-travel.jpg',
      title: 'Basic Travel Insurance',
      location: 'Afghanistan Coverage',
      price: 25,
      rating: 4.5,
      reviews: '(234 Reviews)',
      description: 'Essential coverage for domestic travel'
   },
   {
      id: 22,
      category: 'Insurance',
      thumb: '/assets/img/afghanistan/insurance-premium.jpg',
      title: 'Premium Travel Protection',
      location: 'Afghanistan Coverage',
      price: 45,
      rating: 4.7,
      reviews: '(178 Reviews)',
      featured: true,
      description: 'Comprehensive travel insurance package'
   },
   {
      id: 23,
      category: 'Insurance',
      thumb: '/assets/img/afghanistan/insurance-adventure.jpg',
      title: 'Adventure Sports Coverage',
      location: 'Afghanistan Coverage',
      price: 65,
      rating: 4.6,
      reviews: '(92 Reviews)',
      description: 'Insurance for trekking and adventure activities'
   },
   {
      id: 24,
      category: 'Insurance',
      thumb: '/assets/img/afghanistan/insurance-family.jpg',
      title: 'Family Travel Insurance',
      location: 'Afghanistan Coverage',
      price: 85,
      rating: 4.8,
      reviews: '(145 Reviews)',
      description: 'Complete family protection package'
   },
];

export default services_data;

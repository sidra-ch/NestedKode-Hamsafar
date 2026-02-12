import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderOne from '../layouts/headers/HeaderOne';
import BreadCrumb from '../components/common/BreadCrumb';
import FooterOne from '../layouts/footers/FooterOne';
import services_data from '../data/ServicesData';

interface ServiceCardProps {
   service: {
      id: number;
      category: string;
      thumb: string;
      title: string;
      location: string;
      price: number;
      rating: number;
      reviews?: string;
      featured?: boolean;
      duration?: string;
      capacity?: string;
   };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
   return (
      <div className="col-xl-4 col-lg-6 col-md-6">
         <div className="tour-listing-item mb-30" style={{ 
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
         }}
         onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
         }}
         onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
         }}>
            <div className="tour-listing-img" style={{ height: '200px', overflow: 'hidden' }}>
               <img 
                  src={service.thumb} 
                  alt={service.title}
                  style={{ 
                     width: '100%', 
                     height: '100%', 
                     objectFit: 'cover' 
                  }}
                  onError={(e) => {
                     (e.target as HTMLImageElement).src = '/assets/img/afghanistan/placeholder.jpg';
                  }}
               />
               {service.featured && (
                  <div className="tour-listing-badge" style={{
                     position: 'absolute',
                     top: '15px',
                     left: '15px',
                     background: '#2ecc71',
                     color: 'white',
                     padding: '5px 15px',
                     borderRadius: '5px',
                     fontSize: '12px',
                     fontWeight: 'bold'
                  }}>
                     Featured
                  </div>
               )}
            </div>
            <div className="tour-listing-content" style={{ padding: '20px' }}>
               <h4 className="tour-listing-title" style={{ 
                  fontSize: '18px',
                  marginBottom: '10px',
                  color: '#2c3e50'
               }}>
                  {service.title}
               </h4>
               <div className="tour-listing-location" style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  color: '#7f8c8d',
                  fontSize: '14px'
               }}>
                  <i className="fal fa-map-marker-alt" style={{ marginRight: '8px' }}></i>
                  {service.location}
               </div>
               {service.duration && (
                  <div className="tour-listing-duration" style={{ 
                     marginBottom: '5px',
                     color: '#7f8c8d',
                     fontSize: '14px'
                  }}>
                     <i className="fal fa-clock" style={{ marginRight: '8px' }}></i>
                     {service.duration}
                  </div>
               )}
               {service.capacity && (
                  <div className="tour-listing-capacity" style={{ 
                     marginBottom: '10px',
                     color: '#7f8c8d',
                     fontSize: '14px'
                  }}>
                     <i className="fal fa-users" style={{ marginRight: '8px' }}></i>
                     {service.capacity}
                  </div>
               )}
               <div className="tour-listing-rating" style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '15px'
               }}>
                  <div className="rating-stars" style={{ marginRight: '10px' }}>
                     {[...Array(5)].map((_, index) => (
                        <i 
                           key={index}
                           className={index < Math.floor(service.rating) ? "fas fa-star" : "far fa-star"}
                           style={{ color: '#f39c12', fontSize: '14px', marginRight: '2px' }}
                        ></i>
                     ))}
                  </div>
                  <span style={{ color: '#7f8c8d', fontSize: '14px' }}>{service.rating}</span>
                  {service.reviews && (
                     <span style={{ color: '#95a5a6', fontSize: '12px', marginLeft: '5px' }}>
                        {service.reviews}
                     </span>
                  )}
               </div>
               <div className="tour-listing-footer" style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '15px',
                  borderTop: '1px solid #ecf0f1'
               }}>
                  <div className="tour-listing-price">
                     <span style={{ 
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#3498db'
                     }}>
                        ${service.price}
                     </span>
                     <span style={{ 
                        fontSize: '14px',
                        color: '#95a5a6',
                        marginLeft: '5px'
                     }}>
                        / person
                     </span>
                  </div>
                  <button 
                     className="btn btn-primary"
                     style={{
                        background: 'linear-gradient(135deg, #3498db, #2ecc71)',
                        border: 'none',
                        padding: '10px 25px',
                        borderRadius: '25px',
                        color: 'white',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                     }}
                     onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(52, 152, 219, 0.4)';
                     }}
                     onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                     }}
                  >
                     Book Now
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

const BusServicesMain: React.FC = () => {
   const busServices = services_data.filter(service => service.category === 'Bus');

   return (
      <>
         <Helmet>
            <title>Bus Services - Afghanistan Tourism</title>
         </Helmet>
         <HeaderOne />
         <main>
            <BreadCrumb 
               title="Bus Services" 
               sub_title="Bus"
            />
            <section className="bus-area pt-120 pb-90" style={{
               background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)'
            }}>
               <div className="container">
                  <div className="row mb-50">
                     <div className="col-12 text-center">
                        <h2 style={{ 
                           fontSize: '36px',
                           color: '#2c3e50',
                           marginBottom: '15px'
                        }}>
                           Bus Services in Afghanistan
                        </h2>
                        <p style={{ 
                           fontSize: '16px',
                           color: '#7f8c8d',
                           maxWidth: '700px',
                           margin: '0 auto'
                        }}>
                           Affordable and comfortable bus services connecting major cities across Afghanistan. 
                           Enjoy safe and reliable travel with our modern fleet.
                        </p>
                     </div>
                  </div>
                  <div className="row">
                     {busServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                     ))}
                  </div>
               </div>
            </section>
         </main>
         <FooterOne />
      </>
   );
};

export default BusServicesMain;

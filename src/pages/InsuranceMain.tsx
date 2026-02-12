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
      description?: string;
   };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
   return (
      <div className="col-xl-6 col-lg-6 col-md-12">
         <div className="insurance-card mb-30" style={{ 
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            display: 'flex',
            flexDirection: 'row',
            background: 'white'
         }}
         onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
         }}
         onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
         }}>
            <div className="insurance-img" style={{ width: '200px', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
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
                  <div className="insurance-badge" style={{
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
                     Recommended
                  </div>
               )}
            </div>
            <div className="insurance-content" style={{ padding: '20px', flex: 1 }}>
               <h4 className="insurance-title" style={{ 
                  fontSize: '20px',
                  marginBottom: '10px',
                  color: '#2c3e50'
               }}>
                  {service.title}
               </h4>
               <div className="insurance-location" style={{ 
                  marginBottom: '10px',
                  color: '#7f8c8d',
                  fontSize: '14px'
               }}>
                  <i className="fal fa-shield-check" style={{ marginRight: '8px' }}></i>
                  {service.location}
               </div>
               {service.description && (
                  <p style={{ 
                     marginBottom: '15px',
                     color: '#7f8c8d',
                     fontSize: '14px',
                     lineHeight: '1.6'
                  }}>
                     {service.description}
                  </p>
               )}
               <div className="insurance-rating" style={{ 
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
               <div className="insurance-footer" style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '15px',
                  borderTop: '1px solid #ecf0f1'
               }}>
                  <div className="insurance-price">
                     <span style={{ 
                        fontSize: '28px',
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
                        / trip
                     </span>
                  </div>
                  <button 
                     className="btn btn-primary"
                     style={{
                        background: 'linear-gradient(135deg, #3498db, #2ecc71)',
                        border: 'none',
                        padding: '10px 30px',
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
                     Get Coverage
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

const InsuranceMain: React.FC = () => {
   const insuranceServices = services_data.filter(service => service.category === 'Insurance');

   return (
      <>
         <Helmet>
            <title>Travel Insurance - Afghanistan Tourism</title>
         </Helmet>
         <HeaderOne />
         <main>
            <BreadCrumb 
               title="Travel Insurance" 
               sub_title="Insurance"
            />
            <section className="insurance-area pt-120 pb-90" style={{
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
                           Travel Insurance Plans
                        </h2>
                        <p style={{ 
                           fontSize: '16px',
                           color: '#7f8c8d',
                           maxWidth: '700px',
                           margin: '0 auto'
                        }}>
                           Travel with peace of mind. Our comprehensive insurance plans cover you 
                           throughout your journey in Afghanistan.
                        </p>
                     </div>
                  </div>
                  <div className="row">
                     {insuranceServices.map((service) => (
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

export default InsuranceMain;

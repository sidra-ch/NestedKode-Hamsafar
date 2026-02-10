import { Link } from "react-router-dom";

const blog_data = [
   {
      id: 1,
      thumb: "/assets/img/afghanistan/newimg-1.jpg",
      tag: "Heritage",
      title: "Ancient Kabul: City of Kings & Poets",
      date: "26th Sep, 2024",
      time: "5 mins Read"
   },
   {
      id: 2,
      thumb: "/assets/img/afghanistan/newimg-2.jpg",
      tag: "Adventure", 
      title: "Hindu Kush Mountain Trekking",
      date: "26th Sep, 2024",
      time: "5 mins Read"
   },
   {
      id: 3,
      thumb: "/assets/img/afghanistan/newimg-3.jpg",
      tag: "Culture",
      title: "Kabul Traditional Markets & Crafts",
      date: "26th Sep, 2024",
      time: "5 mins Read"
   }
];

const Blog = () => {
   return (
      <div className="tg-blog-area tg-blog-space tg-grey-bg pt-135 p-relative z-index-1">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tg-location-section-title text-center mb-30">
                     <h5 className="tg-section-subtitle mb-15 wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".9s">Blog And Article</h5>
                     <h2 className="mb-15 text-capitalize wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">Latest News & Articles</h2>
                     <p className="text-capitalize wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".9s">Are you tired of the typical tourist destinations and<br /> looking
                         to step out of your comfort zonetravel</p>
                  </div>
               </div>
            </div>

            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="tg-blog-grid-item">
                     <div className="tg-blog-thumb">
                        <Link to="/blog-details"><img className="w-100" src={blog_data[0].thumb} alt={blog_data[0].title} style={{ height: "280px", objectFit: "cover" }} /></Link>
                        <div className="tg-blog-overlay">
                           <span className="tg-blog-tag">Featured</span>
                        </div>
                     </div>
                     <div className="tg-blog-content">
                        <div className="tg-blog-meta">
                           <span className="tg-blog-tag">{blog_data[0].tag}</span>
                        </div>
                        <h3><Link to="/blog-details">{blog_data[0].title}</Link></h3>
                        <div className="tg-blog-date">
                           <span className="mr-15"><i className="fa-light fa-calendar"></i>{blog_data[0].date}</span>
                           <span><i className="fa-regular fa-clock"></i>{blog_data[0].time}</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-lg-6">
                  <div className="tg-blog-grid-item">
                     <div className="tg-blog-thumb">
                        <Link to="/blog-details"><img className="w-100" src={blog_data[1].thumb} alt={blog_data[1].title} style={{ height: "220px", objectFit: "cover" }} /></Link>
                     </div>
                     <div className="tg-blog-content">
                        <div className="tg-blog-meta">
                           <span className="tg-blog-tag">{blog_data[1].tag}</span>
                        </div>
                        <h3><Link to="/blog-details">{blog_data[1].title}</Link></h3>
                        <div className="tg-blog-date">
                           <span className="mr-15"><i className="fa-light fa-calendar"></i>{blog_data[1].date}</span>
                           <span><i className="fa-regular fa-clock"></i>{blog_data[1].time}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-lg-6">
                  <div className="tg-blog-grid-item">
                     <div className="tg-blog-thumb">
                        <Link to="/blog-details"><img className="w-100" src={blog_data[2].thumb} alt={blog_data[2].title} style={{ height: "220px", objectFit: "cover" }} /></Link>
                     </div>
                     <div className="tg-blog-content">
                        <div className="tg-blog-meta">
                           <span className="tg-blog-tag">{blog_data[2].tag}</span>
                        </div>
                        <h3><Link to="/blog-details">{blog_data[2].title}</Link></h3>
                        <div className="tg-blog-date">
                           <span className="mr-15"><i className="fa-light fa-calendar"></i>{blog_data[2].date}</span>
                           <span><i className="fa-regular fa-clock"></i>{blog_data[2].time}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">
                  <div className="tg-blog-bottom text-center pt-25">
                     <p>Want to read more about Afghanistan? <Link to="/blog-grid">Click here to View More Articles</Link></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Blog;
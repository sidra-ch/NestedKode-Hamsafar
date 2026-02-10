interface DataType {
   id: number;
   page: string;
   thumb: string;
   tag?: string;
   title: string;
   date: string;
   time: string;
   desc: string;
}

const blog_data: DataType[] = [
    {
       id: 1,
       page: "home_1",
       thumb: "/assets/img/afghanistan/blog-1.jpg",
       tag: "Culture",
       title: "Discover Ancient Heritage of Afghanistan",
       date: "26th Sep, 2024",
       time: "5 mins Read",
       desc: "Explore the rich cultural heritage and historical sites across Afghanistan's ancient cities."
    },
    {
       id: 2,
       page: "home_1",
       thumb: "/assets/img/afghanistan/blog-2.jpg",
       tag: "Adventure",
       title: "Band-e Amir: Afghanistan's Natural Wonder",
       date: "26th Sep, 2024",
       time: "5 mins Read",
       desc: "Experience the breathtaking beauty of Afghanistan's famous blue lakes and mountain landscapes."
    },
    {
       id: 3,
       page: "home_1",
       thumb: "/assets/img/afghanistan/blog-3.jpg",
       tag: "Travel",
       title: "Silk Road Journey Through Modern Afghanistan",
       date: "26th Sep, 2024",
       time: "5 mins Read",
       desc: "Follow the ancient trade routes and discover Afghanistan's role in connecting civilizations."
    },

   // inner_1

   {
      id: 1,
      page: "inner_1",
      thumb: "/assets/img/blog/grid/grid.jpg",
      title: "Exploring The Green Spac Realar Residence Area Harmony",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we explore the green innovations.",
   },
   {
      id: 2,
      page: "inner_1",
      thumb: "/assets/img/blog/grid/grid-2.jpg",
      title: "An arts and culture guide to Turin, Italy",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we explore the green innovations.",
   },
   {
      id: 3,
      page: "inner_1",
      thumb: "/assets/img/blog/grid/grid-3.jpg",
      title: "Enrich Your Mind Envision Your Future Education for",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we explore the green innovations.",
   },
   {
      id: 4,
      page: "inner_1",
      thumb: "/assets/img/blog/grid/grid-4.jpg",
      title: "Change your place and get the fresh air",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we explore the green innovations.",
   },
   {
      id: 5,
      page: "inner_1",
      thumb: "/assets/img/blog/grid/grid-5.jpg",
      title: "This Spanish city is a feast for the eyes",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we explore the green innovations.",
   },
   {
      id: 6,
      page: "inner_1",
      thumb: "/assets/img/blog/grid/grid-6.jpg",
      title: "When you visit the Eternal Rome City",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we explore the green innovations.",
   },
   {
      id: 7,
      page: "inner_1",
      thumb: "/assets/img/blog/grid/grid-7.jpg",
      title: "Three of the Best Day Trips to Make from Francisco",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we explore the green innovations.",
   },
   {
      id: 8,
      page: "inner_1",
      thumb: "/assets/img/blog/grid/grid-8.jpg",
      title: "10 Safest Destinations for Solo Female Travelers",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we explore the green innovations.",
   },
   {
      id: 9,
      page: "inner_1",
      thumb: "/assets/img/blog/grid/grid-5.jpg",
      title: "This Spanish city is a feast for the eyes",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we explore the green innovations.",
   },
   {
      id: 10,
      page: "inner_1",
      thumb: "/assets/img/blog/grid/grid-6.jpg",
      title: "When you visit the Eternal Rome City",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we explore the green innovations.",
   },
   {
      id: 11,
      page: "inner_1",
      thumb: "/assets/img/blog/grid/grid-7.jpg",
      title: "Three of the Best Day Trips to Make from Francisco",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we explore the green innovations.",
   },
   {
      id: 12,
      page: "inner_1",
      thumb: "/assets/img/blog/grid/grid-8.jpg",
      title: "10 Safest Destinations for Solo Female Travelers",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we explore the green innovations.",
   },

   // inner_1

   {
      id: 1,
      page: "inner_2",
      thumb: "/assets/img/blog/sidebar/standard.jpg",
      title: "Exploring The Green Spaces Of Realar Residence Area Harmony with Nature",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we are explore the green innovations seamlessly integrated into the fabric.",
   },
   {
      id: 2,
      page: "inner_2",
      thumb: "/assets/img/blog/sidebar/standard-3.jpg",
      title: "Enrich Your Mind Envision Your Future Education for Success",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we are explore the green innovations seamlessly integrated into the fabric.",
   },
   {
      id: 3,
      page: "inner_2",
      thumb: "/assets/img/blog/sidebar/standard-4.jpg",
      title: "An arts and culture guide to Turin, Italy",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we are explore the green innovations seamlessly integrated into the fabric.",
   },
   {
      id: 4,
      page: "inner_2",
      thumb: "/assets/img/blog/sidebar/standard-2.jpg",
      title: "10 Safest Destinations for Solo Female Travelers",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we are explore the green innovations seamlessly integrated into the fabric.",
   },
   {
      id: 5,
      page: "inner_2",
      thumb: "/assets/img/blog/sidebar/standard-4.jpg",
      title: "An arts and culture guide to Turin, Italy",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we are explore the green innovations seamlessly integrated into the fabric.",
   },
   {
      id: 6,
      page: "inner_2",
      thumb: "/assets/img/blog/sidebar/standard-2.jpg",
      title: "10 Safest Destinations for Solo Female Travelers",
      date: "26th Sep, 2024",
      time: "5 mins Read",
      desc: "Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we are explore the green innovations seamlessly integrated into the fabric.",
   },
];

export default blog_data;
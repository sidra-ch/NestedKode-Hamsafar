
interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        has_dropdown: false,
    },
    {
        id: 2,
        title: "About Us",
        link: "/about",
        has_dropdown: false,
    },
    {
        id: 3,
        title: "Contact Us",
        link: "/contact",
        has_dropdown: false,
    },
    {
        id: 4,
        title: "Tours",
        link: "/tour-grid-2",
        has_dropdown: false,
    },
    {
        id: 5,
        title: "Hotels",
        link: "/hotel-grid",
        has_dropdown: false,
    },
    {
        id: 6,
        title: "Flight",
        link: "/flights",
        has_dropdown: false,
    },
    {
        id: 7,
        title: "Bus",
        link: "/bus-services",
        has_dropdown: false,
    },
    {
        id: 8,
        title: "Home & Residence",
        link: "/residences",
        has_dropdown: false,
    },
    {
        id: 9,
        title: "Insurance",
        link: "/insurance",
        has_dropdown: false,
    },
];

export default menu_data;
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const navbarLabels = [
    { title: 'How it Works', href: '/' },
    { title: 'For Retailers', href: '/' },
    { title: 'Get the App', href: '/' },
];

export const dropdownNavbarLabels = [
    { title: 'All Categories', fontWeight: '700' },
    { title: 'Most Popular', fontWeight: '700', href: '/' },
    { title: 'New', fontWeight: '700', href: '/' },
    { title: 'Shop Local' },
    { title: 'International Brands', fontWeight: '700', href: '/' },
];

export const allCategoriesDropdownLabels = [
    {
        id: 1,
        mainLabel: {
            subTitle: [
                {
                    links: [
                        'Women',
                        'Clothing',
                        'Shoes',
                        'Handbags',
                        'Jewellery & Accessories',
                        'Plus-Sizes',
                        'Intimates',
                    ],
                },
            ],
        },
    },

    {
        id: 2,
        mainLabel: {
            subTitle: [
                {
                    links: ['Men', 'Clothing', 'Shoes'],
                },
            ],
        },
    },
    {
        id: 3,
        mainLabel: {
            subTitle: [
                {
                    links: ['Beauty', 'makeup', 'Skincare', 'Fragrance', 'Self-Care'],
                },
            ],
        },
    },

    {
        id: 4,
        mainLabel: {
            subTitle: [
                {
                    links: ['Shoes', 'Fitness & Wellness', 'Home', 'Kids'],
                },
            ],
        },
    },
];

export const internationalClothsLabels = [
    { title: 'Shop US Brands' },
    { title: 'Shop Australian Brands' },
    { title: 'Shop UK Brands' },
];

export const navDropdownLabels = [
    {
        id: 1,
        mainLabel: {
            mainLabelName: 'All Categories',
            iconOpen: <ExpandMoreIcon />,
            iconClose: <ChevronRightIcon />,
            subTitle: [
                {
                    links: [
                        'Women',
                        'Clothing',
                        'Shoes',
                        'Handbags',
                        'Jewellery & Accessories',
                        'Plus-Sizes',
                        'Intimates',
                        'Men',
                        'Clothing',
                        'Shoes',
                        'Beauty',
                        'makeup',
                        'Skincare',
                        'Fragrance',
                        'Self-Care',
                        'Shoes',
                        'Fitness & Wellness',
                        'Home',
                        'Kids',
                    ],
                },
            ],
        },
    },
    {
        mainLabel: { mainLabelName: 'Most Popular' },
    },
    {
        mainLabel: { mainLabelName: 'New' },
    },

    {
        mainLabel: { mainLabelName: 'Shop Local' },
    },

    {
        id: 2,
        mainLabel: {
            mainLabelName: 'International Brands',
            iconOpen: <ExpandMoreIcon />,
            iconClose: <ChevronRightIcon />,
            subTitle: [
                {
                    links: ['Shop US Brands', 'Shop Australian Brands', 'Shop UK Brands'],
                },
            ],
        },
    },
];

export const footerDropdownNavbarLabels = [
    'About us',
    'for retailers',
    'Media',
    'Terms',
    'Contact',
    'Afterpay API',
    'Careers',
    'How it works',
    'Investors',
    'Privacy',
    'Instalment Agreement',
    'Help',
    'Security',
];

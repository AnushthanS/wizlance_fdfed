const navLinks = [
    {
        id: 'login',
        title: 'Login'
    },
    {
        id: 'signup',
        title: 'Sign up'
    }
]

const carouselLinks = [
    {
        title: 'Game Development',
        imgUrl: 'https://itchronicles.com/wp-content/uploads/2021/04/Optimized-Illustration-from-Adobe-Stock-for-ITC-Post-on-AI-in-Game-Development-scaled.jpeg',
    },
    {
        title: 'Music',
        imgUrl: 'https://img.freepik.com/free-photo/acoustic-guitar-close-up-beautiful-colored-background_169016-3530.jpg',
    },
    {
        title: 'Photography',
        imgUrl: 'https://cdn.pixabay.com/photo/2014/02/02/17/40/photographs-256888_1280.jpg',
    },
    {
        title: 'Application Development',
        imgUrl: 'https://assets.entrepreneur.com/content/3x2/2000/20190612193425-GettyImages-1066987316-crop.jpeg?crop=16:9',
    },
    {
        title: 'Animation',
        imgUrl: 'https://assets-prd.ignimgs.com/2022/03/28/36190303pixar-blogrolledit2-1648234304315-1648499015772.jpg'
    },
    {
        title: 'Content Writing',
        imgUrl: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80',
    },
    {
        title: 'Logo Design',
        imgUrl: 'https://blog.placeit.net/wp-content/uploads/2022/05/Famous-Logos-and-What-You-Can-Learn-from-Them.png',
    },
    {
        title: 'Voice Over',
        imgUrl: 'https://i.pinimg.com/736x/7d/d9/c2/7dd9c2ded4abab02c41b261d6b06f3ba.jpg',
    }
]

const categories = [
    {
        name: 'Category 1',
        imageUrl: 'url1',
    }
];

const gigs = [
    {
        name: 'gig1',
        price: 'price1',
        imageUrl: 'image1',
        description: 'gig1 description',
        category: categories[0],
    }
];

const subCategories = [
    {
        name: 'sub1',
        imageUrl: 'url11',
        category: categories[0],
    }
];

export {
    navLinks,
    carouselLinks,
    categories,
    subCategories,
    gigs
}
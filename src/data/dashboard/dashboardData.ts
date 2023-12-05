import type { recentTrans, productPerformanceType, productsCards } from '@/types/dashboard/index';

/*--Recent Transaction--*/
const recentTransaction: recentTrans[] = [
    {
        title: '09:30 am',
        subtitle: 'Pago recibido de Rafael Molina de $385.90',
        textcolor: 'primary',
        boldtext: false,
        line: true,
        link: '',
        url: ''
    },
    {
        title: '10:00 am',
        subtitle: 'Nueva venta registrada',
        textcolor: 'secondary',
        boldtext: true,
        line: true,
        link: '#ML-3467',
        url: ''
    },
    {
        title: '12:00 am',
        subtitle: 'El pago se hizo de $64.95 a Juan Peñaloza',
        textcolor: 'success',
        boldtext: false,
        line: true,
        link: '',
        url: ''
    },
    {
        title: '09:30 am',
        subtitle: 'Nueva venta registrada',
        textcolor: 'warning',
        boldtext: true,
        line: true,
        link: '#ML-3467',
        url: ''
    },
    {
        title: '09:30 am',
        subtitle: 'Nueva llegada registrada',
        textcolor: 'error',
        boldtext: true,
        line: true,
        link: '',
        url: ''
    },
    {
        title: '12:00 am',
        subtitle: 'Pago recibido',
        textcolor: 'success',
        boldtext: false,
        line: false,
        link: '',
        url: ''
    },
]

/*Basic Table 1*/
const productPerformance: productPerformanceType[] = [
    {
        id: 1,
        name: 'Alberto Tordecilla',
        post: 'Web Designer',
        pname: 'Elite Admin',
        status: 'Low',
        statuscolor: 'primary',
        budget: '$3.9'
    },
    {
        id: 2,
        name: 'Carlos Baute D.',
        post: 'Project Manager',
        pname: 'Real Homes WP Theme',
        status: 'Medium',
        statuscolor: 'secondary',
        budget: '$24.5k'
    },
    {
        id: 3,
        name: 'Melina Muñoz',
        post: 'Project Manager',
        pname: 'MedicalPro WP Theme',
        status: 'High',
        statuscolor: 'error',
        budget: '$12.8k'
    },
    {
        id: 4,
        name: 'Sebastian Osorio',
        post: 'Frontend Engineer',
        pname: 'Hosting Press HTML',
        status: 'Critical',
        statuscolor: 'success',
        budget: '$2.4k'
    },
    {
        id: 5,
        name: 'Jorge Romero',
        post: 'Web Designer',
        pname: 'Hosting Press HTML',
        status: 'Critical',
        statuscolor: 'indigo',
        budget: '$5.4k'
    }

];

/*--Products Cards--*/
import proimg1 from '@/assets/images/products/s4.jpg';
import proimg2 from '@/assets/images/products/s5.jpg';
import proimg3 from '@/assets/images/products/s7.jpg';
import proimg4 from '@/assets/images/products/s11.jpg';
const productsCard: productsCards[] = [
    {
        title: 'Boat Headphone',
        link: '/',
        photo: proimg1,
        salesPrice: 375,
        price: 285,
        rating: 4
    },
    {
        title: 'MacBook Air Pro',
        link: '/',
        photo: proimg2,
        salesPrice: 650,
        price: 900,
        rating: 5
    },
    {
        title: 'Vestido rojo con válvulas',
        link: '/',
        photo: proimg3,
        salesPrice: 150,
        price: 200,
        rating: 3
    },
    {
        title: 'Lindo osito de peluche suave',
        link: '/',
        photo: proimg4,
        salesPrice: 285,
        price: 345,
        rating: 2
    }
];


export { recentTransaction, productPerformance, productsCard }
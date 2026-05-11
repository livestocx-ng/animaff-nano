import { IconCpu, IconLeaf, IconTruckDelivery, IconUsers } from '@tabler/icons-react';
import { Sponsor } from '../types';

interface ProductDisplayType {
  title: string;
  value: 'RECOMMENDED' | 'POPULAR' | 'NEAR_YOU';
}

export const productDisplayTypes: ProductDisplayType[] = [
  {
    title: 'Recommended',
    value: 'RECOMMENDED',
  },
  {
    title: 'Popular',
    value: 'POPULAR',
  },
  {
    title: 'Near You',
    value: 'NEAR_YOU',
  },
];

export const navLinks = [
  // { link: '/#technology', label: 'Technology', target: '' },
  // { link: '/#services', label: 'Platform', target: '' },
  // { link: '/#impact', label: 'Impact', target: '' },
  // { link: '/#traction', label: 'Research', target: '' },
  { link: '/about-us', label: 'About', target: '' },
  { link: '/team', label: 'Team', target: '' },
  { link: '/contact-us', label: 'Contact', target: '' },
];

export const platformFaqs = [
  {
    value: 'What is Animaff Nano?',
    description:
      'Animaff Nano is a nanotechnology-driven company that develops climate-resilient livestock infrastructure. We use advanced radiative cooling and phase-change materials to passively regulate farm temperatures, reducing heat stress and improving productivity.',
  },
  {
    value: 'How does the cooling technology work?',
    description:
      'Our system uses radiative cooling coatings that reflect up to 99% of solar radiation and emit heat as infrared radiation. Combined with phase-change materials that absorb heat during the day and release it at night, it creates a self-regulating thermal environment without needing electricity.',
  },
  {
    value: 'Do I need electricity to run the system?',
    description:
      'No. Our cooling systems are entirely passive. They are designed to be retrofit-ready and work independently of energy input, making them cost-effective and reliable even in remote areas or during power outages.',
  },
  {
    value: 'What are the benefits for livestock farmers?',
    description:
      'By reducing indoor temperatures by several degrees, our technology helps prevent heat stress, which is a major cause of reduced milk yield, decreased fertility, and increased mortality in livestock. This leads to more stable productivity and higher margins for farmers.',
  },
  {
    value: 'Can it be installed on existing farm structures?',
    description:
      'Yes. Our solution is designed to be retrofit-friendly. We can apply our cooling coatings and install thermally adaptive panels on existing barns, sheds, and livestock housing with minimal disruption to your operations.',
  },
  {
    value: 'Where is Animaff Nano currently available?',
    description:
      'We are currently piloting our solutions in the United States, specifically in the Grow-NY region (Finger Lakes, Central NY, Southern Tier). We also have active deployments and digital marketplace users across several countries in Africa.',
  },
  {
    value: 'How can I get started with a pilot program?',
    description:
      'If you are a livestock farmer interested in reducing heat stress on your farm, please contact us through our website or reach out to our team directly. We are actively looking for partner farms for field validation and early commercial deployment.',
  },
];

export const platformFeatures = [
  {
    title: 'Radiative Cooling',
    description:
      'Our advanced nanoparticle layers, made of aluminum oxide, reflect up to 99% of solar radiation and emit heat as infrared radiation directly into outer space, cooling structures passively.',
    icon: IconLeaf,
  },
  {
    title: 'Phase-Change Materials',
    description:
      'Vanadium oxide-based composites embedded in wall panels and insulation absorb large amounts of heat during the day and release it at night, providing self-regulating thermal protection.',
    icon: IconCpu,
  },
  {
    title: 'Passive Thermal Regulation',
    description:
      'Unlike energy-intensive fans and sprinklers, our system works without electricity or active ventilation, significantly reducing operating costs while providing consistent protection.',
    icon: IconTruckDelivery,
  },
  {
    title: 'Smart Sensing & AI',
    description:
      'Integrated sensing systems provide real-time environmental monitoring and predictive analytics, optimizing livestock health and farm productivity through data-driven insights.',
    icon: IconUsers,
  },
];

export const teamMembers = [
  {
    name: 'Oghenekevwe Emadago',
    role: 'CEO / Co-founder',
    bio: 'Award-winning nanochemist and materials scientist leading climate-smart livestock solutions for 13,000+ users across Africa and the US. Recognized globally as an O\'Shaughnessy Fellow and AfriPlastics Prize winner.',
    highlights: [
      '$100K O\'Shaughnessy Fellow',
      '£100K AfriPlastics Prize',
      'Materials Science Innovator',
    ],
    linkedin: 'https://www.linkedin.com/in/oghenekevwe-emadago/',
    image: '/images/team/team_member_1.png',
  },
  {
    name: 'Idokoh Divine',
    role: 'COO / Agricultural Economist',
    bio: 'Agricultural Economist with 5+ years driving livestock value chains and farmer engagement. Scaled adoption to 13,000+ rural farmers while managing high-impact projects funded by the EU, GIZ, and the U.S. Chamber of Commerce.',
    highlights: [
      '13,000+ Farmers Scaled',
      'EU & GIZ Project Manager',
      'Livestock Value Chain Expert',
    ],
    linkedin: 'https://www.linkedin.com/in/divine-idokoh/',
    image: '/images/team/team_member_2.jpg',
  },
  {
    name: 'Dr. Virtous Luka',
    role: 'Veterinary Research Lead',
    bio: 'Expert researcher with 7+ years of veterinary and biochemical experience, including key roles at Nigeria’s National Veterinary Research Institute. Holds a PhD in Animal Health from Wageningen University.',
    highlights: [
      'PhD Wageningen University',
      '7+ Years Veterinary Research',
      'Biochemical Systems Expert',
    ],
    linkedin: '#',
    image: '/images/team/team_member_4.jpeg',
  },
  {
    name: 'Yada Martins',
    role: 'CTO / Full-Stack AI Engineer',
    bio: 'Innovative full-stack AI engineer specializing in predictive disease and climate systems. Backed by multiple innovation awards including major GIZ contracts and UNDP grants for high-impact climate-tech infrastructure.',
    highlights: [
      '$50K GIZ Contract',
      'UNDP Youth4Climate Grant',
      'Predictive AI Specialist',
    ],
    linkedin: 'https://www.linkedin.com/in/yada-martins',
    image: '/images/team/team_member_3.jpg',
  },
  {
    name: 'Asalu Temitope',
    role: 'Lead AI Systems Engineer',
    bio: 'Expert AI engineer focusing on predictive data models and machine learning pipelines for climate-resilient agriculture. Specializes in optimizing thermal management systems through advanced IoT sensor integrations.',
    highlights: [
      'Predictive Modeling Expert',
      'IoT Data Integration',
      'AI for Agriculture',
    ],
    linkedin: 'https://www.linkedin.com/in/asalu-peter',
    image: '/images/team/team_member_5.jpeg',
  },
];

export const appFeatures = [
  {
    id: 1,
    feature: 'Initial Cost',
    custom: {
      text: 'High (design, development, hosting, domain) ₦150,000 - ₦800,000',
      positive: false,
    },
    livestocx: {
      text: 'Low (starting at ₦10,050/year)',
      positive: true,
    },
  },
  {
    id: 2,
    feature: 'Maintenance Cost',
    custom: {
      text: 'High (maintenance, hosting)',
      positive: false,
    },
    livestocx: {
      text: 'Included in subscription',
      positive: true,
    },
  },
  {
    id: 3,
    feature: 'Product Uploads',
    custom: {
      text: 'Additional setup and costs',
      positive: false,
    },
    livestocx: {
      text: 'Unlimited uploads',
      positive: true,
    },
  },
  {
    id: 4,
    feature: 'Sales Management Tools',
    custom: {
      text: 'Additional cost and integration needed',
      positive: false,
    },
    livestocx: {
      text: 'Included',
      positive: true,
    },
  },
  {
    id: 5,
    feature: 'Customer Reach',
    custom: {
      text: 'Limited (depends on SEO, marketing efforts)',
      positive: false,
    },
    livestocx: {
      text: 'High (marketplace visibility)',
      positive: true,
    },
  },
  {
    id: 6,
    feature: 'Promotion and Marketing',
    custom: {
      text: 'Requires separate strategy and additional costs',
      positive: false,
    },
    livestocx: {
      text: 'Included (weekly product promotions)',
      positive: true,
    },
  },
  {
    id: 7,
    feature: 'Analytics and Insights',
    custom: {
      text: 'Requires separate setup and additional tools',
      positive: false,
    },
    livestocx: {
      text: 'Included',
      positive: true,
    },
  },
  {
    id: 8,
    feature: 'Security and Updates',
    custom: {
      text: 'Responsibility of the business owner (time and cost-intensive)',
      positive: false,
    },
    livestocx: {
      text: 'Handled by Livestocx (regular updates and security management)',
      positive: true,
    },
  },
  {
    id: 9,
    feature: 'Customer Support',
    custom: {
      text: 'Varies, generally limited to hosting provider',
      positive: false,
    },
    livestocx: {
      text: 'Included (platform support and assistance)',
      positive: true,
    },
  },
];


export const Sponsors: Sponsor[] = [
  {
    name: 'AI Collective',
    image: '/images/sponsors/ai_collective.png',
  },
  {
    name: 'Federal Ministry of Communications, Innovation and Development Economy',
    image: '/images/sponsors/fmcide.png',
  },
  {
    name: 'National Center for Artificial Intelligence and Robotics',
    image: '/images/sponsors/ncair.png',
  },
  {
    name: 'National Information Technology Development Agency',
    image: '/images/sponsors/nitda.png',
  },
  {
    name: 'Deutsche Gesellschaft für Internationale Zusammenarbeit',
    image: '/images/sponsors/giz.jpg',
  },
  {
    name: 'Co-founded by the European Union',
    image: '/images/sponsors/eu_2.png',
  },
  {
    name: 'Agric-Business Facility for Africa',
    image: '/images/sponsors/abfa.jpg',
  },
  {
    name: 'german cooperation DEUTSCHE ZUSAMMENARBEIT',
    image: '/images/sponsors/gcd.jpg',
  },
  {
    name: 'Organisation of African, Caribbean and Pacific States (OACPS)',
    image: '/images/sponsors/oacps.jpg',
  },
];

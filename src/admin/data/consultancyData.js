import consultantAvatar1 from '../../assets/professional.png';
import consultantAvatar2 from '../../assets/people-img.png';
import consultantAvatar3 from '../../assets/left-img.jpg';
import indianFlag from '../../assets/indian-flag.svg';

const sharedProfessionals = [
  {
    id: 'suryoday-bank',
    name: 'Suryoday Bank',
    flagIcon: indianFlag,
    avatar: consultantAvatar1,
    reach: '869K Reach',
    rating: 4.5,
    ratingLabel: '4.5',
    partner: 'Partner At Wealth Elite Pvt. Ltd',
    location: 'Mumbai',
    experience: 'Experience',
    designation: 'CA',
    summary:
      'All day care treatments are valid. Get covered even with just 2 hours of hospitalization—no need to meet the 24-hour minimum requirement.',
    services: [
      {
        title: 'Consultation',
        icon: 'consultation',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        title: 'Tax Filing',
        icon: 'tax-filing',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        title: 'Support',
        icon: 'support',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    ],
  },
  {
    id: 'wealth-elite',
    name: 'Wealth Elite',
    flagIcon: indianFlag,
    avatar: consultantAvatar2,
    reach: '650K Reach',
    rating: 4.7,
    ratingLabel: '4.7',
    partner: 'Partner At Wealth Elite Pvt. Ltd',
    location: 'Delhi',
    experience: 'Experience',
    designation: 'CA',
    summary:
      'Comprehensive consultancy support that adapts to your business goals with agile experts and proven outcomes.',
    services: [
      {
        title: 'Consultation',
        icon: 'consultation',
        description:
          'Schedule a one-to-one consultation tailored to your business needs.',
      },
      {
        title: 'Planning',
        icon: 'consultation',
        description:
          'Strategic planning services to streamline your operational workflows.',
      },
      {
        title: 'Support',
        icon: 'support',
        description:
          'Ongoing support packages with dedicated account managers.',
      },
    ],
  },
  {
    id: 'jon-thomson',
    name: 'Jon Thomson',
    flagIcon: indianFlag,
    avatar: consultantAvatar3,
    reach: '480K Reach',
    rating: 4.8,
    ratingLabel: '4.8',
    partner: 'Partner At Lorem ipsum',
    location: 'Mumbai',
    experience: 'Experience',
    designation: 'CA',
    summary:
      'Expert guidance with over a decade of industry experience delivering measurable growth.',
    services: [
      {
        title: 'Consultation',
        icon: 'consultation',
        description:
          'Discuss your requirements and receive expert recommendations.',
      },
      {
        title: 'Advisory',
        icon: 'advisory',
        description:
          'Get monthly advisory reports aligned with your KPIs.',
      },
      {
        title: 'Support',
        icon: 'support',
        description:
          '24/7 support for on-demand strategic questions.',
      },
    ],
  },
];

const consultancyData = {
  legal: {
    title: 'Legal',
    filters: [
      {
        id: 'inquiry',
        label: 'Inquiry About Content',
        placeholder: 'Select',
        options: ['Contract Drafting', 'Compliance Review', 'Notice Reply'],
      },
      {
        id: 'notice-served',
        label: 'Legal Notice Served',
        placeholder: 'Select',
        options: ['Yes', 'No'],
      },
      {
        id: 'notice-serve',
        label: 'Legal Notice To Serve',
        placeholder: 'Select',
        options: ['Immediately', 'Within a week', 'Within a month'],
      },
      {
        id: 'contract',
        label: 'Contract Drafting',
        placeholder: 'Select',
        options: ['NDA', 'Service Agreement', 'Vendor Contract'],
      },
      {
        id: 'other',
        label: 'Other',
        placeholder: 'Select',
        options: ['General Consultation', 'Dispute Resolution'],
      },
    ],
    professionals: sharedProfessionals,
  },
  accounting: {
    title: 'Accounting',
    filters: [
      {
        id: 'books',
        label: "Book's",
        placeholder: 'Select',
        options: ['Monthly', 'Quarterly', 'Annually'],
      },
      {
        id: 'investments',
        label: 'Investments',
        placeholder: 'Select',
        options: ['Portfolio Review', 'Compliance', 'Advisory'],
      },
      {
        id: 'others',
        label: 'Others',
        placeholder: 'Select',
        options: ['Tax Filing', 'Payroll', 'GST'],
      },
    ],
    professionals: sharedProfessionals,
  },
  tax: {
    title: 'Tax',
    filters: [
      {
        id: 'income',
        label: 'International Income',
        placeholder: 'Select',
        options: ['Yes', 'No'],
      },
      {
        id: 'filing',
        label: 'Filing',
        placeholder: 'Select',
        options: ['Individual', 'Corporate', 'Non-profit'],
      },
      {
        id: 'audit',
        label: 'Audit',
        placeholder: 'Select',
        options: ['Internal', 'External', 'Tax'],
      },
      {
        id: 'notice',
        label: 'Notice Received',
        placeholder: 'Select',
        options: ['Yes', 'No'],
      },
      {
        id: 'other',
        label: 'Other',
        placeholder: 'Select',
        options: ['Representation', 'Advisory'],
      },
    ],
    professionals: sharedProfessionals,
  },
  multimedia: {
    title: 'Multimedia',
    filters: [
      {
        id: 'images',
        label: 'Images',
        placeholder: 'Select',
        options: ['Editing', 'Licensing', 'Optimization'],
      },
      {
        id: 'video',
        label: 'Video',
        placeholder: 'Select',
        options: ['Production', 'Post Production', 'Distribution'],
      },
      {
        id: 'editing',
        label: 'Editing',
        placeholder: 'Select',
        options: ['Short Form', 'Long Form', 'Reels'],
      },
      {
        id: 'audio',
        label: 'Audio',
        placeholder: 'Select',
        options: ['Podcast', 'Mixing', 'Mastering'],
      },
      {
        id: 'other',
        label: 'Other',
        placeholder: 'Select',
        options: ['Storyboarding', 'Content Strategy'],
      },
    ],
    professionals: sharedProfessionals,
  },
};

export default consultancyData;

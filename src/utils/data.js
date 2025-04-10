import { header } from "framer-motion/client";
import {
  aim,
  inclusion,
  leticia,
  mission,
  simonBlake,
  socialImpact,
  sustainability,
  vision,
  yemiAdefisan,
} from "../assets/images";

export const investmentBankingSubsection = {
  title: "Investment Banking",
  id: "investmentBanking",
  url: "http://coretrustinvestmentltd.com",
  sameSiteDropDownUrl: true,
  sameSiteUrl: true,
  dropdownUrl: "/solutions/investmentBanking",
  riskReportTitle: "Africa Outlook",
  riskReportSub1: "2024 Africa's Macroeconomic Performance and Outlook.",
  solutionsTitle: "Explpre some other solutions",
  bgImage:
    "https://images.pexels.com/photos/45917/pexels-photo-45917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  header: "Strategic Investment Banking Services.",
  content:
    "Our investee firm is dedicated to providing expert investment banking solutions and offers a range of services including mergers and acquisitions, capital raising, and strategic advisory.",
};
export const investmentManagementSubsection = {
  title: "Investment Management",
  id: "investmentManagement",
  url: "http://cititrustassetmgt.com",
  sameSiteDropDownUrl: true,
  sameSiteUrl: true,
  dropdownUrl: "/solutions/investmentManagement",
  riskReportTitle: "Africa Outlook",
  riskReportSub1: "2024 Africa's Macroeconomic Performance and Outlook.",
  solutionsTitle: "Explpre some other solutions",
  bgImage:
    "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  header: "Tailored Asset Management Solutions.",
  content:
    "Our Asset Management in Africa offers customized corporate banking, wealth, and fund management services designed to address the unique needs of both retail and corporate clients.",
};
export const securitiesTradingSubsection = {
  title: "Securities Trading",
  id: "securitiesTrading",
  url: "http://atlassportfolios.com",
  sameSiteDropDownUrl: true,
  sameSiteUrl: true,
  dropdownUrl: "/solutions/securitiesTrading",
  riskReportTitle: "Africa Outlook",
  riskReportSub1: "2024 Africa's Macroeconomic Performance and Outlook.",
  solutionsTitle: "Explpre some other solutions",
  bgImage:
    "https://images.pexels.com/photos/887845/pexels-photo-887845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  header: "Capital Markets & Trading Excellence.",
  content:
    "Our Trading subsidiary offers comprehensive capital markets services ranging from share trading (buy/sell), fixed income, and commodities trading. The firm also provides OTC trading and derivatives.",
};

export const aboutUsSubsection = {
  title: "About Us",
  id: "aboutUs",
  url: "",
  sameSiteDropDownUrl: true,
  sameSiteUrl: true,
  dropdownUrl: "/about",
  solutionsTitle: "Explpre some other solutions",
  bgImage:
    "https://images.pexels.com/photos/887845/pexels-photo-887845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  header: "Capital Markets & Trading Excellence.",
  content:
    "EQUISERVE is a global company focusing on transforming Africa and contributing to the sustainable development of African economies.",
};
export const leadershipSubsection = {
  title: "Leadership",
  id: "leadership",
  url: "",
  sameSiteDropDownUrl: true,
  sameSiteUrl: true,
  dropdownUrl: "/about/leadership",
  solutionsTitle: "Explpre some other solutions",
  bgImage:
    "https://images.pexels.com/photos/887845/pexels-photo-887845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  header: "Capital Markets & Trading Excellence.",
  content:
    "The experience and multi-talented team with diverse cultural backgrounds have been a major contribution to the success of Equiserve",
};
export const sustainabilitySubsection = {
  title: "Sustainability",
  id: "sustainability",
  url: "",
  sameSiteDropDownUrl: true,
  sameSiteUrl: true,
  dropdownUrl: "/about/sustainability",
  solutionsTitle: "Explpre some other solutions",
  bgImage:
    "https://images.pexels.com/photos/887845/pexels-photo-887845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  header: "Capital Markets & Trading Excellence.",
  content:
    "Equiserve goes beyond financial returns, focusing on sustainable wealth for you and the communities we serve.",
};

export const navbarData = [
  {
    title: "Company",
    url: "/company",
    id: "company",
    type: "newLink",
  },
  {
    title: "Services",
    url: "/services",
    id: "services",
    type: "newLink",
  },
  {
    title: "Investor Relations",
    url: "/investorRelations",
    id: "investorRelations",
    type: "newLink",
  },
];

export const miniNavbarData = [
  {
    title: "Solutions",
    url: "/solutions",
    id: "solutions",
    type: "navDropdown",
    subsections: [
      investmentBankingSubsection,
      investmentManagementSubsection,
      securitiesTradingSubsection,
    ],
  },
  {
    title: "Insights",
    url: "/insights",
    id: "insights",
    type: "link",
    subsections: [
      {
        title: "Investment Banking",
        url: "http://coretrustinvestmentltd.com",
      },
      {
        title: "Investment Management",
        url: "http://cititrustassetmgt.com",
      },
      {
        title: "Securities Trading",
        url: "http://atlassportfolios.com",
      },
    ],
  },
  { title: "Careers", url: "/careers", id: "careers", type: "link" },
  {
    title: "About Us",
    url: "/about",
    id: "aboutUs",
    // type: "navDropdown",
    type: "link",
    subsections: [
      {
        title: "Investment Banking",
        url: "http://coretrustinvestmentltd.com",
      },
      {
        title: "Investment Management",
        url: "http://cititrustassetmgt.com",
      },
      {
        title: "Securities Trading",
        url: "http://atlassportfolios.com",
      },
    ],
  },
];

export const subsidiaries = [
  {
    id: "nigeria",
    title: "Nigeria",
    url: null,
    icon: "twemoji:flag-nigeria",
  },
  // {
  //   id: "nigeria",
  //   title: "Nigeria",
  //   url: null,
  //   icon: "twemoji:flag-nigeria",
  //   subsections: [
  //     {
  //       title: "Investment Banking",
  //       url: "http://coretrustinvestmentltd.com",
  //     },
  //     {
  //       title: "Investment Management",
  //       url: "http://cititrustassetmgt.com",
  //     },
  //     {
  //       title: "Securities Trading",
  //       url: "http://atlassportfolios.com",
  //     },
  //   ],
  // },
  {
    id: "southAfrica",
    title: "South Africa",
    url: "http://equiserveafrica.co.za",
    icon: "twemoji:flag-south-africa",
  },
];

export const insights = [
  {
    id: 3,
    imgUrl:
      "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "South African central bank governor’s comments on rate decision",
    link: "https://www.cnbcafrica.com/2025/south-african-central-bank-governors-comments-on-rate-decision-5/",
    content:
      "Moving to consumer prices, headline inflation averaged 4.4% last year, near the middle of our target range. Inflation slowed to 3% in December, having started the year above ...",
    date: "30th of January, 2025",
  },
  {
    id: 5,
    imgUrl:
      "https://images.pexels.com/photos/17614476/pexels-photo-17614476/free-photo-of-holding-a-smartphone-with-the-threads-app-with-the-meta-platforms-logo-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:
      "Zuckerberg says Meta won’t slow down AI spend despite DeepSeek’s breakthrough",
    link: "https://www.cnbcafrica.com/2025/zuckerberg-says-meta-wont-slow-down-ai-spend-despite-deepseeks-breakthrough/",
    content:
      "Meta CEO Mark Zuckerberg on Wednesday said it’s too early to tell what impact DeepSeek’s breakthrough AI model will have on his company and the broader tech industry ...",
    date: "30th of January, 2024",
  },
  {
    id: 1,
    imgUrl:
      "https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:
      "Africa Energy Summit, leaders commit to energy transformation with more than $50billion backing from global partners",
    link: "https://www.afdb.org/en/news-and-events/press-releases/africa-energy-summit-leaders-commit-energy-transformation-more-50billion-backing-global-partners-80515",
    content:
      "Thirty African Heads of State and government today committed to concrete reforms and actions to expand access to reliable, affordable, and ...",
    date: "28th of January, 2025",
  },
  {
    id: 4,
    imgUrl:
      "https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Essentials to understanding stock market fundamentals",
    link: "https://punchng.com/essentials-to-understanding-stock-market-fundamentals/",
    content:
      "According to a report by Money Africa, the stock market is a collection of places and mediums through which investors can buy and sell...",
    date: "22nd of January, 2025",
  },
  {
    id: 6,
    imgUrl:
      "https://images.pexels.com/photos/5980743/pexels-photo-5980743.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:
      "Bitcoin soars past $109,000 ahead of possible early action on crypto by Trump",
    link: "https://abcnews.go.com/amp/US/wireStory/bitcoin-soars-past-109000-ahead-early-action-crypto-117876442?cid=alerts_cryptocurrency",
    content:
      "The price of bitcoin has surged to over $109,000 just hours ahead of President-elect Donald Trump's inauguration, as a pumped up cryptocurrency ...",
    date: "20th of January, 2025",
  },

  {
    id: 2,
    imgUrl:
      "https://images.pexels.com/photos/5671470/pexels-photo-5671470.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Equity market gains N77bn, nears N60tn capitalisation",
    link: "https://punchng.com/equity-market-gains-n77bn-nears-n60tn-capitalisation/",
    content:
      "The Nigerian equity market recorded a gain of N77bn in the past week, bringing the total market capitalisation closer to the anticipated ...",
    date: "25th of November, 2024",
  },
];

export const execs = [
  {
    id: 1,
    imgUrl: simonBlake,
    title: "Simon Blake",
    header: "Chairman",
    content:
      "Simon is a specialist adviser for owner managed business, advising on the lifecycle of a client’s business from a corporate finance and M&A (mergers and acquisitions) perspective.",
    details2:
      "This will include assessing, identifying and sourcing funding requirements, whether for organic growth, acquisition or re-financing; business valuation for both M&A activity, dispute resolution, tax purposes (share schemes, probate, restructuring); investigative services, including due diligence and forensic work.",
    details3:
      "The focus of Simon’s work is usually at the board room table, acting as lead advisor, coordinating the team involved in the transaction including others as required.",
  },
  {
    id: 2,
    imgUrl: yemiAdefisan,
    title: "Yemi Adefisan",
    header: "Director",
    direction: "left",
    content:
      "Yemi is an Investment Banker with a wide range of experience in Global Banking and Markets, Research, and Mergers and Acquisitions across Africa.",
    details2:
      "Yemi has over 23 years of commercial and investment banking experience and has been involved in listing and raising capital across Africa. He is a board member of various Investment firms and a bank in the UK, US, South Africa, and Nigeria.",
    details3:
      "Yemi holds a bachelor’s degree in Business Management with Finance and an MSc in Finance and Investment Management from both Edinburgh Napier University and the University of Salford, UK respectively.",
  },
  {
    id: 3,
    title: "Leticia Du Toit",
    header: "Director",
    imgUrl: leticia,
    content:
      "Leticia is a Chartered Accountant and Tax Practitioner and a senior consultant  managing clients across Southern Africa and Pacific Asia.",
    details2:
      "Before joining Makosi LLP, she was a partner at Bentich Limited where she advised clients on Accounting Services ranging from the compilation of financial statements by IFRS and IFRS for SMEs, Tax related matters.",
    details3:
      "Leticia is also widely known for her sound governance knowledge and compliance Leticia obtained her First and Second degrees in Accounting from the University of South Africa.",
  },
];

export const productsAndServicesArray = [
  {
    id: 1,
    subsections: investmentBankingSubsection,
    imgUrl:
      "https://images.pexels.com/photos/45917/pexels-photo-45917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Investment Banking",
    header:
      "Delivering tailored financial advisory services to meet your strategic objectives.",
    link: "/solutions/investmentBanking",
    content:
      "Our investee firm is dedicated to providing expert investment banking solutions and offers a range of services including mergers and acquisitions, capital raising, and strategic advisory.",
  },
  {
    id: 2,
    imgUrl:
      "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Investment Management",
    link: "/solutions/investmentManagement",
    header:
      "Supporting businesses with comprehensive banking solutions to drive growth and stability.",
    content:
      "Our Asset Management in Africa offers customized corporate banking, wealth, and fund management services designed to address the unique needs of both retail and corporate clients.",
  },
  {
    id: 3,
    imgUrl:
      "https://images.pexels.com/photos/887845/pexels-photo-887845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Securities Trading",
    header:
      "Empowering your business with strategic capital solutions for sustainable growth.",
    link: "/solutions/securitiesTrading",
    content:
      "Our Trading subsidiary offers comprehensive capital markets services ranging from share trading (buy/sell), fixed income, and commodities trading. The firm also provides OTC trading and derivatives.",
  },
];

export const values = [
  {
    id: 1,
    imgUrl: inclusion,
    title: "Inclusion and diversity",
    link: "#",
    content:
      "We continue to build a diverse workforce and a culture of inclusion and belonging. This includes making our diverse talent more visible and represented in leadership positions, talent pipelines and recruiting.",
  },
  {
    id: 2,
    imgUrl: socialImpact,
    title: "Social impact",
    link: "#",
    content:
      "We encourage colleagues to support the causes, social issues and communities that are important to them through our nonprofit partnerships, global volunteer initiatives and company match of individual charitable giving.",
  },

  {
    id: 5,
    imgUrl: sustainability,
    title: "Sustainability",
    link: "#",
    content:
      "Through our ESG commitments, we actively contribute to Marsh McLennan’s journey to net zero and carbon neutrality while promoting transparency and fostering an inclusive and equitable culture.",
  },
];
export const aimMissionVision = [
  {
    id: 1,
    imgUrl: aim,
    title: "Aim",
    link: "#",
    content:
      "To be the preferred financial partner for businesses, providing innovative banking solutions that fuel growth and financial success.",
  },
  {
    id: 2,
    imgUrl: mission,
    title: "Mission",
    link: "#",
    content:
      "To deliver comprehensive, customized financial services—ranging from capital banking to investment advisory—that empower businesses to navigate challenges and seize opportunities.",
  },

  {
    id: 5,
    imgUrl: vision,
    title: "Vision",
    link: "#",
    content:
      "To redefine business banking by fostering long-term financial stability and unlocking new avenues for sustainable growth.",
  },
];

export const footerLinks = [
  {
    title: "Navigations",
    links: [
      { name: "Home", link: "/" },
      // { name: "Home", link: "#" },
      { name: "Solutions", link: "/solutions/investmentBanking" },
      { name: "Insights", link: "/insights" },
      { name: "About us", link: "/about" },
      { name: "Careers", link: "/careers" },
    ],
  },
];

export const socialMedia = [
  {
    src: "logos:linkedin-icon",
    alt: "facebook logo",
    link: "https://www.linkedin.com/company/101515597/admin/feed/posts/",
  },
  {
    src: "hugeicons:new-twitter-rectangle",
    alt: "twitter logo",
    link: "https://twitter.com/equiservegrp",
  },
];

export const leftSideMenuLinks = [
  { id: "Projects", title: "Projects", label: "Projects", link: "" },
  { id: "AboutUs", title: "About Us", label: "About Us", link: "/about" },
  { id: "Awards", title: "Awards", label: "Awards", link: "" },
  {
    id: "Testimonials",
    title: "Testimonials",
    label: "Testimonials",
    link: "",
  },
  {
    id: "Corporate Social Responsibility",
    title: "Corporate Social Responsibility",
    label: "Corporate Social Responsibility",
    link: "",
  },
  { id: "Gallery", title: "Gallery", label: "Gallery", link: "" },
  { id: "Contact", title: "Contact", label: "Contact", link: "/contact" },
  {
    id: "Join Our Team",
    title: "Join Our Team",
    label: "Join Our Team",
    link: "",
  },
];

export const rightSideMenuLinks = [
  {
    id: "RealEstate",
    title: "Real Estate",
    label: "Real Estate",
    link: "/services",
  },
  {
    id: "LogisticsWarehousingFulfillment",
    title: "Logistics, Warehousing & Fulfillment",
    label: "Logistics, Warehousing & Fulfillment",
    link: "",
  },
  { id: "Hospitality", title: "Hospitality", label: "Hospitality", link: "" },
  {
    id: "FinancialServices",
    title: "Financial Services",
    label: "Financial Services",
    link: "",
  },
  {
    id: "FacilitiesManagement",
    title: "Facilities Management",
    label: "Facilities Management",
    link: "",
  },
  {
    id: "TechHub",
    title: "Tech Hub/Co-Working Cafe",
    label: "Tech Hub/Co-Working Cafe",
    link: "",
  },
];

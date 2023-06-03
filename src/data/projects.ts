// TECHS

const TYPESCRIPT =
  "https://res.cloudinary.com/dles2mycv/image/upload/v1664730391/ts_js_1_ielib3.png";
const JAVASCRIPT =
  "https://res.cloudinary.com/dles2mycv/image/upload/v1664730392/ts_js_2_q5s8yu.png";
const CHAKRA_UI =
  "https://res.cloudinary.com/dles2mycv/image/upload/v1664730392/chakra_ui_1_nkslja.png";
const REACT =
  "https://res.cloudinary.com/dles2mycv/image/upload/v1664730391/react-1024x1024_1_n1jskz.png";
const RAILS =
  "https://res.cloudinary.com/dles2mycv/image/upload/v1664730391/Rails_2_cldify.png";
const MONGO_DB =
  "https://res.cloudinary.com/dles2mycv/image/upload/v1664730391/MongoDB_1_ehzofw.png";
const NODE_JS =
  "https://res.cloudinary.com/dles2mycv/image/upload/v1664730391/node-js_1_afe3uw.png";
const CSS =
  "https://res.cloudinary.com/dles2mycv/image/upload/v1664730391/htmlcss_1_zjcphr.png";
const HTML =
  "https://res.cloudinary.com/dles2mycv/image/upload/v1664730391/htmlcss_2_enlzgw.png";
const FIREBASE =
  "https://res.cloudinary.com/dles2mycv/image/upload/v1664730391/firebase_1_zz5ha6.png";
const SQL_LITE =
  "https://res.cloudinary.com/dles2mycv/image/upload/v1664751098/SQLite_Vector_logo-768x529_1_uy4yhv.png";

const projects: IProject[] = [
  {
    name: "Once",
    desc: "A Transaction checkout API",
    image:
      "https://res.cloudinary.com/dles2mycv/image/upload/v1667000189/Group_10_fulgo6.png",
    links: {
      github: "https://github.com/Owoade/once",
      live: "https://once-checkout.vercel.app/docs",
    },
    category: "Backend",
    technologies: [TYPESCRIPT, NODE_JS],
  },
  {
    name: "Instagram clone",
    desc: "Darkmode Instagram",
    image:
      "https://res.cloudinary.com/dles2mycv/image/upload/v1664726642/instagram-clone_group_vffacv.png",
    links: {
      live: "https://instagram-flax.vercel.app/",
      github: "https://github.com/Owoade/instagram-clone",
    },
    category: "Frontend",
    technologies: [REACT, CHAKRA_UI],
  },
  {
    name: "Quickteller dashboard",
    image:
      "https://res.cloudinary.com/dles2mycv/image/upload/v1664726637/quickteller-group_qovmf0.png",
    desc: "A revamp of the existing one",
    links: {
      live: "https://quickteller.vercel.app/",
      github: "https://github.com/Owoade/quickteller-dashboard-redesign",
    },
    category: "Frontend",
    technologies: [TYPESCRIPT, REACT, CHAKRA_UI],
  },
  {
    name: "Lanre Malumi",
    desc: "A designer's portfolio",
    image:
      "https://res.cloudinary.com/dles2mycv/image/upload/v1664726642/malumi-portfolio-group_opb4ng.png",
    links: {
      live: "http://lanremalumi.netlify.app/",
      github: "https://github.com/Owoade/codes/tree/master/11",
    },
    category: "Frontend",
    technologies: [HTML, CSS, JAVASCRIPT],
  },
  {
    name: "Arvo club",
    desc: "a club management app",
    image:
      "https://res.cloudinary.com/dles2mycv/image/upload/v1664726643/Group_1_f6uybj.png",
    links: {
      github: "https://github.com/Owoade/arvo-club",
      live: "https://arvo-club.vercel.app/",
    },
    category: "Fullstack",
    technologies: [TYPESCRIPT, REACT, NODE_JS, FIREBASE, MONGO_DB],
  },
  {
    name: "sms360",
    desc: "a stock management app",
    image:
      "https://res.cloudinary.com/dles2mycv/image/upload/v1664726631/sms-group_cl8cqj.png",
    links: {
      github: "https://github.com/Owoade/sms360",
      live: "https://sms360.vercel.app/",
    },
    category: "Fullstack",
    technologies: [REACT, FIREBASE],
  },
  {
    name: "Squiz app",
    desc: "A quiz app for scholars",
    image:
      "https://res.cloudinary.com/dles2mycv/image/upload/v1664726629/squiz_group_cyqawv.png",
    links: {
      live: "https://quiz-app-livid-zeta.vercel.app/",
    },
    category: "Fullstack",
    technologies: [TYPESCRIPT, REACT, NODE_JS, FIREBASE, MONGO_DB],
  },
  {
    name: "Localbased",
    desc: "A cli tool for REST API",
    image:
      "https://res.cloudinary.com/dles2mycv/image/upload/v1664726628/localbased_group_tmeosd.png",
    links: {
      live: "https://www.npmjs.com/package/localbased",
      github: "https://github.com/Owoade/localbased",
    },
    category: "Backend",
    technologies: [TYPESCRIPT, NODE_JS],
  },
  {
    name: "Rails proxy",
    desc: "a reverse proxy with Rails",
    image:
      "https://res.cloudinary.com/dles2mycv/image/upload/v1664726635/rails_proxy_group_pqv1ty.png",
    links: {
      github: "https://github.com/Owoade/rails-proxy",
    },
    category: "Backend",
    technologies: [RAILS, SQL_LITE],
  },
  {
    name: "Template generator",
    desc: "A generator for MVC boilerplates",
    image:
      "https://res.cloudinary.com/dles2mycv/image/upload/v1664726641/template_generator_group_gh47h3.png",
    links: {
      github: "https://github.com/Owoade/CLI-BOX/tree/main/template-generator",
    },
    category: "Backend",
    technologies: [JAVASCRIPT, NODE_JS],
  },
];

export default projects;

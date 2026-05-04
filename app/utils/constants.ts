export const ARTICLE_PER_PAGE = 6;

const PRODUCTION_DOMAIN = "blog-next-2oec12mjb-ali1assalemgmailcoms-projects.vercel.app";
const DEVELOPMENT_DOMAIN = "http://localhost:3000";
//const PRODUCTION_DOMAIN = "https://cloud-hosting-project-course.vercel.app";

export const DOMAIN = process.env.NODE_ENV === 'production' 
    ? PRODUCTION_DOMAIN
    : DEVELOPMENT_DOMAIN;
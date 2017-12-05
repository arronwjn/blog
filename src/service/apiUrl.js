import { env,developer } from '../config/apiConfig';

const domain = env.domain

// const ROOT_URL = `${domain}`;
const ROOT_URL = `${domain}/`;


export const API_URL = {
  GET_ARTICLE_DETAILS : {
      domain : ROOT_URL,
      apiUrl : '/public/portal/apiarticle/get_article_details',
      author : '王超',
      fetchUrl : ROOT_URL+'/public/portal/apiarticle/get_article_details',
      remark : '文章详情',
      method : 'POST',
      // tableName : 'ez_store',
  },
  GET_ACTITY_DETAILS : {
    domain : ROOT_URL,
    apiUrl : '/public/portal/apiarticle/get_actity_details',
    author : '王超',
    fetchUrl : ROOT_URL+'/public/portal/apiarticle/get_actity_details',
    remark : '活动详情',
    method : 'POST',
  },
  GETTOPICINFO : {
    domain : ROOT_URL,
    apiUrl : '/public/group/group/getTopicInfo',
    author : '王超',
    fetchUrl : ROOT_URL+'/public/group/group/getTopicInfo',
    remark : '话题详情',
    method : 'POST',
  },
}

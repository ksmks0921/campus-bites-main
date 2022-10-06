import basicInfo from "./basicInfo.js";
import servers  from './servers.js'
import tags  from './tags.js'
import components  from './components.js'
import todos  from './todos/index.js'
import users  from './users/index.js'
import managers  from './managers/index.js'
const index = {
    ...basicInfo,
    ...servers,
    ...components,
    ...users,
    ...tags,
    ...managers,

    
  };
export default index




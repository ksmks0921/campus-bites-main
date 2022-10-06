import LoginManager from './login-user.js'
import RegisterManger from './register-user.js'

import LoginUser from '../users/login-user.js'
import RegisterUser from '../users/register-user.js'
const managerPaths = {
    paths:{
        // '/api/users':{
        //     ...RegisterUser
        // },
        '/api/users':{
            ...RegisterUser
        },
        '/api/users/login':{
            ...LoginUser,
        },
        '/api/managers/login':{
            ...LoginManager,
        }
    }
}

export default managerPaths;
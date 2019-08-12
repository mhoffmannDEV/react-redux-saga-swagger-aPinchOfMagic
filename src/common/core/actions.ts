import actionCreatorFactory from 'typescript-fsa'


const httpRequestActionCreator = actionCreatorFactory('HTTP_REQUEST')

export const userLogin = httpRequestActionCreator.async<any, any, any>('USER_LOGIN')

import axios, { AxiosInstance } from 'axios'

import { ILocalStorageUtil, useLocalStorageUtil } from '@/library/helpers/local-storage.util'

import { authentication } from './services/auth.service'
import { administration } from './services/admin.service'

export const TOKEN_ID = 'example-nest-api-token'
const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
  headers: { ['Content-Type']: 'application/json' }
})

export class LocalhostAPI {
  private static $token: ILocalStorageUtil = useLocalStorageUtil(TOKEN_ID)

  public static authentication = new authentication(instance, this.$token)
  public static administration = new administration(instance, this.$token)
}

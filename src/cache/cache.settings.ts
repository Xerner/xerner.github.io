import { IHttpCacheSettings, ISerializedHttpCacheItem } from "common/angular/services";
import cache from './cache.json'

export const cacheSettings: IHttpCacheSettings = {
  verbose: true,
}

export const preloadedCache: ISerializedHttpCacheItem[] = cache as ISerializedHttpCacheItem[]

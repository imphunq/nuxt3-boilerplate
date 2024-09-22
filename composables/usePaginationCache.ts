const cache = new Map<string, string[]>()

export const usePaginationCache = async (
  key: string,
  fetchFn: Function,
  ttl: number = 1000 * 60 * 5
) => {
  if (cache.has(key)) {
    return cache.get(key)
  }

  const data = await fetchFn()
  cache.set(key, data)

  setTimeout(() => {
    cache.delete(key)
  }, ttl)

  return data
}

export const clearCacheStartWith = (key: string) => {
  cache.forEach((value, cacheKey) => {
    if (cacheKey.startsWith(key)) {
      cache.delete(cacheKey)
    }
  })
}

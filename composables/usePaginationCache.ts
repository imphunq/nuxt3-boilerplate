const cache = new Map<string, string[]>()

export const usePaginationCache = async (key: string, fetchFn: Function) => {
  if (cache.has(key)) {
    return cache.get(key)
  }

  const data = await fetchFn()
  cache.set(key, data)

  return data
}

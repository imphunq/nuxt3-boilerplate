export const useRefetch = (fetchFn: () => void) => {
  const route = useRoute()

  watch(
    () => route.fullPath,
    () => {
      fetchFn();
    },
    { immediate: true }
  );
};

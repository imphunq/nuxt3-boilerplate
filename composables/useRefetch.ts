export const useRefetch = (fetchFn: () => void) => {
  const route = useRoute()

  watch(
    () => route.query,
    () => {
      fetchFn();
    },
    { immediate: true }
  );
};

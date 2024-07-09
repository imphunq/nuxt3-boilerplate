export function useFlowbite(callback: (flowbite: any) => void) {
  console.log(1111, import.meta.client)
  if (import.meta.client) {
    import('flowbite').then((flowbite) => {
      callback(flowbite)
    });
  }
}

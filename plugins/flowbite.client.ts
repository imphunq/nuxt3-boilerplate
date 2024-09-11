import { initFlowbite } from 'flowbite';
export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.mixin({
  //   mounted () {
  //     if (import.meta.server) {
  //       console.log(1111)
  //       // useFlowbite(() => {
  //         initFlowbite();
  //       // })
  //     }
  //   }
  // });

  nuxtApp.hook('page:finish', () => {
    initFlowbite();
  })
});

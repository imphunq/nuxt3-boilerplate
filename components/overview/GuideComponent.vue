<template>
  <div class="p-6 border border-solid border-gray-200 rounded-lg">
    <div class="flex items-center justify-between">
      <span>Guide</span>

      <nuxt-link
        class="text-sm text-blue-500 flex items-center"
        to="/"
      >
        <span class="mr-2">Go to Knowledge Center</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 20 20"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        /></svg>
      </nuxt-link>
    </div>

    <div class="flex items-stretch justify-between">
      <div class="w-1/3 py-[15px] px-[20px] flex items-start gap-4 cursor-pointer hover:shadow-xl rounded-lg">
        <div class="product-tour-icon" />
        <div class="flex flex-col">
          <span class="text-sm">Product Tour</span>

          <p class="text-xs w-6/12 mt-[5px]">
            Start Host Design tour. The easiest way to get design feedback right on the design itself.
          </p>
        </div>
      </div>

      <div class="w-1/3 py-[15px] px-[20px] flex items-start gap-4 cursor-pointer hover:shadow-xl rounded-lg">
        <div class="usability-icon" />
        <div class="flex flex-col">
          <span class="text-sm">Usability Testing</span>

          <p class="text-xs w-6/12 mt-[5px]">
            Analyze how users interact with your interfaces so you can tweak and improve your designs.
          </p>
        </div>
      </div>

      <div class="w-1/3 py-[15px] px-[20px] flex items-start gap-4 cursor-pointer hover:shadow-xl rounded-lg">
        <div class="guide-icon" />
        <div class="flex flex-col">
          <span class="text-sm">Best Practices Guide</span>

          <p class="text-xs w-6/12 mt-[5px]">
            Learn how you can use Host Design the best way.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-tour-icon {
  content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAABHNCSVQICAgIfAhkiAAAATpJREFUSEvdlc1Nw0AQhd9zLnAiVECoAOiAVAAWcAgX7ApwB6SEdLCc4gNEpoSUEDqADnIjB+JhFsVgJVbYxSshMZIl29p93/ztLFEzk09mBI7q/3zfRSROry+fqn2q920KGPoKbq4vp+ngatoIaC++qfAZgXqe6IsJCHhJBheHVm8FKHrAuz7hrErTCvBw2pGOhJMHlrt8TuN4zhCd0+iYYC6MTnifT4J6XocJyv7fA0TwSuLgN/VxikB2on0s0NWy2UN4TnDPFeYE0H7+Ou2mKLpYlBkEiUtU3oC1sZLod7ZtdrUCVDAzfhyRvG1KW2uAimtNcAfyOBjA1iF6W54JaYu+dbx4RWDyohehvNG2zXSCaVf9bE4ATcFQj7r11BbVy5wAXopri/8JwN5m9mS2SUXzXpnp5Z99ABK5n9rxAb35AAAAAElFTkSuQmCC');
}

.usability-icon {
  content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAn5JREFUSEudVUFyElEQ7R6IWGQRsrFglXgCYamkSjwBeAIni1DlSjwB5ASBlVVgVbiB5AakCswScgJhNZhN4sKUlM603YM/zAz/z0T+Jimmf7/X3a/fR4g5n66cwxRhFT2oEUIOAYoSTgBT/jOzyBqkdncujkv7d6Y0fGfz+Ik9q4lAdhyB9TdspbNPOjqgDYDu2LGR8AyY8eOS/4siuCO03tTLz6S6hxMC8JMDnv9X4kgwAR3Xy4W++vkBICk5971jIQ498nJIUAHEd1oikUp8AOl52sWJri2c+AeAVYmWHkeI78x2spmSzMQH6I2cfgyjjydH+baObew9oNOTcqGFPnsPv5n6TmCVouxVbGxbuVVMbB97o0WDW3O2DcDnr99rRPTFuAOIb5FZDFk5r80AYVUE47rjRZt7/MF8FzrYHS2miPDCKE0uNb2beR5dou74pojgTeIkzZK9xN54wUNPOAyCYDU8hGuJ5A2vApG0NnYZHw+QRMDw3QdIbNGWyeWaqmDA/1d1eWTJeIhDDg35i4rl7xVuGM8C9vQ86FRUZPKfi3Q2Y8dZsSSVYQN5fZ1QZIfwfHKb+3O/vA0zoHk6+7SYlFzdWdk7TsOV0Jw3+XBlFWOnxaU216WbtW8aSXQnlKv6AFLF7/vlTDGIswczwLrVRHBdP8r7r1/ArteLsw2AshwRhmtR8f3LwiwEsBqYYzOmrP8ev8GN+qt8J0ml/gx/LptMtaGzds2TKZW4LF08EF/ni20g6zLqqL0rpwIuirxt2Whpi5uimmKuiGkf/ZWyfjEjbISUwZaxaQ80ZyKt4DMZrFoLEAwQS/aIeKHIH1qA2ZAgNTC9FSruL75eMPJoai65AAAAAElFTkSuQmCC');
}

.guide-icon {
  content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAABHNCSVQICAgIfAhkiAAAAeRJREFUSEu9lUFOwlAQhmdK0LCSGwhygbIxgRVHqBvFlXgC8AZwAvAGuFLYGE8AbiBxIx5AW09gXYkmvvGfpoUYqUAlvlVpM9/737z/H5iwxr3HJgmfEFNOfydf0iodFZpaz6Orxw4z15PD5pVC5LPhYuk47zHU+uDvbAJMJK+AD8pHhQOAn/C8mSUi5xDpsHBto2AobhFbnhhxVgKnmIvpNHnTD3n5/WwAG2tIljRjwSJ0U67uObjcRrla6ChQnzPbVhcb6O+Tn5usACaRbqlaOF2kUDeAk9prg6H2GUUTVRwphcd3M1tWq3iQ99X3oheEd9/hSxXPjX7Xd+1PkXsF4NbPoraML90KejlYDyw0RBJbMPrw/trNvr3LhFmyKbYq+4f5SbCZMXVirq0HDuTRQ6m6Z8f0OCatS1sRkIPc48g5jai+UaWqeNRzHSa5XvvyZgVwRnBcw3mFBylFm4TJZqJscnBYicxPWMiHMyp/Dkiy6bFSj5Og/xusiUOaAgckWULcYYO7mA0heBaBcCJbJYFGNWEiw+kW2kk/qm/FMm0M6wV2it9SWHz955iBR1dPnk58ja+WaYSnU1qYuGUnUcZccd+tkRjMV6tOhm7/2o4ZODx+BUdp4Nn+OQqX6Vz4/eILLHRVm2q0Yb8AAAAASUVORK5CYII=');
}
</style>

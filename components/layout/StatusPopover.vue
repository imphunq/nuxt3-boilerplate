<template>
  <div class="p-5">
    <div class="flex items-center justify-between mb-5">
      <span class="set-status font-bold">
        Set Status
      </span>

      <div class="remove-status flex items-center gap-[5px]">
        <div class="remove-icon"></div>

        <span class="text-xs">
          Remove Status
        </span>
      </div>
    </div>

    <div>
      <div class="relative mb-6">
        <div class="absolute inset-y-[12px] start-0 flex items-center ps-3.5 pointer-events-none smile-icon">
        </div>
        <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What's is going on?">
      </div>
    </div>

    <div>
      <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I'm busy</label>
      </div>

      <div class="ml-[21px]">
        <span>
          A notification will be sent to others to inform that you're not available right away.
        </span>
      </div>
    </div>

    <div class="mt-5 flex justify-end">
      <div class="set-status-btn-block flex items-center justify-between rounded-full text-white cursor-pointer" id="dropdownNewButton" data-dropdown-toggle="dropdownNew">
        <div class="new-block flex items-center">
          <span class="text-xs">
            Set Status
          </span>
        </div>
        <button type="button" class="text-white bg-blue-600 outline-none rounded-full text-sm p-2.5 text-center inline-flex items-center">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 16l-6-6h12z"></path></g></svg>
          <span class="sr-only">Icon description</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.remove-icon {
  content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAdxJREFUOE91U8152kAQndmFnE0FkSsIqcC4gijHfBiQOiAd4AogFQgJ+Hy0Oog6MCWQCsI5lvZlZuPFGznRhY/dnfczb4ap9xW73YTBCwJNmCnRaxA1DNTOtWWe5+e4hMOfoiiu2A4f5fVHJmydoZrawYkGbWJhEpDLAPpg2Hydz6fbUOcBfLEZfhfGH657zvosFxJV57g2zMsA4gHKatcQ8Xkxv0v7lt5YPBzG3KKBQZrPZg17z4IK95wos4AdmcwmlhkUStG9FNVluVuB+Sab391yWe7FD86LxWypbFV1yEAomDhXkFd7YNe1EyXRM2OHP11nr7ms9ifHyFROkBtACFiCOGOJJRSHN2pbSGoFgCLl+ZdT7Leq9lJMaznTxo77jRUbG7k7/wFg3MYKolRG8uh9sBMTSF0tCo8CoFLMNjSt79nad2nck1cL3vqSVaoj+qQdfYn0qL+x59ATKfisKRQSpenwJNZG/MJ4CrlKrCm1bdP3HJ/7uQE1ktzKD5IyOGCDAU/y6dQr+N/nY2eMg8LLLgQQNrx27a9vbxToBHZYy56MnDVZILoA+J2QqTSglYz1jW6gHIkaJAQe+80E7mUjNzH4XwBBdlE8JNZ2KYAr31AjQP/oi979BpnARmk+8sTzAAAAAElFTkSuQmCC');
}

.remove-status {
  color: #a1a2a4;
}

.set-status {
  font-size: max(12px, 0.7vw);
}

.smile-icon {
  content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABHNCSVQICAgIfAhkiAAAAXBJREFUOE+Fk71NxEAQRrkOrgNMA/wWgC9EBBw5EiYmgQowDXCIBjhCIugAlwApCSYjPJEQwntm11r5zvJIT17Pzzfj9e5obdnGuE5hCtvg+wIqeIaHbsmo4yh4n8EnzOE1ieesjf/CWRBtwqmIRXa/CALLM/57SrgKQta0Ina4Bbul3fuEzHuBHfOdxG/+gMuBCbqCTnSkkCKOL1lf2x6/zWsoFKkCKmvrcA438JUIbLI+AffjJ/jdgrEi/j43VDFtFx7hEN4TkQPWd7AH38HvF0wV8ZdNEpGkbnCZk1GummSwMkloJ/EU1qBDK2ELjleomWd8HmI+F05SgJu1EQJx159497e7Zxl4ks3xKmjxaEziibWDqnbRTHTn98O7D++M0yqqGTcvjyI5L55A74Ri0exmYpX4XBZBxLrmxEYzcA8lXHeKUtF4bxoBA91bbFcn8cC54U5Qg37xPL2Bn9Xesa5I7GiyZMlEFtmgLY6xPyuqTwJ14aa2AAAAAElFTkSuQmCC');
}

.set-status-btn-block {
  background-color: #4280eb;
  width: max(120px, 6.5vw);
  height: max(30px, 2vw);
  color: #fff;
  padding-left: max(10px, 1vw);
}
</style>

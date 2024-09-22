<template>
  <div>
    <el-dialog v-model="dialogVisible" width="600" center align-center>
      <div class="w-3/5 mx-auto text-center">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA8CAYAAADVPrJMAAAABHNCSVQICAgIfAhkiAAABSlJREFUaEPtmklsG1UYx//vOV7GS4zdhLRBWVAa5VCqBA7coEXixKmpBKQSElXFjSAFpBJxQA3lEg5EIFXiBIWWpIQipQe2Q6GCAyCKSmhAVUyapVkwUfbEiZfEw3tjjzWOx55xXFvjMJ9keaT53pv3+7a3zJClpSURJZJIJILx8fESPQ1wu907ra2tFbsfSEzoIvvA9HSeBq6pqeHhCm64mZkZ1NXVwWazYX19HfPz82hqapJ6XFhYwOrqqnRd9uFdX18Pn8+Hra0tBAIBtLS0wOFwgKUnpqenwXJXAp2dnZXA9wV0VVUVXC4XYrEY5ubmUFtbC6vVio2NDSwuLqKhoUECXV5extra2v6AzjMbTGhzymIWICwHSrY44fnIK22pxG63h5qbm90ZnmYlv2TQoihK1bdUYrFYZlgBrDOheXibni5y3JnhXWQD8+7NnFYY2czpYkfcvsnpcDiMeDyuy17b29upHZCeBh6PR9pk7FWKltN8P8th9AhfkQWDQT2qko7f75d+exUT+n4Wsv+lp3lx0is890OhkF51UEql316laOGdz4D2TfU2oTUsUFaeJoTA6XTm41RV3Vg0xk4uZwvux2KhcLoEzX4KymkOXcgiQR5dNBrF5MQ9zcFqKfDiVunNOBDJaGZC5ztPm57Wir0c983wLsB4JctpQdCullocfMMxO/OPlprmfcqrt9OhqVdQIdPsXadCWc3TOpk01e4HtHVqFNbpMVjvBaTn2X7/FiIBthuOIPbwIwg9cyY1jrL2NAlvQvjtBoSb34GE018W0Imf0o1NKxA9egxrp7pBqmvL87Cfe9bz9WXQlUXVSMqAlrUYfKije8X9/Cu+3Q0NfTBov/0zPF9dypk2WaGTreKuBz+0DNx+SdmJYaH1AHMQLWiusxvckNB0ZQH+D97ULIx6oaWOvDUd5NIfg/zSkNDe/j5Wnf9WhxbYbm9rM3VP6enY4cdgHbul2k60uVbo1btSfhsOmhcu78B76sAPNYK+fB7itYsQf70h6cjQay+cQ/Do0zg4ch2Vn76l2l4Oc8NBe778BPaRXzIHnQSGkDgHF69ckMA5tAwsN8oGLtrdQfr52CHDQR/oew0kkvninnaeB5qOpBmDg69bKyQPK8VO4mh4/Zh6tLh8jYaCzhnaLJdp59tAbWMaTGB0LAO47p0O0MUsa/zKg6+WDzRHUwFXQnMP5wROTl+GghZufg/X9au5pyoOfrYP8FVLejJ0BSVo7H02u4eTvYpO/w8cWpq7SiFswyGwbzvbsj3LfutHl+ub/pwvr8jjT4Gc6kx1ofR0rsotNxCdVdfY/sQ4InadOB4HTcxFKrIbWOlpWV0TnOe0cZATI9npOqn6nkgNGHOTmNqIIiKmv/rJCV5Z84QBoduH2Zop8UmvQujZd9MrNwOOX2BL1X//wnT3Z2ngWedpqyNMv5gUDAe93XXyNBvUxYwIVFZuGZgtR/niJH7gUAo8l5d5PtMrf7YbDprl9QMsr5m3kfiWWSkMnLSfgTj0UWr9LS9DOfjmk8/BPfS+asaKhII4vY1k4M6U4aD5iBn4CQY+pKfe6NlaSv24q3tJ/8gb/NKQ0ImC1v4xG96LWuB6oEWH9y4dHD0s92VYaL3gWtDyJkNpPENDJ6ewHvZ/LpvHc0GLDt8wHbzz6O62hodO5vjxHZAeApKxdVKDZgcGq8Th6SGXh1U35mUBLXuKFbi2OMhptnppkw0gQ3NQUNsEsdt65WOhbNFRVtBaRU3v/f8AQseHXt7lIMQAAAAASUVORK5CYII="
          alt="" class="mb-5 mx-auto">
        <span class="text-lg font-black">
          Delete {{ type }} - {{ title }}
        </span>
        <p class="text-gray-500 text-sm my-5">
          <template v-if="type === 'screen'">
            Once you delete your screen, it can't be undone. All comments and hotspots in this screen will be deleted.
          </template>
          <template v-else-if="type === 'project'">
            Once you delete your project, it can't be undone. All screens, comments, and hotspots in this project will be deleted.
          </template>
          <template v-else-if="type === 'share'">
            Once you delete your share link, it can't be undone. The link will be deleted permanently.
          </template>
        </p>
      </div>
      <template #footer>
        <div class="dialog-footer text-center">
          <el-button @click="close" size="large">Cancel</el-button>
          <el-button type="danger" size="large" @click="deleteItem">
            Delete <span class="capitalize ml-1">{{ type }}</span>
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  type: string
}

const emit = defineEmits(['delete'])

const props = withDefaults(defineProps<Props>(), {})

const dialogVisible = ref<boolean>(false)
const title = ref<string>('')

const close = () => {
  dialogVisible.value = false
}

const open = (titleName: string) => {
  dialogVisible.value = true

  title.value = titleName
}

const deleteItem = () => {
  emit('delete')
}

defineExpose({
  open,
  close
})
</script>

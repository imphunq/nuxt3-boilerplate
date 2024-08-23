<template>
  <div class="empty-screen w-3/5 m-auto">
    <span class="flex text-3xl justify-center my-8">
      <span class="mr-1">Add screens to</span>
      <span class="text-black font-bold">{{ project_title }}</span>
    </span>

    <div class="flex items-stretch gap-5 mb-5">
      <el-card class="w-1/2 empty-screen__card">
        <div class="flex flex-col justify-between h-full">
          <div class="mb-8">
            <div class="empty-screen__upload-icon flex items-center justify-center w-14 h-14 rounded-full">
              <img class="w-8 h-8" :src="UploadIcon" />
            </div>

            <p class="text-2xl font-bold text-black my-6">Upload your designs or drag and drop!</p>
            <p>Get started by adding any .PNG, .JPG, .GIF file & Video (MP4, MOV) or click Upload Image button to browse from your computer.</p>
          </div>

          <button
            type="button"
            class="w-1/3 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="open()"
          >
            Upload Image
          </button>
        </div>
      </el-card>

      <el-card class="w-1/2 empty-screen__card">
        <div class="flex flex-col justify-between h-full">
          <div class="mb-[78px]">
            <div class="empty-screen__sync-icon flex items-center justify-center w-14 h-14 rounded-full">
              <img class="w-8 h-8" :src="SyncIcon" />
            </div>

            <p class="text-2xl font-bold text-black my-6">Sync files from</p>
            <p>Use HostDesign plugin to your favorite design tool and import all artboards directly.</p>
          </div>

          <div>
            <div>
              <span class="text-xs">Download plugin for:</span>
            </div>

            <div class="flex items-center gap-5">
              <img class="w-6 h-6" :src="Plugin1" />
              <img class="w-6 h-6" :src="Plugin2" />
              <img class="w-6 h-6" :src="Plugin3" />
            </div>
          </div>
        </div>
      </el-card>
    </div>


    <div class="flex items-center gap-5">
      <el-card class="w-1/3 empty-screen__card">
        <div class="flex items-center justify-between mb-10">
          <div>
            <p class="text-black font-semibold">Wireframe</p>
            <p class="text-xs">Create low-fidelity wireframes</p>
          </div>

          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAABHNCSVQICAgIfAhkiAAAA7pJREFUaEPtmEtrE1EUx/93Xmn6yMuktVVbH+ADERVaFFzYhTv9BoKfwUKXCoILFwX9HFL3bsRlEVxJFfEBYh/ad2KSSZN5Xc+dMWnaaNtMk4nRHCiE27n3/M5/zj333GFoU2Ntyo32BX/2Wr8My5wGYydJ/b8/EM6/Mki32fRM+i6TpCemZcO0HIQ0hWIAioYFRZKgqbKbTbbjuGOtMkZQ3SHVde9wfo9Nv8pOMvCptWwBmUIJRxJ9UGQJc6s/0EsPDsR73YfzRQNLab1V3K6Ypw7HXf+c40EFvGVEPhy74C/f5ic4Y498zG/ZFInhIVvN80kimGoZhR/HQvEOuB/l/M7pKO5XOb/z/mnFqfQE3gdw93Tc5XXspbiAjocJPOAOhg4YpDd3gd8LXJWAKIGXTAd60aZeQUKXJiOTNyFTVH3dit8srZlXNGwUSg75kMmHhOWsAxpCSKWWaqdy+wXP6CaWNgz0xzQk+lR8WtTdAI6luhoGvpEzsZIxqDfSEO9V8WHJQmaT42hCQUjZ8cr3C94wujoWev/dRLoADB9S0EWqb7MOeB1K7vfRhinOaauXuAmbO798M/TIoV05HKppoqqJjVw2XioBhrE1LxwGU2o3ecPABfCr3Gfk7KLrlC5LGFEHcSGS+iP8etZAtmBhZCBcqQzOzAz44mIleDY0AunaWM0aDQO3uI0XmXfI2lRgyUpUqubyDDdTx3GhLwmZUe0kMyiilbSnqEWKL9PvZETFqaFud8x+/hxYWPBAxcvL0t/F85DGx8A072omrGngVNrxjXZ9j6ziRmIYp3uSXkCmjbWsdzc16KFlUeKiKk4M/gZc5JFOaeQwsKsXwa5cqqRN08DF6VY+lQfVKK7HzlbUKv8QdVkvUqr0U6r8yvNtilcf6/E4pFs3wSjnm6p4NWW/EsF47FxlSHwtEKYqXvpU2zbw6n/EYgR+q3XgNuX1RzpZUxENyajWPuCzX3JuXyP6mHIZPJYMoSfslby/VvGljRLm14pIkdq9Xd7HpAgFoYmOrRXgoo7P6vOVclidAwNqBGe6h9whcVCtU8Mk1BbNUk2Oz85ulcOdOT46CqZ6cxpWVWoImjzQAW+ywDXL/5+Ki55O3Dnpa3OgZlocbxYs9+rm6yJRpt3Qqf/IldvZQGM4GPim4WA1Z1d6k6DQFbok90dlqHKdV7egAOv2s9eds+4Fg5rQ7uATJNTjoMRqhB/qKu6zNZ2PUT//lHbecVo04I9tvsKYJ9Y77QD62+g64L5e+gEm/QTLfX7kB9K9DwAAAABJRU5ErkJggg==" alt="">
        </div>

        <el-button
          size="large"
          round
          class="empty-screen__btn flex items-center gap-5"
        >
          <span class="mr-2">Wireframe</span>
          <el-icon><Right /></el-icon>
        </el-button>
      </el-card>

      <el-card class="w-1/3 empty-screen__card">
        <div class="flex items-center justify-between mb-10">
          <div>
            <p class="text-black font-semibold">Whiteboard</p>
            <p class="text-xs">Brainstorm your design ideas easily</p>
          </div>

          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAABHNCSVQICAgIfAhkiAAAA7pJREFUaEPtmEtrE1EUx/93Xmn6yMuktVVbH+ADERVaFFzYhTv9BoKfwUKXCoILFwX9HFL3bsRlEVxJFfEBYh/ad2KSSZN5Xc+dMWnaaNtMk4nRHCiE27n3/M5/zj333GFoU2Ntyo32BX/2Wr8My5wGYydJ/b8/EM6/Mki32fRM+i6TpCemZcO0HIQ0hWIAioYFRZKgqbKbTbbjuGOtMkZQ3SHVde9wfo9Nv8pOMvCptWwBmUIJRxJ9UGQJc6s/0EsPDsR73YfzRQNLab1V3K6Ypw7HXf+c40EFvGVEPhy74C/f5ic4Y498zG/ZFInhIVvN80kimGoZhR/HQvEOuB/l/M7pKO5XOb/z/mnFqfQE3gdw93Tc5XXspbiAjocJPOAOhg4YpDd3gd8LXJWAKIGXTAd60aZeQUKXJiOTNyFTVH3dit8srZlXNGwUSg75kMmHhOWsAxpCSKWWaqdy+wXP6CaWNgz0xzQk+lR8WtTdAI6luhoGvpEzsZIxqDfSEO9V8WHJQmaT42hCQUjZ8cr3C94wujoWev/dRLoADB9S0EWqb7MOeB1K7vfRhinOaauXuAmbO798M/TIoV05HKppoqqJjVw2XioBhrE1LxwGU2o3ecPABfCr3Gfk7KLrlC5LGFEHcSGS+iP8etZAtmBhZCBcqQzOzAz44mIleDY0AunaWM0aDQO3uI0XmXfI2lRgyUpUqubyDDdTx3GhLwmZUe0kMyiilbSnqEWKL9PvZETFqaFud8x+/hxYWPBAxcvL0t/F85DGx8A072omrGngVNrxjXZ9j6ziRmIYp3uSXkCmjbWsdzc16KFlUeKiKk4M/gZc5JFOaeQwsKsXwa5cqqRN08DF6VY+lQfVKK7HzlbUKv8QdVkvUqr0U6r8yvNtilcf6/E4pFs3wSjnm6p4NWW/EsF47FxlSHwtEKYqXvpU2zbw6n/EYgR+q3XgNuX1RzpZUxENyajWPuCzX3JuXyP6mHIZPJYMoSfslby/VvGljRLm14pIkdq9Xd7HpAgFoYmOrRXgoo7P6vOVclidAwNqBGe6h9whcVCtU8Mk1BbNUk2Oz85ulcOdOT46CqZ6cxpWVWoImjzQAW+ywDXL/5+Ki55O3Dnpa3OgZlocbxYs9+rm6yJRpt3Qqf/IldvZQGM4GPim4WA1Z1d6k6DQFbok90dlqHKdV7egAOv2s9eds+4Fg5rQ7uATJNTjoMRqhB/qKu6zNZ2PUT//lHbecVo04I9tvsKYJ9Y77QD62+g64L5e+gEm/QTLfX7kB9K9DwAAAABJRU5ErkJggg==" alt="">
        </div>

        <el-button
          size="large"
          round
          class="empty-screen__btn flex items-center gap-5"
        >
          <span class="mr-2">Create Whiteboard</span>
          <el-icon><Right /></el-icon>
        </el-button>
      </el-card>

      <el-card class="w-1/3 empty-screen__card">
        <div class="flex items-center justify-between mb-10">
          <div>
            <p class="text-black font-semibold">Roadmap</p>
            <p class="text-xs">Visualize each part of your design planning.</p>
          </div>

          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAABHNCSVQICAgIfAhkiAAAA7pJREFUaEPtmEtrE1EUx/93Xmn6yMuktVVbH+ADERVaFFzYhTv9BoKfwUKXCoILFwX9HFL3bsRlEVxJFfEBYh/ad2KSSZN5Xc+dMWnaaNtMk4nRHCiE27n3/M5/zj333GFoU2Ntyo32BX/2Wr8My5wGYydJ/b8/EM6/Mki32fRM+i6TpCemZcO0HIQ0hWIAioYFRZKgqbKbTbbjuGOtMkZQ3SHVde9wfo9Nv8pOMvCptWwBmUIJRxJ9UGQJc6s/0EsPDsR73YfzRQNLab1V3K6Ypw7HXf+c40EFvGVEPhy74C/f5ic4Y498zG/ZFInhIVvN80kimGoZhR/HQvEOuB/l/M7pKO5XOb/z/mnFqfQE3gdw93Tc5XXspbiAjocJPOAOhg4YpDd3gd8LXJWAKIGXTAd60aZeQUKXJiOTNyFTVH3dit8srZlXNGwUSg75kMmHhOWsAxpCSKWWaqdy+wXP6CaWNgz0xzQk+lR8WtTdAI6luhoGvpEzsZIxqDfSEO9V8WHJQmaT42hCQUjZ8cr3C94wujoWev/dRLoADB9S0EWqb7MOeB1K7vfRhinOaauXuAmbO798M/TIoV05HKppoqqJjVw2XioBhrE1LxwGU2o3ecPABfCr3Gfk7KLrlC5LGFEHcSGS+iP8etZAtmBhZCBcqQzOzAz44mIleDY0AunaWM0aDQO3uI0XmXfI2lRgyUpUqubyDDdTx3GhLwmZUe0kMyiilbSnqEWKL9PvZETFqaFud8x+/hxYWPBAxcvL0t/F85DGx8A072omrGngVNrxjXZ9j6ziRmIYp3uSXkCmjbWsdzc16KFlUeKiKk4M/gZc5JFOaeQwsKsXwa5cqqRN08DF6VY+lQfVKK7HzlbUKv8QdVkvUqr0U6r8yvNtilcf6/E4pFs3wSjnm6p4NWW/EsF47FxlSHwtEKYqXvpU2zbw6n/EYgR+q3XgNuX1RzpZUxENyajWPuCzX3JuXyP6mHIZPJYMoSfslby/VvGljRLm14pIkdq9Xd7HpAgFoYmOrRXgoo7P6vOVclidAwNqBGe6h9whcVCtU8Mk1BbNUk2Oz85ulcOdOT46CqZ6cxpWVWoImjzQAW+ywDXL/5+Ki55O3Dnpa3OgZlocbxYs9+rm6yJRpt3Qqf/IldvZQGM4GPim4WA1Z1d6k6DQFbok90dlqHKdV7egAOv2s9eds+4Fg5rQ7uATJNTjoMRqhB/qKu6zNZ2PUT//lHbecVo04I9tvsKYJ9Y77QD62+g64L5e+gEm/QTLfX7kB9K9DwAAAABJRU5ErkJggg==" alt="">
        </div>

        <el-button
          size="large"
          round
          class="empty-screen__btn flex items-center gap-5"
        >
          <span class="mr-2">Create Roadmap</span>
          <el-icon><Right /></el-icon>
        </el-button>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Right } from '@element-plus/icons-vue'
import UploadIcon from '~/assets/images/upload-icon.svg'
import SyncIcon from '~/assets/images/sync-icon.svg'
import Plugin1 from '~/assets/images/plugin1.svg'
import Plugin2 from '~/assets/images/plugin2.svg'
import Plugin3 from '~/assets/images/plugin3.svg'
import { useFileDialog } from '@vueuse/core'
import { requestUploadScreenToProject, uploadScreenToFileServer } from '~/api/projects'
import type { IUploadRequestResponse } from '~/types'

interface Props {
  project_title: string
}

const props = defineProps<Props>()

const route = useRoute()

const { id } = route.params

const { files, open, reset, onChange } = useFileDialog({
  accept: 'image/*',
})

onChange(async (files: FileList | null) => {
  if (files && files.length > 0) {
    const { data } = await requestUploadScreenToProject(id as string, files[0]);
    const response = data.value.data as IUploadRequestResponse
    const { upload_url: uploadUrl } = response

    await uploadScreenToFileServer(uploadUrl, files[0])

    await refreshNuxtData()

    ElMessage.success({
      message: 'Screen uploaded successfully',
      type: 'success',
    })
  }
})
</script>

<style lang="scss">
.empty-screen {
  &__btn {
    border-color: $color-blue;
    color: $color-blue;
  }

  &__card {
    border-radius: 15px;
  }

  &__upload-icon, &__no-abs {
    background-color: #DFEFFF;
  }

  &__sync-icon {
    background-color: #F6E5FB;
  }
}
</style>

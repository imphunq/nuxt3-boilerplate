<template>
  <div class="new-comment flex rounded-full items-center justify-center">
    <div class="new-comment__inner flex items-center justify-center w-full h-full relative">
      <div class="absolute text-xs"></div>
      <div class="w-1/2 h-1/2 new-comment__icon">
      </div>

      <div class="comment-section">
        <slot name="comment" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.new-comment {
  width: 30px;
  height: 30px;
  background-color: $color-blue;
  box-shadow: rgba(57, 109, 255, 0.5) 0px 0px 0px 6px;

  &__icon {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAABHNCSVQICAgIfAhkiAAAAGhJREFUOE9j/A8EDJSDg4yjBhEKxdEwIhRCDAzDPYwakIJAAciORwuSj0D+AiD+gCeoHjAiSwLznQOQvx9JbCOQXcDIyPiAUHjjMgjkigSgARsIGQCTx2ZQAtQV+LyCYT6KQcTajk0dAPl5UUslI3QjAAAAAElFTkSuQmCC');
    background-size: cover;
  }
}
</style>

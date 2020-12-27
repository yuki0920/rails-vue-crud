<template>
  <!-- TODO: classをprops化したい -->
  <!-- TODO: テキストのプリミティブな値をSlot化したい -->
  <div>
    <button
      type="submit"
      class="btn waves-effect waves-light"
    >
      <slot>
        デフォルトテキスト
      </slot>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'SubmitButton'
  }
</script>

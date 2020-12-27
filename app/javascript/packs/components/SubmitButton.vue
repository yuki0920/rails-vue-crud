<template>
  <!-- TODO: classをprops化したい -->
  <!-- TODO: テキストのプリミティブな値をSlot化したい -->
  <div>
    <button
      :type="type"
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
    name: 'SubmitButton',
    props: {
      type: { default: null }
    }
  }
</script>

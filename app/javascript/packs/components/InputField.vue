<template>
  <div class="row">
    <div class="input-field">
      <!-- class="validate"はmaterializeのAPI -->
      <input
        :type="type"
        :value="value"
        :placeholder="placeholder"
        class="validate"
        required="required"
        @input="updateValue"
      >
    </div>
  </div>
</template>

<script>
  // 動作は，Signupコンポーネントと同じ。
  export default {
    name: 'InputField',
    props: {
      type: { type: String, required: true },
      placeholder: { type: String, required: true },
      value: { type: String, required: true },
    },
    methods: {
      updateValue: function(event) {
        this.$emit("input", event.target.value)
      }
    }
  }
</script>

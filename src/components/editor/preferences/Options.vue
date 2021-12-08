<template>
  <div class="
    d-flex
    flex-column
  ">
    <h5 class="
      white--text
      text--lighten-1
    ">
      {{ title }}
    </h5>
    <section class="
      white--text
      text--lighten-1
    ">
      {{ pattern }}
    </section>
  </div>
</template>

<script>
export default {
  props: ['title', 'pattern', 'disabled']
}
</script>

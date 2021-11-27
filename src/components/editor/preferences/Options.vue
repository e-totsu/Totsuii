<template>
  <div>
    <h5>{{ title }}</h5>
    <section>
      {{ pattern }}
    </section>
  </div>
</template>

<script>
export default {
  props: ['title', 'pattern', 'disabled']
}
</script>

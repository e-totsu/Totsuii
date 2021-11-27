<template>
  <div>
    <v-expansion-panels
      v-for="(section, index) in sections"
      :key="index"

      :disabled="section.disabled"

      multiple
    >
      <sections
        :title="section.title"
        :options="section.options"
      />
    </v-expansion-panels>
  </div>
</template>

<script>
import sections from "./preferences/Sections"

export default {
  components: {
    sections
  },
  data: () => ({
    sections: [
      {
        title: 'color',
        options: [
          {
            title: 'fill',
            pattern: 'color_picker'
          },
          {
            title: 'fill',
            pattern: 'color_picker'
          }
        ],
        disabled: false
      },
      {
        title: 'color',
        options: [
          {
            title: 'fill',
            pattern: 'color_picker'
          }
        ],
        disabled: false
      }
    ]
  })
}
</script>

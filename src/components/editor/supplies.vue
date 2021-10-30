<template>
  <div>
    <v-list
        flat
        color="transparent"
    >
      <v-list-item-group>
        <v-list-item
            v-for="item in menu_items"
            :key="item"
        >
          <v-list-item-title>
            <v-icon size="small">{{ item }}</v-icon>
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>

export default {
  data: () => ({
    menu_items: [
      'edit',
      'crop_square',
      'radio_button_unchecked',
      'change_history',
      'timeline',
      'title'
    ],
  }),
  methods: {
  },

  mounted() {
  },
}
</script>

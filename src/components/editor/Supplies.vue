<template>
  <v-list
    flat
    color="transparent"
  >
    <v-list-item-group>
      <v-list-item-title>
        <v-btn-toggle
          tile
          group
          mandatory
        >
          <v-btn
            v-for="item in menu_items"
            :key="item"
            color="white"
            icon
            fab
            plain
            rounded
            x-small
            width="2.5rem"
            height="2.5rem"
          >
            <v-icon size="small">{{ item }}</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-list-item-title>
    </v-list-item-group>
  </v-list>
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
}
</script>

<style lang="scss" scoped>
.v-item-group {
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>

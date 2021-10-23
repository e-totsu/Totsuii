<template>
  <div>
    <v-list
      flat
      color="transparent"
    >
      <v-list-item-group
        class="d-inline-flex"
      >
        <v-list-item
          v-for="item in menu_items"
          :key="item.title"
        >
          <v-list-item-title>
            {{ $t(item.title) }}
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
      {
        title: 'File',
        options: []
      },
      {
        title: 'Edit',
        options: []
      },
      {
        title: 'Layer',
        options: []
      },
      {
        title: 'Window',
        options: []
      },
      {
        title: 'Market',
        options: []
      },
      {
        title: 'Help',
        options: []
      },
    ],
  }),
  methods: {
  },
}
</script>

<template>
  <v-list color="transparent" class="ml-n4">
    <v-list-item-group class="d-inline-flex">
      <!--    Menu list of items    -->
      <v-list-item
        v-for="item in option_list"
        :key="item.title"
      >
        <!--    Menu items    -->
        <v-list-item-title>
          {{ $t(`menu.${item.label}`) }}
        </v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>

export default {
  data: () => ({
    option_list: [
      {
        title: 'file',
        label: 'file',
        options: []
      },
      {
        title: 'edit',
        label: 'edit',
        options: []
      },
      {
        title: 'layer',
        label: 'layer',
        options: []
      },
      {
        title: 'window',
        label: 'window',
        options: []
      },
      {
        title: 'market',
        label: 'market',
        options: []
      },
      {
        title: 'help',
        label: 'help',
        options: []
      },
    ],
  }),
  methods: {
  },
}
</script>

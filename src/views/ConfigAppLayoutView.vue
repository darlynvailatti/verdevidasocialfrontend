<template>

  <v-layout align-center justify-center>
    <v-flex xs10>
      <v-card>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <span>Tema</span>
              <v-switch v-model="dark" primary label="Escuro"></v-switch>
            </v-flex>
            <v-flex xs12 md6>
              <span>Menu</span>
              <v-switch v-model="primaryDrawer.clipped" label="Clipado" primary></v-switch>
              <v-switch v-model="primaryDrawer.floating" label="Flutuante" primary></v-switch>
              <v-switch v-model="primaryDrawer.mini" label="Pequeno" primary></v-switch>
            </v-flex>
            <v-flex xs12 md6>
              <span>Rodapé</span>
              <v-switch v-model="footer.inset" label="Inset" primary></v-switch>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
export default {
    computed: {
      primaryDrawer: {
        get() { return this.$store.state.primaryDrawer }
      },
      appName: {
        get() { return this.$store.state.appName }
      },
      footer: {
        get() { return this.$store.state.footer }
      },
      dark: {
        get() { return this.$store.state.darkTheme },
        set(isDark) { 
            return this.$store.commit('changeToDark', isDark);
            }

      },
      items: {
        get() { return this.$store.state.items }
      }

    }
};
</script>

<style>
</style>



<template>
  <v-app id="sandbox" :dark="darkTheme">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      absolute
      overflow
      app
    >

    <!-- User avatar -->
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
              <img :src="user.avatar"/>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ user.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <!-- Cases -->
    <v-list flat class="pt-0">
        
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="routerGo(item.routTo)">
          <v-list-tile-action>         
              <v-icon>{{ item.icon }}</v-icon>       
          </v-list-tile-action>
  
          <v-list-tile-content>
            
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar :clipped-left="primaryDrawer.clipped" app absolute>
      <v-toolbar-side-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model">
        </v-toolbar-side-icon>
      <v-toolbar-title>
        <v-layout>
          <v-flex align-self-center>
            <img src="./assets/plant.png" 
              width="40px" 
              style="margin-right:10px;"/>
          </v-flex>

           

          <v-flex align-self-center>
            {{ appName }}
          </v-flex>

        </v-layout>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
        <router-view />
    </v-content>

    <v-footer :inset="footer.inset" app>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    
  </v-app>
</template>

<script>

  export default {
    data: () => ({
      
    }),
    methods: {
      routerGo(someWhere){
        this.$router.push(someWhere)
      }
    },
    computed: {

      user: {
        get() { return this.$store.state.user }
      },
      primaryDrawer: {
        get() { return this.$store.state.primaryDrawer }
      },
      appName: {
        get() { return this.$store.state.appName }
      },
      footer: {
        get() { return this.$store.state.footer }
      },
      darkTheme: {
        get() { return this.$store.state.darkTheme }
      },
      items: {
        get() { return this.$store.state.items }
      }

    }
  }
</script>
<template>
  <div>
    <v-card width="100vw" height="100vh">
      <div>
        <div class="card bg-gold">
          <router-view />
        </div>
      </div>
    </v-card>
  </div>
</template>

<style lang="scss">
.bg-gold {
  height: 100vh;
  background: -webkit-linear-gradient(90deg, #bd0f4d 50%, #cb2964 50%);
  background: -o-linear-gradient(90deg, #bd0f4d 50%, #cb2964 50%);
  background: -moz-linear-gradient(90deg, #bd0f4d 50%, #cb2964 50%);
  background: linear-gradient(90deg, #bd0f4d 50%, #cb2964 50%);
}
</style>

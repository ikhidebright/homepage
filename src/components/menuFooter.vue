<template>
  <v-row class="center" no-gutters>
    <v-col md="2">
      <p class="text">HOME</p>
    </v-col>
    <v-col md="2">
      <p class="text">ABOUT</p>
    </v-col>
    <v-col md="2" class="img">
      <v-avatar class="mb-9" size="80">
        <img src="@/assets/girl.png" />
      </v-avatar>
    </v-col>
    <v-col md="2">
      <p class="text">GALLERY</p>
    </v-col>
    <v-col md="2">
      <p class="text">CONTACT</p>
    </v-col>
  </v-row>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");
.text {
  color: white;
  font-family: "Poiret One", cursive;
  font-size: 1em;
  letter-spacing: 9px;
}

.img {
  margin-top: -2.5%;
}

.center {
  position: relative;
  top: 19vh;
  width: 80%;
  left: 10.5vw;
  margin: auto;
}
</style>

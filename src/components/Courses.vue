<template>
  <section>
    <div class="mt-5">
      <v-btn
        @click=" {{ showTeam }} "
        style="border-left: 5px solid white"
        width="300"
        height="50"
        color="rgb(3,148,71)"
        block
        depressed
      >
        <span class="white--text text-uppercase font-weight-bold text-body-1">{{ courses }}</span>
        <v-spacer></v-spacer>
        <v-icon
          color="white"
        >
          {{ chevronDownUp ? 'mdi-chevron-down' : 'mdi-chevron-up' }}
        </v-icon>
      </v-btn>
      <div style="margin-top:20px" v-if="{{ showedTeam }}">
        <div>
          <v-btn
            @click="showStudents"
            style="border-left: 5px solid white; margin-bottom: 10px;"
            width="300"
            height="50"
            color="rgb(8,183,92)"
            block
            depressed
            >
            <span class="white--text text-uppercase font-weight-bold text-body-1">2331-H</span>
            <v-spacer></v-spacer>
            <v-icon
              color="white"
            >
              {{ chevronRightLeft ? 'mdi-chevron-left' : 'mdi-chevron-right' }}
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </section>
</template>
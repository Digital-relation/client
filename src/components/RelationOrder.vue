<template>
<div>
  <div style="background-color: rgb(1,131,61); width: 300px; height: 100vh;" class="float-left d-flex flex-column align-center medisaScreen">
    <div class="mt-15">
      <v-text-field
        outlined
        color="white"
        label="Topar gözle"
        clearable
        dark
        filled
        dense
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </div>
    <div style="padding-right: 200px;" class="white--text text-uppercase text-subtitle-2">
      <span>Kurslar</span>
    </div>
    <div class="mt-5">
      <v-btn
        @click="showTeam"
        style="border-left: 5px solid white"
        width="300"
        height="50"
        color="rgb(3,148,71)"
        block
        depressed
      >
        <span class="white--text text-uppercase font-weight-bold text-body-1">5 Kurslar</span>
        <v-spacer></v-spacer>
        <v-icon
          color="white"
        >
          {{ chevronDownUp ? 'mdi-chevron-down' : 'mdi-chevron-up' }}
        </v-icon>
      </v-btn>
      <div style="margin-top:20px" v-if="showedTeam">
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
    <div class="mt-5">
      <v-btn
        @click="showTeam1"
        style="border-left: 5px solid white"
        width="300"
        height="50"
        color="rgb(3,148,71)"
        block
        depressed
      >
        <span class="white--text text-uppercase font-weight-bold text-body-1">4 Kurslar</span>
        <v-spacer></v-spacer>
        <v-icon
          color="white"
        >
          {{ chevronDownUp1 ? 'mdi-chevron-down' : 'mdi-chevron-up' }}
        </v-icon>
      </v-btn>
      <div style="margin-top:20px" v-if="showedTeam1">
        <div>
          <v-btn
            @click="showStudents1"
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
              {{ chevronRightLeft1 ? 'mdi-chevron-left' : 'mdi-chevron-right' }}
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <v-btn
        @click="showTeam2"
        style="border-left: 5px solid white"
        width="300"
        height="50"
        color="rgb(3,148,71)"
        block
        depressed
      >
        <span class="white--text text-uppercase font-weight-bold text-body-1">3 Kurslar</span>
        <v-spacer></v-spacer>
        <v-icon
          color="white"
        >
          {{ chevronDownUp2 ? 'mdi-chevron-down' : 'mdi-chevron-up' }}
        </v-icon>
      </v-btn>
      <div style="margin-top:20px" v-if="showedTeam2">
        <div>
          <v-btn
            @click="showStudents2"
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
              {{ chevronRightLeft2 ? 'mdi-chevron-left' : 'mdi-chevron-right' }}
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <v-btn
        @click="showTeam3"
        style="border-left: 5px solid white"
        width="300"
        height="50"
        color="rgb(3,148,71)"
        block
        depressed
      >
        <span class="white--text text-uppercase font-weight-bold text-body-1">2 Kurslar</span>
        <v-spacer></v-spacer>
        <v-icon
          color="white"
        >
          {{ chevronDownUp3 ? 'mdi-chevron-down' : 'mdi-chevron-up' }}
        </v-icon>
      </v-btn>
      <div style="margin-top:20px" v-if="showedTeam3">
        <div>
          <v-btn
            @click="showStudents3"
            style="border-left: 10px double white; margin-bottom: 10px;"
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
              {{ chevronRightLeft3 ? 'mdi-chevron-left' : 'mdi-chevron-right' }}
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <v-btn
        @click="showTeam4"
        style="border-left: 5px solid white"
        width="300"
        height="50"
        color="rgb(3,148,71)"
        block
        depressed
      >
        <span class="white--text text-uppercase font-weight-bold text-body-1">1 Kurslar</span>
        <v-spacer></v-spacer>
        <v-icon
          color="white"
        >
          {{ chevronDownUp4 ? 'mdi-chevron-down' : 'mdi-chevron-up' }}
        </v-icon>
      </v-btn>
      <div style="margin-top:20px" v-if="showedTeam4">
        <div>
          <v-btn
            @click="showStudents4"
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
              {{ chevronRightLeft4 ? 'mdi-chevron-left' : 'mdi-chevron-right' }}
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
  <div class="pt-5 d-flex">
    <span style="color: rgb(1,131,61);" class="text-uppercase font-weight-bold pl-15 text-md-h6">Menejment fakultediniň sanly gatnaşyk hasabaty</span>
    <span class="text-uppercase font-weight-bold pl-16 text-subtitle-1 pt-1">{{ getFullDate }}</span>
    <span class="text-uppercase font-weight-bold pl-16 text-subtitle-1 pt-1">{{ getFullTime }}</span>
    <v-badge
      class="pl-16 pr-5"
      :content="messages"
      :value="messages"
      color="green"
      overlap
    >
      <v-dialog
        v-model="dialog"
        transition="dialog-top-transition"
        max-width="550"
        height="700"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-img
            v-bind="attrs"
            v-on="on"
            alt="sms"
            src="../assets/smsicon.png"
            transition="scale-transition"
          ></v-img>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="green"
              dark
            >Türkmen Döwlet Ykdysadyýet we Dolandyryş Instituty</v-toolbar>
            <v-card-text>
              <div class="text-h5 pa-5">Bellikler!!!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >
                <span class="green--text">Ýapmak</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <template v-slot:activator="{ on, attrs }">
        <v-img
          v-bind="attrs"
          v-on="on"
          alt="sms"
          src="../assets/smsicon.png"
          transition="scale-transition"
        ></v-img>
      </template>
    </v-badge>
  </div>
</div>
</template>

<script>
  export default {
    data: () => ({
      showedTeam: false,
      showedTeam1: false,
      chevronDownUp: true,
      chevronDownUp1: true,
      chevronRightLeft: true,
      chevronRightLeft1: true,
      showedTeam2: false,
      chevronDownUp2: true,
      chevronRightLeft2: true,
      showedTeam3: false,
      chevronDownUp3: true,
      chevronRightLeft3: true,
      showedTeam4: false,
      chevronDownUp4: true,
      chevronRightLeft4: true,
      messages: 1,
    }),
    methods: {
      showTeam() {
        this.showedTeam = !this.showedTeam
        this.showedTeam1 = false
        this.showedTeam2 = false
        this.showedTeam3 = false
        this.showedTeam4 = false
        this.chevronDownUp = !this.chevronDownUp
      },
      showTeam1() {
        this.showedTeam1 = !this.showedTeam1
        this.showedTeam = false
        this.showedTeam2 = false
        this.showedTeam3 = false
        this.showedTeam4 = false
        this.chevronDownUp1 = !this.chevronDownUp1
      },
      showStudents() {
        this.chevronRightLeft = !this.chevronRightLeft
      },
      showStudents1() {
        this.chevronRightLeft1 = !this.chevronRightLeft1
      },
      showTeam2() {
        this.showedTeam2 = !this.showedTeam2
        this.showedTeam1 = false
        this.showedTeam = false
        this.showedTeam3 = false
        this.showedTeam4 = false
        this.chevronDownUp2 = !this.chevronDownUp2
      },
      showStudents2() {
        this.chevronRightLeft2 = !this.chevronRightLeft2
      },
      showTeam3() {
        this.showedTeam3 = !this.showedTeam3
        this.showedTeam1 = false
        this.showedTeam = false
        this.showedTeam2 = false
        this.showedTeam4 = false
        this.chevronDownUp3 = !this.chevronDownUp3
      },
      showStudents3() {
        this.chevronRightLeft3 = !this.chevronRightLeft3
      },
      showTeam4() {
        this.showedTeam4 = !this.showedTeam4
        this.showedTeam1 = false
        this.showedTeam = false
        this.showedTeam2 = false
        this.showedTeam3 = false
        this.chevronDownUp4 = !this.chevronDownUp4
      },
      showStudents4() {
        this.chevronRightLeft4 = !this.chevronRightLeft4
      }
    },
    computed: {
      getFullDate() {
        let today = new Date();
        let date = today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear();
        return date
      },
      getFullTime() {
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return time
      }
    }
  }
</script>

<style scoped>
</style>

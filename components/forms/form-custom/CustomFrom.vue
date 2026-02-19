<script setup lang="ts">
import { ref } from "vue";
const select = ref("One");
const items = ref(["One", "Two", "Three", "Four"]);
const radios = ref("Male");
const model = ref(true);

/*change password*/
const newpwd = ref("123456789142");
const confirmpwd = ref("123456789142");
</script>
<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="0">
        <v-card-item>
          <div class="text-center mt-6 mb-6">
            <v-avatar size="120">
              <img src="/images/profile/user-1.jpg" height="120" alt="image" />
            </v-avatar>
          </div>
          <div class="d-flex justify-center">
            <v-btn color="primary" class="mx-2" flat> Upload</v-btn>
            <v-btn color="error" class="mx-2" variant="outlined" flat
              >Reset</v-btn
            >
          </div>
          <div class="text-subtitle-1 textSecondary text-center my-sm-8 my-6">
            Allowed JPG, GIF or PNG. Max size of 800K
          </div>
        </v-card-item>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6">
      <v-label class="mb-2 font-weight-medium">First Name</v-label>
      <v-text-field
        variant="outlined"
        placeholder="Enter Text"
        color="primary"
      ></v-text-field>

      <v-label class="mb-2 font-weight-medium">Role</v-label>
      <v-select
        :items="items"
        item-title="items"
        item-value="abbr"
        return-object
        single-line
        variant="outlined"
        v-model="select"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-label class="mb-2 font-weight-medium">Last Name</v-label>
      <v-text-field
        variant="outlined"
        placeholder="Enter Text"
        color="primary"
      ></v-text-field>
      <v-label class="mb-2 font-weight-medium">Email</v-label>
      <v-text-field
        variant="outlined"
        type="email"
        placeholder="Enter Text"
        color="primary"
      ></v-text-field>
    </v-col>

    <v-col cols="12">
      <v-label class="mb-2 font-weight-medium">Gender</v-label>
      <v-radio-group inline v-model="radios">
        <v-row>
          <v-col cols="12" md="4"
            ><v-radio label="Male" color="primary" value="Male"></v-radio
          ></v-col>
          <v-col cols="12" md="4"
            ><v-radio label="Female" color="primary" value="Female"></v-radio
          ></v-col>
        </v-row>
      </v-radio-group>
    </v-col>
    <v-col cols="12" sm="6">
      <v-label class="mb-2 font-weight-medium">Password</v-label>
      <v-text-field
        color="primary"
        variant="outlined"
        type="password"
        v-model="newpwd"
      />
    </v-col>
    <v-col cols="12" sm="6">
      <v-label class="mb-2 font-weight-medium">Confirm Password</v-label>
      <v-text-field
        color="primary"
        variant="outlined"
        type="password"
        v-model="confirmpwd"
        hide-details
      />
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="12" md="3" sm="6">
          <v-switch
            v-model="model"
            hide-details
            color="primary"
            label="Active"
            inset
          ></v-switch>
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col class="d-flex justify-end" cols="12">
          <v-btn color="primary" flat>add new</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

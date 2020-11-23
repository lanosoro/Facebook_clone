<template style>
  <v-container fluid ma-0 pa-0 fill-height class="hidden-sm-and-up">
    <a
      class="hidden-md-and-up justify-center"
      style="background-color:#fffbe2; width:100%; top:0;  height:40px; position:absolute;  "
      flat
      xs="auto"
    >
    </a>

    <v-row
      style="top:40%;
                overflow: auto;
                height: 80%;
                padding: 0;
                margin-left: 37px;
                "
    >
      <v-col cols="6" offset="0" xs="auto">
        <v-card
          fill-height
          flat
          tile
          style="width:90%; height:100%; left:5%; top:50px; position:absolute"
        >
          <h3 align="center" style="color:#1877f2;">
            <strong>facebook</strong>
          </h3>
          <v-form style="margin-top:20px;">
            <v-text-field
              single-line
              background-color="#f0f2f5"
              solo
              label="Email adress or Phone number"
            />
            <v-text-field
              single-line
              solo
              background-color="#f0f2f5"
              label="Password"
              type="password"
              style=" top:60px"
            />
            <v-btn
              primary
              large
              block
              style="background-color:#1877f2; color:#fff;"
            >
              log in
            </v-btn>
            <div class="divider">
              <v-divider></v-divider>
              <hr class="solid" />
            </div>
            <v-divider style="position:absolute; top:27%;"></v-divider>

            <v-btn
              color="#39cf1b"
              primary
              large
              style="background-color:#39cf1b; color:#fff; margin: 0; position: absolute; top:30%; left: 50%; transform: translate(-50%, -50%); background-color:#36a420; 
              color:#fff;"
            >
              Create New Acccount
            </v-btn>
            <span
              class="offset-"
              style="text-align: center;
              display: block;
              margin: 0 auto;
              padding:4%;
              left:29%;
              top:37%;
              position:absolute;
             "
              ><a
                href="#"
                style="text-decoration:none; color:#576b95; font-size:15px;"
                >forgotten password?</a
              ></span
            >
          </v-form>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="xs-6">
        <v-card
          class="pa-2"
          elevation="0"
          style="background-color:white; top:50%; position:absolute; display:block;"
        >
          <v-row align-content-xs="center">
            <v-col class="pt-0 d-block">
              <ul style="display:block; list-style-type:none;">
                <li><a href="">English(UK)</a></li>
                <li><a href=""></a>Français (France)</li>
                <li><a href=""></a>Português (Brasil)</li>
                <li><a href=""></a>Italiano</li>
              </ul>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col class="xs-6">
        <v-card
          class="pa-2"
          elevation="0"
          style="background-color:white; top:47%; position:absolute; display:block;"
        >
          <div>
            <v-row align="end">
              <v-col>
                <v-card-text style="">
                  <ul>
                    <li><a href=""></a>Kiswahili</li>
                    <li><a href=""></a>Espanol</li>
                    <li><a href=""></a>Deutsch</li>
                    <a href="">
                      <v-icon
                        depressed
                        elevation="2"
                        outlined
                        medium
                        tile
                        style="background-color:#fff; border-style: solid;  border-width: 1px; border-radius:3px;  border-color: #576b95;"
                      >
                        mdi-plus
                      </v-icon>
                    </a>
                  </ul>
                </v-card-text>
                <v-card-text
                  class="#576b95--text pt-0 d-inline"
                  align="center"
                  style="right:50%; min-width:360px;
              display:inline;
              color:grey;
              margin: 0;
              position: absolute;
              top: 100%;
              left: 1%;
              transform: translate(-50%, -50%); "
                >
                  <p
                    style=" 
              min-width:360px;
              display:inline;
              color:grey;
              margin: 0;
              position: absolute;
              top: 100%;
              left: 1%;
              transform: translate(-50%, -50%); 
              
              "
                  >
                    <a style="color:grey; font-size:12px;">About ·</a><a style="color:grey; font-size:12px;">Help ·</a><a style="color:grey; font-size:12px;">More</a> <br />
                    facebook inc
                  </p>
                </v-card-text>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({})
};
</script>
<style scoped>
#container {
  background-color: white;
}

a {
  display: block;
}

#text-field {
  border: 2px;
}
hr.solid {
  border-top: 0.1px solid #bbb;
  border: 10px;
  padding: 70px 0;
  top: 200px;
}
ul {
  display: block;
  list-style-type: none;
  font-size: 12px;
  color: #576b95;
  text-align: center;
}
li a {
  color: #737373;
  text-decoration: none; /* no underline */
  margin-right: 0%;
}

li {
  line-height: 30px;
  padding: 0px 10px;
  word-wrap: normal;
}
</style>

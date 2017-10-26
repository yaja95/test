<template >
  <div id='page' class="GPA">
    <h1>{{ msg }}</h1>
    <p>
      <em>{{ msg1 }} </em>
    </p>
    <v-card dark class="elevation-5 py-5 grey">
      <v-card-text>
        <v-container fluid grid-list-md>
          <!-- Data for course 1 -->
          <form name='myform'>
            <v-layout row wrap>
              <!--<v-flex xs12 sm4>
                    <p>Course Number</p>
                    <v-select disabled label="Course 1" segmented></v-select>
                  </v-flex>-->
              <v-flex xs12 sm6>
                <p>Grade Received</p>
                <v-select v-bind:items="grade" v-model='grade1' label="Select" segmented></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <p>Class Credit Hours</p>
                <v-select v-bind:items="hours" v-model='hour1' label="Select" segmented></v-select>
              </v-flex>
            </v-layout>

            <!-- Data for course 2 -->
            <v-layout row wrap>
              <!--<v-flex xs12 sm4>
                    <p>Course Number</p>
                    <v-select disabled label="Course 2" segmented></v-select>
                  </v-flex>-->
              <v-flex xs12 sm6>
                <p>Grade Received</p>
                <v-select v-bind:items="grade" v-model='grade2' label="Select" segmented></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <p>Class Credit Hours</p>
                <v-select v-bind:items="hours" v-model='hour2' label="Select" segmented></v-select>
              </v-flex>
            </v-layout>

            <!-- Data for course 3 -->
            <v-layout row wrap>
              <!--<v-flex xs12 sm4>
                    <p>Course Number</p>
                    <v-select disabled label="Course 3" segmented></v-select>
                  </v-flex>-->
              <v-flex xs12 sm6>
                <p>Grade Received</p>
                <v-select v-bind:items="grade" v-model='grade3' label="Select" segmented></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <p>Class Credit Hours</p>
                <v-select v-bind:items="hours" v-model='hour3' label="Select" segmented></v-select>
              </v-flex>
            </v-layout>

            <!-- Data for course 4 -->
            <v-layout row wrap>
              <!--<v-flex xs12 sm4>
                    <p>Course Number</p>
                    <v-select disabled label="Course 4" segmented></v-select>
                  </v-flex>-->
              <v-flex xs12 sm6>
                <p>Grade Received</p>
                <v-select v-bind:items="grade" v-model='grade4' label="Select" segmented></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <p>Class Credit Hours</p>
                <v-select v-bind:items="hours" v-model='hour4' label="Select" segmented></v-select>
              </v-flex>
            </v-layout>
            <v-btn primary fab large @click.native="calculate()">Submit</v-btn>
            <p>Your GPA will appear in the green area below. </p>
          </form>
        </v-container>
      </v-card-text>
    </v-card>

    <v-card class="elevation-5 py-5 success">
      <h2 id='calculation'></h2>
    </v-card>

  </div>
</template>

<script>
export default {
  name: 'GPA',
  data() {
    return {
      msg: 'Welcome to the GPA calculator page!',
      msg1: 'To have your GPA calculated, you must enter a grade and its credit hours for each course.',
      course: ['Course 1', 'Course 2', 'Course 3', 'Course 4'],
      grade: [
        { text: 'A+', value: 4.0 },
        { text: 'A', value: 4.0 },
        { text: 'A-', value: 3.7 },
        { text: 'B+', value: 3.3 },
        { text: 'B', value: 3.0 },
        { text: 'B-', value: 2.7 },
        { text: 'C+', value: 2.3 },
        { text: 'C', value: 2.0 },
        { text: 'C-', value: 1.7 },
        { text: 'D+', value: 1.3 },
        { text: 'D', value: 1.0 },
        { text: 'D-', value: 0.7 },
        { text: 'F', value: 0.0 }
      ],
      hours: [
        { text: '0.0', value: 0.0 },
        { text: '1.0', value: 1.0 },
        { text: '2.0', value: 2.0 },
        { text: '3.0', value: 3.0 },
        { text: '4.0', value: 4.0 }
      ],
      grade1: '',
      hour1: '',
      grade2: '',
      hour2: '',
      grade3: '',
      hour3: '',
      grade4: '',
      hour4: ''
    }
  },
  methods: {
    ////////Method to calculate the weighted GPA of four courses////

    calculate() {
      //Initialize the selected input variables
      var ingr1, ingr2, ingr3, ingr4;
      var inhr1, inhr2, inhr3, inhr4;

      //Retrive the values from the selected values
      //and store them into appropriate variables
      ingr1 = this.grade1;
      ingr2 = this.grade2;
      ingr3 = this.grade3;
      ingr4 = this.grade4;
      inhr1 = this.hour1;
      inhr2 = this.hour2;
      inhr3 = this.hour3;
      inhr4 = this.hour4;

      //Initialize variables to store the grade * credit hour
      //and the total number of credit hours as well as the 
      //final gpa
      var allgr = 0;
      var allcr = 0;
      var gpa = 0;

      //Perform operations to gather both sums
      allgr = (ingr1 * inhr1) + (ingr2 * inhr2) + (ingr3 * inhr3)
        + (ingr4 * inhr4);

      allcr = inhr1 + inhr2 + inhr3 + inhr4;

      //GPA calculation
      var gpa1 = (allgr / allcr);

      //Round to two decimal places and display GPA
      gpa = gpa1.toFixed(2);
      document.getElementById('calculation').innerHTML = "Your GPA is" + " " + gpa;



    }
  }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  font-family: Lobster;
}

p {
  font-size: 20px;
  font-family: Lobster;
}

#page {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

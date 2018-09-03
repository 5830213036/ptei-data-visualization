
<template>
  <div class="small">
    <button @click="fillData()">Show</button>
    <b-card>
      <line-chart :chart-data="datacollection"></line-chart>
    </b-card>
    <b-card>
      <bar-chart :chart-data="datacollection"></bar-chart>
    </b-card>
    <b-card>
      <doughnut-chart :chart-data="datacollection"></doughnut-chart>
    </b-card>
    
  </div>
</template>
<script>
import { firestore } from "../firebase.js";
import LineChart from "../charts/Line.js"
import BarChart from "../charts/Bar.js"
import DoughnutChart from "../charts/Doughnut.js"


export default {
  components: {
    LineChart,
    BarChart,
    DoughnutChart
  },
  data() {
    return {
      datacollection: null
    };
  },
  mounted() {
    this.fillData();
  },
  firestore() {
    return {
      chart1: firestore.collection("viz").doc("chart1")
    };
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.chart1.label,
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: this.chart1.label1
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>




<!--<script>
import { Pie } from 'vue-chartjs'
import {firestore} from '../firebase.js'
 
export default {
    name : 'chart',
  extends: Pie ,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: this.login
        }
      ]
    })
  },
  firestore() {
    return {
        // Collection
        login: firestore.collection('login')
    }
  }
}
</script> -->
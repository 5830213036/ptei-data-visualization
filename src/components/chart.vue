<template>
<div>
  <h2>Doughnut</h2>

  <div class="card">
    <chartjs-doughnut v-bind:labels="labels"
      v-bind:datasets="datasets"
      v-bind:bind="true"/>
  </div>
</div>
</template>

<script>
import {firestore} from '../firebase.js'
export default {
  data() {
    return {
      labels: this.chart1.labels,
      datasets: [
        {
          data: this.label,
          backgroundColor: ["#b388ff", "#82b1ff", "#80d8ff"],
          hoverBackgroundColor: ["#673ab7", "#2196f3", "#03a9f4"]
        }
      ],
    };
  },
   firestore(){
        return{
          chart1 : firestore.collection('viz').doc('chart1')
        }
      }
};
</script>



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
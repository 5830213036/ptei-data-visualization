
<script>
import { Bar } from 'vue-chartjs'
import {firestore} from '../firebase.js'
 
export default {
    name : 'chart',
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
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
</script>
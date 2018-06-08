<template>
  <div>
    <p @click="tg($event)">{{title}}</p>
    <p>
      <ul>
        <li v-for="(item,index) in list" :key="index">{{item}}</li>
      </ul>
    </p>
  </div>
</template>
<script>
  export default {
    name:'child',
    props: ['title'],
    data() {
      return {
        msg: '1212',
        name: '',
        list: [{
            'name': 'huangshuwei',
            'age': '20'
          },
          {
            'name': 'jj',
            'age': '22'
          },
          {
            'name': 'gogo',
            'age': '23'
          }
        ],
      }
    },
    methods: {
      tg(event) {
        alert(event.target.innerText)
      }
    }
  }

</script>

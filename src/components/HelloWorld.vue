        <template>
          <div class="hello">
            <h1 v-bind:class="{active:isActive,'add':add}">{{ msg }}</h1>
            <p>{{revermsg}}</p>
            <p>{{fullname}}</p>
            <p @click="alert(firstname)">{{firstname}}</p>
            <p v-if="type===1">
              <label for="">user</label>
              <input type="text" placeholder="name" key='name'>
            </p>
            <p v-else>
              <label for="">password</label>
              <input type="password" placeholder="pass" key='pass'>
            </p>
            <p>
              <button @click="change()">change</button>
            </p>
            <p>
              <ui>
                <li v-for="(item,index) in list" :key='item.id'>
                  <span>{{item}}</span>
                  <span>
                    <button @click="splice(index)">splice</button>
                  </span>
                  <span>
                    <button @click="edit(index)">edit</button>
                  </span>
                  <span>
                    <button @click="check(index,item)">check</button>
                  </span>
                </li>
              </ui>
            </p>
            <p>
              <button @click="change1()">add</button>
            </p>
            <p>
              <button @click="request()">axioshttp</button>
              <button @click="get()">getapp</button>
            </p>
            <p>
              <input type="text" v-model="text" @keyup.13="show($event)">
            </p>
            <ul style="display: flex;flex-direction: column;">
              <li v-for="(item,index) in arr" :key="index">{{item}}
                <button @click="remove(index)">remove</button>
                <button @click="check(index,item)">check</button>
              </li>
            </ul>
            <p>
              <child :title="index"></child>
            </p>
          <p :once="once()">{{index}}</p>
          </div>
        </template>

        <script>
          import Vue from 'vue'
          import child from './child.vue'
          export default {
            name: 'HelloWorld',
            components: {
              'child': child
            },
            data() {
              return {
                msg: 'Welcome to Your Vue.js App',
                firstname: 'oo',
                lastname: 'ff',
                isActive: true,
                index: 'title',
                add: true,
                type: 1,
                text: '',
                arr: [],
                post: {
                    id: 1,
                    title: 'My Journey with Vue'
                    },
                list: [{
                    name: 'huangshuwei',
                    id: '1'
                  },
                  {
                    name: "jj",
                    id: '2'
                  }
                ]
              }
            },
            computed: {
              revermsg: function () {
                return this.msg.split('').reverse().join('');
              },
              fullname: function () {
                return this.firstname + '' + this.lastname;
              }
            },
            created() {
              let vm = this;
              console.log(vm.msg)
            },
            methods: {
              once(){
              },
              click() {
                this.$refs.child.init();
              },
              alert: function () {
                alert(this.firstname)
              },
              change() {
                let vm = this;
                // vm.type=!vm.type;
                if (vm.type == 1) {
                  vm.type = 2
                } else {
                  vm.type = 1
                }
              },
              change1() {
                this.list.push({
                  "name": 'sunshine',
                  "id": '3'
                })
              },
              splice(index) {
                let vm = this;
                vm.list.splice(index, 1);
              },
              edit(index) {
                let vm = this;
                Vue.set(vm.list, index, {
                  name: "aaa"
                })
              },
              check(index, item) {
                alert(JSON.stringify(item));
                // alert(JSON. (item))
              },
              request() {
                let vm = this;
                vm.$http.get('/api/home').then(response => {
                  // 获取的后台数组 
                   let list=response.data.data.list;
                   $.each(list,function(index,item){
                      console.log(item.name)
                   })
                }, response => {
                  console.log('数据加载失败')
                })
              },
             get(){
               let vm=this;
               vm.$http.get('/api/app').then(res=>{
                     console.log(res.data)
               },res=>{
                   console.log('error')
               })
             },
              show(e) {
                console.log(666);
                let vm = this;
                vm.arr.push(vm.text);
              },
              remove(index) {
                let vm = this;
                vm.arr.splice(index, 1);
              },
            }
          }
        </script>

        <!-- Add "scoped" attribute to limit CSS to this component only -->
        <style scoped>
          .active {
            color: red;
            font-size: 20px;
          }

          .active:hover {
            transition: all 0.5s;
            transform: scale(5);
          }

          .add {
            background: #42b983;
          }

          h1,
          h2 {
            font-weight: normal;
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

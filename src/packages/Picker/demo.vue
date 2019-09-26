<template>
  <div class="page-demo-pull-refresh">
    <section>
      <lina-picker :slots="slots1" @change="handleChange1"></lina-picker>
      <div class="content">
        <h4>value1: {{value1}}</h4>
        <div class="text-p">
          <ul>
            <li>接受@change和value.sync和v-model的传值方法</li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <lina-picker :slots="slots2" :value.sync="value2"></lina-picker>
      <div class="content">
        <h4>value2: {{value2}}</h4>
      </div>
    </section>
    <section>
      <lina-picker :slots="slots3" v-model="value3"></lina-picker>
      <div class="content">
        <h4>value3: {{value3}}</h4>
        <div class="text-p">
          <ul>
            <li>定时器异步载入数据</li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <lina-picker :slots="slots3" :head="true" @confirm="handleConfirm" @cance="handleCance">
        <p slot="title">title</p>
      </lina-picker>
      <div class="content">
        <h4>value4: {{value4}}</h4>
        <div class="text-p">
          <ul>
            <li>confirm和handleCance事件</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'demo-picker',
  data () {
    return {
      slots1: [
        []
      ],
      value1: [],
      slots2: [
        {
          defaultIndex: 6,
          values: [
            {
              name: '猪妹',
              value: 1
            },
            {
              name: '火影忍者',
              value: 2
            },
            {
              name: '小明',
              value: 3
            },
            {
              name: '大厦',
              value: 4
            },
            {
              name: '大哥大',
              value: 5
            },
            {
              name: '我是谁',
              value: 6
            },
            {
              name: '阿打算',
              value: 7
            },
            {
              name: '阿达',
              value: 8
            }
          ]
        },
        [
          '阿萨德',
          '阿萨德12',
          '阿斯蒂芬',
          'v',
          '啊实打实的',
          '阿达',
          '阿斯顿发斯蒂芬',
          '12我去安慰',
          '阿三哥发',
          'SADFSF',
          '阿发',
          '大厦访问'
        ]
      ],
      value2: [],
      slots3: [],
      value3: [],
      value4: []
    }
  },
  created () {
    this.addSlots1()
    this.addSlots3()
  },
  methods: {
    addSlots1 () {
      for (let i = 0; i < 1000; i++) {
        this.slots1[0].push(i)
      }
    },
    handleChange1 (value) {
      this.value1 = value
    },
    addSlots3 () {
      this.$set(this.slots3, 0, [])
      for (let i = 0; i < 1000; i++) {
        this.slots3[0].push(i)
      }
      setTimeout(() => {
        this.$set(this.slots3, 1, {
          defaultIndex: 3,
          values: []
        })
        for (let i = 0; i > -100; i--) {
          this.slots3[1].values.push(i)
        }
      }, 500)
      setTimeout(() => {
        this.$set(this.slots3, 2, [])
        for (let i = 100; i > 0; i--) {
          this.slots3[2].push(i)
        }
      }, 1000)
    },
    handleConfirm (value) {
      this.value4 = value
    },
    handleCance () {
      alert('取消')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-demo-pull-refresh {
  section {
    .content {
      margin: 20px;
      h4 {
        font-size: 26px;
        padding-bottom: 20px;
      }
      .text-p {
        padding-bottom: 20px;
        font-size: 24px;
        ul {
          li {
            margin-bottom: 15px;
          }
        }
      }
    }
  }
}
</style>

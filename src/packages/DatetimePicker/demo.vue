<template>
  <div class="dom-date-time">
    <section>
      <lina-datetime-picker
      @confirm="handleConfirm1"
      @cance="handleCance1"
      :defaultDate="new Date(`${new Date().getFullYear() + 1}/9/20 3:2`)"
      :maxDate="new Date(`${new Date().getFullYear() + 5}/11/21 23:4`)"
      :minDate="new Date(`${new Date().getFullYear()}/9/20 10:2`)"
      yearFormat="{value}年"
      monthFormat="{value}月"
      dateFormat="{value}日"
      hourFormat="{value}时"
      minuteFormat="{value}分">
        <p slot="title">datetime</p>
      </lina-datetime-picker>
      <div class="content">
        <h4>value1: {{value1}}</h4>
        <div class="text-p">
          <ul>
            <li>type默认为：datetime</li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <lina-datetime-picker
      @confirm="handleConfirm2"
      type="date"
      :minDate="new Date()"
      :maxDate="new Date(`${new Date().getFullYear() + 7}/12/31`)">
        <p slot="title">date</p>
      </lina-datetime-picker>
      <div class="content">
        <h4>value2: {{value2}}</h4>
        <div class="text-p">
          <ul>
            <li>date</li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <lina-datetime-picker
      type="time"
      :maxHour="10"
      :minHour="5"
      :maxMinute="44"
      :minMinute="2"
      :head="false"
      v-model="value3"></lina-datetime-picker>
      <div class="content">
        <h4>value3: {{value3}}</h4>
        <div class="text-p">
          <ul>
            <li>time</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'dom-date-time',
  data () {
    return {
      value1: [],
      value2: [],
      value3: []
    }
  },
  methods: {
    handleConfirm1 (values) {
      this.value1 = values
    },
    handleConfirm2 (values) {
      this.value2 = values
    },
    handleCance1 () {
      alert('取消')
    }
  }
}
</script>

<style lang="scss" scoped>
.dom-date-time {
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

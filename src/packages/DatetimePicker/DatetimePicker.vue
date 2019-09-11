<template>
  <lina-picker
  @change="handleChange"
  @confirm="handleConfirm"
  @cance="handleCance"
  :slots="datas"
  :lineHeight="lineHeight"
  :fontSize="fontSize"
  :head="head"
  :cancelText="cancelText"
  :confirmText="confirmText"
  :cancelColor="cancelColor"
  :confirmColor="confirmColor"
  ></lina-picker>
</template>

<script>
import createDate from './createDate'
console.log(createDate)
export default {
  name: 'lina-datetime-picker',
  data () {
    return {
      slots: []
    }
  },
  props: {
    type: {
      type: String,
      default: 'datetime' // 'datetime', 'date', 'time'
    },
    defaultIndex: Date,
    minDate: {
      type: Date,
      default () {
        return new Date(`${new Date().getFullYear() - 10}/1/1`)
      }
    },
    maxDate: {
      type: Date,
      default () {
        return new Date(`${new Date().getFullYear() + 10}/12/31`)
      }
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    minMinute: {
      type: Number,
      default: 0
    },
    maxMinute: {
      type: Number,
      default: 59
    },
    yearFormat: {
      type: String,
      default: '{value}'
    },
    monthFormat: {
      type: String,
      default: '{value}'
    },
    dateFormat: {
      type: String,
      default: '{value}'
    },
    hourFormat: {
      type: String,
      default: '{value}'
    },
    minuteFormat: {
      type: String,
      default: '{value}'
    },
    value: Array,
    lineHeight: {
      type: String,
      default: '34px'
    },
    fontSize: {
      type: String,
      default: '16px'
    },
    head: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelColor: String,
    confirmColor: String
  },
  computed: {
    datas () {
      let {
        type,
        defaultIndex,
        minDate,
        maxDate,
        minHour,
        maxHour,
        minMinute,
        maxMinute,
        yearFormat,
        monthFormat,
        dateFormat,
        hourFormat,
        minuteFormat
      } = this
      return createDate[type]({
        defaultIndex,
        minDate,
        maxDate,
        minHour,
        maxHour,
        minMinute,
        maxMinute,
        yearFormat,
        monthFormat,
        dateFormat,
        hourFormat,
        minuteFormat
      })
    }
  },
  components: {},
  created () {},
  mounted () {},
  beforeDestroy () {},
  destroyed () {},
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    handleChange (values) {
      this.filterValue(values)
      this.$emit('change', values)
      this.$emit('update:value', values)
    },
    handleConfirm (values) {
      this.filterValue(values)
      this.$emit('confirm', values)
    },
    handleCance () {
      this.$emit('cance')
    },
    filterValue (values) {
      if (typeof values[0] === 'object') {
        values[0] = values[0].name
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

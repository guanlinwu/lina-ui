<template>
  <lina-picker
  ref="picker"
  @change="handleChange"
  @confirm="handleConfirm"
  @cance="handleCance"
  :slots="time.data"
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
import Time from './time'
export default {
  name: 'lina-datetime-picker',
  props: {
    type: {
      type: String,
      default: 'datetime' // 'datetime', 'date', 'time'
    },
    defaultIndex: Date, // 当前时间
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
  data () {
    return {
      time: {}
    }
  },
  computed: {
    values () {
      return this.time.values
    },
    isYear () {
      return typeof this.values[0] === 'object'
    },
    options () {
      let {
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
      return {
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
      }
    }
  },
  mounted () {
    this.$watch('type', this.getDateSlots, {
      immediate: true
    })
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    getDateSlots (type) {
      if (!(this.time instanceof Time)) {
        this.time = new Time(type, this.options)
      } else {
        this.time.type = type
      }
      this.$nextTick(() => {
        this.time.values = this.$refs.picker.values
      })
    },
    handleChange (values) {
      this.time.values = values
      values = this.filterValue(values)
      this.$emit('change', values)
      this.$emit('update:value', values)
    },
    handleConfirm (values) {
      values = this.filterValue(values)
      this.$emit('confirm', values)
    },
    handleCance () {
      this.$emit('cance')
    },
    filterValue (values) {
      values = JSON.parse(JSON.stringify(values))
      return values.map(obj => obj.name)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

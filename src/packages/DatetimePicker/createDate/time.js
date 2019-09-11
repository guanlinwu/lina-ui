export default function (options) {
  const arr = [
    {
      values: []
    },
    {
      values: []
    }
  ]
  for (let i = options.minHour; i <= options.maxHour; i++) {
    arr[0].values.push(options.hourFormat.replace(/({value})/g, i.toString().padStart(2, 0)))
  }
  for (let i = options.minMinute; i <= options.maxMinute; i++) {
    arr[1].values.push(options.minuteFormat.replace(/({value})/g, i.toString().padStart(2, 0)))
  }
  return arr
}

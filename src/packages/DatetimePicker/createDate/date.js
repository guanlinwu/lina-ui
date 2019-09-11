export default function (options) {
  let minYear = options.minDate.getFullYear()
  let minMonth = options.minDate.getMonth() + 1
  let minDate = options.minDate.getDate()
  let maxYear = options.maxDate.getFullYear()
  let maxMonth = options.maxDate.getMonth() + 1
  let maxDate = options.maxDate.getDate()
  const arr = [
    {
      values: []
    },
    {
      values: []
    },
    {
      values: []
    }
  ]
  for (let i = minYear; i <= maxYear; i++) {
    let obj = {
      name: options.yearFormat.replace(/({value})/g, i),
      $moth: []
    }
    if (i === minYear) {
      obj.$minMonth = options.monthFormat.replace(/({value})/g, minMonth.toString().padStart(2, 0))
      obj.$minDate = options.dateFormat.replace(/({value})/g, minDate.toString().padStart(2, 0))
    }
    if (i === maxYear) {
      obj.$maxMonth = options.monthFormat.replace(/({value})/g, maxMonth.toString().padStart(2, 0))
      obj.$minDate = options.dateFormat.replace(/({value})/g, maxDate.toString().padStart(2, 0))
    }
    for (let j = 1; j <= 12; j++) {
      obj.$moth.push(getMonth(i, j))
    }
    arr[0].values.push(obj)
  }
  for (let i = 1; i <= 12; i++) {
    arr[1].values.push(options.monthFormat.replace(/({value})/g, i.toString().padStart(2, 0)))
  }
  for (let i = 1; i <= 31; i++) {
    arr[2].values.push(options.dateFormat.replace(/({value})/g, i.toString().padStart(2, 0)))
  }
  return arr
}
const mObj = {
  1: 31,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
}
function getMonth (y, m) {
  if (m === 2) {
    return y % 4 ? 28 : 29
  }
  return mObj[m]
}

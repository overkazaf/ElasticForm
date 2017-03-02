const starEpic = action$ =>
  action$.ofType('UPDATE')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'HHHH' })

export default starEpic;
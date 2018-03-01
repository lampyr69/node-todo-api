const getJSONString = () => JSON.stringify({ name: 'Alexander' })

const getJSON = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() > 0.4) {
        resolve(getJSONString())
      }
      reject('Ein Fehler ist aufgetreten')
    }, 1000)
  )

// const makeRequest = () =>
//   getJSON()
//     .then((data) => {
//       console.log(data)
//     })
//     .then(
//       getJSON().then((data) => {
//         console.log(data)
//       })
//     )
//     .catch((err) => console.log(err))
// makeRequest()

const makeRequestAsync = async () => {
  try {
    console.log(await getJSON())
    console.log(await getJSON())
    console.log(await getJSON())
    console.log(await getJSON())
  } catch (error) {
    console.log(error)
  }
}
makeRequestAsync()

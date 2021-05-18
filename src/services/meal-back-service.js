const headers = {
  headers : {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
  }
const url = "http://localhost:3002/"

export async function getMeals() {
  return fetch(`${url}meals`, headers)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error('error', error);
    });
}

export async function getLunchs() {
  return fetch(`${url}meals`, headers)
    .then((res) => res.json())
    .then((data) => {
      let dataFilter
      return dataFilter = data.filter(meal => {
        if (meal.type.includes('lunch')) {
          return { dataFilter }
        }
      })
    })
    .catch((error) => {
      console.error('error', error);
    });
}

export async function getDinners() {
  return fetch(`${url}meals`, headers)
    .then((res) => res.json())
    .then((data) => {
      let dataFilter
      return dataFilter = data.filter(meal => {
        if (meal.type.includes('dinner')) {
          return { dataFilter }
        }
      })
    })
    .catch((error) => {
      console.error('error', error);
    });
}


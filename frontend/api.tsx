export const getDataByName = async (slug: string | any) => {
    const name = slug
    if (name !== undefined) {
      const res = await fetch(`http://localhost:4000/name/${name}`,)
      const result = await res.json()
      return result
    }
  }
export const getDataBySearch = async (query: string | any) => {
    const name = query
    if (name !== undefined) {
      const res = await fetch(`http://localhost:4000/search/${name}`,)
      const result = await res.json()
      return result
    }
  }

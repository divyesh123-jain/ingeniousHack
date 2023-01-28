export const getDataByName = async (slug: string | any) => {
    const name = slug
    if (name !== undefined) {
      const res = await fetch(`https://gro-backend.vercel.app/name/${name}`,)
      const result = await res.json()
      return result
    }
  }
export const getDataBySearch = async (query: string | any) => {
    const name = query
    if (name !== undefined) {
      const res = await fetch(`http://gro-backend.vercel.app/search/${name}`,)
      const result = await res.json()
      return result
    }
  }

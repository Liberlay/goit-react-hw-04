import axios from 'axios'
import toast from 'react-hot-toast'

export const getImages = async (query, page) => {
  const params = {
    query,
    page,
    per_page: 10,
    client_id: 'SGK91yJpJRCZbCvcVi5BJNmaHaeZMZvL4PU4Ys_ih44',
  }

  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', { params })
    return response.data.results
  } catch {
    toast.error('Something went wrong :(')
  }
}

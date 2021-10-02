import { api } from "../Api/Api"

const SET_STORIES = 'SET_STORIES'
const SET_STORIES_IDIES = 'SET_STORIES_IDIES'

const initialState = {
    storiesIdies: [],
    stories: []
}



export const appReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_STORIES_IDIES : 
            return {
                ...state,
                storiesIdies: action.payload
            }
        case SET_STORIES : 
            return {
                ...state,
                stories: action.payload
            }
        default: 
            return state
    }
}

export const setStoriesIdies = (idies) => ({
    type: SET_STORIES_IDIES,
    payload: idies
})

export const setStories = (stories) => ({
    type: SET_STORIES,
    payload: stories
})


export const setStoriesTC = () => async(dispatch) => {
    const response = await api.getStoriesIdies();
    const promises = response.data.slice(0, 10)
    .map(id => (
        api.getStories(id)
    ))
 
    const result = await Promise.all(promises)
    const dataArr = result.map(data => {
      return data.data
  })
    dispatch(setStories(dataArr))
    console.log(dataArr);

}


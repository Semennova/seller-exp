import axios from 'axios'


export const api = {
   getStoriesIdies(){
        return axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
          
   },
   getStories(id){
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
   }
   
}

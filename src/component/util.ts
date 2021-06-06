import axios from "axios";

export async function searchMovie(select:any, value:any)
{
    console.log(value);
    const res = await axios.get('http://localhost:4001/movie/' + value)
    console.log(res);
    return res
}

export async function searchDirector(select:any, value:any)
{
    console.log(value);
    const res = await axios.get('http://localhost:4001/director/search/' + value)
    console.log(res);
    return res
}


export async function Directordetails() {
    const res = await axios.get('http://localhost:4001/director');
    console.log(res.data);
    return res;
  }

export  async function Details(search: any) {
    console.log('search', search);
    const res = await axios.get('http://localhost:4001/director/' + search);
    console.log(res.data);
    return res;
  }
  export async function ImageDetails() {
    console.log("Entered Into Resources");
    
      const res = await axios.get('http://localhost:4000/api/users');
      console.log(res.data);
      return res;
    }
  
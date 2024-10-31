import { NewsResponse } from './type';

export const getHomeApi = async (): Promise<NewsResponse | null> => {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=top-headlines&apiKey=${process.env.NEXT_API_KEY}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: NewsResponse = await response.json();
    console.log(data, 'api here');
    return data;
  } catch (error) {
    console.log(error, 'test');
    return null;
  }
};

// search api below

export const searchAPI = async (query: string) => {
  try {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEXT_API_KEY}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error, 'test');
    return null;
  }
};

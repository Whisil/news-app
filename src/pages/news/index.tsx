import { useState, useEffect, useRef } from 'react';
import Header from '../../components/header';
import NewsCard from '../../components/newsCard';

interface ItemProps {
    title: string;
    author: string;
    url: string;
    urlToImage: string;
}

const News = () => {
    
    const [page, setPage] = useState(1);
    const [news, setNews] = useState<any>([]);
  
    const loadRef = useRef(false);

    useEffect(() => {
      if(loadRef.current === false){
        loadRef.current = true;

        getAllNews(page);
      }
    }, [page])

    const handleShowMore = () => {
        setPage(page + 1);
        loadRef.current = false;
    }
  
    const apiKey = '6e0e3ebd7bc84a70b675f5322e44db7e';
    const getAllNews = (page:number) => {
      fetch(`https://newsapi.org/v2/everything?q=bitcoin&pageSize=10&page=${page}&apiKey=${apiKey}`)
      .then((res) => res.json())
      .then((res) => onNewsFetch(res.articles))
    }
  
    const onNewsFetch = (newNews:any) => {
      setNews((news:any) => [...news, ...newNews]);
    }

    return(
        <>
            <Header profileBtn />
            <div className="container mx-auto py-20 mobile-md:px-4 ">
                <div className="flex justify-center gap-5 xl:gap-14 flex-wrap">
                    {news.map(({title, author, url, urlToImage}:ItemProps, i:number) => (
                        <NewsCard 
                        key={i}
                        title={title} 
                        url={url}
                        author={author}
                        img={urlToImage}
                        />
                    ))}
                    
                </div>

                {news.length !== 0 &&
                    <button 
                        className="block mx-auto mt-10 px-4 py-2 bg-blue text-white font-medium rounded-32 hover:scale-105 transition-scale duration-300 shadow-2md" 
                        onClick={handleShowMore}
                    >
                        Show more
                    </button>
                }
            </div>
        </>
    )
}

export default News;
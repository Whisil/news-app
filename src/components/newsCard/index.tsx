
interface NewsCardProps{
    author: string;
    title: string;
    img: string;
    url: string;
}

const NewsCard = ({author, title, img, url}:NewsCardProps) => {
    return(
        <div className="max-w-sm w-full rounded shadow-lg">
            <img className="w-full" src={img} alt={title} />
            <div className="px-6 py-4">
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <h4 className="text-gray-700 text-base">
                    By {author ? author : 'Unkown'}
                </h4>
                <a href={url} target="_blank" className="block pt-4 text-blue font-bold hover:opacity-50 transition-opacity duration-300">Go to source</a>
            </div>
        </div>
    )
}

export default NewsCard;
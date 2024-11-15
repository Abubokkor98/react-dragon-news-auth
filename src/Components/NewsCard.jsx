import { AiFillStar } from "react-icons/ai";
import { FaEye, FaShareAlt } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { author, title, image_url, details, rating, total_view } = news;
  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="flex justify-between mb-4">
        <div className="flex space-x-3 items-center">
        <img src={author.img} alt="Author" className="w-10 h-10 rounded-full" />
        <div>
          <h4 className="text-sm font-semibold">{author.name}</h4>
          <p className="text-xs text-gray-500">{author.published_date}</p>
        </div>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FiBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <img
        src={image_url}
        alt="Thumbnail"
        className="w-full h-[262px] object-cover rounded-lg mb-4"
      />
      <p className="text-gray-500 text-sm mb-4">{details.slice(0,280)}</p>
      <Link to={`/news/${news._id}`} className="text-primary underline mb-4">Read More</Link>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={`text-yellow-500 ${
                i < Math.round(rating.number) ? "" : "opacity-50"
              }`}
            />
          ))}
          <span className="ml-2 font-semibold">{rating.number}</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <FaEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

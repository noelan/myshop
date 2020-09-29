import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";
import Filter from "../components/Filter";
import Article from "../components/Article";
import ArticleAPI from "../api/ArticleAPI";

const ShopPage = (props) => {
  const [articles, setArticles] = useState([]);

  let { category, type } = props.match.params;
  const checkboxes = document.querySelectorAll("#filter-checkbox");
  const [, updateState] = React.useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  /**  Should be fetchArticleByTypeAndCategory  but it's so fucking long **/
  const fetchArticlesByCategory = async () => {
    category = props.match.params.category;
    const data = await ArticleAPI.findByCategory(category);
    setArticles(data);
  };

  const fetchArticlesByType = async () => {
    category = props.match.params.category;
    type = props.match.params.type;
    const data = await ArticleAPI.findByCategoryAndType(category, type);
    setArticles(data);
  };

  /* Magical function but not clean */

  useEffect(() => {
    !type ? fetchArticlesByCategory() : fetchArticlesByType();
    window.scrollTo(0, 0);
  }, [category, type]);

  return (
    <>
      <div className="container">
        <div className="shop-container">
          {/* Left */}
          <div className="left col">
            <Filter category={category} />
          </div>
          {/* End Left */}
          {/* Right */}
          <div className="right col">
            <div className="img-container">
              <img src={`/images/${category}/main.jpg`} alt="" />
            </div>
            <div className="articles-collections">
              {articles.map((article) => (
                <Article
                  data={article}
                  key={article.id}
                  currentColor={article.colors[0]}
                />
              ))}
            </div>
          </div>
          {/* End Right */}
        </div>
      </div>
    </>
  );
};

export default ShopPage;

import { hotNews } from "@/data/data";
import styles from "./hot-news.module.scss";
import NewsLink from "./news-link/NewsLink";

const HotNews: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <div className={styles.title}>Có gì mới</div>
        <div className={styles.subtitle}>Bài viết mới</div>
      </div>
      <div className={styles.newsGroup}>
        {hotNews.map((news, id) => (
          <NewsLink  key={id} {...news} /> 
        ))}
      </div>
    </div>
  );
};

export default HotNews;

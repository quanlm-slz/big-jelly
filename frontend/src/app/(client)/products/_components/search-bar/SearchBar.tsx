import { searchSvg } from "@/data/svg";
import styles from "./search-bar.module.scss";
import Image from "next/image";

const SearchBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Tìm món yêu thích tại đây..."
          className={styles.input}
        />
        <div className={styles.icon}>
          <Image src={searchSvg} alt="search icon" fill />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

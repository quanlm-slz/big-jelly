"use client";

import { searchSvg } from "@/data/svg";
import styles from "./search-bar.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";

const SearchBar: React.FC = () => {
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const searchData = new FormData(e.currentTarget).get("search");
    const searchParams = new URLSearchParams(window.location.search);
    searchData
      ? searchParams.set("search", searchData as string)
      : searchParams.delete("search");

    router.push(`${window.location.pathname}?${searchParams}`, {
      scroll: false,
    });
  };
  return (
    <div className={styles.container}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tìm món yêu thích tại đây..."
          name="search"
          className={styles.input}
        />
        <button type="submit">
          <div className={styles.icon}>
            <Image src={searchSvg} alt="search icon" fill/>
          </div>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

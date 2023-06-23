/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { Context } from "@/pages";
import Menu from "@/shared/assets/icons/menu.svg";

import { OptionRadio } from "./components/OptionRadio";
import { SearchBar } from "./components/SearchBar";

import { Container } from "./styles";
import { OptionRadioProps } from "@/shared/types/OptionRadioProps";

export function Sidebar() {
  const {
    menuActive,
    setMenuActive,
    setUrlRadioPlaying,
    setRadioNamePlaying,
    favoriteRadioList,
    searchingRadio,
  } = useContext(Context);

  const [data, setData] = useState<OptionRadioProps[]>([]);
  const [initialData, setInitialData] = useState<OptionRadioProps[]>([]);
  const [searchChanged, setSearchChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPagination, setIsPagination] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  async function requestData() {
    if (!data.length) {
      setIsLoading(true);

      const request = await fetch(
        "https://de1.api.radio-browser.info/json/stations/search?limit=10"
      );
      const data = await request.json();

      setData(data);
      setInitialData(data);
      setIsLoading(false);
      setCurrentPage(1);
      setIsPagination(false);
    }
  }

  function handleRadioClick(item: OptionRadioProps) {
    if (item.url) {
      setUrlRadioPlaying(item.url);
    }
    setRadioNamePlaying(item.name);
  }

  useEffect(() => {
    requestData();
  }, [favoriteRadioList]);

  async function handleSearch() {
    setIsLoading(true);

    if (searchingRadio.length > 0) {
      const request = await fetch(
        `https://de1.api.radio-browser.info/json/stations/search?name=${searchingRadio}`
      );
      const data = await request.json();

      if (data.length > 10) {
        setIsPagination(true);
      }

      setData(data);
      setIsLoading(false);
      setCurrentPage(1);
    } else {
      setData(initialData);
      setIsLoading(false);
      setIsPagination(false);
      setCurrentPage(1);
    }
  }

  function handleLoadMore() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  function handleLoadLess() {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  useEffect(() => {
    handleSearch();
  }, [searchChanged]);

  useEffect(() => {
    console.log("-->", searchingRadio);
  }, [searchingRadio]);

  // Calculate the paginated data based on the current page
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <Container>
      <div className="menu">
        <button onClick={() => setMenuActive(!menuActive)}>
          <Image src={Menu} alt="" width={32} height={32} />
        </button>
      </div>

      {menuActive && (
        <SearchBar
          setSearchChanged={setSearchChanged}
          searchChanged={searchChanged}
        />
      )}

      {isLoading && menuActive && (
        <h4 style={{ color: `var(--Blue)` }}>Loading...</h4>
      )}

      {isPagination && menuActive && <p>Page number: {currentPage}</p>}

      {isPagination && menuActive && (
        <>
          {paginatedData.length > 0 && (
            <button style={{ color: `var(--White)` }} onClick={handleLoadMore}>
              {" Load More > "}
            </button>
          )}
          {currentPage > 1 && (
            <button style={{ color: `var(--White)` }} onClick={handleLoadLess}>
              {" < Load Less "}
            </button>
          )}
        </>
      )}

      {menuActive && (
        <div className="menu-content">
          {paginatedData.length > 0
            ? paginatedData.map(
                (item: OptionRadioProps, index: number) =>
                  item?.name !== "     " && (
                    <OptionRadio
                      key={index}
                      name={item?.name}
                      country={item?.country}
                      onClick={() => handleRadioClick(item)}
                      url={item?.url}
                    />
                  )
              )
            : !isLoading && <h4>Sem mais dados</h4>}
        </div>
      )}
    </Container>
  );
}

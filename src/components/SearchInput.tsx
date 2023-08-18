import qs from "query-string";
import React, { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";

import Input from "./Input";
import { getData, resolveResponseError } from "@/utils/helpers";

interface SearchInputProps {
  setSearched: React.Dispatch<React.SetStateAction<any>>;
  endpoint: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ setSearched, endpoint }) => {
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  const queryByTitle = async (endpoint: string) => {
    try {
      const queryUrl = qs.stringifyUrl({
        url: `${endpoint}/search`,
        query: {
          title: debouncedValue,
        },
      });
      const data = await getData(queryUrl);
      return data;
    } catch (error) {
      resolveResponseError(error);
    }
  };

  useEffect(() => {
    if (debouncedValue) {
      queryByTitle(endpoint).then((data) => setSearched(data || []));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <Input
      placeholder="What do you want to listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;

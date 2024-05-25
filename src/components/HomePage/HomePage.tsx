import axios from 'axios';
import { useEffect, useState } from 'react';

import './HomePage.scss';
import SearchBar from '../SearchBar/SearchBar';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import IListRepos from '../../@types/IListRepos.d';
import MoreResultButton from '../MoreResultButton/MoreResultButton';
import Loader from '../Loader/Loader';

interface DataListRepos {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

function HomePage() {
  const [listRepos, setListRepos] = useState<IListRepos[]>([]);
  const [reposCount, setReposCount] = useState(0);
  const [input, setInput] = useState('');
  const [displayCount, setDisplayCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (input.length === 0) return;
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${input}&sort=stars&order=desc&page=1&per_page=${displayCount}`
      );
      const responseFilt: IListRepos[] = response.data.items.map(
        (repo: DataListRepos) => {
          return {
            id: repo.id,
            title: repo.name,
            subtitle: repo.owner.login,
            avatar: repo.owner.avatar_url,
            description: repo.description,
          };
        }
      );
      setListRepos(responseFilt);
      setReposCount(response.data.total_count);
      setIsLoading(false);
    };
    fetchData();
  }, [displayCount, input]);

  return (
    <div className="HomePage">
      <SearchBar setInput={setInput} setDisplayCount={setDisplayCount} />
      <Message reposCount={reposCount} />
      {isLoading && <Loader />}
      <ReposResults listRepos={listRepos} />
      <MoreResultButton
        displayCount={displayCount}
        setDisplayCount={setDisplayCount}
      />
    </div>
  );
}

export default HomePage;

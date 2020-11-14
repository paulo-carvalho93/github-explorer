import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/24879695?s=460&u=0b4e53a56faab57c7b2b8a766261b13a5c196425&v=4"
            alt="Blabla"
          />
          <div>
            <strong>nomedorepo</strong>
            <p>descricao</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1880</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Open issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/repositories/">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;

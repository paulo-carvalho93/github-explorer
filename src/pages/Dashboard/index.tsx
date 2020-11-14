import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositories on GitHub</Title>

      <Form action="">
        <input placeholder="Type the name of the repository" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/24879695?s=460&u=0b4e53a56faab57c7b2b8a766261b13a5c196425&v=4"
            alt="Paulo Carvalho"
          />
          <div>
            <strong>paulo-carvalho93/github-explorer</strong>
            <p>Github Explorer</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

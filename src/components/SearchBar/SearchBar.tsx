import './SearchBar.scss';
import { Input, Form, Segment } from 'semantic-ui-react';
import { useState } from 'react';
import IResearch from '../../@types/IResearch.d';

function SearchBar({ setInput, setDisplayCount }: IResearch) {
  const [formInput, setFormInput] = useState('');
  return (
    <Segment className="SearchBar">
      <Form>
        <Input
          icon="search"
          iconPosition="left"
          placeholder="Search..."
          fluid
          value={formInput}
          onChange={(event) => {
            setFormInput(event.target.value);
          }}
        />
        <Form.Button
          style={{ display: 'none' }}
          type="submit"
          onClick={() => {
            setInput(formInput);
            setDisplayCount(9);
          }}
        >
          Submit
        </Form.Button>
      </Form>
    </Segment>
  );
}

export default SearchBar;

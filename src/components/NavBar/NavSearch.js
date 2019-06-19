import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import styled from "styled-components";

const SearchInputGroup = styled(InputGroup)`
  width: 300px;
  margin-left: 150px;
`;

const SearchInput = styled(FormControl)`
  border-radius: 20px;
  background: #f9f8f2;
  border: none;
  font-size: 0.75rem;
  padding: 20px;

  &:focus {
    background: #f9f8f2;
    border: none;
    box-shadow: none;
  }
`;

const SearchIcon = styled(InputGroup.Text)`
  background: #f9f8f2;
  border-radius: 20px;
  border: none;
`;

const NavSearch = () => {
  return (
    <Form>
      <SearchInputGroup>
        <InputGroup.Prepend>
          <SearchIcon id="basic-addon1">
            <i className="fas fa-search" />
          </SearchIcon>
        </InputGroup.Prepend>
        <SearchInput
          placeholder="Search for what you need"
          aria-label="Search"
        />
      </SearchInputGroup>
    </Form>
  );
};

export default NavSearch;

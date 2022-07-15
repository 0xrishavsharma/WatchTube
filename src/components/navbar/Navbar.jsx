import styled from "styled-components";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Container = styled.div`
  background-color: ${({theme}) => theme.bgLighter};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.2rem 1.6rem;
  position:relative;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.3rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.soft};
  position: absolute;
  left: 0;
  right: 0;
  max-width: max-content;
  margin: auto;
`;
const Input = styled.input`
  outline: none;
  border: none;
  background: transparent;
  height: 30px;
  width: 300px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.3rem 0.6rem;
  max-width: max-content;
  max-height: min-content;
  background: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 2px;
  font-weight: 500;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
            <Input placeholder="Search" />
            <SearchOutlinedIcon />
        </Search>
        <Button> <AccountCircleOutlinedIcon /> Sign in</Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar
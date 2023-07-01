import styled from "styled-components";
import {Container} from "./Container";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {clearControls} from "../store_old_redux/controls/controls-action";

const HeaderEl=styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
  
`
const Wrapper=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

const Title=styled(Link).attrs({
    to:'/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`

const ModeSwitcher=styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`

const Header = () => {
    const dispatch=useDispatch();

    const cleanUp=useCleaneup();


    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title onClick={cleanUp()}>Where is the world?</Title>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};

export default Header;


import { AppBar, Toolbar, styled } from "@mui/material"
import logo from "../quikcode_logo.png"
const Container = styled(AppBar)`
    background: #008000;
    position: static;
    height: 7vh;
    padding-top:0px;
    margin-top:-10px;
`;
const LogoImage = styled('img')`
  width: 42px;
  margin-top:-10px;
`;

const Header = () => {
    return (
        <Container>
            <Toolbar>
                <LogoImage src={logo} alt="logo" />
                <h1 style={{marginLeft:'35%'}}>Welcome To Quick - Code </h1>
            </Toolbar>
        </Container>
    )
}

export default Header
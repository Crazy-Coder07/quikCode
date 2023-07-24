import { AppBar, Toolbar, styled } from "@mui/material"
import logo from "../quikcode_logo.png"
const Container = styled(AppBar)`
    background: #008000;
    position: static;
    border-bottom: 5px solid #3366ff;
    height: 9vh;
`;

const Header = () => {
    return (
        <Container>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 46 }} />
            </Toolbar>
        </Container>
    )
}

export default Header
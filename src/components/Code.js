import { useContext } from 'react';

import Editor from './Editor';
import { Box, styled } from '@mui/material';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    background-color: #060606;
    height: 55vh;
    display: flex;
`

const Code = () => {

    const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

    return (
        <Container>
            <Editor 
                language="xml"
                heading="HTML"
                value={html}
                onChange={setHtml}
                color='#FF3C41'
            />
            <Editor 
                language="css"
                heading="CSS"
                value={css}
                onChange={setCss}
                color='#0EBEFF'
            />
            <Editor 
                language="javascript"
                heading="JAVASCRIPT"
                value={js}
                onChange={setJs}
                color='#FCD000'
            />
        </Container>
    )
}

export default Code;
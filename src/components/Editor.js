import { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import { Controlled as ControlledEditor } from 'react-codemirror2';
import { Box, Typography, Button, styled } from '@mui/material';
import { CloseFullscreen } from '@mui/icons-material';
import '../App.css';

const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 3px 4px 
`

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #060606;
    color: #AAAEBC;
    font-weight: 700;
`
const Heading = styled(Box)`
    background: #7ed7d9;
    padding: 9px 40%;
    display: flex;
    overflow:auto;
`

const Editor = ({ heading, language, value, onChange, color }) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    return (
        <Container style={open ? null : {flexGrow: 0} }>
            <Header>
                <Heading>
                    <Box 
                        component="span"
                        style={{
                            background: color,
                            borderRadius: 5,
                            marginRight: 2,
                            height: 20,
                            width: 80,
                            display: 'flex',
                            placeContent: 'center',
                            color: '#000',
                            padding:9
                        }}
                    >
                        {heading}
                    </Box>
                </Heading>
                <CloseFullscreen 
                    fontSize="small"
                    style={{ alignSelf: 'center'}}
                    onClick={() => setOpen(prevState => !prevState)}
                />
            </Header>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="controlled-editor"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </Container>
    )
}

export default Editor;
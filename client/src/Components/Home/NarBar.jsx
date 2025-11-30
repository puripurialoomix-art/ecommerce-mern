

import { Typography, Box, styled } from '@mui/material'; 

import { navData } from '../../constant/data';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'auto',
    [theme.breakpoints.down('lg')]: {
        margin: '55px 0 0 0 !important'
    },
    [theme.breakpoints.down('sm')]: {
        margin: '55px 0 0 0 !important',
        justifyContent: 'flex-start',
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
    }
}));

const Container = styled(Box)(({ theme }) => ({
    padding: '12px 8px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        padding: '8px 6px',
        minWidth: '70px',
        flex: '0 0 auto'
    }
}));

const NavImage = styled('img')(({ theme }) => ({
    width: 64,
    [theme.breakpoints.down('sm')]: {
        width: 48
    }
}));

const Text = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: 'inherit',
    [theme.breakpoints.down('sm')]: {
        fontSize: '11px'
    }
}));

const NavBar = () => {
    return (
        <Component>
            {
                navData.map(temp => (
                    <Container key={temp.text}>
                        <NavImage src={temp.url} alt={temp.text} />
                        <Text>{temp.text}</Text>
                    </Container>
                ))
            }
        </Component>
    )
}

export default NavBar;
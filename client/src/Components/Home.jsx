import React,  { useEffect } from 'react';

import { Box, styled, Grid, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import NavBar from './Home/NarBar';
import Banner from './Home/Banner';
import MidSlide from './Home/MidSlide';

import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;

const ProductGrid = styled(Grid)`
    margin-top: 20px;
    background: #fff;
    padding: 20px;
`;

const ProductBox = styled(Box)(({ theme }) => ({
    background: '#fff',
    padding: '10px',
    transition: 'all 0.3s',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '&:hover': {
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
    },
    [theme.breakpoints.down('sm')]: {
        padding: '8px'
    }
}));

const ProductImageLink = styled(Link)`
    text-decoration: none;
    display: block;
    text-align: center;
`;

const ProductImage = styled('img')(({ theme }) => ({
    width: 'auto',
    height: '150px',
    objectFit: 'contain',
    margin: '0 auto',
    display: 'block',
    [theme.breakpoints.down('sm')]: {
        height: '120px'
    }
}));

const ProductTitle = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: '#212121',
    marginTop: '10px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    minHeight: '40px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
        minHeight: '32px',
        marginTop: '5px'
    }
}));

const PriceContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '8px',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
        gap: '5px',
        marginTop: '5px'
    }
}));

const ProductPrice = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: 600,
    color: '#212121',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px'
    }
}));

const OriginalPrice = styled(Typography)(({ theme }) => ({
    fontSize: '13px',
    color: '#878787',
    textDecoration: 'line-through',
    [theme.breakpoints.down('sm')]: {
        fontSize: '11px'
    }
}));

const ProductDiscount = styled(Typography)(({ theme }) => ({
    fontSize: '13px',
    color: '#388e3c',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
        fontSize: '11px'
    }
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '6px',
    marginTop: 'auto',
    paddingTop: '10px',
    [theme.breakpoints.down('sm')]: {
        gap: '4px',
        paddingTop: '8px'
    }
}));

const StyledButton = styled(Button)(({ theme }) => ({
    flex: 1,
    borderRadius: '2px',
    height: '38px',
    fontSize: '13px',
    textTransform: 'none',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
        height: '32px',
        fontSize: '10px',
        padding: '4px 6px',
        minWidth: 'auto',
        '& .MuiButton-startIcon': {
            margin: 0,
            marginRight: '2px',
            '& > svg': {
                fontSize: '14px'
            }
        }
    }
}));

const Home = () => {
    const getProducts = useSelector(state => state.getProducts);
    const { products, error } = getProducts;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    const handleAddToCart = (id) => {
        dispatch(addToCart(id, 1));
        navigate('/cart');
    };

    const handleBuyNow = (id) => {
        dispatch(addToCart(id, 1));
        navigate('/checkout');
    };

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} />
                
                {/* All Products Grid */}
                <ProductGrid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                            All Products
                        </Typography>
                    </Grid>
                    {products && products.map(product => (
                        <Grid item xs={6} sm={6} md={6} lg={6} key={product.id}>
                            <ProductBox>
                                <ProductImageLink to={`/product/${product.id}`}>
                                    <ProductImage src={product.url} alt={product.title.shortTitle} />
                                </ProductImageLink>
                                
                                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                                    <ProductTitle>{product.title.shortTitle}</ProductTitle>
                                </Link>
                                
                                <PriceContainer>
                                    <ProductPrice>₹{product.price.cost}</ProductPrice>
                                    <OriginalPrice>₹{product.price.mrp}</OriginalPrice>
                                    <ProductDiscount>{product.discount}</ProductDiscount>
                                </PriceContainer>

                                <ButtonContainer>
                                    <StyledButton 
                                        onClick={() => handleAddToCart(product.id)}
                                        variant="contained"
                                        sx={{ background: '#ff9f00', '&:hover': { background: '#e68a00' } }}
                                        startIcon={<Cart />}
                                    >
                                        Add to Cart
                                    </StyledButton>
                                    <StyledButton 
                                        onClick={() => handleBuyNow(product.id)}
                                        variant="contained"
                                        sx={{ background: '#fb641b', '&:hover': { background: '#e45a12' } }}
                                        startIcon={<Flash />}
                                    >
                                        Buy Now
                                    </StyledButton>
                                </ButtonContainer>
                            </ProductBox>
                        </Grid>
                    ))}
                </ProductGrid>
            </Component>
        </>
    )
}

export default Home;
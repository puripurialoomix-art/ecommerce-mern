import React,  { useEffect } from 'react';

import { Box, styled, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import NavBar from './Home/NarBar';
import Banner from './Home/Banner';
import MidSlide from './Home/MidSlide';

import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../redux/actions/productActions';

const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;

const ProductGrid = styled(Grid)`
    margin-top: 20px;
    background: #fff;
    padding: 20px;
`;

const ProductBox = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: block;
    background: #fff;
    text-align: center;
    padding: 20px 10px;
    transition: all 0.3s;
    &:hover {
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        transform: translateY(-2px);
    }
`;

const ProductImage = styled('img')`
    width: auto;
    height: 150px;
    object-fit: contain;
    margin: 0 auto;
    display: block;
`;

const ProductTitle = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    color: #212121;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const ProductPrice = styled(Typography)`
    font-size: 16px;
    font-weight: 600;
    color: #212121;
    margin-top: 5px;
`;

const ProductDiscount = styled(Typography)`
    font-size: 12px;
    color: green;
    margin-top: 2px;
`;

const ProductTagline = styled(Typography)`
    font-size: 12px;
    color: #212121;
    opacity: 0.6;
    margin-top: 2px;
`;

const Home = () => {
    const getProducts = useSelector(state => state.getProducts);
    const { products, error } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

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
                            <ProductBox to={`/product/${product.id}`}>
                                <ProductImage src={product.url} alt={product.title.shortTitle} />
                                <ProductTitle>{product.title.shortTitle}</ProductTitle>
                                <ProductDiscount>{product.discount}</ProductDiscount>
                                <ProductTagline>{product.tagline}</ProductTagline>
                            </ProductBox>
                        </Grid>
                    ))}
                </ProductGrid>
            </Component>
        </>
    )
}

export default Home;
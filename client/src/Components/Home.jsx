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
    padding: 15px;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    transition: all 0.3s;
    &:hover {
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
`;

const ProductImage = styled('img')`
    width: 100%;
    height: 200px;
    object-fit: contain;
`;

const ProductTitle = styled(Typography)`
    font-size: 14px;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const ProductPrice = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
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
                                <ProductPrice>₹{product.price.cost}</ProductPrice>
                                <Typography sx={{ fontSize: 12, color: 'green' }}>
                                    {product.discount}
                                </Typography>
                            </ProductBox>
                        </Grid>
                    ))}
                </ProductGrid>
            </Component>
        </>
    )
}

export default Home;
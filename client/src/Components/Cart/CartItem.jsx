import { Card, Box, Typography, Button, styled } from '@mui/material';
import { addEllipsis } from '../../utils/util';
import GroupButton from './GroupButton';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../redux/actions/cartActions';

const Component = styled(Card)`
    border-top: 1px solid #f0f0f0;
    border-radius: 0px;
    display: flex;
`;

const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`;

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const increase = () => {
        dispatch(increaseQuantity(item.id));
    }

    const decrease = () => {
        dispatch(decreaseQuantity(item.id));
    }

    const removeItem = () => {
        dispatch(removeFromCart(item.id));
    }

    return (
        <Component>
            <LeftComponent>
                <img src={item.url} style={{ height: 110, width: 110 }} />
                <GroupButton 
                    quantity={item.quantity} 
                    onIncrease={increase} 
                    onDecrease={decrease} 
                />
            </LeftComponent>
            <Box style={{ margin: 20 }}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller: RetailNet
                    <span><img src={fassured} style={{ width: 50, marginLeft: 10 }} /></span>
                </SmallText>

                <Typography style={{margin: '20px 0'}}>
                    <Cost component="span">₹{item.price.cost * item.quantity}</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span"><strike>₹{item.price.mrp * item.quantity}</strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">{item.price.discount} off</Discount>
                </Typography>

                <Remove onClick={removeItem}>Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItem;


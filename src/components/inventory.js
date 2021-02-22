import React from 'react';
import { connect } from 'react-redux';
import './inventory.css';

// Material
import { Box, Container, Grid, Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Divider from '@material-ui/core/Divider';


// Redux
import { sellLemonade, buyLemons } from '../actions';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

class Inventory extends React.Component {

    render() {
        console.log(this.props);
        return (
            <Box color="text.primary" className="inventory">
                <Container>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Card>
                            <CardContent className="info-panel">
                                <Typography 
                                    variant="h4" 
                                    gutterBottom
                                    className="status"
                                ><img className="lemon-icon" src={process.env.PUBLIC_URL + '/lemon.png'} alt="Lemon Icon" /><span  className="lemonade-text">{this.props.lemons}</span></Typography>
                                <Divider />
                                <Typography 
                                    variant="h5"
                                    className="green"
                                ><span className="money-text">Balance: {this.props.cash}</span><MonetizationOnIcon></MonetizationOnIcon></Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonGroup>
                                    <Button variant="contained" color="primary" onClick={this.props.buyLemons}>Buy Lemons</Button>
                                    <Button disableElevation onClick={this.props.sellLemonade}>Sell Lemonade</Button> 
                                </ButtonGroup>
                            </CardActions>
                        </Card>
                    </Grid>
                </Container>
            </Box>
        );
    }
}


function mapStateToProps (state) {
    return{
        lemons: state.lemons,
        cash: state.cash
    };
}

function mapDispatchtoProps (dispatch) {
    return {
        sellLemonade: () => { dispatch(sellLemonade()) },
        buyLemons: () => { dispatch(buyLemons()) }
    };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Inventory);
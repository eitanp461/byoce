import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cx from "classnames";
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Image,  Transformation} from "cloudinary-react";
import { StateContext } from '../../state';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
        position: "absolute",
        bottom: 0,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    gridItem : {
        width: "220px",
        height: "80px",
        cursor: "pointer",
        position: "relative",
        marginRight: "10px",
        display: "inline-block",
    },
    grid: {
        width: "100%",
        listStyle: "none",
    },
    tileTitle: {
        position: "absolute",
        bottom: "2px",
        left: "2px",
        color: theme.palette.primary.light,
    },
    current: {
        border: "2px solid",
        borderColor:  theme.palette.primary.light,
    }
}));

const isCurrent = (asset, state) => asset.public_id === state.currentId;

const changeCurrent = (asset, dispatch) =>  {
    dispatch({type: "setCurrent", payload: asset.public_id});
};

function SingleLineGridList() {
    const [state, dispatch] = useContext(StateContext);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ul className={classes.grid}>
                {state.assets.map(tile => (
                   <li className={cx(classes.gridItem, {
                       [classes.current]: isCurrent(tile, state)
                   })}
                       onClick={() => changeCurrent(tile, dispatch)}>
                       <Image cloudName={state.cloudName} publicId={tile.public_id}
                              resourceType="video"
                              format="jpg"
                              secure_distribution={"res-dev.cloudinary.com"}
                              width="220px" height="80px"/>
                       <span className={classes.tileTitle}>{tile.public_id}</span>
                   </li>))}
            </ul>
        </div>
    );
}

export default SingleLineGridList;

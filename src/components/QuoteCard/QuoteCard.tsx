import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import classNames from 'classnames';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 290,
            margin: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

interface Props {
    quote: string;
    author: string;
}

const QuoteCard = (props: Props) => {

    const { likeFilter } = useTypedSelector(state => state.quote)
    const { quote, author } = props;
    const [favorite, setFavorite] = useState(false);
    const [show, setShow] = useState(true);

    const classes = useStyles();
    const favoriteClass = classNames({
        'like': favorite,
    });

    const handlerFavoriteClick = () => {
        setFavorite(prevState => !prevState);
    }

    const handlerDelete = () => {
        setShow(false)
    }


    return (likeFilter ? (favorite ? (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {author[0]}
                    </Avatar>
                }
                title={author}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {quote}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="add to favorites"
                    onClick={handlerFavoriteClick}>
                    <FavoriteIcon className='like' />
                </IconButton>
            </CardActions>
        </Card>
    ) : (<></>)) : (show ? (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {author[0]}
                    </Avatar>
                }
                title={author}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {quote}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="add to favorites"
                    onClick={handlerFavoriteClick}>
                    <FavoriteIcon className={favoriteClass} />
                </IconButton>
                <IconButton
                    aria-label="delete"
                    onClick={handlerDelete}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    ) : (<></>)));
};

export default QuoteCard;

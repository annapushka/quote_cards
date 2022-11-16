import React, { useState } from 'react';
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

import classNames from 'classnames';
import { useActions } from '../../hooks/useActions';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootCard: {
            width: 290,
            margin: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        avatarCard: {
            backgroundColor: red[500],
        },
    }),
);

interface Props {
    quote: string;
    author: string;
    id: string;
    liked: boolean;
    deleted: boolean;
}

const QuoteCard = (props: Props) => {

    const { setLike, deleteQuote } = useActions();

    const { quote, author, id, liked, deleted } = props;
    const [favorite, setFavorite] = useState(liked);
    const [unShow, setUnShow] = useState(deleted);

    const classes = useStyles();
    const favoriteClass = classNames({
        'likedQuote': favorite,
    });

    const handlerFavoriteClick = () => {
        setFavorite(prevState => !prevState);
        setLike(id, !favorite);
    }

    const handlerDelete = () => {
        setUnShow(prevState => !prevState);
        deleteQuote(id, !unShow);
        setFavorite(prevState => !prevState);
        setLike(id, !favorite);
    }


    return (
        <Card className={classes.rootCard}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatarCard}>
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
    );
};

export default QuoteCard;

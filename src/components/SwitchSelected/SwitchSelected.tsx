import React, { useState, useEffect } from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useActions } from '../../hooks/useActions';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
    focusVisible?: string;
}

interface Props extends SwitchProps {
    classes: Styles;
}

const AntSwitch = withStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 30,
            height: 16,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            margin: 15,
        },
        switchBase: {
            padding: 2,
            color: theme.palette.grey[500],
            '&$checked': {
                transform: 'translateX(12px)',
                color: theme.palette.common.white,
                '& + $track': {
                    opacity: 1,
                    backgroundColor: 'red',
                    borderColor: theme.palette.secondary.light,
                },
            },
        },
        thumb: {
            width: 12,
            height: 12,
            boxShadow: 'none',
        },
        track: {
            border: `1px solid ${theme.palette.grey[500]}`,
            borderRadius: 20,
            opacity: 1,
            backgroundColor: theme.palette.common.white,
        },
        checked: {},
    }),
)(Switch);

export default function SwitchSelected() {
    const { setLikeFilter } = useActions();

    const [state, setState] = useState({ checkedC: false });
    const [liked, setLiked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        setLiked(prevState => !prevState);
    };

    useEffect(() => { setLikeFilter(liked) }, [liked])

    return (
        <FormGroup >
            <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={0}>
                    <Grid item >
                        <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
                    </Grid>
                    <FavoriteIcon className='like' />
                </Grid>
            </Typography>
        </FormGroup>
    );
}

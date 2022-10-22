import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import QuoteCard from '../QuoteCard/QuoteCard';

const QuoteList: React.FC = () => {
    const { quotes, loading, error } = useTypedSelector(state => state.quote)
    const { fetchQuotes } = useActions();

    useEffect(() => {
        fetchQuotes()
    }, []);


    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <div className="quote-list" >
            {quotes.map((quote, index) => <QuoteCard {...quote} key={index} />)}
        </div>
    );
};

export default QuoteList;
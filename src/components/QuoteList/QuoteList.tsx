import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import QuoteCard from '../QuoteCard/QuoteCard';

const QuoteList: React.FC = () => {
    const { quotes, loading, error, likeFilter } = useTypedSelector(state => state.quote)
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

    return ((likeFilter) ? (
        <div className="quote-list" >
            {quotes.filter(quote => quote.liked).map(quote => <QuoteCard {...quote} key={quote.id} />)}
        </div>
    ) : (
        <div className="quote-list" >
            {quotes.filter(qoute => !qoute.deleted).map(quote => <QuoteCard {...quote} key={quote.id} />)}
        </div>
    ));
};

export default QuoteList;
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import AppBanner from "../appBanner/AppBanner";


const SinglePage = ({Component, dataType}) => {
        const {id} = useParams();
        const [data, setData] = useState(null);
        const {loading, error, getComics, getCharacter, clearError} = useMarvelService();

        useEffect(() => {
            updateData()
            console.log(id)

        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [id])


        const updateData = () => {
            clearError();

            // eslint-disable-next-line default-case
            switch (dataType) {
                case 'comics':
                    getComics(id).then(onDataLoaded);
                    break;
                case 'character':
                    getCharacter(id).then(onDataLoaded);
            }
        }

        const onDataLoaded = (data) => {
            setData(data);
        }

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !data) ? <Component data={data}/> : null;

        return (
            <>
                <AppBanner/>
                {errorMessage}
                {spinner}
                {content}
            </>
        )
}

export default SinglePage;
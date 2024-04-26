import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../Firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import Card from '../pages/Card';

const SavedShows = () => {
    const [movies, setMovies] = useState([]);
    const { user } = UserAuth();

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, 'users', `${user?.email}`), docSnapshot => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data().savedShows;
                setMovies(data);
            }
        });

        return () => unsubscribe();
    }, [user?.email]);

    const deleteShow = async passedID => {
        try {
            const result = movies.filter(item => item.id !== passedID);
            await updateDoc(doc(db, 'users', `${user?.email}`), {
                savedShows: result,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="mt-8">
            <h2 className="text-5xl font-bold ml-20 my-10">My Shows</h2>
            <div className="flex flex-wrap gap-8 ml-7">
                {movies.map(media => (
                    <div key={media.id} className="w-96">
                        <Card
                            media={{
                                id: media.id,
                                title: media.title,
                                overview: media.overview,
                                poster_path: media.img,
                                vote_average: media.vote_average,
                            }}
                            showDeleteButton={true}
                            onDelete={() => deleteShow(media.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavedShows;

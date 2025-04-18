import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {Link} from "expo-router";

const MovieCard = ({id, poster_path,title,vote_average,release_date }: Movie) => {
    console.log(poster_path);
    return (
        <Link href={`/movie/${id}`} asChild>
            <TouchableOpacity className="w-[30%]">
                <Image
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                    source={{uri: poster_path?`https://image.tmdb.org/t/p/w500${poster_path}`: `https://placehold.co/600x400/1a1a1a/ffffff.png`}} />
                <Text className="text-sm text-white mt-2 font-bold">{title}</Text>
            </TouchableOpacity>
        </Link>
    )
}
export default MovieCard

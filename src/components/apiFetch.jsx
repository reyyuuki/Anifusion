
export const NewsetApi = async  () => {

        const response = await fetch('https://consumet-api-two-nu.vercel.app/meta/anilist/trending');
        const result = await response.json();
        return result.results;
}

export const PopularApi = async  () => {

        const response = await fetch('https://consumet-api-two-nu.vercel.app/meta/anilist/popular');
        const result = await response.json();
        return result.results;
}

export const TopAiring = async  () => {

        const response = await fetch('https://consumet-api-two-nu.vercel.app/meta/anilist/airing-schedule');
        const result = await response.json();
        return result.results;
}

export const TrendingApi = async  () => {

        const response = await fetch('https://consumet-api-two-nu.vercel.app/meta/anilist/advanced-search');
        const result = await response.json();
        return result.results;
}

export const RandomApi = async  () => {

        const response = await fetch('https://consumet-api-two-nu.vercel.app/meta/anilist/random-anime');
        const result = await response.json();
        return result.results;
}

export const FetchById = async  (id) => {
        
        const response = await fetch(`https://consumet-api-two-nu.vercel.app/meta/anilist/info/${id}?provider=gogoanime`);
        const result = await response.json();
        return result;
}

export const FetchEpisodes = async  (id) => {
        
        const response = await fetch(`https://consumet-api-two-nu.vercel.app/meta/anilist/episodes/${id}`);
        const result = await response.json();
        return result;
}

export const FetchEpisodesId = async  (episodeId) => {
        
        const response = await fetch(`https://consumet-api-two-nu.vercel.app/meta/anilist/watch/${episodeId}`);
        const result = await response.json();
        return result;
}
export const FetchBySearch = async  (name) => {
        
        const response = await fetch(`https://consumet-api-two-nu.vercel.app/meta/anilist/${name}`);
        const result = await response.json();
        return result.results;
}

export const MangaApi = async  () => {

        const response = await fetch('https://consumet-api-two-nu.vercel.app/meta/anilist-manga/popular');
        const result = await response.json();
        return result.results;
}

export const PopularManga = async  () => {

        const response = await fetch('https://consumet-api-two-nu.vercel.app/meta/anilist-manga/trending');
        const result = await response.json();
        return result.results;
}

export const TrendingManga = async  () => {

        const response = await fetch('https://consumet-api-two-nu.vercel.app/meta/anilist/advanced-search?type=MANGA&seasont=Winter&provider=mangadex');
        const result = await response.json();
        return result.results;
}

export const AiringManga = async  () => {

        const response = await fetch('https://consumet-api-two-nu.vercel.app/meta/anilist/advanced-search?type=MANGA&provider=mangadex');
        const result = await response.json();
        return result.results;

}

export const MangaSearch = async  (name) => {

        const response = await fetch(`https://consumet-api-two-nu.vercel.app/meta/anilist-manga/${name}`);
        const result = await response.json();
        return result.results;

}

export const MangaDetail = async  (id) => {

        const response = await fetch(`https://consumet-api-two-nu.vercel.app/meta/anilist-manga/info/${id}?provider=mangadex`);
        const result = await response.json();
        return result;

}

export const MangaChapters = async  (id) => {

        const response = await fetch(`https://consumet-api-two-nu.vercel.app/meta/anilist-manga/read?chapterId=${id}&provider=mangadex`);
        const result = await response.json();
        return result;

}

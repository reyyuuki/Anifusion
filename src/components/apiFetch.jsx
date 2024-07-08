
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
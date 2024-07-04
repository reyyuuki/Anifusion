
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
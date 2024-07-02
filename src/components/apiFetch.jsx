
export const ApiFetch = async  () => {

        const response = await fetch('https://consumet-api-two-nu.vercel.app/meta/anilist/trending');
        const result = await response.json();
        return result.results;

}


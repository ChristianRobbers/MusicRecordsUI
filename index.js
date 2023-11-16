const baseUrl = "https://musicrecordsrest20231109134019.azurewebsites.net/api/musicrecords"

Vue.createApp({
    data() {
        return {
            musicrecords: [],
            error: "der skete en fejl mongol",
            Title: "",
            Artist: "",
            isTitleFilled: false
        }
    },
    async created() {
        this.getMusicRecords(baseUrl)
    },
    methods: {
        async getMusicRecords(baseUrl) {
            try {

                const response = await axios.get(baseUrl)
                this.musicrecords = await response.data
            } catch(error) {

                this.error = error.message

            }
        },
        async filterMusicRecords() {
            let uri = baseUrl
            if(this.Title != null && this.Title != "") {
                uri = baseUrl + "?filterTitleQuery=" + this.Title 
                this.isTitleFilled = true
            }
            if(this.Artist != null && this.Artist != "") {
                if(this.isTitleFilled) {
                    uri = uri + "&filterArtistQuery=" + this.Artist
                } else {
                    uri = baseUrl + "?filterArtistQuery=" + this.Artist
                }
            }
            this.getMusicRecords(uri)
            this.isTitleFilled = false
        }
    }
}).mount('#app')
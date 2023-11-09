const baseUrl = "https://musicrecordsrest20231109134019.azurewebsites.net/api/musicrecords"

Vue.createApp({
    data() {
        return {
            musicrecords: [],
            error: "der skete en fejl mongol"
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
        }
    }
}).mount('#app')